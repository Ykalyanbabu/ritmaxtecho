using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Ritmax.Application.Common;
using Ritmax.Application.DTOs;
using Ritmax.Application.Interfaces;

namespace Ritmax.Web.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;

    public AuthController(IAuthService authService)
    {
        _authService = authService;
    }

    [AllowAnonymous]
    [HttpPost("login")]
    public async Task<ActionResult<ApiResponse<LoginResponse>>> Login(
        [FromBody] LoginRequest request,
        CancellationToken cancellationToken)
    {
        var result = await _authService.LoginAsync(request, cancellationToken);
        if (result is null)
        {
            return Unauthorized(ApiResponse<LoginResponse>.Fail("Invalid username or password."));
        }

        return Ok(ApiResponse<LoginResponse>.Ok(result, "Signed in successfully."));
    }

    [Authorize]
    [HttpPost("change-password")]
    public async Task<ActionResult<ApiResponse<bool>>> ChangePassword(
        [FromBody] ChangePasswordRequest request,
        CancellationToken cancellationToken)
    {
        var idClaim = User.FindFirstValue("sub") ?? User.FindFirstValue(ClaimTypes.NameIdentifier);
        if (!int.TryParse(idClaim, out var employeeId))
        {
            return Unauthorized(ApiResponse<bool>.Fail("Invalid token."));
        }

        var actor = User.FindFirstValue("username")
            ?? User.FindFirstValue(ClaimTypes.Name)
            ?? User.FindFirstValue("name");

        var result = await _authService.ChangePasswordAsync(employeeId, actor, request, cancellationToken);
        if (!result.Success)
        {
            return BadRequest(ApiResponse<bool>.Fail(result.Error ?? "Unable to update password."));
        }

        return Ok(ApiResponse<bool>.Ok(true, "Password updated successfully."));
    }

    [Authorize]
    [HttpGet("me")]
    public ActionResult<ApiResponse<AuthUserDto>> Me()
    {
        var idClaim = User.FindFirstValue("sub") ?? User.FindFirstValue(ClaimTypes.NameIdentifier);
        if (!int.TryParse(idClaim, out var id))
        {
            return Unauthorized(ApiResponse<AuthUserDto>.Fail("Invalid token."));
        }

        var companyIdClaim = User.FindFirstValue("companyId");
        int.TryParse(companyIdClaim, out var companyId);

        var user = new AuthUserDto(
            id,
            User.FindFirstValue(ClaimTypes.Name) ?? User.FindFirstValue("name") ?? string.Empty,
            User.FindFirstValue(ClaimTypes.Email) ?? User.FindFirstValue("email") ?? string.Empty,
            User.FindFirstValue("username"),
            User.FindFirstValue(ClaimTypes.Role) ?? string.Empty,
            companyId,
            true);

        return Ok(ApiResponse<AuthUserDto>.Ok(user));
    }
}
