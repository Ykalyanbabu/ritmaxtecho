import { ContentCard } from '@/shared/components/ContentCard'
import { PageHeader } from '@/shared/components/PageHeader'

const taxTypes = [
  { type: 'Income Tax (TDS)', rate: '5-30%', amount: '₹15,14,335', employees: 248 },
  { type: 'Professional Tax', rate: '₹200/mo', amount: '₹7,81,860', employees: 248 },
  { type: 'Provident Fund (PF)', rate: '12%', amount: '₹9,61,140', employees: 248 },
]

export function TaxReportsPage() {
  return (
    <>
      <PageHeader
        title="Tax Reports"
        subtitle="Tax liability summaries and compliance reports."
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
        <div className="col-lg-5">
          <ContentCard title="Tax Distribution">
            <div className="chart-container">
              <canvas id="taxChart" />
            </div>
          </ContentCard>
        </div>
        <div className="col-lg-7">
          <ContentCard className="h-100" title="Q1 FY 2026-27 Tax Summary (Telangana)">
            <div className="info-list">
              <div className="info-item">
                <span className="info-label">Income Tax (TDS)</span>
                <span className="info-value">₹15,14,335</span>
              </div>
              <div className="info-item">
                <span className="info-label">Professional Tax</span>
                <span className="info-value">₹7,81,860</span>
              </div>
              <div className="info-item">
                <span className="info-label">Provident Fund (PF)</span>
                <span className="info-value">₹9,61,140</span>
              </div>
              <div className="info-item">
                <span className="info-label">ESI</span>
                <span className="info-value">₹6,51,550</span>
              </div>
              <div className="info-item">
                <span className="info-label fw-bold">Total Tax Liability</span>
                <span className="info-value fw-bold text-primary">₹39,08,885</span>
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
                    Tax Type <i className="fas fa-sort sort-icon" />
                  </th>
                  <th data-sort>
                    Rate <i className="fas fa-sort sort-icon" />
                  </th>
                  <th data-sort>
                    Amount <i className="fas fa-sort sort-icon" />
                  </th>
                  <th data-sort>
                    Employees <i className="fas fa-sort sort-icon" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {taxTypes.map((row) => (
                  <tr key={row.type}>
                    <td>{row.type}</td>
                    <td>{row.rate}</td>
                    <td>{row.amount}</td>
                    <td>{row.employees}</td>
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
