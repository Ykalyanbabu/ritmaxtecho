using Ritmax.Application.DTOs;
using Ritmax.Application.Interfaces;

namespace Ritmax.Application.Services;

public class EmployeeService : IEmployeeService
{
    private static readonly IReadOnlyList<EmployeeDto> Employees =
    [
        new("EMP-001", "Priya Sharma", "priya.s@payrollpro.in", "Engineering", "Senior Developer", 85000, "Active", "PS"),
        new("EMP-002", "Rahul Reddy", "rahul.r@payrollpro.in", "Sales", "Account Executive", 62000, "Active", "RR"),
        new("EMP-003", "Ananya Rao", "ananya.r@payrollpro.in", "Marketing", "Marketing Manager", 71000, "On Leave", "AR"),
        new("EMP-004", "Vikram Singh", "vikram.s@payrollpro.in", "Finance", "Financial Analyst", 58000, "Active", "VS"),
        new("EMP-005", "Lakshmi Devi", "lakshmi.d@payrollpro.in", "HR", "HR Specialist", 54000, "Inactive", "LD")
    ];

    public Task<IReadOnlyList<EmployeeDto>> GetEmployeesAsync(CancellationToken cancellationToken = default) =>
        Task.FromResult(Employees);

    public Task<int> GetTotalCountAsync(CancellationToken cancellationToken = default) =>
        Task.FromResult(248);
}
