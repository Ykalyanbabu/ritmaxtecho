using Microsoft.EntityFrameworkCore;
using Ritmax.Application.DTOs;
using Ritmax.Application.Interfaces;
using Ritmax.Domain.Entities;

namespace Ritmax.Infrastructure.Services;

public class CompanyService : ICompanyService
{
    private readonly RitmaxDbContext _db;

    public CompanyService(RitmaxDbContext db)
    {
        _db = db;
    }

    public async Task<CompanyDto?> GetCompanyAsync(CancellationToken cancellationToken = default)
    {
        var company = await GetSingletonQuery()
            .AsNoTracking()
            .FirstOrDefaultAsync(cancellationToken);

        return company is null ? null : MapToDto(company);
    }

    public async Task<CompanyDto> UpdateCompanyAsync(UpdateCompanyRequest request, CancellationToken cancellationToken = default)
    {
        var company = await GetSingletonQuery().FirstOrDefaultAsync(cancellationToken);
        var isNew = company is null;

        if (company is null)
        {
            company = new Company
            {
                CreatedDate = DateTime.UtcNow,
                UpdateGuid = Guid.NewGuid(),
            };
            _db.Companies.Add(company);
        }

        company.Name = request.Name;
        company.LegalName = request.LegalName;
        company.Gstin = request.Gstin;
        company.Pan = request.Pan;
        company.Cin = request.Cin;
        company.IndustryId = request.IndustryId;
        company.Address = request.Address;
        company.City = request.City;
        company.StateId = request.StateId;
        company.PinCode = request.PinCode;
        company.PhoneNo = request.PhoneNo;
        company.Mobile = request.Mobile;
        company.Website = request.Website;
        company.Email = request.Email;

        if (!isNew)
        {
            company.ModifiedDate = DateTime.UtcNow;
            company.UpdateGuid = Guid.NewGuid();
        }

        await _db.SaveChangesAsync(cancellationToken);

        // Reload navigations so the returned DTO carries the industry/state names.
        await _db.Entry(company).Reference(c => c.Industry).LoadAsync(cancellationToken);
        await _db.Entry(company).Reference(c => c.State).LoadAsync(cancellationToken);

        return MapToDto(company);
    }

    public async Task<CompanyDto> UpdateLogoAsync(string logoPath, CancellationToken cancellationToken = default)
    {
        var company = await GetSingletonQuery().FirstOrDefaultAsync(cancellationToken)
            ?? throw new InvalidOperationException("Company profile not found. Save the profile before uploading a logo.");

        company.LogoPath = logoPath;
        company.ModifiedDate = DateTime.UtcNow;
        company.UpdateGuid = Guid.NewGuid();

        await _db.SaveChangesAsync(cancellationToken);

        return MapToDto(company);
    }

    public async Task<IReadOnlyList<IndustryDto>> GetIndustriesAsync(CancellationToken cancellationToken = default)
    {
        return await _db.Industries
            .AsNoTracking()
            .Where(i => !i.IsDeleted)
            .OrderBy(i => i.Name)
            .Select(i => new IndustryDto(i.Id, i.Name))
            .ToListAsync(cancellationToken);
    }

    public async Task<IReadOnlyList<StateDto>> GetStatesAsync(CancellationToken cancellationToken = default)
    {
        return await _db.States
            .AsNoTracking()
            .Where(s => !s.IsDeleted)
            .OrderBy(s => s.Name)
            .Select(s => new StateDto(s.Id, s.Name))
            .ToListAsync(cancellationToken);
    }

    private IQueryable<Company> GetSingletonQuery() =>
        _db.Companies
            .Include(c => c.Industry)
            .Include(c => c.State)
            .Where(c => !c.IsDeleted)
            .OrderBy(c => c.Id);

    private static CompanyDto MapToDto(Company company) => new(
        company.Id,
        company.Name,
        company.LegalName,
        company.Gstin,
        company.Pan,
        company.Cin,
        company.IndustryId,
        company.Industry?.Name,
        company.Address,
        company.City,
        company.StateId,
        company.State?.Name,
        company.PinCode,
        company.PhoneNo,
        company.Mobile,
        company.Website,
        company.Email,
        company.LogoPath);
}
