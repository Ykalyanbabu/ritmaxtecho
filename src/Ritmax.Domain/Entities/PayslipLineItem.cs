using Ritmax.Domain.Enums;

namespace Ritmax.Domain.Entities;

public class PayslipLineItem : BaseEntity
{
    public int PayslipId { get; set; }
    public string Description { get; set; } = string.Empty;
    public decimal Amount { get; set; }
    public PayslipLineType LineType { get; set; }

    public Payslip Payslip { get; set; } = null!;
}
