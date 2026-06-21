using Ritmax.Application.DTOs;

namespace Ritmax.Application.Interfaces;

public interface ICompanyService
{
    Task<CompanyDto?> GetCompanyAsync(CancellationToken cancellationToken = default);
    Task<CompanyDto> UpdateCompanyAsync(UpdateCompanyRequest request, CancellationToken cancellationToken = default);
    Task<CompanyDto> UpdateLogoAsync(string logoPath, CancellationToken cancellationToken = default);
    Task<IReadOnlyList<IndustryDto>> GetIndustriesAsync(CancellationToken cancellationToken = default);
    Task<IReadOnlyList<StateDto>> GetStatesAsync(CancellationToken cancellationToken = default);
}
