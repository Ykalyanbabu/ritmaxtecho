import { useEffect, useRef, useState } from 'react'
import { ContentCard } from '@/shared/components/ContentCard'
import { PageHeader } from '@/shared/components/PageHeader'
import type { CompanyProfile, UpdateCompanyRequest } from '@/shared/types/company'
import { useCompanyProfile } from './useCompanyProfile'

type FormState = {
  name: string
  legalName: string
  gstin: string
  pan: string
  cin: string
  industryId: string
  address: string
  city: string
  stateId: string
  pinCode: string
  phoneNo: string
  mobile: string
  website: string
  email: string
}

const emptyForm: FormState = {
  name: '',
  legalName: '',
  gstin: '',
  pan: '',
  cin: '',
  industryId: '',
  address: '',
  city: '',
  stateId: '',
  pinCode: '',
  phoneNo: '',
  mobile: '',
  website: '',
  email: '',
}

function toFormState(company: CompanyProfile): FormState {
  return {
    name: company.name ?? '',
    legalName: company.legalName ?? '',
    gstin: company.gstin ?? '',
    pan: company.pan ?? '',
    cin: company.cin ?? '',
    industryId: company.industryId != null ? String(company.industryId) : '',
    address: company.address ?? '',
    city: company.city ?? '',
    stateId: company.stateId != null ? String(company.stateId) : '',
    pinCode: company.pinCode != null ? String(company.pinCode) : '',
    phoneNo: company.phoneNo ?? '',
    mobile: company.mobile != null ? String(company.mobile) : '',
    website: company.website ?? '',
    email: company.email ?? '',
  }
}

function toRequest(form: FormState): UpdateCompanyRequest {
  const trimmed = (value: string) => {
    const next = value.trim()
    return next.length > 0 ? next : null
  }

  const digitsOnly = (value: string) => value.replace(/\D/g, '')

  return {
    name: form.name.trim(),
    legalName: trimmed(form.legalName),
    gstin: form.gstin.trim(),
    pan: form.pan.trim(),
    cin: trimmed(form.cin),
    industryId: form.industryId ? Number(form.industryId) : null,
    address: form.address.trim(),
    city: form.city.trim(),
    stateId: form.stateId ? Number(form.stateId) : null,
    pinCode: digitsOnly(form.pinCode) ? Number(digitsOnly(form.pinCode)) : null,
    phoneNo: digitsOnly(form.phoneNo),
    mobile: digitsOnly(form.mobile) ? Number(digitsOnly(form.mobile)) : null,
    website: trimmed(form.website),
    email: trimmed(form.email),
  }
}

export function CompanySettingsPage() {
  const { company, industries, states, loading, error, save, uploadLogo } = useCompanyProfile()
  const [form, setForm] = useState<FormState>(emptyForm)
  const [saving, setSaving] = useState(false)
  const [feedback, setFeedback] = useState<{ type: 'success' | 'danger'; text: string } | null>(null)
  const [uploading, setUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (company) {
      setForm(toFormState(company))
    }
  }, [company])

  const update =
    (field: keyof FormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }))
    }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setSaving(true)
    setFeedback(null)
    try {
      await save(toRequest(form))
      setFeedback({ type: 'success', text: 'Company profile saved successfully.' })
    } catch (err) {
      setFeedback({ type: 'danger', text: err instanceof Error ? err.message : 'Failed to save profile.' })
    } finally {
      setSaving(false)
    }
  }

  const handleLogoChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setUploading(true)
    setFeedback(null)
    try {
      await uploadLogo(file)
      setFeedback({ type: 'success', text: 'Company logo updated.' })
    } catch (err) {
      setFeedback({ type: 'danger', text: err instanceof Error ? err.message : 'Failed to upload logo.' })
    } finally {
      setUploading(false)
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    }
  }

  if (loading) {
    return (
      <>
        <PageHeader title="Company Profile" subtitle="Manage your organization profile." />
        <ContentCard>
          <div className="text-center text-muted py-5">
            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" />
            Loading company profile…
          </div>
        </ContentCard>
      </>
    )
  }

  if (error) {
    return (
      <>
        <PageHeader title="Company Profile" subtitle="Manage your organization profile." />
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
        title="Company Profile"
        subtitle="Manage your organization profile — registered office in Hyderabad, Telangana."
      />

      {feedback && (
        <div className={`alert alert-${feedback.type}`} role="alert">
          {feedback.text}
        </div>
      )}

      <div className="row g-3">
        <div className="col-lg-8">
          <ContentCard>
            <form onSubmit={handleSubmit} noValidate>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Company Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={form.name}
                    onChange={update('name')}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Legal Name</label>
                  <input type="text" className="form-control" value={form.legalName} onChange={update('legalName')} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">GSTIN</label>
                  <input type="text" className="form-control" value={form.gstin} onChange={update('gstin')} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">PAN</label>
                  <input type="text" className="form-control" value={form.pan} onChange={update('pan')} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">CIN</label>
                  <input type="text" className="form-control" value={form.cin} onChange={update('cin')} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Industry</label>
                  <select className="form-select" value={form.industryId} onChange={update('industryId')}>
                    <option value="">Select industry…</option>
                    {industries.map((industry) => (
                      <option key={industry.id} value={industry.id}>
                        {industry.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-12">
                  <label className="form-label">Registered Address</label>
                  <textarea
                    className="form-control"
                    rows={2}
                    value={form.address}
                    onChange={update('address')}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">City</label>
                  <input type="text" className="form-control" value={form.city} onChange={update('city')} />
                </div>
                <div className="col-md-4">
                  <label className="form-label">State</label>
                  <select className="form-select" value={form.stateId} onChange={update('stateId')}>
                    <option value="">Select state…</option>
                    {states.map((state) => (
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
                    value={form.pinCode}
                    onChange={update('pinCode')}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Phone No</label>
                  <input
                    type="text"
                    inputMode="numeric"
                    className="form-control"
                    value={form.phoneNo}
                    onChange={update('phoneNo')}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Mobile</label>
                  <input type="tel" className="form-control" value={form.mobile} onChange={update('mobile')} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Website</label>
                  <input type="url" className="form-control" value={form.website} onChange={update('website')} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" value={form.email} onChange={update('email')} />
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary" disabled={saving}>
                    {saving ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true" />
                        Saving…
                      </>
                    ) : (
                      <>
                        <i className="fas fa-save me-1" /> Save Changes
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </ContentCard>
        </div>
        <div className="col-lg-4">
          <ContentCard title="Company Logo">
            <div className="text-center">
              {company?.logoPath ? (
                <img
                  src={company.logoPath}
                  alt="Company logo"
                  className="img-fluid mb-3"
                  style={{ maxHeight: 120, objectFit: 'contain' }}
                />
              ) : (
                <div
                  className="sidebar-brand-icon mx-auto mb-3"
                  style={{ width: 80, height: 80, fontSize: '2rem' }}
                >
                  <i className="fas fa-wallet" />
                </div>
              )}
              <input
                ref={fileInputRef}
                type="file"
                className="form-control"
                accept="image/png,image/jpeg,image/svg+xml,image/webp"
                onChange={handleLogoChange}
                disabled={uploading}
              />
              <small className="text-muted d-block mt-2">
                {uploading ? 'Uploading…' : 'PNG, JPG, SVG or WebP, max 2MB'}
              </small>
            </div>
          </ContentCard>
        </div>
      </div>
    </>
  )
}
