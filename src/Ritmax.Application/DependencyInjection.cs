using Microsoft.Extensions.DependencyInjection;
using Ritmax.Application.Interfaces;
using Ritmax.Application.Services;

namespace Ritmax.Application;

public static class DependencyInjection
{
    public static IServiceCollection AddApplication(this IServiceCollection services)
    {
        services.AddScoped<IEmployeeService, EmployeeService>();
        return services;
    }
}
