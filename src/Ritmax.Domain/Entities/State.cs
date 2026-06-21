namespace Ritmax.Domain.Entities;

public class State : BaseEntity
{
    public string Name { get; set; } = string.Empty;

    public ICollection<Company> Companies { get; set; } = [];
}
