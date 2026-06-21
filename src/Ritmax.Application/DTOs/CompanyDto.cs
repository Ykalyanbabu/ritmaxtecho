namespace Ritmax.Application.DTOs;

public record CompanyDto(
    int Id,
    string Name,
    string? LegalName,
    string Gstin,
    string Pan,
    string? Cin,
    int? IndustryId,
    string? IndustryName,
    string Address,
    string City,
    int? StateId,
    string? StateName,
    int? PinCode,
    string PhoneNo,
    long? Mobile,
    string? Website,
    string? Email,
    string? LogoPath);
