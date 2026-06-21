namespace Ritmax.Web.Services;

public interface IFileStorageService
{
    /// <summary>
    /// Persists an uploaded company logo to the configured uploads folder and
    /// returns the public URL path (e.g. "/uploads/company-logos/{file}").
    /// </summary>
    Task<string> SaveCompanyLogoAsync(IFormFile file, CancellationToken cancellationToken = default);
}
