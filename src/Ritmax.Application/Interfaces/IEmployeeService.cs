using Ritmax.Application.DTOs;

namespace Ritmax.Application.Interfaces;

public interface IEmployeeService
{
    Task<IReadOnlyList<EmployeeDto>> GetEmployeesAsync(int companyId, CancellationToken cancellationToken = default);
    Task<EmployeeDetailDto?> GetEmployeeByIdAsync(int companyId, int employeeId, CancellationToken cancellationToken = default);
    Task<int> GetTotalCountAsync(int companyId, CancellationToken cancellationToken = default);
    Task<EmployeeFormOptionsDto> GetFormOptionsAsync(int companyId, CancellationToken cancellationToken = default);
    Task<CreatedEmployeeDto> CreateEmployeeAsync(int companyId, string? actor, CreateEmployeeRequest request, CancellationToken cancellationToken = default);
}
