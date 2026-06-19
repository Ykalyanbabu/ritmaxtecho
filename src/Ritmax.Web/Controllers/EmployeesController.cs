using Microsoft.AspNetCore.Mvc;
using Ritmax.Application.Common;
using Ritmax.Application.Interfaces;

namespace Ritmax.Web.Controllers;

[ApiController]
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
        var employees = await _employeeService.GetEmployeesAsync(cancellationToken);
        var total = await _employeeService.GetTotalCountAsync(cancellationToken);

        return Ok(ApiResponse<object>.Ok(new { employees, totalCount = total }));
    }
}
