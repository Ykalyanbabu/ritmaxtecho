import { ContentCard } from '@/shared/components/ContentCard'
import { PageHeader } from '@/shared/components/PageHeader'

const upcomingHolidays = [
  { name: 'Telangana Formation Day', date: '2 June 2026', type: 'State Holiday (Telangana)' },
  { name: 'Independence Day', date: '15 August 2026', type: 'National Holiday' },
  { name: 'Gandhi Jayanti', date: '2 October 2026', type: 'National Holiday' },
  { name: 'Diwali', date: '8 November 2026', type: 'Festival Holiday' },
  { name: 'Bonalu', date: 'Jul 2026', type: 'Telangana Regional Festival' },
]

export function HolidayCalendarPage() {
  return (
    <>
      <PageHeader
        title="Holiday Calendar"
        subtitle="National, state (Telangana), and company holidays for 2026 — Hyderabad office."
        className="justify-content-between"
        actions={
          <button type="button" className="btn btn-primary">
            <i className="fas fa-plus me-1" /> Add Holiday
          </button>
        }
      />

      <div className="row g-3">
        <div className="col-lg-7">
          <ContentCard
            title="June 2026"
            headerActions={
              <div className="btn-group btn-group-sm">
                <button type="button" className="btn btn-light-custom">
                  <i className="fas fa-chevron-left" />
                </button>
                <button type="button" className="btn btn-light-custom">
                  <i className="fas fa-chevron-right" />
                </button>
              </div>
            }
          >
            <div className="calendar-grid">
              <div className="calendar-day-header">Sun</div>
              <div className="calendar-day-header">Mon</div>
              <div className="calendar-day-header">Tue</div>
              <div className="calendar-day-header">Wed</div>
              <div className="calendar-day-header">Thu</div>
              <div className="calendar-day-header">Fri</div>
              <div className="calendar-day-header">Sat</div>
              <div className="calendar-day other-month">31</div>
              <div className="calendar-day">1</div>
              <div className="calendar-day holiday" title="Telangana Formation Day">
                2
              </div>
              <div className="calendar-day">3</div>
              <div className="calendar-day">4</div>
              <div className="calendar-day">5</div>
              <div className="calendar-day weekend">6</div>
              <div className="calendar-day weekend">7</div>
              <div className="calendar-day">8</div>
              <div className="calendar-day">9</div>
              <div className="calendar-day">10</div>
              <div className="calendar-day today">11</div>
              <div className="calendar-day">12</div>
              <div className="calendar-day">13</div>
              <div className="calendar-day weekend">14</div>
              <div className="calendar-day weekend">15</div>
              <div className="calendar-day">16</div>
              <div className="calendar-day">17</div>
              <div className="calendar-day">18</div>
              <div className="calendar-day">19</div>
              <div className="calendar-day">20</div>
              <div className="calendar-day">21</div>
              <div className="calendar-day weekend">22</div>
              <div className="calendar-day weekend">23</div>
              <div className="calendar-day">24</div>
              <div className="calendar-day">25</div>
              <div className="calendar-day">26</div>
              <div className="calendar-day">27</div>
              <div className="calendar-day">28</div>
              <div className="calendar-day weekend">29</div>
              <div className="calendar-day weekend">30</div>
            </div>
            <div className="d-flex gap-3 mt-3 small">
              <span>
                <span
                  className="d-inline-block rounded"
                  style={{ width: 12, height: 12, background: 'var(--primary-subtle)' }}
                />{' '}
                Today
              </span>
              <span>
                <span
                  className="d-inline-block rounded"
                  style={{ width: 12, height: 12, background: 'var(--danger-bg)' }}
                />{' '}
                Holiday
              </span>
            </div>
          </ContentCard>
        </div>
        <div className="col-lg-5">
          <ContentCard title="Upcoming Holidays">
            {upcomingHolidays.map((holiday) => (
              <div key={holiday.name} className="activity-item">
                <div className="activity-dot orange" />
                <div>
                  <div className="fw-semibold small">{holiday.name}</div>
                  <div className="text-muted small">
                    {holiday.date} · {holiday.type}
                  </div>
                </div>
              </div>
            ))}
          </ContentCard>
        </div>
      </div>
    </>
  )
}
