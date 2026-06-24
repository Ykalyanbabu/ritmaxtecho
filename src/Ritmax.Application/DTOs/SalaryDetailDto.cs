namespace Ritmax.Application.DTOs;

public record SalaryDetailDto(
    int EmployeeId,
    byte Month,
    short Year,

    // Earnings
    decimal Basic,
    decimal Hra,
    decimal SpecialAllowance,
    decimal TelephoneReimbursement,
    decimal OtherEarnings,

    // Deductions
    decimal ProvidentFund,
    decimal IncomeTax,
    decimal ProfessionalTax,
    decimal Esi,
    decimal OtherDeductions,

    // Totals
    decimal GrossEarnings,
    decimal GrossDeductions,
    decimal NetPay,

    // State
    bool IsPayslipGenerated,
    bool Exists);
