import { ContentCard } from '@/shared/components/ContentCard'
import { PageHeader } from '@/shared/components/PageHeader'
import { StatusBadge } from '@/shared/components/StatusBadge'
import { downloadAllDemoPayslips, downloadPayslip } from '@/shared/hooks/usePayslipPdf'

const payslipRows = [
  { employee: 'Priya Sharma', period: 'June 2026', netPay: '₹72,250' },
  { employee: 'Rahul Reddy', period: 'June 2026', netPay: '₹52,700' },
  { employee: 'Ananya Rao', period: 'June 2026', netPay: '₹60,350' },
]

export function PayslipPage() {
  return (
    <>
      <PageHeader
        title="Payslip Generation"
        subtitle="Generate and distribute employee payslips."
        actions={
          <button type="button" className="btn btn-primary" id="downloadAllPayslips" onClick={downloadAllDemoPayslips}>
            <i className="fas fa-file-pdf me-1" /> Download All (PDF)
          </button>
        }
      />

      <ContentCard className="mb-3" bodyClassName="">
        <div data-table>
          <div className="table-toolbar">
            <div className="table-search">
              <i className="fas fa-search" />
              <input type="search" data-table-search placeholder="Search payslips..." />
            </div>
            <select className="form-select form-select-sm" style={{ width: 'auto' }}>
              <option>June 2026</option>
              <option>May 2026</option>
            </select>
          </div>
          <div className="table-responsive">
            <table className="data-table table">
              <thead>
                <tr>
                  <th data-sort>
                    Employee <i className="fas fa-sort sort-icon" />
                  </th>
                  <th data-sort>
                    Period <i className="fas fa-sort sort-icon" />
                  </th>
                  <th data-sort>
                    Net Pay <i className="fas fa-sort sort-icon" />
                  </th>
                  <th data-sort>
                    Status <i className="fas fa-sort sort-icon" />
                  </th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {payslipRows.map((payslip) => (
                  <tr key={payslip.employee}>
                    <td>{payslip.employee}</td>
                    <td>{payslip.period}</td>
                    <td>{payslip.netPay}</td>
                    <td>
                      <StatusBadge status="active">Generated</StatusBadge>
                    </td>
                    <td>
                      <button type="button" className="btn btn-sm btn-outline-primary">
                        <i className="fas fa-eye me-1" />
                        View
                      </button>{' '}
                      <button
                        type="button"
                        className="btn btn-sm btn-light-custom"
                        title="Download PDF"
                        onClick={() => downloadPayslip(payslip.employee)}
                      >
                        <i className="fas fa-download" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </ContentCard>

      <ContentCard title="Payslip Preview">
        <div className="border rounded p-4" style={{ maxWidth: 600 }}>
          <div className="text-center mb-4">
            <h5 className="mb-0">RITMAX Pvt. Ltd.</h5>
            <small className="text-muted">HITEC City, Hyderabad, Telangana · Payslip for June 2026</small>
          </div>
          <div className="row mb-3">
            <div className="col-6">
              <strong>Employee:</strong> Priya Sharma
              <br />
              <strong>ID:</strong> EMP-001
              <br />
              <strong>UAN:</strong> 101234567890
            </div>
            <div className="col-6 text-end">
              <strong>Pay Date:</strong> 30 Jun 2026
              <br />
              <strong>Department:</strong> Engineering
              <br />
              <strong>Location:</strong> Hyderabad
            </div>
          </div>
          <table className="table table-sm">
            <thead>
              <tr>
                <th>Earnings</th>
                <th className="text-end">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Basic Salary</td>
                <td className="text-end">₹75,000</td>
              </tr>
              <tr>
                <td>HRA</td>
                <td className="text-end">₹7,500</td>
              </tr>
              <tr>
                <td>Special Allowance</td>
                <td className="text-end">₹2,500</td>
              </tr>
            </tbody>
          </table>
          <table className="table table-sm">
            <thead>
              <tr>
                <th>Deductions</th>
                <th className="text-end">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PF</td>
                <td className="text-end">₹5,270</td>
              </tr>
              <tr>
                <td>ESI</td>
                <td className="text-end">₹780</td>
              </tr>
              <tr>
                <td>Professional Tax</td>
                <td className="text-end">₹200</td>
              </tr>
              <tr>
                <td>TDS</td>
                <td className="text-end">₹6,500</td>
              </tr>
            </tbody>
          </table>
          <div className="d-flex justify-content-between fw-bold border-top pt-2">
            <span>Net Pay</span>
            <span className="text-primary">₹72,250</span>
          </div>
          <div className="mt-3 text-end">
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => downloadPayslip('Priya Sharma')}
            >
              <i className="fas fa-download me-1" /> Download Sample PDF
            </button>
          </div>
        </div>
      </ContentCard>
    </>
  )
}
