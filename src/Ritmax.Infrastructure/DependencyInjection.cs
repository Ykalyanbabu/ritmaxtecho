using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Ritmax.Application;

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

        return services;
    }
}
