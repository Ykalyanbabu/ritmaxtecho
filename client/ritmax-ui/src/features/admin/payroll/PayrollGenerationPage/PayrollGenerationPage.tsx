import { ContentCard } from '@/shared/components/ContentCard'
import { PageHeader } from '@/shared/components/PageHeader'
import { StatCard } from '@/shared/components/StatCard'
import { StatusBadge } from '@/shared/components/StatusBadge'

const previewRows = [
  { employee: 'Priya Sharma', department: 'Engineering', gross: '₹85,000', deductions: '₹12,750', net: '₹72,250' },
  { employee: 'Rahul Reddy', department: 'Sales', gross: '₹62,000', deductions: '₹9,300', net: '₹52,700' },
  { employee: 'Ananya Rao', department: 'Marketing', gross: '₹71,000', deductions: '₹10,650', net: '₹60,350' },
]

export function PayrollGenerationPage() {
  return (
    <>
      <PageHeader
        title="Payroll Generation"
        subtitle="Generate payroll for the selected pay period."
      />

      <div className="row g-3">
        <div className="col-lg-4">
          <ContentCard title="Pay Period">
            <div className="mb-3">
              <label className="form-label">Pay Period</label>
              <select className="form-select">
                <option>June 2026</option>
                <option>May 2026</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Pay Date</label>
              <input type="date" className="form-control" defaultValue="2026-06-30" />
            </div>
            <div className="mb-3">
              <label className="form-label">Department</label>
              <select className="form-select">
                <option>All Departments</option>
                <option>Engineering</option>
                <option>Sales</option>
              </select>
            </div>
            <button type="button" className="btn btn-primary w-100">
              <i className="fas fa-play me-1" /> Generate Payroll
            </button>
          </ContentCard>
        </div>
        <div className="col-lg-8">
          <div className="row g-3 mb-3">
            <div className="col-md-4">
              <StatCard value="248" label="Employees" textCenter />
            </div>
            <div className="col-md-4">
              <StatCard value="₹4.25 Cr" label="Gross Amount" textCenter />
            </div>
            <div className="col-md-4">
              <StatCard value="₹3.49 Cr" label="Net Amount" textCenter />
            </div>
          </div>
          <ContentCard
            title="Generation Preview"
            headerActions={<StatusBadge status="processing">Ready to Process</StatusBadge>}
          >
            <div className="table-responsive">
              <table className="data-table table table-sm">
                <thead>
                  <tr>
                    <th>Employee</th>
                    <th>Department</th>
                    <th>Gross</th>
                    <th>Deductions</th>
                    <th>Net Pay</th>
                  </tr>
                </thead>
                <tbody>
                  {previewRows.map((row) => (
                    <tr key={row.employee}>
                      <td>{row.employee}</td>
                      <td>{row.department}</td>
                      <td>{row.gross}</td>
                      <td>{row.deductions}</td>
                      <td>{row.net}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ContentCard>
        </div>
      </div>
    </>
  )
}
