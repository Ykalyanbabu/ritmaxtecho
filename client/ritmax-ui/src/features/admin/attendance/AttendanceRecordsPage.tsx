import { ContentCard } from '@/shared/components/ContentCard'
import { PageHeader } from '@/shared/components/PageHeader'
import { StatusBadge } from '@/shared/components/StatusBadge'

const records = [
  { employee: 'Priya Sharma', checkIn: '08:55 AM', checkOut: '06:02 PM', hours: '9.1 hrs', status: 'active' as const, statusLabel: 'Present' },
  { employee: 'Rahul Reddy', checkIn: '09:12 AM', checkOut: '05:45 PM', hours: '8.5 hrs', status: 'active' as const, statusLabel: 'Present' },
  { employee: 'Ananya Rao', checkIn: '—', checkOut: '—', hours: '—', status: 'pending' as const, statusLabel: 'On Leave' },
  { employee: 'Vikram Singh', checkIn: '08:30 AM', checkOut: '05:30 PM', hours: '9.0 hrs', status: 'active' as const, statusLabel: 'Present' },
  { employee: 'Lakshmi Devi', checkIn: '—', checkOut: '—', hours: '—', status: 'inactive' as const, statusLabel: 'Absent' },
]

export function AttendanceRecordsPage() {
  return (
    <>
      <PageHeader
        title="Daily Attendance Records"
        subtitle="View and manage daily check-in/check-out records."
        className="justify-content-between"
        actions={<input type="date" className="form-control" style={{ width: 'auto' }} defaultValue="2026-06-11" />}
      />

      <ContentCard bodyClassName="">
        <div data-table>
          <div className="table-toolbar">
            <div className="table-search">
              <i className="fas fa-search" />
              <input type="search" data-table-search placeholder="Search records..." />
            </div>
            <button type="button" className="btn btn-outline-primary btn-sm">
              <i className="fas fa-download me-1" /> Export
            </button>
          </div>
          <div className="table-responsive">
            <table className="data-table table">
              <thead>
                <tr>
                  <th data-sort>
                    Employee <i className="fas fa-sort sort-icon" />
                  </th>
                  <th data-sort>
                    Check In <i className="fas fa-sort sort-icon" />
                  </th>
                  <th data-sort>
                    Check Out <i className="fas fa-sort sort-icon" />
                  </th>
                  <th data-sort>
                    Hours <i className="fas fa-sort sort-icon" />
                  </th>
                  <th data-sort>
                    Status <i className="fas fa-sort sort-icon" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {records.map((record) => (
                  <tr key={record.employee}>
                    <td>{record.employee}</td>
                    <td>{record.checkIn}</td>
                    <td>{record.checkOut}</td>
                    <td>{record.hours}</td>
                    <td>
                      <StatusBadge status={record.status}>{record.statusLabel}</StatusBadge>
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
