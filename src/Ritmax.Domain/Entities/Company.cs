namespace Ritmax.Domain.Entities;

public class Company
{
    public int Id { get; set; }
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
    public string? LogoPath { get; set; }

    public bool IsDeleted { get; set; }
    public string? CreatedBy { get; set; }
    public DateTime CreatedDate { get; set; }
    public string? ModifiedBy { get; set; }
    public DateTime? ModifiedDate { get; set; }
    public string? UpdateTag { get; set; }
    public Guid UpdateGuid { get; set; }

    public Industry? Industry { get; set; }
    public State? State { get; set; }
    public ICollection<Department> Departments { get; set; } = [];
    public ICollection<PayrollRun> PayrollRuns { get; set; } = [];
}
