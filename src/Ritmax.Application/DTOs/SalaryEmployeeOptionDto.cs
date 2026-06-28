namespace Ritmax.Application.DTOs;

public record SalaryEmployeeOptionDto(
    int EmployeeId,
    string Code,
    string FullName,
    decimal BaseSalary);
