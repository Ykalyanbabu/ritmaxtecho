import { ContentCard } from '@/shared/components/ContentCard'
import { PageHeader } from '@/shared/components/PageHeader'
import { StatusBadge } from '@/shared/components/StatusBadge'

const users = [
  { initials: 'RK', name: 'Rajesh Kumar', email: 'rajesh.k@payrollpro.in', role: 'HR Administrator', department: 'HR', lastLogin: 'Today, 9:15 AM', status: 'active' as const },
  { initials: 'SR', name: 'Sneha Reddy', email: 'sneha.r@payrollpro.in', role: 'Payroll Officer', department: 'Finance', lastLogin: 'Yesterday', status: 'active' as const },
  { initials: 'AM', name: 'Arjun Mehta', email: 'arjun.m@payrollpro.in', role: 'Employee', department: 'Engineering', lastLogin: 'Jun 8, 2026', status: 'inactive' as const },
]

export function UserListPage() {
  return (
    <>
      <PageHeader
        title="User Management"
        subtitle="Manage system users and their access."
        className="justify-content-between"
        actions={
          <button type="button" className="btn btn-primary">
            <i className="fas fa-user-plus me-1" /> Add User
          </button>
        }
      />

      <ContentCard bodyClassName="">
        <div data-table>
          <div className="table-toolbar">
            <div className="table-search">
              <i className="fas fa-search" />
              <input type="search" data-table-search placeholder="Search users..." />
            </div>
          </div>
          <div className="table-responsive">
            <table className="data-table table">
              <thead>
                <tr>
                  <th data-sort>
                    User <i className="fas fa-sort sort-icon" />
                  </th>
                  <th data-sort>
                    Role <i className="fas fa-sort sort-icon" />
                  </th>
                  <th data-sort>
                    Department <i className="fas fa-sort sort-icon" />
                  </th>
                  <th data-sort>
                    Last Login <i className="fas fa-sort sort-icon" />
                  </th>
                  <th data-sort>
                    Status <i className="fas fa-sort sort-icon" />
                  </th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.email}>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <span className="table-avatar">{user.initials}</span>
                        <div>
                          <div className="fw-semibold">{user.name}</div>
                          <small className="text-muted">{user.email}</small>
                        </div>
                      </div>
                    </td>
                    <td>{user.role}</td>
                    <td>{user.department}</td>
                    <td>{user.lastLogin}</td>
                    <td>
                      <StatusBadge status={user.status}>
                        {user.status === 'active' ? 'Active' : 'Inactive'}
                      </StatusBadge>
                    </td>
                    <td>
                      <button type="button" className="btn btn-sm btn-light-custom">
                        <i className="fas fa-pen" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </ContentCard>
    </>
  )
}
