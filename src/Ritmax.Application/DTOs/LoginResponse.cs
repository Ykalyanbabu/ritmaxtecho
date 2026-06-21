namespace Ritmax.Application.DTOs;

public record LoginResponse(string Token, DateTime ExpiresAtUtc, AuthUserDto User);
