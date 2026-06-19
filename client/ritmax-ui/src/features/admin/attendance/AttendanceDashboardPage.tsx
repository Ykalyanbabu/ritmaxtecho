import { ContentCard } from '@/shared/components/ContentCard'
import { PageHeader } from '@/shared/components/PageHeader'
export function AttendanceDashboardPage() {
  return (
    <>
      <PageHeader
        title="Attendance Dashboard"
        subtitle="Real-time attendance overview for 11 June 2026 — Hyderabad office (IST)."
      />

      <div className="row g-3 gap-section">
        <div className="col-sm-6 col-xl-3">
          <div className="stat-card">
            <div className="stat-card-icon success mb-3">
              <i className="fas fa-user-check" />
            </div>
            <div className="stat-card-value">215</div>
            <div className="stat-card-label">Present Today</div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3">
          <div className="stat-card">
            <div className="stat-card-icon danger mb-3">
              <i className="fas fa-user-xmark" />
            </div>
            <div className="stat-card-value">8</div>
            <div className="stat-card-label">Absent</div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3">
          <div className="stat-card">
            <div className="stat-card-icon warning mb-3">
              <i className="fas fa-umbrella-beach" />
            </div>
            <div className="stat-card-value">12</div>
            <div className="stat-card-label">On Leave</div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3">
          <div className="stat-card">
            <div className="stat-card-icon primary mb-3">
              <i className="fas fa-house-laptop" />
            </div>
            <div className="stat-card-value">13</div>
            <div className="stat-card-label">Remote</div>
          </div>
        </div>
      </div>

      <div className="row g-3">
        <div className="col-lg-8">
          <ContentCard title="Weekly Attendance Trend">
            <div className="chart-container">
              <canvas id="leaveChart" />
            </div>
          </ContentCard>
        </div>
        <div className="col-lg-4">
          <ContentCard title="Today's Breakdown">
            <div className="chart-container">
              <canvas id="attendanceChart" />
            </div>
          </ContentCard>
        </div>
      </div>
    </>
  )
}
