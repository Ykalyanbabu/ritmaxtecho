import { Link } from 'react-router-dom'
import { ContentCard } from '@/shared/components/ContentCard'
import { PageHeader } from '@/shared/components/PageHeader'
import { StatCard } from '@/shared/components/StatCard'

const departments = [
  { icon: 'fa-code', name: 'Engineering', head: 'Rajesh Kumar', employees: 85, costCenter: 'CC-1001' },
  { icon: 'fa-chart-line', name: 'Sales', head: 'Sneha Reddy', employees: 42, costCenter: 'CC-1002' },
  { icon: 'fa-bullhorn', name: 'Marketing', head: 'Karthik Rao', employees: 28, costCenter: 'CC-1003' },
  { icon: 'fa-users', name: 'HR', head: 'Lakshmi Devi', employees: 15, costCenter: 'CC-1004' },
  { icon: 'fa-coins', name: 'Finance', head: 'Vikram Singh', employees: 22, costCenter: 'CC-1005' },
]

export function DepartmentListPage() {
  return (
    <>
      <PageHeader
        title="Department Management"
        subtitle="Organize employees by department and cost centers."
        className="justify-content-between"
        actions={
          <Link to="/admin/departments/form" className="btn btn-primary">
            <i className="fas fa-plus me-1" /> Add Department
          </Link>
        }
      />

      <div className="row g-3 mb-3">
        <div className="col-lg-8">
          <ContentCard title="Department Headcount">
            <div className="chart-container">
              <canvas id="departmentChart" />
            </div>
          </ContentCard>
        </div>
        <div className="col-lg-4">
          <StatCard value="6" label="Total Departments" className="mb-3" />
          <StatCard value="248" label="Total Employees" />
        </div>
      </div>

      <ContentCard bodyClassName="">
        <div data-table>
          <div className="table-toolbar">
            <div className="table-search">
              <i className="fas fa-search" />
              <input type="search" data-table-search placeholder="Search departments..." />
            </div>
          </div>
          <div className="table-responsive">
            <table className="data-table table">
              <thead>
                <tr>
                  <th data-sort>
                    Department <i className="fas fa-sort sort-icon" />
                  </th>
                  <th data-sort>
                    Head <i className="fas fa-sort sort-icon" />
                  </th>
                  <th data-sort>
                    Employees <i className="fas fa-sort sort-icon" />
                  </th>
                  <th data-sort>
                    Cost Center <i className="fas fa-sort sort-icon" />
                  </th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {departments.map((dept) => (
                  <tr key={dept.costCenter}>
                    <td>
                      <i className={`fas ${dept.icon} me-2 text-primary-custom`} />
                      {dept.name}
                    </td>
                    <td>{dept.head}</td>
                    <td>{dept.employees}</td>
                    <td>{dept.costCenter}</td>
                    <td>
                      <Link to="/admin/departments/form" className="btn btn-sm btn-light-custom">
                        <i className="fas fa-pen" />
                      </Link>
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
