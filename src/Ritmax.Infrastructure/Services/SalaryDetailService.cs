using Microsoft.EntityFrameworkCore;
using Ritmax.Application.DTOs;
using Ritmax.Application.Interfaces;
using Ritmax.Domain.Entities;

namespace Ritmax.Infrastructure.Services;

public class SalaryDetailService : ISalaryDetailService
{
    private readonly RitmaxDbContext _db;

    public SalaryDetailService(RitmaxDbContext db)
    {
        _db = db;
    }

    public async Task<IReadOnlyList<SalaryEmployeeOptionDto>> GetEmployeesAsync(
        int companyId,
        CancellationToken cancellationToken = default)
    {
        return await _db.Employees
            .AsNoTracking()
            .Where(e => e.CompanyId == companyId && !e.IsDeleted)
            .OrderBy(e => e.FirstName)
            .ThenBy(e => e.LastName)
            .Select(e => new SalaryEmployeeOptionDto(
                e.Id,
                e.EmployeeCode,
                (e.FirstName + " " + e.LastName).Trim(),
                e.BaseSalary))
            .ToListAsync(cancellationToken);
    }

    public async Task<SalaryDetailDto?> GetSalaryDetailAsync(
        int companyId,
        int employeeId,
        byte month,
        short year,
        CancellationToken cancellationToken = default)
    {
        var employee = await _db.Employees
            .AsNoTracking()
            .FirstOrDefaultAsync(
                e => e.Id == employeeId && e.CompanyId == companyId && !e.IsDeleted,
                cancellationToken);

        if (employee is null)
        {
            return null;
        }

        var record = await _db.EmployeeSalaryDetails
            .AsNoTracking()
            .FirstOrDefaultAsync(
                s => s.EmployeeId == employeeId && s.Month == month && s.Year == year && !s.IsDeleted,
                cancellationToken);

        if (record is null)
        {
            // No saved record for this period yet: seed a draft with Basic from the employee.
            return new SalaryDetailDto(
                employeeId,
                month,
                year,
                employee.BaseSalary,
                0m, 0m, 0m, 0m,
                0m, 0m, 0m, 0m, 0m,
                employee.BaseSalary,
                0m,
                employee.BaseSalary,
                false,
                false);
        }

        return MapToDto(record, exists: true);
    }

    public async Task<SalaryDetailDto> SaveSalaryDetailAsync(
        int companyId,
        string? actor,
        SaveSalaryDetailRequest request,
        CancellationToken cancellationToken = default)
    {
        Validate(request);

        var employee = await _db.Employees
            .FirstOrDefaultAsync(
                e => e.Id == request.EmployeeId && e.CompanyId == companyId && !e.IsDeleted,
                cancellationToken)
            ?? throw new InvalidOperationException("Selected employee is invalid.");

        var record = await _db.EmployeeSalaryDetails
            .FirstOrDefaultAsync(
                s => s.EmployeeId == request.EmployeeId && s.Month == request.Month && s.Year == request.Year && !s.IsDeleted,
                cancellationToken);

        if (record is { IsPayslipGenerated: true })
        {
            throw new InvalidOperationException("Payslip already generated. Salary details can no longer be updated.");
        }

        var now = DateTime.UtcNow;
        var isNew = record is null;
        record ??= new EmployeeSalaryDetails
        {
            EmployeeId = request.EmployeeId,
            Month = request.Month,
            Year = request.Year,
            CreatedBy = actor,
            CreatedDate = now,
            UpdateGuid = Guid.NewGuid(),
            IsDeleted = false,
        };

        // Basic is always taken from the employee, never trusted from the client.
        record.Basic = employee.BaseSalary;
        record.Hra = request.Hra;
        record.SpecialAllowance = request.SpecialAllowance;
        record.TelephoneReimbursement = request.TelephoneReimbursement;
        record.OtherEarnings = request.OtherEarnings;

        record.ProvidentFund = request.ProvidentFund;
        record.IncomeTax = request.IncomeTax;
        record.ProfessionalTax = request.ProfessionalTax;
        record.Esi = request.Esi;
        record.OtherDeductions = request.OtherDeductions;

        // Totals are computed server-side; client-provided totals are ignored.
        record.GrossEarnings = record.Basic
            + record.Hra
            + record.SpecialAllowance
            + record.TelephoneReimbursement
            + record.OtherEarnings;
        record.GrossDeductions = record.ProvidentFund
            + record.IncomeTax
            + record.ProfessionalTax
            + record.Esi
            + record.OtherDeductions;
        record.NetPay = record.GrossEarnings - record.GrossDeductions;

        if (isNew)
        {
            record.Status = "Draft";
            _db.EmployeeSalaryDetails.Add(record);
        }
        else
        {
            record.ModifiedBy = actor;
            record.ModifiedDate = now;
        }

        await _db.SaveChangesAsync(cancellationToken);

        return MapToDto(record, exists: true);
    }

    private static void Validate(SaveSalaryDetailRequest request)
    {
        if (request.EmployeeId <= 0)
        {
            throw new InvalidOperationException("Employee is required.");
        }

        if (request.Month is < 1 or > 12)
        {
            throw new InvalidOperationException("Month must be between 1 and 12.");
        }

        if (request.Year < 2000 || request.Year > 2100)
        {
            throw new InvalidOperationException("Year is invalid.");
        }

        var values = new[]
        {
            request.Hra,
            request.SpecialAllowance,
            request.TelephoneReimbursement,
            request.OtherEarnings,
            request.ProvidentFund,
            request.IncomeTax,
            request.ProfessionalTax,
            request.Esi,
            request.OtherDeductions,
        };

        if (values.Any(v => v < 0))
        {
            throw new InvalidOperationException("Earning and deduction amounts must be zero or greater.");
        }
    }

    private static SalaryDetailDto MapToDto(EmployeeSalaryDetails record, bool exists) => new(
        record.EmployeeId,
        record.Month,
        record.Year,
        record.Basic,
        record.Hra,
        record.SpecialAllowance,
        record.TelephoneReimbursement,
        record.OtherEarnings,
        record.ProvidentFund,
        record.IncomeTax,
        record.ProfessionalTax,
        record.Esi,
        record.OtherDeductions,
        record.GrossEarnings,
        record.GrossDeductions,
        record.NetPay,
        record.IsPayslipGenerated,
        exists);
}
