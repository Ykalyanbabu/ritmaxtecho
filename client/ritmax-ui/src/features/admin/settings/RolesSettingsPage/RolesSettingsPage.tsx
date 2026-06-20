import { ContentCard } from '@/shared/components/ContentCard'
import { PageHeader } from '@/shared/components/PageHeader'

const modules = [
  { name: 'Dashboard', permissions: [true, true, true, true] },
  { name: 'Employees', permissions: [true, true, true, false] },
  { name: 'RITMAXcessing', permissions: [true, true, true, false] },
  { name: 'Reports', permissions: [true, true, true, false] },
  { name: 'Settings', permissions: [true, false, false, false] },
]

const roleColumns = ['Admin', 'HR Manager', 'Payroll Officer', 'Employee']

export function RolesSettingsPage() {
  return (
    <>
      <PageHeader
        title="Roles & Permissions"
        subtitle="Define role-based access for system modules."
        className="justify-content-between"
        actions={
          <button type="button" className="btn btn-primary btn-sm">
            <i className="fas fa-plus me-1" /> Add Role
          </button>
        }
      />

      <ContentCard>
        <div className="table-responsive">
          <table className="table permission-matrix data-table">
            <thead>
              <tr>
                <th className="module-name">Module</th>
                {roleColumns.map((role) => (
                  <th key={role}>{role}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {modules.map((module) => (
                <tr key={module.name}>
                  <td className="module-name">{module.name}</td>
                  {module.permissions.map((checked, index) => (
                    <td key={roleColumns[index]}>
                      <input type="checkbox" className="form-check-input" defaultChecked={checked} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-3">
          <button type="button" className="btn btn-primary">
            <i className="fas fa-save me-1" /> Save Permissions
          </button>
        </div>
      </ContentCard>
    </>
  )
}
