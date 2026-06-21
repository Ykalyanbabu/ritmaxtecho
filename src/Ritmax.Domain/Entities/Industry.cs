namespace Ritmax.Domain.Entities;

public class Industry : BaseEntity
{
    public string Name { get; set; } = string.Empty;

    public ICollection<Company> Companies { get; set; } = [];
}
