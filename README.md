# RITMAX

Payroll and HR platform — React SPA + ASP.NET Core API + SQL Server DACPAC.

## Quick Start

```bash
# UI development (HMR)
cd client/ritmax-ui && npm install && npm run dev

# API + built UI
cd client/ritmax-ui && npm run build
cd src/Ritmax.Web && dotnet run
```

- Marketing site: http://localhost:5173/ (dev) or http://localhost:5280/ (prod build)
- Admin app: `/admin`
- Sample API: `/api/health`, `/api/employees`

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for Azure deployment and DACPAC publish steps.

## Solution Layout

| Path | Description |
|------|-------------|
| `src/Ritmax.Domain` | Domain entities and enums |
| `src/Ritmax.Application` | DTOs, interfaces, application services |
| `src/Ritmax.Infrastructure` | EF Core DbContext (schema-ready, not wired to UI yet) |
| `src/Ritmax.Web` | API host + React static files in `wwwroot` |
| `client/ritmax-ui` | React TypeScript SPA (marketing + admin) |
| `database/Ritmax.Database` | SSDT DACPAC project with seed data |
| `admin/`, `*.html` | Legacy static prototype (reference) |
