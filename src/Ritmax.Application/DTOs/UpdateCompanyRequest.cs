namespace Ritmax.Application.DTOs;

public class UpdateCompanyRequest
{
    public string Name { get; set; } = string.Empty;
    public string? LegalName { get; set; }
    public string Gstin { get; set; } = string.Empty;
    public string Pan { get; set; } = string.Empty;
    public string? Cin { get; set; }
    public int? IndustryId { get; set; }
    public string Address { get; set; } = string.Empty;
    public string City { get; set; } = string.Empty;
    public int? StateId { get; set; }
    public int? PinCode { get; set; }
    public string PhoneNo { get; set; } = string.Empty;
    public long? Mobile { get; set; }
    public string? Website { get; set; }
    public string? Email { get; set; }
}
