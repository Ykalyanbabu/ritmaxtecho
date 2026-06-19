import { ContentCard } from '@/shared/components/ContentCard'
import { PageHeader } from '@/shared/components/PageHeader'

export function PayrollCalculationPage() {
  return (
    <>
      <PageHeader
        title="Salary Calculation"
        subtitle="Calculate salary components, allowances, and deductions."
      />

      <div className="row g-3">
        <div className="col-lg-5">
          <ContentCard title="Calculation Input">
            <div className="mb-3">
              <label className="form-label">Employee</label>
              <select className="form-select">
                <option>Priya Sharma (EMP-001)</option>
                <option>Rahul Reddy (EMP-002)</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Base Salary</label>
              <div className="input-group">
                <span className="input-group-text">₹</span>
                <input type="number" className="form-control" defaultValue={85000} />
              </div>
            </div>
            <h6 className="form-section-title mt-4">Earnings</h6>
            <div className="row g-2 mb-2">
              <div className="col-7">
                <label className="form-label small">Housing Allowance</label>
              </div>
              <div className="col-5">
                <input type="number" className="form-control form-control-sm" defaultValue={5000} />
              </div>
            </div>
            <div className="row g-2 mb-2">
              <div className="col-7">
                <label className="form-label small">Transport Allowance</label>
              </div>
              <div className="col-5">
                <input type="number" className="form-control form-control-sm" defaultValue={2000} />
              </div>
            </div>
            <div className="row g-2 mb-3">
              <div className="col-7">
                <label className="form-label small">Performance Bonus</label>
              </div>
              <div className="col-5">
                <input type="number" className="form-control form-control-sm" defaultValue={10000} />
              </div>
            </div>
            <h6 className="form-section-title">Deductions</h6>
            <div className="row g-2 mb-2">
              <div className="col-7">
                <label className="form-label small">Income Tax (TDS)</label>
              </div>
              <div className="col-5">
                <input type="number" className="form-control form-control-sm" defaultValue={8500} />
              </div>
            </div>
            <div className="row g-2 mb-2">
              <div className="col-7">
                <label className="form-label small">Provident Fund (PF)</label>
              </div>
              <div className="col-5">
                <input type="number" className="form-control form-control-sm" defaultValue={5270} />
              </div>
            </div>
            <div className="row g-2 mb-3">
              <div className="col-7">
                <label className="form-label small">ESI / Insurance</label>
              </div>
              <div className="col-5">
                <input type="number" className="form-control form-control-sm" defaultValue={1530} />
              </div>
            </div>
            <button type="button" className="btn btn-primary w-100">
              <i className="fas fa-calculator me-1" /> Calculate
            </button>
          </ContentCard>
        </div>
        <div className="col-lg-7">
          <ContentCard title="Calculation Result">
            <div className="info-list mb-4">
              <div className="info-item">
                <span className="info-label">Base Salary</span>
                <span className="info-value">₹85,000.00</span>
              </div>
              <div className="info-item">
                <span className="info-label">Total Earnings</span>
                <span className="info-value text-success">+₹17,000.00</span>
              </div>
              <div className="info-item">
                <span className="info-label">Gross Salary</span>
                <span className="info-value fw-bold">₹1,02,000.00</span>
              </div>
              <div className="info-item">
                <span className="info-label">Total Deductions</span>
                <span className="info-value text-danger">-₹15,300.00</span>
              </div>
              <div className="info-item">
                <span className="info-label">Net Salary</span>
                <span className="info-value fw-bold text-primary" style={{ fontSize: '1.25rem' }}>
                  ₹86,700.00
                </span>
              </div>
            </div>
            <div className="chart-container-sm">
              <canvas id="payrollTrendChart" />
            </div>
          </ContentCard>
        </div>
      </div>
    </>
  )
}
