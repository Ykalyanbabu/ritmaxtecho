namespace Ritmax.Application.DTOs;

public record EmployeeFormOptionsDto(
    IReadOnlyList<LookupItemDto> Departments,
    IReadOnlyList<LookupItemDto> ReportingManagers,
    IReadOnlyList<StateDto> States);
