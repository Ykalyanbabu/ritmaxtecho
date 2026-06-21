using Microsoft.AspNetCore.Mvc;
using Ritmax.Application.Common;
using Ritmax.Application.DTOs;
using Ritmax.Application.Interfaces;

namespace Ritmax.Web.Controllers;

[ApiController]
[Route("api/[controller]")]
public class IndustriesController : ControllerBase
{
    private readonly ICompanyService _companyService;

    public IndustriesController(ICompanyService companyService)
    {
        _companyService = companyService;
    }

    [HttpGet]
    public async Task<ActionResult<ApiResponse<IReadOnlyList<IndustryDto>>>> Get(CancellationToken cancellationToken)
    {
        var industries = await _companyService.GetIndustriesAsync(cancellationToken);
        return Ok(ApiResponse<IReadOnlyList<IndustryDto>>.Ok(industries));
    }
}
