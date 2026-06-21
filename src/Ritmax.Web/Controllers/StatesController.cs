using Microsoft.AspNetCore.Mvc;
using Ritmax.Application.Common;
using Ritmax.Application.DTOs;
using Ritmax.Application.Interfaces;

namespace Ritmax.Web.Controllers;

[ApiController]
[Route("api/[controller]")]
public class StatesController : ControllerBase
{
    private readonly ICompanyService _companyService;

    public StatesController(ICompanyService companyService)
    {
        _companyService = companyService;
    }

    [HttpGet]
    public async Task<ActionResult<ApiResponse<IReadOnlyList<StateDto>>>> Get(CancellationToken cancellationToken)
    {
        var states = await _companyService.GetStatesAsync(cancellationToken);
        return Ok(ApiResponse<IReadOnlyList<StateDto>>.Ok(states));
    }
}
