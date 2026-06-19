import { ContentCard } from '@/shared/components/ContentCard'
import { PageHeader } from '@/shared/components/PageHeader'

export function PayrollBulkPage() {
  return (
    <>
      <PageHeader
        title="Bulk RITMAXcessing"
        subtitle="Process payroll for multiple employees in a single batch."
      />

      <div className="row g-3">
        <div className="col-lg-4">
          <ContentCard title="Batch Configuration">
            <div className="mb-3">
              <label className="form-label">Batch Name</label>
              <input type="text" className="form-control" defaultValue="PR-BATCH-2026-06" />
            </div>
            <div className="mb-3">
              <label className="form-label">Pay Period</label>
              <select className="form-select">
                <option>June 2026</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Select Employees</label>
              <select className="form-select" multiple size={5} defaultValue={['All Active (248)']}>
                <option>All Active (248)</option>
                <option>Engineering (85)</option>
                <option>Sales (42)</option>
                <option>Marketing (28)</option>
              </select>
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="autoPayslip" defaultChecked />
              <label className="form-check-label" htmlFor="autoPayslip">
                Auto-generate payslips
              </label>
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="emailNotify" defaultChecked />
              <label className="form-check-label" htmlFor="emailNotify">
                Email notifications
              </label>
            </div>
            <button type="button" className="btn btn-primary w-100">
              <i className="fas fa-layer-group me-1" /> Start Bulk Processing
            </button>
          </ContentCard>
        </div>
        <div className="col-lg-8">
          <ContentCard className="mb-3" title="Processing Status">
            <div className="mb-3">
              <div className="d-flex justify-content-between mb-1">
                <span>Overall Progress</span>
                <span className="fw-semibold">78%</span>
              </div>
              <div className="progress" style={{ height: 12 }}>
                <div
                  className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                  style={{ width: '78%' }}
                />
              </div>
            </div>
            <div className="row g-3 text-center">
              <div className="col-4">
                <div className="p-3 bg-light rounded">
                  <div className="fw-bold text-success">193</div>
                  <small className="text-muted">Processed</small>
                </div>
              </div>
              <div className="col-4">
                <div className="p-3 bg-light rounded">
                  <div className="fw-bold text-warning">52</div>
                  <small className="text-muted">In Queue</small>
                </div>
              </div>
              <div className="col-4">
                <div className="p-3 bg-light rounded">
                  <div className="fw-bold text-danger">3</div>
                  <small className="text-muted">Failed</small>
                </div>
              </div>
            </div>
          </ContentCard>
          <ContentCard title="Batch Log">
            <div style={{ maxHeight: 300, overflowY: 'auto' }}>
            <div className="activity-item">
              <div className="activity-dot green" />
              <div>
                <div className="small">EMP-193 processed successfully</div>
                <div className="activity-time">Just now</div>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-dot green" />
              <div>
                <div className="small">EMP-192 processed successfully</div>
                <div className="activity-time">2 sec ago</div>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-dot orange" />
              <div>
                <div className="small">EMP-045 failed - Missing bank details</div>
                <div className="activity-time">5 sec ago</div>
              </div>
            </div>
            </div>
          </ContentCard>
        </div>
      </div>
    </>
  )
}
