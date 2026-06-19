namespace Ritmax.Domain.Entities;

public class Payslip : BaseEntity
{
    public int EmployeeId { get; set; }
    public int PayrollRunId { get; set; }
    public string Period { get; set; } = string.Empty;
    public DateTime PayDate { get; set; }
    public int PaidDays { get; set; }
    public int LopDays { get; set; }
    public decimal GrossEarnings { get; set; }
    public decimal TotalDeductions { get; set; }
    public decimal NetPay { get; set; }

    public Employee Employee { get; set; } = null!;
    public PayrollRun PayrollRun { get; set; } = null!;
    public ICollection<PayslipLineItem> LineItems { get; set; } = [];
}
