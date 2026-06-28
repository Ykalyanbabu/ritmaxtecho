using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Ritmax.Application.Common;
using Ritmax.Application.DTOs;
using Ritmax.Application.Interfaces;

namespace Ritmax.Web.Controllers;

[ApiController]
[Authorize]
[Route("api/salary-details")]
public class SalaryDetailsController : ControllerBase
{
    private readonly ISalaryDetailService _salaryDetailService;

    public SalaryDetailsController(ISalaryDetailService salaryDetailService)
    {
        _salaryDetailService = salaryDetailService;
    }

    [HttpGet("employees")]
    public async Task<ActionResult<ApiResponse<IReadOnlyList<SalaryEmployeeOptionDto>>>> GetEmployees(CancellationToken cancellationToken)
    {
        if (!TryGetCompanyId(out var companyId))
        {
            return Unauthorized(ApiResponse<IReadOnlyList<SalaryEmployeeOptionDto>>.Fail("Invalid token."));
        }

        var employees = await _salaryDetailService.GetEmployeesAsync(companyId, cancellationToken);
        return Ok(ApiResponse<IReadOnlyList<SalaryEmployeeOptionDto>>.Ok(employees));
    }

    [HttpGet]
    public async Task<ActionResult<ApiResponse<SalaryDetailDto>>> Get(
        [FromQuery] int employeeId,
        [FromQuery] byte month,
        [FromQuery] short year,
        CancellationToken cancellationToken)
    {
        if (!TryGetCompanyId(out var companyId))
        {
            return Unauthorized(ApiResponse<SalaryDetailDto>.Fail("Invalid token."));
        }

        var detail = await _salaryDetailService.GetSalaryDetailAsync(companyId, employeeId, month, year, cancellationToken);
        if (detail is null)
        {
            return NotFound(ApiResponse<SalaryDetailDto>.Fail("Employee not found."));
        }

        return Ok(ApiResponse<SalaryDetailDto>.Ok(detail));
    }

    [HttpPost]
    public async Task<ActionResult<ApiResponse<SalaryDetailDto>>> Save(
        [FromBody] SaveSalaryDetailRequest request,
        CancellationToken cancellationToken)
    {
        if (!TryGetCompanyId(out var companyId))
        {
            return Unauthorized(ApiResponse<SalaryDetailDto>.Fail("Invalid token."));
        }

        var actor = User.FindFirstValue("username")
            ?? User.FindFirstValue(ClaimTypes.Name)
            ?? User.FindFirstValue("name");

        try
        {
            var saved = await _salaryDetailService.SaveSalaryDetailAsync(companyId, actor, request, cancellationToken);
            return Ok(ApiResponse<SalaryDetailDto>.Ok(saved, "Salary details saved successfully."));
        }
        catch (InvalidOperationException ex)
        {
            return BadRequest(ApiResponse<SalaryDetailDto>.Fail(ex.Message));
        }
    }

    private bool TryGetCompanyId(out int companyId)
    {
        var companyIdClaim = User.FindFirstValue("companyId");
        return int.TryParse(companyIdClaim, out companyId) && companyId > 0;
    }
}
