namespace Ritmax.Domain.Entities;

public class Company : BaseEntity
{
    public string Name { get; set; } = string.Empty;
    public string Address { get; set; } = string.Empty;
    public string City { get; set; } = string.Empty;
    public string Gstin { get; set; } = string.Empty;
    public string Pan { get; set; } = string.Empty;
    public string Phone { get; set; } = string.Empty;

    public ICollection<Department> Departments { get; set; } = [];
    public ICollection<PayrollRun> PayrollRuns { get; set; } = [];
}
