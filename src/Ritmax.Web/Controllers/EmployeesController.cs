using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Ritmax.Application.Common;
using Ritmax.Application.DTOs;
using Ritmax.Application.Interfaces;

namespace Ritmax.Web.Controllers;

[ApiController]
[Authorize]
[Route("api/[controller]")]
public class EmployeesController : ControllerBase
{
    private readonly IEmployeeService _employeeService;

    public EmployeesController(IEmployeeService employeeService)
    {
        _employeeService = employeeService;
    }

    [HttpGet]
    public async Task<ActionResult<ApiResponse<object>>> Get(CancellationToken cancellationToken)
    {
        if (!TryGetCompanyId(out var companyId))
        {
            return Unauthorized(ApiResponse<object>.Fail("Invalid token."));
        }

        var employees = await _employeeService.GetEmployeesAsync(companyId, cancellationToken);
        var total = await _employeeService.GetTotalCountAsync(companyId, cancellationToken);

        return Ok(ApiResponse<object>.Ok(new { employees, totalCount = total }));
    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<ApiResponse<EmployeeDetailDto>>> GetById(int id, CancellationToken cancellationToken)
    {
        if (!TryGetCompanyId(out var companyId))
        {
            return Unauthorized(ApiResponse<EmployeeDetailDto>.Fail("Invalid token."));
        }

        var employee = await _employeeService.GetEmployeeByIdAsync(companyId, id, cancellationToken);
        if (employee is null)
        {
            return NotFound(ApiResponse<EmployeeDetailDto>.Fail("Employee not found."));
        }

        return Ok(ApiResponse<EmployeeDetailDto>.Ok(employee));
    }

    [HttpGet("form-options")]
    public async Task<ActionResult<ApiResponse<EmployeeFormOptionsDto>>> GetFormOptions(CancellationToken cancellationToken)
    {
        if (!TryGetCompanyId(out var companyId))
        {
            return Unauthorized(ApiResponse<EmployeeFormOptionsDto>.Fail("Invalid token."));
        }

        var options = await _employeeService.GetFormOptionsAsync(companyId, cancellationToken);
        return Ok(ApiResponse<EmployeeFormOptionsDto>.Ok(options));
    }

    [HttpPost]
    public async Task<ActionResult<ApiResponse<CreatedEmployeeDto>>> Create(
        [FromBody] CreateEmployeeRequest request,
        CancellationToken cancellationToken)
    {
        if (!TryGetCompanyId(out var companyId))
        {
            return Unauthorized(ApiResponse<CreatedEmployeeDto>.Fail("Invalid token."));
        }

        var actor = User.FindFirstValue("username")
            ?? User.FindFirstValue(ClaimTypes.Name)
            ?? User.FindFirstValue("name");

        try
        {
            var created = await _employeeService.CreateEmployeeAsync(companyId, actor, request, cancellationToken);
            return Ok(ApiResponse<CreatedEmployeeDto>.Ok(created, $"Employee {created.EmployeeCode} added successfully."));
        }
        catch (InvalidOperationException ex)
        {
            return BadRequest(ApiResponse<CreatedEmployeeDto>.Fail(ex.Message));
        }
    }

    private bool TryGetCompanyId(out int companyId)
    {
        var companyIdClaim = User.FindFirstValue("companyId");
        return int.TryParse(companyIdClaim, out companyId) && companyId > 0;
    }
}
