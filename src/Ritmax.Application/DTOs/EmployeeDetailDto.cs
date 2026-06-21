namespace Ritmax.Application.DTOs;

public record EmployeeDetailDto(
    int Id,
    string EmployeeCode,
    string FullName,
    string Initials,
    string Designation,
    string Department,
    string Status,
    string EmploymentType,
    string Email,
    string? Phone,
    string? Location,
    DateOnly? DateOfBirth,
    DateOnly JoinDate,
    string? ManagerName,
    decimal BaseSalary,
    string PayFrequency);
