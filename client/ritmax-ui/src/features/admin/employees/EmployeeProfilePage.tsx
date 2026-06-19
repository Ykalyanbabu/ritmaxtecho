import { ContentCard } from '@/shared/components/ContentCard'
import { StatusBadge } from '@/shared/components/StatusBadge'

export function EmployeeProfilePage() {
  return (
    <>
      <div className="profile-header">
        <div className="d-flex flex-wrap align-items-center gap-4">
          <div className="profile-avatar-lg">PS</div>
          <div className="flex-grow-1">
            <h2 className="mb-1">Priya Sharma</h2>
            <p className="mb-2 opacity-75">Senior Developer · Engineering · HITEC City, Hyderabad</p>
            <div className="d-flex flex-wrap gap-2">
              <span className="badge bg-light text-dark">EMP-001</span>
              <span className="badge bg-success">Active</span>
              <span className="badge bg-light text-dark">Full-time</span>
            </div>
          </div>
          <div className="d-flex gap-2">
            <button type="button" className="btn btn-light btn-sm">
              <i className="fas fa-pen me-1" /> Edit
            </button>
            <button type="button" className="btn btn-outline-light btn-sm">
              <i className="fas fa-envelope me-1" /> Email
            </button>
          </div>
        </div>
      </div>

      <div className="row g-3">
        <div className="col-lg-4">
          <ContentCard className="mb-3" title="Contact Information">
            <div className="info-list">
              <div className="info-item">
                <span className="info-label">Email</span>
                <span className="info-value">priya.s@payrollpro.in</span>
              </div>
              <div className="info-item">
                <span className="info-label">Mobile</span>
                <span className="info-value">+91 98765 43210</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location</span>
                <span className="info-value">Madhapur, Hyderabad, Telangana 500081</span>
              </div>
              <div className="info-item">
                <span className="info-label">Date of Birth</span>
                <span className="info-value">15 Mar 1990</span>
              </div>
            </div>
          </ContentCard>
          <ContentCard title="Employment Info">
            <div className="info-list">
              <div className="info-item">
                <span className="info-label">Join Date</span>
                <span className="info-value">10 Jan 2022</span>
              </div>
              <div className="info-item">
                <span className="info-label">Manager</span>
                <span className="info-value">Rajesh Kumar</span>
              </div>
              <div className="info-item">
                <span className="info-label">Base Salary</span>
                <span className="info-value">₹85,000/mo</span>
              </div>
              <div className="info-item">
                <span className="info-label">Pay Frequency</span>
                <span className="info-value">Monthly</span>
              </div>
            </div>
          </ContentCard>
        </div>
        <div className="col-lg-8">
          <ul className="nav nav-tabs mb-3" role="tablist">
            <li className="nav-item">
              <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#overview" type="button">
                Overview
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" data-bs-toggle="tab" data-bs-target="#payroll-tab" type="button">
                Payroll History
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" data-bs-toggle="tab" data-bs-target="#attendance-tab" type="button">
                Attendance
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" data-bs-toggle="tab" data-bs-target="#documents-tab" type="button">
                Documents
              </button>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane fade show active" id="overview">
              <ContentCard>
                <h6 className="form-section-title">About</h6>
                <p className="text-secondary">
                  Experienced full-stack developer with 8+ years in enterprise software. Leads the payments
                  module team and mentors junior developers.
                </p>
                <div className="row g-3 mt-2">
                  <div className="col-md-4">
                    <div className="p-3 bg-light rounded text-center">
                      <div className="fw-bold text-primary">96%</div>
                      <small className="text-muted">Attendance</small>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="p-3 bg-light rounded text-center">
                      <div className="fw-bold text-success">12</div>
                      <small className="text-muted">Leave Balance</small>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="p-3 bg-light rounded text-center">
                      <div className="fw-bold">24</div>
                      <small className="text-muted">Payslips</small>
                    </div>
                  </div>
                </div>
              </ContentCard>
            </div>
            <div className="tab-pane fade" id="payroll-tab">
              <ContentCard>
                <table className="data-table table table-sm">
                  <thead>
                    <tr>
                      <th>Period</th>
                      <th>Gross</th>
                      <th>Deductions</th>
                      <th>Net</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>May 2026</td>
                      <td>₹85,000</td>
                      <td>₹12,750</td>
                      <td>₹72,250</td>
                      <td>
                        <StatusBadge status="active">Paid</StatusBadge>
                      </td>
                    </tr>
                    <tr>
                      <td>Apr 2026</td>
                      <td>₹85,000</td>
                      <td>₹12,750</td>
                      <td>₹72,250</td>
                      <td>
                        <StatusBadge status="active">Paid</StatusBadge>
                      </td>
                    </tr>
                    <tr>
                      <td>Mar 2026</td>
                      <td>₹85,000</td>
                      <td>₹12,750</td>
                      <td>₹72,250</td>
                      <td>
                        <StatusBadge status="active">Paid</StatusBadge>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </ContentCard>
            </div>
            <div className="tab-pane fade" id="attendance-tab">
              <ContentCard>
                <p className="text-secondary mb-3">
                  June 2026 attendance summary: 18 days present, 1 day absent, 1 day on leave.
                </p>
                <div className="progress mb-2" style={{ height: 10 }}>
                  <div className="progress-bar bg-success" style={{ width: '90%' }} />
                </div>
                <small className="text-muted">90% attendance this month</small>
              </ContentCard>
            </div>
            <div className="tab-pane fade" id="documents-tab">
              <ContentCard
                title="Employee Documents"
                headerActions={
                  <button type="button" className="btn btn-primary btn-sm">
                    <i className="fas fa-upload me-1" /> Upload
                  </button>
                }
              >
                <div className="document-item">
                  <div className="document-icon">
                    <i className="fas fa-file-pdf" />
                  </div>
                  <div className="flex-grow-1">
                    <div className="fw-semibold small">Offer Letter.pdf</div>
                    <small className="text-muted">Uploaded Jan 10, 2022 · 245 KB</small>
                  </div>
                  <button type="button" className="btn btn-sm btn-light-custom">
                    <i className="fas fa-download" />
                  </button>
                </div>
                <div className="document-item">
                  <div className="document-icon">
                    <i className="fas fa-file-pdf" />
                  </div>
                  <div className="flex-grow-1">
                    <div className="fw-semibold small">ID Proof.pdf</div>
                    <small className="text-muted">Uploaded Jan 10, 2022 · 180 KB</small>
                  </div>
                  <button type="button" className="btn btn-sm btn-light-custom">
                    <i className="fas fa-download" />
                  </button>
                </div>
                <div className="document-item">
                  <div className="document-icon">
                    <i className="fas fa-file-pdf" />
                  </div>
                  <div className="flex-grow-1">
                    <div className="fw-semibold small">Employment Contract.pdf</div>
                    <small className="text-muted">Uploaded Jan 10, 2022 · 512 KB</small>
                  </div>
                  <button type="button" className="btn btn-sm btn-light-custom">
                    <i className="fas fa-download" />
                  </button>
                </div>
                <div className="document-item">
                  <div
                    className="document-icon"
                    style={{ background: 'var(--primary-subtle)', color: 'var(--primary)' }}
                  >
                    <i className="fas fa-file-word" />
                  </div>
                  <div className="flex-grow-1">
                    <div className="fw-semibold small">NDA Agreement.docx</div>
                    <small className="text-muted">Uploaded Jan 10, 2022 · 98 KB</small>
                  </div>
                  <button type="button" className="btn btn-sm btn-light-custom">
                    <i className="fas fa-download" />
                  </button>
                </div>
              </ContentCard>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
