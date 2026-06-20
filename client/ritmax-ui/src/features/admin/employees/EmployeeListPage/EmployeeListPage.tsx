import { Link } from 'react-router-dom'
import { ContentCard } from '@/shared/components/ContentCard'
import { PageHeader } from '@/shared/components/PageHeader'
import { StatusBadge } from '@/shared/components/StatusBadge'
import { employees, employeeTotalCount } from '@/shared/data/employees'
import { useTableSearch } from '@/shared/hooks/useTableSearch'

export function EmployeeListPage() {
  const { query, setQuery, filtered } = useTableSearch(employees, ['name', 'email', 'id', 'department', 'designation'])
  return (
    <>
      <PageHeader
        title="Employee Management"
        subtitle="Manage your workforce, view profiles, and track employee data."
        actions={
          <Link to="/admin/employees/add" className="btn btn-primary">
            <i className="fas fa-user-plus me-1" /> Add Employee
          </Link>
        }
      />

      <ContentCard className="" bodyClassName="">
        <div data-table>
          <div className="table-toolbar">
            <div className="table-search">
              <i className="fas fa-search" />
              <input
                type="search"
                data-table-search
                placeholder="Search employees..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <div className="d-flex gap-2 flex-wrap">
              <select className="form-select form-select-sm" style={{ width: 'auto' }}>
                <option>All Departments</option>
                <option>Engineering</option>
                <option>Sales</option>
                <option>HR</option>
                <option>Finance</option>
              </select>
              <select className="form-select form-select-sm" style={{ width: 'auto' }}>
                <option>All Status</option>
                <option>Active</option>
                <option>Inactive</option>
                <option>On Leave</option>
              </select>
              <button type="button" className="btn btn-light-custom btn-sm">
                <i className="fas fa-filter me-1" /> Filters
              </button>
              <button type="button" className="btn btn-outline-primary btn-sm">
                <i className="fas fa-download me-1" /> Export
              </button>
            </div>
          </div>
          <div className="table-responsive">
            <table className="data-table table">
              <thead>
                <tr>
                  <th data-sort>
                    Employee <i className="fas fa-sort sort-icon" />
                  </th>
                  <th data-sort>
                    ID <i className="fas fa-sort sort-icon" />
                  </th>
                  <th data-sort>
                    Department <i className="fas fa-sort sort-icon" />
                  </th>
                  <th data-sort>
                    Designation <i className="fas fa-sort sort-icon" />
                  </th>
                  <th data-sort>
                    Salary <i className="fas fa-sort sort-icon" />
                  </th>
                  <th data-sort>
                    Status <i className="fas fa-sort sort-icon" />
                  </th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((employee) => (
                  <tr key={employee.id}>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <span className="table-avatar">{employee.initials}</span>
                        <div>
                          <div className="fw-semibold">{employee.name}</div>
                          <small className="text-muted">{employee.email}</small>
                        </div>
                      </div>
                    </td>
                    <td>{employee.id}</td>
                    <td>{employee.department}</td>
                    <td>{employee.designation}</td>
                    <td>{employee.salary}</td>
                    <td>
                      <StatusBadge status={employee.status}> {employee.statusLabel}</StatusBadge>
                    </td>
                    <td>
                      <div className="btn-group btn-group-sm">
                        <Link to="/admin/employees/profile" className="btn btn-light-custom" title="View">
                          <i className="fas fa-eye" />
                        </Link>
                        <button type="button" className="btn btn-light-custom" title="Edit">
                          <i className="fas fa-pen" />
                        </button>
                        <button type="button" className="btn btn-light-custom text-danger" title="Delete">
                          <i className="fas fa-trash" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="table-pagination">
            <span>Showing 1-{filtered.length} of {employeeTotalCount} employees</span>
            <nav>
              <ul className="pagination pagination-sm mb-0">
                <li className="page-item disabled">
                  <a className="page-link" href="#">Previous</a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">1</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">3</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </ContentCard>
    </>
  )
}
