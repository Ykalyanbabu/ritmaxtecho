namespace Ritmax.Domain.Entities;

public class Department : BaseEntity
{
    public int CompanyId { get; set; }
    public string Name { get; set; } = string.Empty;
    public string? Description { get; set; }

    public Company Company { get; set; } = null!;
    public ICollection<Employee> Employees { get; set; } = [];
}
