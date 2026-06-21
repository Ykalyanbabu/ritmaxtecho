namespace Ritmax.Application.DTOs;

public record ChangePasswordRequest(string CurrentPassword, string NewPassword, string ConfirmPassword);

public record ChangePasswordResult(bool Success, string? Error)
{
    public static ChangePasswordResult Ok() => new(true, null);
    public static ChangePasswordResult Fail(string error) => new(false, error);
}
