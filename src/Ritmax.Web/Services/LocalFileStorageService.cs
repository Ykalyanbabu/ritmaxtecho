namespace Ritmax.Web.Services;

public class LocalFileStorageService : IFileStorageService
{
    private const string CompanyLogoFolder = "company-logos";
    public const string PublicRequestPath = "/uploads";

    private readonly IWebHostEnvironment _environment;
    private readonly IConfiguration _configuration;

    public LocalFileStorageService(IWebHostEnvironment environment, IConfiguration configuration)
    {
        _environment = environment;
        _configuration = configuration;
    }

    public async Task<string> SaveCompanyLogoAsync(IFormFile file, CancellationToken cancellationToken = default)
    {
        var targetFolder = Path.Combine(GetUploadsRoot(), CompanyLogoFolder);
        Directory.CreateDirectory(targetFolder);

        var extension = Path.GetExtension(file.FileName);
        if (string.IsNullOrWhiteSpace(extension))
        {
            extension = ".png";
        }

        var fileName = $"{Guid.NewGuid():N}{extension.ToLowerInvariant()}";
        var absolutePath = Path.Combine(targetFolder, fileName);

        await using (var stream = File.Create(absolutePath))
        {
            await file.CopyToAsync(stream, cancellationToken);
        }

        return $"{PublicRequestPath}/{CompanyLogoFolder}/{fileName}";
    }

    private string GetUploadsRoot()
    {
        var configured = _configuration["FileStorage:UploadsPath"];
        var relativeOrAbsolute = string.IsNullOrWhiteSpace(configured) ? "uploads" : configured;

        return Path.IsPathRooted(relativeOrAbsolute)
            ? relativeOrAbsolute
            : Path.Combine(_environment.ContentRootPath, relativeOrAbsolute);
    }
}
