namespace Ritmax.Domain.Entities;

public class AttendanceRecord : BaseEntity
{
    public int EmployeeId { get; set; }
    public DateTime Date { get; set; }
    public string Status { get; set; } = string.Empty;
    public TimeSpan? CheckIn { get; set; }
    public TimeSpan? CheckOut { get; set; }

    public Employee Employee { get; set; } = null!;
}
