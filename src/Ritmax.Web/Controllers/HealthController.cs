using Microsoft.AspNetCore.Mvc;
using Ritmax.Application.Common;

namespace Ritmax.Web.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HealthController : ControllerBase
{
    [HttpGet]
    public IActionResult Get() =>
        Ok(new { status = "healthy", version = "1.0.0" });
}
