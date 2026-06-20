import { ContentCard } from '@/shared/components/ContentCard'
import { PageHeader } from '@/shared/components/PageHeader'

const notifications = [
  { title: 'RITMAXcessed', description: 'When payroll batch completes', email: true, inApp: true, sms: false },
  { title: 'Leave Requests', description: 'New leave request submitted', email: true, inApp: true, sms: false },
  { title: 'Payslip Available', description: 'Employee payslip generated', email: true, inApp: true, sms: false },
  { title: 'Tax Deadlines', description: 'Upcoming tax filing reminders', email: true, inApp: true, sms: true },
]

export function NotificationsSettingsPage() {
  return (
    <>
      <PageHeader
        title="Notification Settings"
        subtitle="Configure email and in-app notification preferences."
      />

      <ContentCard>
        <table className="table">
          <thead>
            <tr>
              <th>Notification Type</th>
              <th className="text-center">Email</th>
              <th className="text-center">In-App</th>
              <th className="text-center">SMS</th>
            </tr>
          </thead>
          <tbody>
            {notifications.map((notification) => (
              <tr key={notification.title}>
                <td>
                  <div className="fw-semibold">{notification.title}</div>
                  <small className="text-muted">{notification.description}</small>
                </td>
                <td className="text-center">
                  <input type="checkbox" className="form-check-input" defaultChecked={notification.email} />
                </td>
                <td className="text-center">
                  <input type="checkbox" className="form-check-input" defaultChecked={notification.inApp} />
                </td>
                <td className="text-center">
                  <input type="checkbox" className="form-check-input" defaultChecked={notification.sms} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="button" className="btn btn-primary mt-3">
          <i className="fas fa-save me-1" /> Save Preferences
        </button>
      </ContentCard>
    </>
  )
}
