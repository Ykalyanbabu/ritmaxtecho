import { ContentCard } from '@/shared/components/ContentCard'
import { PageHeader } from '@/shared/components/PageHeader'
import { StatCard } from '@/shared/components/StatCard'

const attendanceData = [
  { employee: 'Priya Sharma', present: 18, absent: 1, leave: 1, rate: '90%' },
  { employee: 'Rahul Reddy', present: 20, absent: 0, leave: 0, rate: '100%' },
  { employee: 'Ananya Rao', present: 15, absent: 0, leave: 5, rate: '75%' },
]

export function AttendanceReportsPage() {
  return (
    <>
      <PageHeader
        title="Attendance Reports"
        subtitle="Track attendance patterns and compliance."
        className="justify-content-between"
        actions={
          <div className="d-flex gap-2">
            <button type="button" className="btn btn-outline-danger btn-sm">
              <i className="fas fa-file-pdf me-1" /> PDF
            </button>
            <button type="button" className="btn btn-outline-success btn-sm">
              <i className="fas fa-file-excel me-1" /> Excel
            </button>
          </div>
        }
      />

      <div className="row g-3 mb-3">
        <div className="col-md-3">
          <StatCard value="94.2%" label="Avg. Attendance" textCenter />
        </div>
        <div className="col-md-3">
          <StatCard value="156" label="Late Arrivals" textCenter />
        </div>
        <div className="col-md-3">
          <StatCard value="42" label="Early Departures" textCenter />
        </div>
        <div className="col-md-3">
          <StatCard value="7.8" label="Avg. Hours/Day" textCenter />
        </div>
      </div>

      <ContentCard bodyClassName="">
        <div data-table>
          <div className="table-toolbar">
            <div className="table-search">
              <i className="fas fa-search" />
              <input type="search" data-table-search placeholder="Search..." />
            </div>
            <select className="form-select form-select-sm" style={{ width: 'auto' }}>
              <option>June 2026</option>
            </select>
          </div>
          <div className="table-responsive">
            <table className="data-table table">
              <thead>
                <tr>
                  <th data-sort>
                    Employee <i className="fas fa-sort sort-icon" />
                  </th>
                  <th data-sort>
                    Present <i className="fas fa-sort sort-icon" />
                  </th>
                  <th data-sort>
                    Absent <i className="fas fa-sort sort-icon" />
                  </th>
                  <th data-sort>
                    Leave <i className="fas fa-sort sort-icon" />
                  </th>
                  <th data-sort>
                    Rate <i className="fas fa-sort sort-icon" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {attendanceData.map((row) => (
                  <tr key={row.employee}>
                    <td>{row.employee}</td>
                    <td>{row.present}</td>
                    <td>{row.absent}</td>
                    <td>{row.leave}</td>
                    <td>{row.rate}</td>
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
