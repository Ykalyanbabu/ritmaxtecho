import { Link } from 'react-router-dom'

export function ResetPasswordPage() {
  return (
    <div className="auth-wrapper">
      <div className="auth-brand-panel">
        <div className="auth-brand-content">
          <div className="auth-brand-logo">
            <i className="fas fa-lock" />
          </div>
          <h1 className="mb-3">Create New Password</h1>
          <p className="opacity-75">
            Choose a strong password with at least 8 characters, including uppercase, lowercase, and
            numbers.
          </p>
        </div>
      </div>
      <div className="auth-form-panel">
        <div className="auth-form-container">
          <h2>Reset password</h2>
          <p className="auth-subtitle">Enter your new password below</p>
          <form data-validate noValidate>
            <div className="mb-3">
              <label className="form-label">New Password</label>
              <div className="input-group-icon">
                <i className="fas fa-lock" />
                <input
                  type="password"
                  className="form-control"
                  required
                  minLength={8}
                  placeholder="Min. 8 characters"
                  id="newPassword"
                />
                <button type="button" className="password-toggle" aria-label="Toggle password">
                  <i className="fas fa-eye" />
                </button>
              </div>
              <div className="invalid-feedback">Password must be at least 8 characters.</div>
            </div>
            <div className="mb-4">
              <label className="form-label">Confirm Password</label>
              <div className="input-group-icon">
                <i className="fas fa-lock" />
                <input
                  type="password"
                  className="form-control"
                  required
                  placeholder="Confirm new password"
                />
                <button type="button" className="password-toggle" aria-label="Toggle password">
                  <i className="fas fa-eye" />
                </button>
              </div>
              <div className="invalid-feedback">Passwords must match.</div>
            </div>
            <div className="mb-4">
              <div className="small text-muted mb-1">Password strength:</div>
              <div className="progress" style={{ height: 4 }}>
                <div className="progress-bar bg-warning" style={{ width: '60%' }} />
              </div>
            </div>
            <Link to="/admin/auth/login" className="btn btn-primary w-100 py-2 mb-3">
              <i className="fas fa-check me-2" />
              Reset Password
            </Link>
          </form>
          <p className="text-center mb-0">
            <Link to="/admin/auth/login" className="text-decoration-none small">
              <i className="fas fa-arrow-left me-1" />
              Back to login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
