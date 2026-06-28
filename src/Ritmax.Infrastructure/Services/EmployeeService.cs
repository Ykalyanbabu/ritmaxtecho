using System.Globalization;
using System.Text.RegularExpressions;
using Microsoft.EntityFrameworkCore;
using Ritmax.Application.DTOs;
using Ritmax.Application.Interfaces;
using Ritmax.Domain.Entities;
using Ritmax.Domain.Enums;

namespace Ritmax.Infrastructure.Services;

public class EmployeeService : IEmployeeService
{
    private const string DefaultPassword = "Welcome@123";

    private readonly RitmaxDbContext _db;
    private readonly IPasswordHasher _passwordHasher;

    public EmployeeService(RitmaxDbContext db, IPasswordHasher passwordHasher)
    {
        _db = db;
        _passwordHasher = passwordHasher;
    }

    public async Task<IReadOnlyList<EmployeeDto>> GetEmployeesAsync(int companyId, CancellationToken cancellationToken = default)
    {
        var employees = await _db.Employees
            .AsNoTracking()
            .Include(e => e.Department)
            .Where(e => e.CompanyId == companyId && !e.IsDeleted)
            .OrderBy(e => e.FirstName)
            .ThenBy(e => e.LastName)
            .ToListAsync(cancellationToken);

        return employees.Select(MapToDto).ToList();
    }

    public async Task<EmployeeDetailDto?> GetEmployeeByIdAsync(int companyId, int employeeId, CancellationToken cancellationToken = default)
    {
        var employee = await _db.Employees
            .AsNoTracking()
            .Include(e => e.Department)
            .Include(e => e.State)
            .Include(e => e.ReportingManager)
            .FirstOrDefaultAsync(
                e => e.Id == employeeId && e.CompanyId == companyId && !e.IsDeleted,
                cancellationToken);

        return employee is null ? null : MapToDetailDto(employee);
    }

    public async Task<int> GetTotalCountAsync(int companyId, CancellationToken cancellationToken = default)
    {
        return await _db.Employees
            .AsNoTracking()
            .CountAsync(e => e.CompanyId == companyId && !e.IsDeleted, cancellationToken);
    }

    public async Task<EmployeeFormOptionsDto> GetFormOptionsAsync(int companyId, CancellationToken cancellationToken = default)
    {
        var departments = await _db.Departments
            .AsNoTracking()
            .Where(d => d.CompanyId == companyId && !d.IsDeleted)
            .OrderBy(d => d.Name)
            .Select(d => new LookupItemDto(d.Id, d.Name))
            .ToListAsync(cancellationToken);

        var reportingManagers = await _db.Employees
            .AsNoTracking()
            .Where(e => e.CompanyId == companyId && !e.IsDeleted)
            .OrderBy(e => e.FirstName)
            .ThenBy(e => e.LastName)
            .Select(e => new LookupItemDto(e.Id, (e.FirstName + " " + e.LastName).Trim()))
            .ToListAsync(cancellationToken);

        var states = await _db.States
            .AsNoTracking()
            .Where(s => !s.IsDeleted)
            .OrderBy(s => s.Name)
            .Select(s => new StateDto(s.Id, s.Name))
            .ToListAsync(cancellationToken);

        return new EmployeeFormOptionsDto(departments, reportingManagers, states);
    }

    public async Task<CreatedEmployeeDto> CreateEmployeeAsync(
        int companyId,
        string? actor,
        CreateEmployeeRequest request,
        CancellationToken cancellationToken = default)
    {
        Validate(request);

        var email = request.Email.Trim();

        var emailExists = await _db.Employees
            .AnyAsync(e => e.CompanyId == companyId && !e.IsDeleted && e.Email == email, cancellationToken);
        if (emailExists)
        {
            throw new InvalidOperationException("An employee with this email already exists.");
        }

        if (!await _db.Departments.AnyAsync(d => d.Id == request.DepartmentId && d.CompanyId == companyId && !d.IsDeleted, cancellationToken))
        {
            throw new InvalidOperationException("Selected department is invalid.");
        }

        if (request.ReportingManagerId is int managerId)
        {
            if (!await _db.Employees.AnyAsync(e => e.Id == managerId && e.CompanyId == companyId && !e.IsDeleted, cancellationToken))
            {
                throw new InvalidOperationException("Selected reporting manager is invalid.");
            }
        }

        // A single per-company running number drives both the Employee code and
        // the login username so they stay aligned.
        var sequence = await GetNextSequenceNumberAsync(companyId, cancellationToken);
        var sequenceText = sequence.ToString("D3", CultureInfo.InvariantCulture);
        var employeeCode = $"EMP-{sequenceText}";
        var username = BuildUsername(request.FirstName, request.LastName, companyId, sequenceText);

        if (await _db.Employees.AnyAsync(e => !e.IsDeleted && e.Username == username, cancellationToken))
        {
            throw new InvalidOperationException($"Generated username '{username}' already exists. Please try again.");
        }

        var now = DateTime.UtcNow;
        var employee = new Employee
        {
            CompanyId = companyId,
            EmployeeCode = employeeCode,

            FirstName = request.FirstName.Trim(),
            LastName = request.LastName.Trim(),
            Email = email,
            Phone = NullIfBlank(request.Phone),
            DateOfBirth = request.DateOfBirth,
            Gender = request.Gender,
            City = NullIfBlank(request.City),
            StateId = request.StateId,
            PinCode = request.PinCode,
            Address = NullIfBlank(request.Address),

            JoinDate = request.JoinDate,
            DepartmentId = request.DepartmentId,
            Designation = request.Designation.Trim(),
            Grade = NullIfBlank(request.Grade),
            EmploymentType = request.EmploymentType,
            ReportingManagerId = request.ReportingManagerId,
            Status = EmployeeStatus.Active,

            BaseSalary = request.BaseSalary,
            PayFrequency = 1, // Monthly
            Pan = NullIfBlank(request.Pan),
            Aadhaar = NullIfBlank(request.Aadhaar),
            Uan = NullIfBlank(request.Uan),
            PfNumber = NullIfBlank(request.PfNumber),
            EsiNumber = NullIfBlank(request.EsiNumber),

            BankName = NullIfBlank(request.BankName),
            AccountNumber = NullIfBlank(request.AccountNumber),
            IfscCode = NullIfBlank(request.IfscCode),

            Role = EmployeeRole.Employee,
            Username = username,
            PasswordHash = _passwordHasher.Hash(DefaultPassword),
            IsActive = true,
            IsPasswordUpdated = false,

            CreatedBy = actor,
            CreatedDate = now,
            UpdateGuid = Guid.NewGuid(),
            IsDeleted = false,
        };

        _db.Employees.Add(employee);
        await _db.SaveChangesAsync(cancellationToken);

        var fullName = $"{employee.FirstName} {employee.LastName}".Trim();
        return new CreatedEmployeeDto(employee.Id, employee.EmployeeCode, username, fullName);
    }

    private static void Validate(CreateEmployeeRequest request)
    {
        if (string.IsNullOrWhiteSpace(request.FirstName))
        {
            throw new InvalidOperationException("First name is required.");
        }

        if (string.IsNullOrWhiteSpace(request.LastName))
        {
            throw new InvalidOperationException("Last name is required.");
        }

        if (string.IsNullOrWhiteSpace(request.Email))
        {
            throw new InvalidOperationException("Email is required.");
        }

        if (string.IsNullOrWhiteSpace(request.Designation))
        {
            throw new InvalidOperationException("Designation is required.");
        }

        if (request.DepartmentId <= 0)
        {
            throw new InvalidOperationException("Department is required.");
        }

        if (request.JoinDate == default)
        {
            throw new InvalidOperationException("Join date is required.");
        }

        if (request.BaseSalary < 0)
        {
            throw new InvalidOperationException("Base salary must be zero or greater.");
        }
    }

    // Per-company running number: read the highest existing EmployeeCode sequence
    // for the company (the most recent issued) and add one. Starts at 1 and grows
    // past 999 naturally (1000, 1001, ...).
    private async Task<int> GetNextSequenceNumberAsync(int companyId, CancellationToken cancellationToken)
    {
        var existingCodes = await _db.Employees
            .AsNoTracking()
            .Where(e => e.CompanyId == companyId && e.EmployeeCode.StartsWith("EMP-"))
            .Select(e => e.EmployeeCode)
            .ToListAsync(cancellationToken);

        var maxNumber = 0;
        foreach (var code in existingCodes)
        {
            var match = Regex.Match(code, @"^EMP-(\d+)$");
            if (match.Success && int.TryParse(match.Groups[1].Value, out var number) && number > maxNumber)
            {
                maxNumber = number;
            }
        }

        return maxNumber + 1;
    }

    // e.g. FirstName "John", LastName "Doe", CompanyId 5, sequence "001" -> "JDoe5001".
    private static string BuildUsername(string firstName, string lastName, int companyId, string sequenceText)
    {
        var initial = char.ToUpperInvariant(firstName.Trim()[0]);
        var surname = Regex.Replace(lastName.Trim(), @"\s+", string.Empty);
        return $"{initial}{surname}{companyId}{sequenceText}";
    }

    private static string? NullIfBlank(string? value) =>
        string.IsNullOrWhiteSpace(value) ? null : value.Trim();

    private static EmployeeDto MapToDto(Employee employee)
    {
        var name = $"{employee.FirstName} {employee.LastName}".Trim();
        var initials = string.Concat(
            (employee.FirstName.Length > 0 ? employee.FirstName[..1] : string.Empty),
            (employee.LastName.Length > 0 ? employee.LastName[..1] : string.Empty)).ToUpperInvariant();

        return new EmployeeDto(
            employee.Id,
            employee.EmployeeCode,
            name,
            employee.Email,
            employee.Department?.Name ?? string.Empty,
            employee.Designation,
            employee.BaseSalary,
            employee.Status.ToString(),
            initials);
    }

    private static EmployeeDetailDto MapToDetailDto(Employee employee)
    {
        var fullName = $"{employee.FirstName} {employee.LastName}".Trim();
        var initials = string.Concat(
            (employee.FirstName.Length > 0 ? employee.FirstName[..1] : string.Empty),
            (employee.LastName.Length > 0 ? employee.LastName[..1] : string.Empty)).ToUpperInvariant();

        var managerName = employee.ReportingManager is null
            ? null
            : $"{employee.ReportingManager.FirstName} {employee.ReportingManager.LastName}".Trim();

        return new EmployeeDetailDto(
            employee.Id,
            employee.EmployeeCode,
            fullName,
            initials,
            employee.Designation,
            employee.Department?.Name ?? string.Empty,
            employee.Status.ToString(),
            MapEmploymentType(employee.EmploymentType),
            employee.Email,
            employee.Phone,
            BuildLocation(employee),
            employee.DateOfBirth,
            employee.JoinDate,
            managerName,
            employee.BaseSalary,
            MapPayFrequency(employee.PayFrequency));
    }

    private static string? BuildLocation(Employee employee)
    {
        var parts = new List<string>();
        if (!string.IsNullOrWhiteSpace(employee.City))
        {
            parts.Add(employee.City.Trim());
        }

        if (!string.IsNullOrWhiteSpace(employee.State?.Name))
        {
            parts.Add(employee.State.Name.Trim());
        }

        if (employee.PinCode is int pin)
        {
            parts.Add(pin.ToString(CultureInfo.InvariantCulture));
        }

        return parts.Count == 0 ? null : string.Join(", ", parts);
    }

    private static string MapEmploymentType(byte employmentType) => employmentType switch
    {
        1 => "Full-time",
        2 => "Part-time",
        3 => "Contract",
        4 => "Intern",
        _ => "Unknown",
    };

    private static string MapPayFrequency(byte payFrequency) => payFrequency switch
    {
        1 => "Monthly",
        2 => "Bi-weekly",
        3 => "Weekly",
        _ => "Monthly",
    };
}
