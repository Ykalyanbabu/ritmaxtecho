import { ContentCard } from '@/shared/components/ContentCard'
import { PageHeader } from '@/shared/components/PageHeader'

const roles = [
  { icon: 'fa-crown', variant: 'primary', name: 'Administrator', description: 'Full system access', users: 3 },
  { icon: 'fa-user-tie', variant: 'success', name: 'HR Manager', description: 'Employee & leave management', users: 8 },
  { icon: 'fa-calculator', variant: 'warning', name: 'Payroll Officer', description: 'RITMAXcessing access', users: 5 },
  { icon: 'fa-user', variant: 'info', name: 'Employee', description: 'Self-service portal', users: 232 },
]

export function UserRolesPage() {
  return (
    <>
      <PageHeader
        title="Role Management"
        subtitle="Create and manage user roles."
        className="justify-content-between"
        actions={
          <button type="button" className="btn btn-primary">
            <i className="fas fa-plus me-1" /> Create Role
          </button>
        }
      />

      <div className="row g-3">
        {roles.map((role) => (
          <div key={role.name} className="col-md-6 col-lg-3">
            <ContentCard className="h-100">
              <div className="text-center">
                <div className={`stat-card-icon ${role.variant} mx-auto mb-3`}>
                  <i className={`fas ${role.icon}`} />
                </div>
                <h6 className="fw-semibold">{role.name}</h6>
                <p className="text-muted small mb-2">{role.description}</p>
                <span className="badge bg-primary-subtle text-primary">{role.users} users</span>
              </div>
            </ContentCard>
          </div>
        ))}
      </div>
    </>
  )
}
