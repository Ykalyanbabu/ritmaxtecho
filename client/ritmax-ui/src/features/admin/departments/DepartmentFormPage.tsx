import { Link } from 'react-router-dom'
import { ContentCard } from '@/shared/components/ContentCard'
import { PageHeader } from '@/shared/components/PageHeader'

export function DepartmentFormPage() {
  return (
    <>
      <PageHeader
        title="Add Department"
        subtitle="Create or update department information."
      />

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <ContentCard>
            <form data-validate noValidate>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">
                    Department Name <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" required placeholder="e.g. Engineering" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Department Code</label>
                  <input type="text" className="form-control" placeholder="e.g. ENG" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Department Head</label>
                  <select className="form-select" defaultValue="">
                    <option value="">Select head</option>
                    <option>Rajesh Kumar</option>
                    <option>Sneha Reddy</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Cost Center</label>
                  <input type="text" className="form-control" placeholder="CC-1001" />
                </div>
                <div className="col-12">
                  <label className="form-label">Description</label>
                  <textarea className="form-control" rows={3} placeholder="Department description..." />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Status</label>
                  <select className="form-select" defaultValue="Active">
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>
                <div className="col-12 d-flex gap-2 mt-2">
                  <button type="submit" className="btn btn-primary">
                    <i className="fas fa-check me-1" /> Save Department
                  </button>
                  <Link to="/admin/departments" className="btn btn-light-custom">
                    Cancel
                  </Link>
                </div>
              </div>
            </form>
          </ContentCard>
        </div>
      </div>
    </>
  )
}
