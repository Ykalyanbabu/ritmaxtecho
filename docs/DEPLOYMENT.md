# RITMAX Deployment Guide

## Architecture

| Component | Project | Deploy Target |
|-----------|---------|---------------|
| Database | `database/Ritmax.Database` (DACPAC) | Azure SQL / SQL Server |
| API + UI | `src/Ritmax.Web` + `client/ritmax-ui` | Azure App Service (single artifact) |

## Local Development

### Prerequisites

- .NET 9 SDK
- Node.js 20+
- SQL Server (optional for Phase 1 — API uses in-memory static data)

### Run React dev server (HMR)

```bash
cd client/ritmax-ui
npm install
npm run dev
```

Open http://localhost:5173 — API calls to `/api/*` proxy to the .NET host.

### Run .NET API host

```bash
cd src/Ritmax.Web
dotnet run
```

Open http://localhost:5280 after building the React app (see below), or use Vite dev server for UI work.

### Build React into wwwroot (production-like)

```bash
cd client/ritmax-ui
npm run build
```

Output: `src/Ritmax.Web/wwwroot/` — served by ASP.NET with SPA fallback.

### Verify sample API

```bash
curl http://localhost:5280/api/health
curl http://localhost:5280/api/employees
```

## Database (DACPAC)

Build with Visual Studio SSDT or MSBuild with SQL Server Data Tools:

```bash
msbuild database/Ritmax.Database/Ritmax.Database.sqlproj /p:Configuration=Release
```

Publish to SQL Server:

```bash
SqlPackage /Action:Publish ^
  /SourceFile:database/Ritmax.Database/bin/Release/Ritmax.Database.dacpac ^
  /TargetConnectionString:"Server=YOUR_SERVER;Database=Ritmax;User Id=...;Password=...;TrustServerCertificate=True"
```

Seed data runs via `Scripts/PostDeployment/SeedData.sql` on publish.

## Azure App Service Deploy

1. Build React: `npm run build` in `client/ritmax-ui`
2. Publish API: `dotnet publish src/Ritmax.Web -c Release -o ./publish`
3. Deploy `./publish` folder to App Service (zip deploy, GitHub Actions, or Azure DevOps)
4. Deploy DACPAC separately to Azure SQL
5. Set App Service connection string: `ConnectionStrings__RitmaxDb`

## Solution Structure

```
Ritmax.sln
├── src/Ritmax.Domain          # Entities, enums
├── src/Ritmax.Application     # DTOs, services, interfaces
├── src/Ritmax.Infrastructure  # EF Core DbContext (stub)
├── src/Ritmax.Web             # API host + wwwroot SPA
├── client/ritmax-ui           # React TypeScript SPA
└── database/Ritmax.Database   # SSDT DACPAC project
```

## Routes

| Area | Base Path |
|------|-----------|
| Marketing site | `/`, `/about`, `/contact`, `/login`, service pages |
| Admin app | `/admin`, `/admin/employees`, `/admin/payroll/*`, etc. |
| Admin auth | `/admin/auth/login` |
| API | `/api/health`, `/api/employees` (sample) |
