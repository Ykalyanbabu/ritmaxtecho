import { ContentCard } from '@/shared/components/ContentCard'
import { PageHeader } from '@/shared/components/PageHeader'
import { StatCard } from '@/shared/components/StatCard'
import { useDashboardCharts } from '@/shared/hooks/useDashboardCharts'

export function DashboardPage() {
  const { salaryRef, attendanceRef } = useDashboardCharts()
  return (
    <>
      <PageHeader
        title="Dashboard"
        subtitle="Welcome back, Rajesh. Payroll overview for June 2026 — Hyderabad (IST)."
        actions={
          <div className="d-flex gap-2">
            <button type="button" className="btn btn-light-custom btn-sm">
              <i className="fas fa-download me-1" /> Export
            </button>
            <button type="button" className="btn btn-primary btn-sm">
              <i className="fas fa-plus me-1" /> Run Payroll
            </button>
          </div>
        }
      />

      <div className="row g-3 gap-section">
        <div className="col-sm-6 col-xl-3">
          <StatCard
            value="248"
            label="Total Employees"
            icon={<i className="fas fa-users" />}
            iconVariant="primary"
            trend={
              <>
                <i className="fas fa-arrow-up" /> 4.2%
              </>
            }
            trendDirection="up"
          />
        </div>
        <div className="col-sm-6 col-xl-3">
          <StatCard
            value="231"
            label="Active Employees"
            icon={<i className="fas fa-user-check" />}
            iconVariant="success"
            trend={
              <>
                <i className="fas fa-arrow-up" /> 2.1%
              </>
            }
            trendDirection="up"
          />
        </div>
        <div className="col-sm-6 col-xl-3">
          <StatCard
            value="12"
            label="On Leave Today"
            icon={<i className="fas fa-user-clock" />}
            iconVariant="warning"
            trend={
              <>
                <i className="fas fa-arrow-down" /> 1.5%
              </>
            }
            trendDirection="down"
          />
        </div>
        <div className="col-sm-6 col-xl-3">
          <StatCard
            value="8"
            label="New Hires (This Month)"
            icon={<i className="fas fa-user-plus" />}
            iconVariant="info"
            trend={
              <>
                <i className="fas fa-arrow-up" /> 8
              </>
            }
            trendDirection="up"
          />
        </div>
      </div>

      <div className="row g-3 gap-section">
        <div className="col-lg-8">
          <ContentCard
            className="h-100"
            title={
              <>
                <i className="fas fa-chart-column me-2 text-primary-custom" />
                Salary Expense Overview
              </>
            }
            headerActions={
              <select className="form-select form-select-sm" style={{ width: 'auto' }}>
                <option>Last 6 Months</option>
                <option>Last 12 Months</option>
                <option>This Year</option>
              </select>
            }
          >
            <div className="chart-container">
              <canvas ref={salaryRef} id="salaryExpenseChart" />
            </div>
          </ContentCard>
        </div>
        <div className="col-lg-4">
          <ContentCard className="h-100" title={<><i className="fas fa-money-check-dollar me-2 text-primary-custom" />Payroll Summary</>}>
            <div className="d-flex justify-content-between mb-3 pb-3 border-bottom">
              <span className="text-secondary">Gross Payroll</span>
              <strong>₹42,53,350</strong>
            </div>
            <div className="d-flex justify-content-between mb-3 pb-3 border-bottom">
              <span className="text-secondary">Total Deductions</span>
              <strong className="text-danger">-₹7,66,420</strong>
            </div>
            <div className="d-flex justify-content-between mb-3 pb-3 border-bottom">
              <span className="text-secondary">Net Payroll</span>
              <strong className="text-success">₹34,86,930</strong>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <span className="text-secondary">Employees Paid</span>
              <strong>245 / 248</strong>
            </div>
            <div className="progress mb-2" style={{ height: 8 }}>
              <div className="progress-bar bg-primary" style={{ width: '98.8%' }} />
            </div>
            <small className="text-muted">98.8% payroll completion for June 2026</small>
          </ContentCard>
        </div>
      </div>

      <div className="row g-3 gap-section">
        <div className="col-lg-4">
          <ContentCard className="h-100" title={<><i className="fas fa-calendar-check me-2 text-primary-custom" />Attendance Overview</>}>
            <div className="chart-container-sm">
              <canvas ref={attendanceRef} id="attendanceChart" />
            </div>
            <div className="row text-center mt-3 g-2">
              <div className="col-6">
                <div className="p-2 bg-light rounded">
                  <div className="fw-bold text-success">94.2%</div>
                  <small className="text-muted">Attendance Rate</small>
                </div>
              </div>
              <div className="col-6">
                <div className="p-2 bg-light rounded">
                  <div className="fw-bold">7.8 hrs</div>
                  <small className="text-muted">Avg. Hours</small>
                </div>
              </div>
            </div>
          </ContentCard>
        </div>
        <div className="col-lg-8">
          <ContentCard
            className="h-100"
            title={<><i className="fas fa-clock-rotate-left me-2 text-primary-custom" />Recent Activities</>}
            headerActions={<a href="#" className="btn btn-sm btn-link text-decoration-none">View All</a>}
          >
            <div className="activity-item">
              <div className="activity-dot blue" />
              <div className="flex-grow-1">
                <div className="fw-semibold small">Payroll batch #PR-2026-06 processed</div>
                <div className="text-muted small">245 payslips generated for June 2026 cycle</div>
                <div className="activity-time">2 hours ago · by Sneha Reddy</div>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-dot green" />
              <div className="flex-grow-1">
                <div className="fw-semibold small">New employee onboarded</div>
                <div className="text-muted small">Arjun Mehta joined Sales — Madhapur, Hyderabad</div>
                <div className="activity-time">5 hours ago · by HR Team</div>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-dot orange" />
              <div className="flex-grow-1">
                <div className="fw-semibold small">Leave request approved</div>
                <div className="text-muted small">Ananya Rao — Earned leave (Jun 15-20)</div>
                <div className="activity-time">Yesterday · by Rajesh Kumar</div>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-dot blue" />
              <div className="flex-grow-1">
                <div className="fw-semibold small">Tax configuration updated</div>
                <div className="text-muted small">Income tax slabs updated for FY 2026-27 (Telangana)</div>
                <div className="activity-time">2 days ago · by Finance Admin</div>
              </div>
            </div>
          </ContentCard>
        </div>
      </div>
    </>
  )
}
