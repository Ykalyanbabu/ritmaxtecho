using System;

namespace Ritmax.Application.DTOs;

public class CreateEmployeeRequest
{
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

    // Compensation & statutory
    public decimal BaseSalary { get; set; }
    public string? Pan { get; set; }
    public string? Aadhaar { get; set; }
    public string? Uan { get; set; }
    public string? PfNumber { get; set; }
    public string? EsiNumber { get; set; }

    // Bank details
    public string? BankName { get; set; }
    public string? AccountNumber { get; set; }
    public string? IfscCode { get; set; }
}
