namespace Ritmax.Domain.Entities;

public class EmployeeBankDetails : BaseEntity
{
    public int EmployeeId { get; set; }
    public string BankName { get; set; } = string.Empty;
    public string AccountNumber { get; set; } = string.Empty;
    public string Ifsc { get; set; } = string.Empty;

    public Employee Employee { get; set; } = null!;
}
