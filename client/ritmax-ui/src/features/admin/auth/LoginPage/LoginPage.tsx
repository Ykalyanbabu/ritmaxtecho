import { useState, type FormEvent } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { MARKETING_IMG } from '@/shared/constants/marketing'
import { useAuth } from '@/shared/auth/AuthContext'

export function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = (location.state as { from?: string } | null)?.from ?? '/admin/employees/profile'

  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(null)
    setSubmitting(true)
    try {
      const user = await login(identifier.trim(), password)
      if (!user.isPasswordUpdated) {
        navigate('/admin/auth/change-password', { replace: true })
      } else {
        navigate(from, { replace: true })
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to sign in. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

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
          <h2>Welcome</h2>
          <p className="auth-subtitle">Sign in to your account to continue</p>
          <form onSubmit={handleSubmit} noValidate>
            {error && (
              <div className="alert alert-danger py-2" role="alert">
                {error}
              </div>
            )}
            <div className="mb-3">
              <label className="form-label" htmlFor="login-identifier">
                Username or Email
              </label>
              <div className="input-group-icon">
                <i className="fas fa-user" />
                <input
                  id="login-identifier"
                  type="text"
                  className="form-control"
                  required
                  autoComplete="username"
                  placeholder="Enter your username or email"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-3">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <label className="form-label mb-0" htmlFor="login-password">
                  Password
                </label>
                <Link to="/admin/auth/forgot-password" className="small text-decoration-none">
                  Forgot password?
                </Link>
              </div>
              <div className="input-group-icon">
                <i className="fas fa-lock" />
                <input
                  id="login-password"
                  type={showPassword ? 'text' : 'password'}
                  className="form-control"
                  required
                  autoComplete="current-password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="password-toggle"
                  aria-label="Toggle password"
                  onClick={() => setShowPassword((v) => !v)}
                >
                  <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`} />
                </button>
              </div>
            </div>
            <div className="mb-4 form-check">
              <input type="checkbox" className="form-check-input" id="remember" defaultChecked />
              <label className="form-check-label" htmlFor="remember">
                Remember me for 30 days
              </label>
            </div>
            <button type="submit" className="btn btn-primary w-100 py-2 mb-3" disabled={submitting}>
              {submitting ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" aria-hidden="true" />
                  Signing in...
                </>
              ) : (
                <>
                  <i className="fas fa-right-to-bracket me-2" />
                  Sign In
                </>
              )}
            </button>
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
