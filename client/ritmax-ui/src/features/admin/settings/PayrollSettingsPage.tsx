import { ContentCard } from '@/shared/components/ContentCard'
import { PageHeader } from '@/shared/components/PageHeader'

export function PayrollSettingsPage() {
  return (
    <>
      <PageHeader
        title="Payroll Settings"
        subtitle="Configure pay cycles, currencies, and processing rules."
      />

      <ContentCard>
        <form>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Pay Frequency</label>
              <select className="form-select">
                <option>Monthly</option>
                <option>Bi-weekly</option>
                <option>Weekly</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label">Currency</label>
              <select className="form-select" defaultValue="INR (₹)">
                <option>INR (₹)</option>
                <option>USD ($)</option>
                <option>EUR (€)</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label">Pay Day</label>
              <select className="form-select">
                <option>Last day of month</option>
                <option>15th of month</option>
                <option>Custom</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label">Financial Year Start (India)</label>
              <input type="date" className="form-control" defaultValue="2026-04-01" />
            </div>
            <div className="col-12">
              <h6 className="form-section-title">Processing Options</h6>
            </div>
            <div className="col-md-6">
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="autoProcess" defaultChecked />
                <label className="form-check-label" htmlFor="autoProcess">
                  Auto-process recurring payroll
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="overtime" defaultChecked />
                <label className="form-check-label" htmlFor="overtime">
                  Include overtime calculations
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="proRata" />
                <label className="form-check-label" htmlFor="proRata">
                  Pro-rata for new joiners
                </label>
              </div>
            </div>
            <div className="col-12">
              <button type="button" className="btn btn-primary">
                <i className="fas fa-save me-1" /> Save Settings
              </button>
            </div>
          </div>
        </form>
      </ContentCard>
    </>
  )
}
