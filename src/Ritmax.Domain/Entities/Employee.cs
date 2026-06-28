using Ritmax.Domain.Enums;

namespace Ritmax.Domain.Entities;

public class Employee
{
    public int Id { get; set; }
    public int CompanyId { get; set; }
    public string EmployeeCode { get; set; } = string.Empty;

    // Personal Information
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string? Phone { get; set; }
    public DateOnly? DateOfBirth { get; set; }
    public byte? Gender { get; set; }
    public string? City { get; set; }
    public int? StateId { get; set; }
    public int? PinCode { get; set; }
    public string? Address { get; set; }

    // Employment Details
    public DateOnly JoinDate { get; set; }
    public int DepartmentId { get; set; }
    public string Designation { get; set; } = string.Empty;
    public string? Grade { get; set; }
    public byte EmploymentType { get; set; }
    public int? ReportingManagerId { get; set; }
    public EmployeeStatus Status { get; set; }

    // Compensation & statutory
    public decimal BaseSalary { get; set; }
    public byte PayFrequency { get; set; }
    public string? Pan { get; set; }
    public string? Aadhaar { get; set; }
    public string? Uan { get; set; }
    public string? PfNumber { get; set; }
    public string? EsiNumber { get; set; }

    // Bank details
    public string? BankName { get; set; }
    public string? AccountNumber { get; set; }
    public string? IfscCode { get; set; }

    // Files
    public string? PhotoPath { get; set; }

    // Role & login
    public EmployeeRole Role { get; set; }
    public string? Username { get; set; }
    public string? PasswordHash { get; set; }
    public bool IsActive { get; set; } = true;
    public bool IsPasswordUpdated { get; set; }

    // Audit
    public string? CreatedBy { get; set; }
    public DateTime CreatedDate { get; set; }
    public string? ModifiedBy { get; set; }
    public DateTime? ModifiedDate { get; set; }
    public string? UpdateTag { get; set; }
    public Guid UpdateGuid { get; set; }
    public bool IsDeleted { get; set; }

    // Navigation
    public Company Company { get; set; } = null!;
    public Department Department { get; set; } = null!;
    public State? State { get; set; }
    public Employee? ReportingManager { get; set; }
    public ICollection<Payslip> Payslips { get; set; } = [];
}
