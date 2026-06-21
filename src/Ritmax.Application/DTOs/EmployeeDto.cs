namespace Ritmax.Application.DTOs;

public record EmployeeDto(
    int EmployeeId,
    string Id,
    string Name,
    string Email,
    string Department,
    string Designation,
    decimal Salary,
    string Status,
    string Initials);
