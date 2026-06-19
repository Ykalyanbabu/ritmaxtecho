import { ContentCard } from '@/shared/components/ContentCard'
import { PageHeader } from '@/shared/components/PageHeader'

const taxSlabs = [
  { slab: 1, rate: 'Nil', min: '₹0', max: '₹3,00,000' },
  { slab: 2, rate: '5%', min: '₹3,00,001', max: '₹7,00,000' },
  { slab: 3, rate: '10%', min: '₹7,00,001', max: '₹10,00,000' },
  { slab: 4, rate: '15%', min: '₹10,00,001', max: '₹12,00,000' },
  { slab: 5, rate: '20%', min: '₹12,00,001', max: '₹15,00,000' },
  { slab: 6, rate: '30%', min: '₹15,00,001', max: 'Above' },
]

export function TaxConfigPage() {
  return (
    <>
      <PageHeader
        title="Tax Configuration"
        subtitle="Configure income tax slabs, PF, ESI, and Telangana professional tax rules."
      />

      <div className="row g-3">
        <div className="col-lg-6">
          <ContentCard
            className="mb-3"
            title="Income Tax Slabs (New Regime)"
            headerActions={
              <button type="button" className="btn btn-sm btn-primary">
                <i className="fas fa-plus" />
              </button>
            }
          >
            <table className="data-table table table-sm">
              <thead>
                <tr>
                  <th>Slab</th>
                  <th>Rate</th>
                  <th>Min Income</th>
                  <th>Max Income</th>
                </tr>
              </thead>
              <tbody>
                {taxSlabs.map((row) => (
                  <tr key={row.slab}>
                    <td>{row.slab}</td>
                    <td>{row.rate}</td>
                    <td>{row.min}</td>
                    <td>{row.max}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ContentCard>
        </div>
        <div className="col-lg-6">
          <ContentCard className="mb-3" title="General Settings">
            <form>
              <div className="mb-3">
                <label className="form-label">Tax Year</label>
                <select className="form-select">
                  <option>2026</option>
                  <option>2025</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Tax Regime Default</label>
                <select className="form-select">
                  <option>New Regime</option>
                  <option>Old Regime</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">PF Rate (%)</label>
                <input type="number" className="form-control" defaultValue={12} step={0.1} />
              </div>
              <div className="mb-3">
                <label className="form-label">ESI Rate (%)</label>
                <input type="number" className="form-control" defaultValue={0.75} step={0.01} />
              </div>
              <div className="mb-3">
                <label className="form-label">Professional Tax (₹/month)</label>
                <input type="number" className="form-control" defaultValue={200} />
              </div>
              <button type="button" className="btn btn-primary">
                <i className="fas fa-save me-1" /> Save Configuration
              </button>
            </form>
          </ContentCard>
        </div>
      </div>
    </>
  )
}
