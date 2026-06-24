namespace Ritmax.Domain.Entities;

public class EmployeeSalaryDetails
{
    public int Id { get; set; }
    public int EmployeeId { get; set; }
    public byte Month { get; set; }
    public short Year { get; set; }
    public DateOnly? PayDate { get; set; }

    // Attendance days
    public decimal StandardDays { get; set; }
    public decimal WorkedDays { get; set; }
    public decimal LopDays { get; set; }

    // Earnings
    public decimal Basic { get; set; }
    public decimal Hra { get; set; }
    public decimal SpecialAllowance { get; set; }
    public decimal TelephoneReimbursement { get; set; }
    public decimal OtherEarnings { get; set; }

    // Deductions
    public decimal ProvidentFund { get; set; }
    public decimal IncomeTax { get; set; }
    public decimal ProfessionalTax { get; set; }
    public decimal Esi { get; set; }
    public decimal OtherDeductions { get; set; }

    // Totals (calculated in UI, persisted for reporting)
    public decimal GrossEarnings { get; set; }
    public decimal GrossDeductions { get; set; }
    public decimal NetPay { get; set; }

    // Status & remarks
    public string? Status { get; set; }
    public string? Remarks { get; set; }

    // Locks salary edits once a payslip has been generated for this record
    public bool IsPayslipGenerated { get; set; }

    // Audit
    public string? CreatedBy { get; set; }
    public DateTime CreatedDate { get; set; }
    public string? ModifiedBy { get; set; }
    public DateTime? ModifiedDate { get; set; }
    public string? UpdateTag { get; set; }
    public Guid UpdateGuid { get; set; }
    public bool IsDeleted { get; set; }

    // Navigation
    public Employee Employee { get; set; } = null!;
}
