import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ContentCard } from '@/shared/components/ContentCard'
import { PageHeader } from '@/shared/components/PageHeader'
import type { CreateEmployeeRequest } from '@/shared/types/employee'
import { useEmployeeForm } from './useEmployeeForm'

type FormState = {
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: string
  gender: string
  city: string
  stateId: string
  pinCode: string
  address: string
  joinDate: string
  departmentId: string
  designation: string
  grade: string
  employmentType: string
  reportingManagerId: string
  baseSalary: string
  pan: string
  aadhaar: string
  uan: string
  pfNumber: string
  esiNumber: string
  bankName: string
  accountNumber: string
  ifscCode: string
}

const emptyForm: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  dateOfBirth: '',
  gender: '',
  city: '',
  stateId: '',
  pinCode: '',
  address: '',
  joinDate: '',
  departmentId: '',
  designation: '',
  grade: '',
  employmentType: '1',
  reportingManagerId: '',
  baseSalary: '',
  pan: '',
  aadhaar: '',
  uan: '',
  pfNumber: '',
  esiNumber: '',
  bankName: '',
  accountNumber: '',
  ifscCode: '',
}

function trimmed(value: string): string | null {
  const next = value.trim()
  return next.length > 0 ? next : null
}

function toRequest(form: FormState): CreateEmployeeRequest {
  const digitsOnly = (value: string) => value.replace(/\D/g, '')

  return {
    firstName: form.firstName.trim(),
    lastName: form.lastName.trim(),
    email: form.email.trim(),
    phone: trimmed(form.phone),
    dateOfBirth: form.dateOfBirth ? form.dateOfBirth : null,
    gender: form.gender ? Number(form.gender) : null,
    city: trimmed(form.city),
    stateId: form.stateId ? Number(form.stateId) : null,
    pinCode: digitsOnly(form.pinCode) ? Number(digitsOnly(form.pinCode)) : null,
    address: trimmed(form.address),
    joinDate: form.joinDate,
    departmentId: Number(form.departmentId),
    designation: form.designation.trim(),
    grade: trimmed(form.grade),
    employmentType: Number(form.employmentType),
    reportingManagerId: form.reportingManagerId ? Number(form.reportingManagerId) : null,
    baseSalary: form.baseSalary ? Number(form.baseSalary) : 0,
    pan: trimmed(form.pan),
    aadhaar: trimmed(form.aadhaar),
    uan: trimmed(form.uan),
    pfNumber: trimmed(form.pfNumber),
    esiNumber: trimmed(form.esiNumber),
    bankName: trimmed(form.bankName),
    accountNumber: trimmed(form.accountNumber),
    ifscCode: trimmed(form.ifscCode),
  }
}

export function EmployeeAddPage() {
  const navigate = useNavigate()
  const { options, loading, error, saving, submit } = useEmployeeForm()
  const [form, setForm] = useState<FormState>(emptyForm)
  const [feedback, setFeedback] = useState<{ type: 'success' | 'danger'; text: string } | null>(null)

  const update =
    (field: keyof FormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }))
    }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setFeedback(null)
    try {
      const created = await submit(toRequest(form))
      setFeedback({
        type: 'success',
        text: `Employee ${created.fullName} created. Employee ID: ${created.employeeCode}, Username: ${created.username}. Temporary password: Welcome@123.`,
      })
      setTimeout(() => navigate('/admin/employees'), 1200)
    } catch (err) {
      setFeedback({ type: 'danger', text: err instanceof Error ? err.message : 'Failed to add employee.' })
    }
  }

  if (loading) {
    return (
      <>
        <PageHeader title="Add New Employee" subtitle="Fill in the employee details to onboard a new team member." />
        <ContentCard>
          <div className="text-center text-muted py-5">
            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" />
            Loading…
          </div>
        </ContentCard>
      </>
    )
  }

  if (error) {
    return (
      <>
        <PageHeader title="Add New Employee" subtitle="Fill in the employee details to onboard a new team member." />
        <ContentCard>
          <div className="alert alert-danger mb-0" role="alert">
            {error}
          </div>
        </ContentCard>
      </>
    )
  }

  return (
    <>
      <PageHeader
        title="Add New Employee"
        subtitle="Fill in the employee details to onboard a new team member."
      />

      {feedback && (
        <div className={`alert alert-${feedback.type}`} role="alert">
          {feedback.text}
        </div>
      )}

      <form className="needs-validation" onSubmit={handleSubmit} noValidate>
        <div className="row g-3">
          <div className="col-lg-8">
            <ContentCard className="mb-3" title="Personal Information">
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">
                    First Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    placeholder="Enter first name"
                    value={form.firstName}
                    onChange={update('firstName')}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">
                    Last Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    placeholder="Enter last name"
                    value={form.lastName}
                    onChange={update('lastName')}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">
                    Email <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    required
                    placeholder="name@payrollpro.in"
                    value={form.email}
                    onChange={update('email')}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Username</label>
                  <input type="text" className="form-control" value="Auto-generated" readOnly />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={update('phone')}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Date of Birth</label>
                  <input type="date" className="form-control" value={form.dateOfBirth} onChange={update('dateOfBirth')} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Gender</label>
                  <select className="form-select" value={form.gender} onChange={update('gender')}>
                    <option value="">Select</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                    <option value="3">Other</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="form-label">City</label>
                  <input type="text" className="form-control" placeholder="Hyderabad" value={form.city} onChange={update('city')} />
                </div>
                <div className="col-md-4">
                  <label className="form-label">State</label>
                  <select className="form-select" value={form.stateId} onChange={update('stateId')}>
                    <option value="">Select state…</option>
                    {options.states.map((state) => (
                      <option key={state.id} value={state.id}>
                        {state.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="form-label">PIN Code</label>
                  <input
                    type="text"
                    inputMode="numeric"
                    className="form-control"
                    placeholder="500081"
                    maxLength={6}
                    value={form.pinCode}
                    onChange={update('pinCode')}
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Address</label>
                  <textarea
                    className="form-control"
                    rows={2}
                    placeholder="House no., street, area, city, state, PIN code"
                    value={form.address}
                    onChange={update('address')}
                  />
                </div>
              </div>
            </ContentCard>

            <ContentCard className="mb-3" title="Employment Details">
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Employee ID</label>
                  <input type="text" className="form-control" value="Auto-generated" readOnly />
                </div>
                <div className="col-md-6">
                  <label className="form-label">
                    Join Date <span className="text-danger">*</span>
                  </label>
                  <input type="date" className="form-control" required value={form.joinDate} onChange={update('joinDate')} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">
                    Department <span className="text-danger">*</span>
                  </label>
                  <select className="form-select" required value={form.departmentId} onChange={update('departmentId')}>
                    <option value="">Select department</option>
                    {options.departments.map((department) => (
                      <option key={department.id} value={department.id}>
                        {department.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">
                    Designation <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    placeholder="Job title"
                    value={form.designation}
                    onChange={update('designation')}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Employment Type</label>
                  <select className="form-select" value={form.employmentType} onChange={update('employmentType')}>
                    <option value="1">Full-time</option>
                    <option value="2">Part-time</option>
                    <option value="3">Contract</option>
                    <option value="4">Intern</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Grade</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. L3, M1"
                    maxLength={10}
                    value={form.grade}
                    onChange={update('grade')}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Reporting Manager</label>
                  <select className="form-select" value={form.reportingManagerId} onChange={update('reportingManagerId')}>
                    <option value="">Select manager</option>
                    {options.reportingManagers.map((manager) => (
                      <option key={manager.id} value={manager.id}>
                        {manager.name}
                      </option>
                    ))}
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
                    <input
                      type="number"
                      className="form-control"
                      required
                      placeholder="0.00"
                      value={form.baseSalary}
                      onChange={update('baseSalary')}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <label className="form-label">PAN</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ABCDE1234F"
                    maxLength={10}
                    value={form.pan}
                    onChange={update('pan')}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Aadhaar (optional)</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="XXXX XXXX XXXX"
                    maxLength={14}
                    value={form.aadhaar}
                    onChange={update('aadhaar')}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Bank Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. HDFC Bank, SBI"
                    value={form.bankName}
                    onChange={update('bankName')}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Account Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Account number"
                    value={form.accountNumber}
                    onChange={update('accountNumber')}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">IFSC Code</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. HDFC0001234"
                    maxLength={11}
                    value={form.ifscCode}
                    onChange={update('ifscCode')}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">UAN (PF)</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="12-digit UAN"
                    value={form.uan}
                    onChange={update('uan')}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">PF Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. APHYD2472433000"
                    maxLength={100}
                    value={form.pfNumber}
                    onChange={update('pfNumber')}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">ESI Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ESI number"
                    maxLength={100}
                    value={form.esiNumber}
                    onChange={update('esiNumber')}
                  />
                </div>
              </div>
            </ContentCard>
          </div>

          <div className="col-lg-4">
            <ContentCard className="mb-3" title="Actions">
              <p className="text-muted small mb-3">
                A temporary password is generated automatically. The employee will be asked to change it on first login.
              </p>
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary" disabled={saving}>
                  {saving ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true" />
                      Saving…
                    </>
                  ) : (
                    <>
                      <i className="fas fa-check me-1" /> Save Employee
                    </>
                  )}
                </button>
                <Link to="/admin/employees" className="btn btn-light-custom">
                  Cancel
                </Link>
              </div>
            </ContentCard>
          </div>
        </div>
      </form>
    </>
  )
}
