using Ritmax.Domain.Enums;

namespace Ritmax.Domain.Entities;

public class Employee : BaseEntity
{
    public string EmployeeCode { get; set; } = string.Empty;
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public int DepartmentId { get; set; }
    public string Designation { get; set; } = string.Empty;
    public decimal Salary { get; set; }
    public EmployeeStatus Status { get; set; }
    public string? Location { get; set; }
    public string? Uan { get; set; }
    public string? Pan { get; set; }
    public DateTime? JoinDate { get; set; }

    public Department Department { get; set; } = null!;
    public EmployeeBankDetails? BankDetails { get; set; }
    public ICollection<Payslip> Payslips { get; set; } = [];
}
