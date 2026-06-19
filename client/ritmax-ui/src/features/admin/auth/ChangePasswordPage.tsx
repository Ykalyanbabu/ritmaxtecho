import { ContentCard } from '@/shared/components/ContentCard'
import { PageHeader } from '@/shared/components/PageHeader'

export function ChangePasswordPage() {
  return (
    <>
      <PageHeader
        title="Change Password"
        subtitle="Update your account password for enhanced security."
      />

      <div className="row justify-content-center">
        <div className="col-lg-6">
          <ContentCard>
            <form data-validate noValidate>
              <div className="mb-3">
                <label className="form-label">Current Password</label>
                <div className="input-group-icon">
                  <i className="fas fa-lock" />
                  <input type="password" className="form-control" required />
                  <button type="button" className="password-toggle">
                    <i className="fas fa-eye" />
                  </button>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">New Password</label>
                <div className="input-group-icon">
                  <i className="fas fa-lock" />
                  <input type="password" className="form-control" required minLength={8} />
                  <button type="button" className="password-toggle">
                    <i className="fas fa-eye" />
                  </button>
                </div>
                <div className="form-text">
                  Minimum 8 characters with uppercase, lowercase, and number.
                </div>
              </div>
              <div className="mb-4">
                <label className="form-label">Confirm New Password</label>
                <div className="input-group-icon">
                  <i className="fas fa-lock" />
                  <input type="password" className="form-control" required />
                  <button type="button" className="password-toggle">
                    <i className="fas fa-eye" />
                  </button>
                </div>
              </div>
              <div className="alert alert-info small">
                <i className="fas fa-info-circle me-1" /> You will be logged out of all other
                sessions after changing your password.
              </div>
              <button type="submit" className="btn btn-primary">
                <i className="fas fa-key me-1" /> Update Password
              </button>
            </form>
          </ContentCard>
        </div>
      </div>
    </>
  )
}
