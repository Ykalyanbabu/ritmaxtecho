import { ContentCard } from '@/shared/components/ContentCard'
import { PageHeader } from '@/shared/components/PageHeader'
import { StatCard } from '@/shared/components/StatCard'
import { StatusBadge } from '@/shared/components/StatusBadge'

const leaveRequests = [
  { employee: 'Ananya Rao', type: 'Earned Leave', from: 'Jun 15', to: 'Jun 20', days: 5, status: 'pending' as const, statusLabel: 'Pending', actions: 'approve' as const },
  { employee: 'Arjun Mehta', type: 'Casual Leave', from: 'Jun 12', to: 'Jun 13', days: 2, status: 'pending' as const, statusLabel: 'Pending', actions: 'approve' as const },
  { employee: 'Priya Sharma', type: 'Earned Leave', from: 'May 20', to: 'May 22', days: 3, status: 'active' as const, statusLabel: 'Approved', actions: 'view' as const },
]

export function LeaveManagementPage() {
  return (
    <>
      <PageHeader
        title="Leave Management"
        subtitle="Approve, reject, and track employee leave requests."
        className="justify-content-between"
        actions={
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#leaveModal">
            <i className="fas fa-plus me-1" /> New Request
          </button>
        }
      />

      <div className="row g-3 mb-3">
        <div className="col-md-4">
          <StatCard value={<span className="text-warning">5</span>} label="Pending Requests" textCenter />
        </div>
        <div className="col-md-4">
          <StatCard value={<span className="text-success">42</span>} label="Approved (This Month)" textCenter />
        </div>
        <div className="col-md-4">
          <StatCard value={<span className="text-danger">3</span>} label="Rejected" textCenter />
        </div>
      </div>

      <ContentCard bodyClassName="">
        <div data-table>
          <div className="table-toolbar">
            <div className="table-search">
              <i className="fas fa-search" />
              <input type="search" data-table-search placeholder="Search leave requests..." />
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
                    Type <i className="fas fa-sort sort-icon" />
                  </th>
                  <th data-sort>
                    From <i className="fas fa-sort sort-icon" />
                  </th>
                  <th data-sort>
                    To <i className="fas fa-sort sort-icon" />
                  </th>
                  <th data-sort>
                    Days <i className="fas fa-sort sort-icon" />
                  </th>
                  <th data-sort>
                    Status <i className="fas fa-sort sort-icon" />
                  </th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {leaveRequests.map((request) => (
                  <tr key={`${request.employee}-${request.from}`}>
                    <td>{request.employee}</td>
                    <td>{request.type}</td>
                    <td>{request.from}</td>
                    <td>{request.to}</td>
                    <td>{request.days}</td>
                    <td>
                      <StatusBadge status={request.status}>{request.statusLabel}</StatusBadge>
                    </td>
                    <td>
                      {request.actions === 'approve' ? (
                        <>
                          <button type="button" className="btn btn-sm btn-success">
                            Approve
                          </button>{' '}
                          <button type="button" className="btn btn-sm btn-outline-danger">
                            Reject
                          </button>
                        </>
                      ) : (
                        <button type="button" className="btn btn-sm btn-light-custom">
                          <i className="fas fa-eye" />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </ContentCard>

      <div className="modal fade" id="leaveModal" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">New Leave Request</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" />
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Leave Type</label>
                <select className="form-select">
                  <option>Earned Leave</option>
                  <option>Casual Leave</option>
                  <option>Sick Leave</option>
                  <option>Maternity Leave</option>
                </select>
              </div>
              <div className="row g-2 mb-3">
                <div className="col-6">
                  <label className="form-label">From</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="col-6">
                  <label className="form-label">To</label>
                  <input type="date" className="form-control" />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Reason</label>
                <textarea className="form-control" rows={3} />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-light-custom" data-bs-dismiss="modal">
                Cancel
              </button>
              <button type="button" className="btn btn-primary">
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
