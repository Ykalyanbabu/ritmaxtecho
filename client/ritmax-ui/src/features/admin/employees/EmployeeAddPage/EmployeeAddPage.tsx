import { Link } from 'react-router-dom'
import { ContentCard } from '@/shared/components/ContentCard'
import { PageHeader } from '@/shared/components/PageHeader'

export function EmployeeAddPage() {
  return (
    <>
      <PageHeader
        title="Add New Employee"
        subtitle="Fill in the employee details to onboard a new team member."
      />

      <form className="needs-validation" data-validate noValidate>
        <div className="row g-3">
          <div className="col-lg-8">
            <ContentCard className="mb-3" title="Personal Information">
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">
                    First Name <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" required placeholder="Enter first name" />
                  <div className="invalid-feedback">First name is required.</div>
                </div>
                <div className="col-md-6">
                  <label className="form-label">
                    Last Name <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" required placeholder="Enter last name" />
                  <div className="invalid-feedback">Last name is required.</div>
                </div>
                <div className="col-md-6">
                  <label className="form-label">
                    Email <span className="text-danger">*</span>
                  </label>
                  <input type="email" className="form-control" required placeholder="name@payrollpro.in" />
                  <div className="invalid-feedback">Valid email is required.</div>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Phone</label>
                  <input type="tel" className="form-control" placeholder="+91 98765 43210" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Date of Birth</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Gender</label>
                  <select className="form-select" defaultValue="">
                    <option value="">Select</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="form-label">City</label>
                  <input type="text" className="form-control" placeholder="Hyderabad" defaultValue="Hyderabad" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">State</label>
                  <select className="form-select" defaultValue="Telangana">
                    <option>Telangana</option>
                    <option>Andhra Pradesh</option>
                    <option>Karnataka</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="form-label">PIN Code</label>
                  <input type="text" className="form-control" placeholder="500081" maxLength={6} />
                </div>
                <div className="col-12">
                  <label className="form-label">Address</label>
                  <textarea className="form-control" rows={2} placeholder="House no., street, area, city, state, PIN code" />
                </div>
              </div>
            </ContentCard>

            <ContentCard className="mb-3" title="Employment Details">
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Employee ID</label>
                  <input type="text" className="form-control" defaultValue="EMP-249" readOnly />
                </div>
                <div className="col-md-6">
                  <label className="form-label">
                    Join Date <span className="text-danger">*</span>
                  </label>
                  <input type="date" className="form-control" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">
                    Department <span className="text-danger">*</span>
                  </label>
                  <select className="form-select" required defaultValue="">
                    <option value="">Select department</option>
                    <option>Engineering</option>
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>HR</option>
                    <option>Finance</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">
                    Designation <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" required placeholder="Job title" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Employment Type</label>
                  <select className="form-select" defaultValue="Full-time">
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                    <option>Intern</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Reporting Manager</label>
                  <select className="form-select" defaultValue="">
                    <option value="">Select manager</option>
                    <option>Rajesh Kumar</option>
                    <option>Sneha Reddy</option>
                  </select>
                </div>
              </div>
            </ContentCard>

            <ContentCard title="Compensation & Bank Details">
              <div className="row g-3">
                <div className="col-md-4">
                  <label className="form-label">
                    Base Salary <span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">₹</span>
                    <input type="number" className="form-control" required placeholder="0.00" />
                  </div>
                </div>
                <div className="col-md-4">
                  <label className="form-label">Pay Frequency</label>
                  <select className="form-select" defaultValue="Monthly">
                    <option>Monthly</option>
                    <option>Bi-weekly</option>
                    <option>Weekly</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="form-label">PAN</label>
                  <input type="text" className="form-control" placeholder="ABCDE1234F" maxLength={10} />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Aadhaar (optional)</label>
                  <input type="text" className="form-control" placeholder="XXXX XXXX XXXX" maxLength={14} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Bank Name</label>
                  <input type="text" className="form-control" placeholder="e.g. HDFC Bank, SBI" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Account Number</label>
                  <input type="text" className="form-control" placeholder="Account number" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">IFSC Code</label>
                  <input type="text" className="form-control" placeholder="e.g. HDFC0001234" maxLength={11} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">UAN (PF)</label>
                  <input type="text" className="form-control" placeholder="12-digit UAN" />
                </div>
              </div>
            </ContentCard>
          </div>

          <div className="col-lg-4">
            <ContentCard className="mb-3" title="Profile Photo">
              <div className="text-center">
                <div
                  className="profile-avatar-lg mx-auto mb-3"
                  style={{
                    background: 'var(--primary-subtle)',
                    color: 'var(--primary)',
                    border: 'none',
                    width: 100,
                    height: 100,
                  }}
                >
                  <i className="fas fa-user fa-2x" />
                </div>
                <input type="file" className="form-control" accept="image/*" />
                <small className="text-muted d-block mt-2">JPG, PNG. Max 2MB.</small>
              </div>
            </ContentCard>
            <ContentCard className="mb-3" title="Documents">
              <label className="form-label">Upload Documents</label>
              <input type="file" className="form-control mb-2" multiple />
              <small className="text-muted">ID proof, offer letter, contracts, etc.</small>
            </ContentCard>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary">
                <i className="fas fa-check me-1" /> Save Employee
              </button>
              <Link to="/admin/employees" className="btn btn-light-custom">
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
