using Ritmax.Application.DTOs;

namespace Ritmax.Application.Interfaces;

public interface IJwtTokenGenerator
{
    (string Token, DateTime ExpiresAtUtc) Generate(AuthUserDto user);
}
