namespace Ritmax.Domain.Entities;

public class PayrollRun : BaseEntity
{
    public int CompanyId { get; set; }
    public string Period { get; set; } = string.Empty;
    public DateTime PayDate { get; set; }
    public string Status { get; set; } = string.Empty;

    public Company Company { get; set; } = null!;
    public ICollection<Payslip> Payslips { get; set; } = [];
}
