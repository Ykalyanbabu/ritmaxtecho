namespace Ritmax.Application.DTOs;

public class SaveSalaryDetailRequest
{
    public int EmployeeId { get; set; }
    public byte Month { get; set; }
    public short Year { get; set; }

    // Earnings (Basic is derived from Employee.BaseSalary, not accepted from the client)
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
}
