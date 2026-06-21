namespace Ritmax.Infrastructure.Models;

// Keyless projection mapped to the result set of dbo.usp_Employee_GetByLogin.
public class EmployeeLoginResult
{
    public int Id { get; set; }
    public int CompanyId { get; set; }
    public string EmployeeCode { get; set; } = string.Empty;
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string? Username { get; set; }
    public string? PasswordHash { get; set; }
    public byte Role { get; set; }
    public bool IsActive { get; set; }
    public bool IsPasswordUpdated { get; set; }
}
