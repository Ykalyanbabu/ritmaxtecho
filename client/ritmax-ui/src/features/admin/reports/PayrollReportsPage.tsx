import { ContentCard } from '@/shared/components/ContentCard'
import { PageHeader } from '@/shared/components/PageHeader'

const monthlyData = [
  { month: 'June 2026', employees: 248, gross: '₹42,53,350', net: '₹34,86,930' },
  { month: 'May 2026', employees: 245, gross: '₹41,93,160', net: '₹34,40,350' },
  { month: 'April 2026', employees: 242, gross: '₹41,40,040', net: '₹33,96,360' },
]

export function PayrollReportsPage() {
  return (
    <>
      <PageHeader
        title="Payroll Reports"
        subtitle="Analyze payroll data and export reports."
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

      <ContentCard className="mb-3">
        <div className="row g-3 align-items-end">
          <div className="col-md-3">
            <label className="form-label">Report Type</label>
            <select className="form-select">
              <option>Payroll Summary</option>
              <option>Department Wise</option>
              <option>Employee Wise</option>
            </select>
          </div>
          <div className="col-md-3">
            <label className="form-label">From</label>
            <input type="date" className="form-control" defaultValue="2026-01-01" />
          </div>
          <div className="col-md-3">
            <label className="form-label">To</label>
            <input type="date" className="form-control" defaultValue="2026-06-30" />
          </div>
          <div className="col-md-3">
            <button type="button" className="btn btn-primary w-100">
              <i className="fas fa-chart-bar me-1" /> Generate
            </button>
          </div>
        </div>
      </ContentCard>

      <div className="row g-3 mb-3">
        <div className="col-lg-8">
          <ContentCard title="Payroll Trend">
            <div className="chart-container">
              <canvas id="payrollTrendChart" />
            </div>
          </ContentCard>
        </div>
        <div className="col-lg-4">
          <ContentCard className="h-100" title="Summary">
            <div className="info-list">
              <div className="info-item">
                <span className="info-label">Total Gross</span>
                <span className="info-value">₹23.82 Cr</span>
              </div>
              <div className="info-item">
                <span className="info-label">Total Deductions</span>
                <span className="info-value">₹4.28 Cr</span>
              </div>
              <div className="info-item">
                <span className="info-label">Total Net</span>
                <span className="info-value fw-bold">₹19.54 Cr</span>
              </div>
            </div>
          </ContentCard>
        </div>
      </div>

      <ContentCard bodyClassName="">
        <div data-table>
          <div className="table-responsive">
            <table className="data-table table">
              <thead>
                <tr>
                  <th data-sort>
                    Month <i className="fas fa-sort sort-icon" />
                  </th>
                  <th data-sort>
                    Employees <i className="fas fa-sort sort-icon" />
                  </th>
                  <th data-sort>
                    Gross <i className="fas fa-sort sort-icon" />
                  </th>
                  <th data-sort>
                    Net <i className="fas fa-sort sort-icon" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {monthlyData.map((row) => (
                  <tr key={row.month}>
                    <td>{row.month}</td>
                    <td>{row.employees}</td>
                    <td>{row.gross}</td>
                    <td>{row.net}</td>
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
