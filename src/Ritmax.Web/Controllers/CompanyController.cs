using Microsoft.AspNetCore.Mvc;
using Ritmax.Application.Common;
using Ritmax.Application.DTOs;
using Ritmax.Application.Interfaces;
using Ritmax.Web.Services;

namespace Ritmax.Web.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CompanyController : ControllerBase
{
    private const long MaxLogoBytes = 2 * 1024 * 1024; // 2 MB

    private static readonly string[] AllowedLogoContentTypes =
    [
        "image/png", "image/jpeg", "image/jpg", "image/svg+xml", "image/webp"
    ];

    private readonly ICompanyService _companyService;
    private readonly IFileStorageService _fileStorage;

    public CompanyController(ICompanyService companyService, IFileStorageService fileStorage)
    {
        _companyService = companyService;
        _fileStorage = fileStorage;
    }

    [HttpGet]
    public async Task<ActionResult<ApiResponse<CompanyDto>>> Get(CancellationToken cancellationToken)
    {
        var company = await _companyService.GetCompanyAsync(cancellationToken);
        if (company is null)
        {
            return NotFound(ApiResponse<CompanyDto>.Fail("Company profile not found."));
        }

        return Ok(ApiResponse<CompanyDto>.Ok(company));
    }

    [HttpPut]
    public async Task<ActionResult<ApiResponse<CompanyDto>>> Update(
        [FromBody] UpdateCompanyRequest request,
        CancellationToken cancellationToken)
    {
        var updated = await _companyService.UpdateCompanyAsync(request, cancellationToken);
        return Ok(ApiResponse<CompanyDto>.Ok(updated, "Company profile saved."));
    }

    [HttpPost("logo")]
    public async Task<ActionResult<ApiResponse<CompanyDto>>> UploadLogo(
        IFormFile? file,
        CancellationToken cancellationToken)
    {
        if (file is null || file.Length == 0)
        {
            return BadRequest(ApiResponse<CompanyDto>.Fail("No file was uploaded."));
        }

        if (file.Length > MaxLogoBytes)
        {
            return BadRequest(ApiResponse<CompanyDto>.Fail("Logo must be 2MB or smaller."));
        }

        if (!AllowedLogoContentTypes.Contains(file.ContentType))
        {
            return BadRequest(ApiResponse<CompanyDto>.Fail("Unsupported file type. Use PNG, JPG, SVG or WebP."));
        }

        var logoPath = await _fileStorage.SaveCompanyLogoAsync(file, cancellationToken);
        var updated = await _companyService.UpdateLogoAsync(logoPath, cancellationToken);
        return Ok(ApiResponse<CompanyDto>.Ok(updated, "Company logo updated."));
    }
}
