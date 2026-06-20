import { ContentCard } from '@/shared/components/ContentCard'
import { PageHeader } from '@/shared/components/PageHeader'
import { StatusBadge } from '@/shared/components/StatusBadge'

const loginActivity = [
  { user: 'Rajesh Kumar', ip: '103.45.67.89', device: 'Chrome / Windows', time: 'Today, 9:15 AM IST', status: 'active' as const, statusLabel: 'Success' },
  { user: 'Unknown', ip: '49.207.xx.xx', device: 'Firefox / Android', time: 'Yesterday, 11:42 PM IST', status: 'inactive' as const, statusLabel: 'Failed' },
]

export function AccessControlPage() {
  return (
    <>
      <PageHeader
        title="Access Control"
        subtitle="Manage IP restrictions, session policies, and security settings."
      />

      <div className="row g-3">
        <div className="col-lg-6">
          <ContentCard title="Session Policy">
            <div className="mb-3">
              <label className="form-label">Session Timeout (minutes)</label>
              <input type="number" className="form-control" defaultValue={30} />
            </div>
            <div className="form-check form-switch mb-3">
              <input className="form-check-input" type="checkbox" id="singleSession" defaultChecked />
              <label className="form-check-label" htmlFor="singleSession">
                Single session per user
              </label>
            </div>
            <div className="form-check form-switch mb-3">
              <input className="form-check-input" type="checkbox" id="forceLogout" defaultChecked />
              <label className="form-check-label" htmlFor="forceLogout">
                Force logout on password change
              </label>
            </div>
          </ContentCard>
        </div>
        <div className="col-lg-6">
          <ContentCard title="IP Whitelist">
            <div className="mb-3">
              <label className="form-label">Allowed IP Addresses</label>
              <textarea
                className="form-control"
                rows={4}
                placeholder={'192.168.1.0/24\n10.0.0.0/8'}
              />
            </div>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="ipRestrict" />
              <label className="form-check-label" htmlFor="ipRestrict">
                Enable IP restriction
              </label>
            </div>
          </ContentCard>
        </div>
        <div className="col-12">
          <ContentCard title="Recent Login Activity">
            <table className="data-table table table-sm">
              <thead>
                <tr>
                  <th>User</th>
                  <th>IP Address</th>
                  <th>Device</th>
                  <th>Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {loginActivity.map((entry) => (
                  <tr key={`${entry.user}-${entry.time}`}>
                    <td>{entry.user}</td>
                    <td>{entry.ip}</td>
                    <td>{entry.device}</td>
                    <td>{entry.time}</td>
                    <td>
                      <StatusBadge status={entry.status}>{entry.statusLabel}</StatusBadge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ContentCard>
        </div>
      </div>

      <button type="button" className="btn btn-primary mt-3">
        <i className="fas fa-save me-1" /> Save Access Settings
      </button>
    </>
  )
}
