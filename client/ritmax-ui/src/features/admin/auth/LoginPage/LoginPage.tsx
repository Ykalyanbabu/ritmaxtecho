import { Link } from 'react-router-dom'
import { MARKETING_IMG } from '@/shared/constants/marketing'

export function LoginPage() {
  return (
    <div className="auth-wrapper">
      <div className="auth-brand-panel">
        <div className="auth-brand-content">
          <div className="auth-brand-logo">
            <i className="fas fa-wallet" />
          </div>
          <h1 className="mb-3">RITMAX</h1>
          <p className="opacity-75 mb-4">
            Enterprise payroll management built for Indian businesses. PF, ESI, TDS, and Telangana
            compliance — from our Hyderabad headquarters.
          </p>
          <div className="d-flex justify-content-center gap-4 opacity-75">
            <div>
              <i className="fas fa-shield-halved fa-2x mb-2 d-block" />
              <small>Secure</small>
            </div>
            <div>
              <i className="fas fa-bolt fa-2x mb-2 d-block" />
              <small>Fast</small>
            </div>
            <div>
              <i className="fas fa-chart-line fa-2x mb-2 d-block" />
              <small>Analytics</small>
            </div>
          </div>
        </div>
      </div>
      <div className="auth-form-panel">
        <div className="auth-form-container">
          <img
            src={`${MARKETING_IMG}/logo.png`}
            alt="RITMAX Logo"
            className="auth-form-logo mb-4"
            style={{ width: '42%', marginLeft: -12 }}
          />
          <h2>Welcome back</h2>
          <p className="auth-subtitle">Sign in to your account to continue</p>
          <form data-validate noValidate>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <div className="input-group-icon">
                <i className="fas fa-envelope" />
                <input
                  type="email"
                  className="form-control"
                  required
                  placeholder="you@payrollpro.in"
                  defaultValue="admin@payrollpro.in"
                />
              </div>
              <div className="invalid-feedback">Please enter a valid email.</div>
            </div>
            <div className="mb-3">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <label className="form-label mb-0">Password</label>
                <Link to="/admin/auth/forgot-password" className="small text-decoration-none">
                  Forgot password?
                </Link>
              </div>
              <div className="input-group-icon">
                <i className="fas fa-lock" />
                <input
                  type="password"
                  className="form-control"
                  required
                  placeholder="Enter password"
                  defaultValue="password"
                />
                <button type="button" className="password-toggle" aria-label="Toggle password">
                  <i className="fas fa-eye" />
                </button>
              </div>
              <div className="invalid-feedback">Password is required.</div>
            </div>
            <div className="mb-4 form-check">
              <input type="checkbox" className="form-check-input" id="remember" defaultChecked />
              <label className="form-check-label" htmlFor="remember">
                Remember me for 30 days
              </label>
            </div>
            <Link to="/admin" className="btn btn-primary w-100 py-2 mb-3">
              <i className="fas fa-right-to-bracket me-2" />
              Sign In
            </Link>
          </form>
          <p className="text-center text-muted small mb-0">
            Don&apos;t have an account?{' '}
            <a href="#" className="text-decoration-none">
              Contact your administrator
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
