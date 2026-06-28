using Ritmax.Application.DTOs;

namespace Ritmax.Application.Interfaces;

public interface ISalaryDetailService
{
    Task<IReadOnlyList<SalaryEmployeeOptionDto>> GetEmployeesAsync(int companyId, CancellationToken cancellationToken = default);
    Task<SalaryDetailDto?> GetSalaryDetailAsync(int companyId, int employeeId, byte month, short year, CancellationToken cancellationToken = default);
    Task<SalaryDetailDto> SaveSalaryDetailAsync(int companyId, string? actor, SaveSalaryDetailRequest request, CancellationToken cancellationToken = default);
}
