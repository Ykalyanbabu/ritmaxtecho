import { Link } from 'react-router-dom'

export function ForgotPasswordPage() {
  return (
    <div className="auth-wrapper">
      <div className="auth-brand-panel">
        <div className="auth-brand-content">
          <div className="auth-brand-logo">
            <i className="fas fa-key" />
          </div>
          <h1 className="mb-3">Reset Your Password</h1>
          <p className="opacity-75">
            We&apos;ll send you a secure link to reset your password. The link expires in 24 hours.
          </p>
        </div>
      </div>
      <div className="auth-form-panel">
        <div className="auth-form-container">
          <h2>Forgot password?</h2>
          <p className="auth-subtitle">Enter your email and we&apos;ll send reset instructions</p>
          <form data-validate noValidate>
            <div className="mb-4">
              <label className="form-label">Email Address</label>
              <div className="input-group-icon">
                <i className="fas fa-envelope" />
                <input type="email" className="form-control" required placeholder="you@payrollpro.in" />
              </div>
              <div className="invalid-feedback">Please enter a valid email.</div>
            </div>
            <button type="submit" className="btn btn-primary w-100 py-2 mb-3">
              <i className="fas fa-paper-plane me-2" />
              Send Reset Link
            </button>
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
