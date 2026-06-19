import { ContentCard } from '@/shared/components/ContentCard'
import { PageHeader } from '@/shared/components/PageHeader'

const deductions = [
  { employee: 'Priya Sharma', tds: '₹8,500', profTax: '₹200', pf: '₹5,270', esi: '₹780', total: '₹14,750' },
  { employee: 'Rahul Reddy', tds: '₹6,200', profTax: '₹200', pf: '₹3,840', esi: '₹570', total: '₹10,810' },
  { employee: 'Ananya Rao', tds: '₹7,100', profTax: '₹200', pf: '₹4,400', esi: '₹650', total: '₹12,350' },
]

export function TaxDeductionsPage() {
  return (
    <>
      <PageHeader
        title="Tax Deduction Reports"
        subtitle="View employee-level tax deductions and withholdings."
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

      <ContentCard bodyClassName="">
        <div data-table>
          <div className="table-toolbar">
            <div className="table-search">
              <i className="fas fa-search" />
              <input type="search" data-table-search placeholder="Search employees..." />
            </div>
            <select className="form-select form-select-sm" style={{ width: 'auto' }}>
              <option>June 2026</option>
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
                    TDS <i className="fas fa-sort sort-icon" />
                  </th>
                  <th data-sort>
                    Prof. Tax <i className="fas fa-sort sort-icon" />
                  </th>
                  <th data-sort>
                    PF <i className="fas fa-sort sort-icon" />
                  </th>
                  <th data-sort>
                    ESI <i className="fas fa-sort sort-icon" />
                  </th>
                  <th data-sort>
                    Total <i className="fas fa-sort sort-icon" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {deductions.map((row) => (
                  <tr key={row.employee}>
                    <td>{row.employee}</td>
                    <td>{row.tds}</td>
                    <td>{row.profTax}</td>
                    <td>{row.pf}</td>
                    <td>{row.esi}</td>
                    <td>
                      <strong>{row.total}</strong>
                    </td>
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
