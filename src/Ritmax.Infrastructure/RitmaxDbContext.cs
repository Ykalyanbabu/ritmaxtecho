using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Ritmax.Domain.Entities;
using Ritmax.Infrastructure.Models;

namespace Ritmax.Infrastructure;

public class RitmaxDbContext : DbContext
{
    public RitmaxDbContext(DbContextOptions<RitmaxDbContext> options) : base(options) { }

    public DbSet<Company> Companies => Set<Company>();
    public DbSet<Industry> Industries => Set<Industry>();
    public DbSet<State> States => Set<State>();
    public DbSet<Department> Departments => Set<Department>();
    public DbSet<Employee> Employees => Set<Employee>();
    public DbSet<PayrollRun> PayrollRuns => Set<PayrollRun>();
    public DbSet<Payslip> Payslips => Set<Payslip>();
    public DbSet<PayslipLineItem> PayslipLineItems => Set<PayslipLineItem>();
    public DbSet<User> Users => Set<User>();
    public DbSet<Role> Roles => Set<Role>();
    public DbSet<UserRole> UserRoles => Set<UserRole>();
    public DbSet<Holiday> Holidays => Set<Holiday>();
    public DbSet<LeaveRequest> LeaveRequests => Set<LeaveRequest>();
    public DbSet<AttendanceRecord> AttendanceRecords => Set<AttendanceRecord>();
    public DbSet<EmployeeLoginResult> EmployeeLogins => Set<EmployeeLoginResult>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<EmployeeLoginResult>().HasNoKey().ToView(null);

        modelBuilder.Entity<Employee>().ToTable("Employee");

        modelBuilder.Entity<Employee>()
            .HasOne(e => e.Company)
            .WithMany()
            .HasForeignKey(e => e.CompanyId)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<Employee>()
            .HasOne(e => e.Department)
            .WithMany(d => d.Employees)
            .HasForeignKey(e => e.DepartmentId)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<Employee>()
            .HasOne(e => e.State)
            .WithMany()
            .HasForeignKey(e => e.StateId)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<Employee>()
            .HasOne(e => e.ReportingManager)
            .WithMany()
            .HasForeignKey(e => e.ReportingManagerId)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<Employee>()
            .HasIndex(e => new { e.CompanyId, e.EmployeeCode })
            .IsUnique();

        modelBuilder.Entity<UserRole>()
            .HasIndex(ur => new { ur.UserId, ur.RoleId })
            .IsUnique();

        modelBuilder.Entity<Company>().ToTable("Company");
        modelBuilder.Entity<State>().ToTable("State");

        modelBuilder.Entity<Company>()
            .HasOne(c => c.Industry)
            .WithMany(i => i.Companies)
            .HasForeignKey(c => c.IndustryId)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<Company>()
            .HasOne(c => c.State)
            .WithMany(s => s.Companies)
            .HasForeignKey(c => c.StateId)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<Industry>()
            .HasIndex(i => i.Name)
            .IsUnique();

        modelBuilder.Entity<State>()
            .HasIndex(s => s.Name)
            .IsUnique();
    }
}
