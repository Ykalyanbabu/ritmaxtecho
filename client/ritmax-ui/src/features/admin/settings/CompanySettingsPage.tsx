import { ContentCard } from '@/shared/components/ContentCard'
import { PageHeader } from '@/shared/components/PageHeader'

export function CompanySettingsPage() {
  return (
    <>
      <PageHeader
        title="Company Profile"
        subtitle="Manage your organization profile — registered office in Hyderabad, Telangana."
      />

      <div className="row g-3">
        <div className="col-lg-8">
          <ContentCard>
            <form data-validate noValidate>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Company Name</label>
                  <input type="text" className="form-control" defaultValue="RITMAX Pvt. Ltd." />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Legal Name</label>
                  <input type="text" className="form-control" defaultValue="RITMAX Private Limited" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">GSTIN</label>
                  <input type="text" className="form-control" defaultValue="36AABCP1234A1Z5" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">PAN</label>
                  <input type="text" className="form-control" defaultValue="AABCP1234A" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">CIN</label>
                  <input type="text" className="form-control" defaultValue="U72900TG2018PTC124567" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Industry</label>
                  <select className="form-select" defaultValue="IT / Software Services">
                    <option>IT / Software Services</option>
                    <option>Finance</option>
                    <option>Healthcare</option>
                  </select>
                </div>
                <div className="col-12">
                  <label className="form-label">Registered Address</label>
                  <textarea className="form-control" rows={2} defaultValue="Plot No. 12, Cyber Towers Road, HITEC City, Madhapur, Hyderabad, Telangana 500081" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">City</label>
                  <input type="text" className="form-control" defaultValue="Hyderabad" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">State</label>
                  <input type="text" className="form-control" defaultValue="Telangana" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">PIN Code</label>
                  <input type="text" className="form-control" defaultValue="500081" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Phone</label>
                  <input type="tel" className="form-control" defaultValue="+91 40 4012 3456" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Mobile</label>
                  <input type="tel" className="form-control" defaultValue="+91 98765 43210" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Website</label>
                  <input type="url" className="form-control" defaultValue="https://www.payrollpro.in" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" defaultValue="info@payrollpro.in" />
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary">
                    <i className="fas fa-save me-1" /> Save Changes
                  </button>
                </div>
              </div>
            </form>
          </ContentCard>
        </div>
        <div className="col-lg-4">
          <ContentCard title="Company Logo">
            <div className="text-center">
              <div className="sidebar-brand-icon mx-auto mb-3" style={{ width: 80, height: 80, fontSize: '2rem' }}>
                <i className="fas fa-wallet" />
              </div>
              <input type="file" className="form-control" accept="image/*" />
              <small className="text-muted d-block mt-2">PNG or SVG, max 2MB</small>
            </div>
          </ContentCard>
        </div>
      </div>
    </>
  )
}
