using Ritmax.Application.DTOs;

namespace Ritmax.Application.Interfaces;

public interface IAuthService
{
    Task<LoginResponse?> LoginAsync(LoginRequest request, CancellationToken cancellationToken = default);

    Task<ChangePasswordResult> ChangePasswordAsync(
        int employeeId,
        string? actor,
        ChangePasswordRequest request,
        CancellationToken cancellationToken = default);
}
