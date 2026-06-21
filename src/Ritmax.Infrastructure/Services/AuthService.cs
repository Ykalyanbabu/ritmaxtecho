using System.Text.RegularExpressions;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Ritmax.Application.DTOs;
using Ritmax.Application.Interfaces;
using Ritmax.Domain.Enums;
using Ritmax.Infrastructure.Models;

namespace Ritmax.Infrastructure.Services;

public class AuthService : IAuthService
{
    private readonly RitmaxDbContext _db;
    private readonly IPasswordHasher _passwordHasher;
    private readonly IJwtTokenGenerator _tokenGenerator;

    public AuthService(
        RitmaxDbContext db,
        IPasswordHasher passwordHasher,
        IJwtTokenGenerator tokenGenerator)
    {
        _db = db;
        _passwordHasher = passwordHasher;
        _tokenGenerator = tokenGenerator;
    }

    public async Task<LoginResponse?> LoginAsync(LoginRequest request, CancellationToken cancellationToken = default)
    {
        if (string.IsNullOrWhiteSpace(request.Identifier) || string.IsNullOrWhiteSpace(request.Password))
        {
            return null;
        }

        var loginParam = new SqlParameter("@Login", request.Identifier.Trim());

        // A stored procedure call is non-composable, so EF Core cannot translate
        // a server-side FirstOrDefault/TOP over it. Materialize on the client first.
        var employees = await _db.EmployeeLogins
            .FromSqlRaw("EXEC [dbo].[usp_Employee_GetByLogin] @Login", loginParam)
            .AsNoTracking()
            .ToListAsync(cancellationToken);

        var employee = employees.FirstOrDefault();

        // Reject unknown users, inactive accounts, or accounts without a password set.
        if (employee is null || !employee.IsActive || string.IsNullOrWhiteSpace(employee.PasswordHash))
        {
            return null;
        }

        if (!_passwordHasher.Verify(request.Password, employee.PasswordHash))
        {
            return null;
        }

        var user = MapToAuthUser(employee);
        var (token, expiresAtUtc) = _tokenGenerator.Generate(user);

        return new LoginResponse(token, expiresAtUtc, user);
    }

    public async Task<ChangePasswordResult> ChangePasswordAsync(
        int employeeId,
        string? actor,
        ChangePasswordRequest request,
        CancellationToken cancellationToken = default)
    {
        if (request is null
            || string.IsNullOrWhiteSpace(request.CurrentPassword)
            || string.IsNullOrWhiteSpace(request.NewPassword)
            || string.IsNullOrWhiteSpace(request.ConfirmPassword))
        {
            return ChangePasswordResult.Fail("All password fields are required.");
        }

        if (request.NewPassword != request.ConfirmPassword)
        {
            return ChangePasswordResult.Fail("New password and confirmation do not match.");
        }

        var policyError = ValidatePasswordPolicy(request.NewPassword);
        if (policyError is not null)
        {
            return ChangePasswordResult.Fail(policyError);
        }

        var employee = await _db.Employees
            .FirstOrDefaultAsync(e => e.Id == employeeId && !e.IsDeleted, cancellationToken);

        if (employee is null || !employee.IsActive || string.IsNullOrWhiteSpace(employee.PasswordHash))
        {
            return ChangePasswordResult.Fail("Account not found or inactive.");
        }

        if (!_passwordHasher.Verify(request.CurrentPassword, employee.PasswordHash))
        {
            return ChangePasswordResult.Fail("Current password is incorrect.");
        }

        if (_passwordHasher.Verify(request.NewPassword, employee.PasswordHash))
        {
            return ChangePasswordResult.Fail("New password must be different from the current password.");
        }

        employee.PasswordHash = _passwordHasher.Hash(request.NewPassword);
        employee.IsPasswordUpdated = true;
        employee.ModifiedDate = DateTime.UtcNow;
        employee.ModifiedBy = actor;

        await _db.SaveChangesAsync(cancellationToken);

        return ChangePasswordResult.Ok();
    }

    private static string? ValidatePasswordPolicy(string password)
    {
        if (password.Length < 8)
        {
            return "Password must be at least 8 characters long.";
        }

        if (!Regex.IsMatch(password, "[A-Z]"))
        {
            return "Password must contain at least one uppercase letter.";
        }

        if (!Regex.IsMatch(password, "[a-z]"))
        {
            return "Password must contain at least one lowercase letter.";
        }

        if (!Regex.IsMatch(password, "[0-9]"))
        {
            return "Password must contain at least one number.";
        }

        if (!Regex.IsMatch(password, "[^A-Za-z0-9]"))
        {
            return "Password must contain at least one special character.";
        }

        return null;
    }

    private static AuthUserDto MapToAuthUser(EmployeeLoginResult employee) => new(
        employee.Id,
        $"{employee.FirstName} {employee.LastName}".Trim(),
        employee.Email,
        employee.Username,
        ((EmployeeRole)employee.Role).ToString(),
        employee.CompanyId,
        employee.IsPasswordUpdated);
}
