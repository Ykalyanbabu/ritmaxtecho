namespace Ritmax.Application.DTOs;

public record AuthUserDto(
    int Id,
    string FullName,
    string Email,
    string? Username,
    string Role,
    int CompanyId,
    bool IsPasswordUpdated);
