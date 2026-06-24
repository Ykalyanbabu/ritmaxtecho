using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Ritmax.Application;
using Ritmax.Application.Interfaces;
using Ritmax.Infrastructure.Security;
using Ritmax.Infrastructure.Services;

namespace Ritmax.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddApplication();

        var connectionString = configuration.GetConnectionString("RitmaxDb");
        if (!string.IsNullOrWhiteSpace(connectionString))
        {
            services.AddDbContext<RitmaxDbContext>(options =>
                options.UseSqlServer(connectionString));
        }

        services.AddScoped<ICompanyService, CompanyService>();
        services.AddScoped<IEmployeeService, EmployeeService>();
        services.AddScoped<ISalaryDetailService, SalaryDetailService>();
        services.AddScoped<IAuthService, AuthService>();
        services.AddSingleton<IPasswordHasher, BCryptPasswordHasher>();
        services.AddSingleton<IJwtTokenGenerator, JwtTokenGenerator>();

        return services;
    }
}
