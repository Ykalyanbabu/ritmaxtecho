import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { ContentCard } from '@/shared/components/ContentCard'
import { PageHeader } from '@/shared/components/PageHeader'
import { apiPost } from '@/shared/api/client'
import { useAuth } from '@/shared/auth/AuthContext'
import type { ChangePasswordRequest } from '@/shared/types/auth'

function validatePasswordPolicy(password: string): string | null {
  if (password.length < 8) {
    return 'Password must be at least 8 characters long.'
  }
  if (!/[A-Z]/.test(password)) {
    return 'Password must contain at least one uppercase letter.'
  }
  if (!/[a-z]/.test(password)) {
    return 'Password must contain at least one lowercase letter.'
  }
  if (!/[0-9]/.test(password)) {
    return 'Password must contain at least one number.'
  }
  if (!/[^A-Za-z0-9]/.test(password)) {
    return 'Password must contain at least one special character.'
  }
  return null
}

export function ChangePasswordPage() {
  const navigate = useNavigate()
  const { logout } = useAuth()

  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showCurrent, setShowCurrent] = useState(false)
  const [showNew, setShowNew] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(null)
    setSuccess(null)

    if (!currentPassword || !newPassword || !confirmPassword) {
      setError('All password fields are required.')
      return
    }

    if (newPassword !== confirmPassword) {
      setError('New password and confirmation do not match.')
      return
    }

    const policyError = validatePasswordPolicy(newPassword)
    if (policyError) {
      setError(policyError)
      return
    }

    setSubmitting(true)
    try {
      const payload: ChangePasswordRequest = {
        currentPassword,
        newPassword,
        confirmPassword,
      }
      await apiPost<boolean>('/auth/change-password', payload)
      setSuccess('Password updated successfully. Please sign in again.')
      setTimeout(() => {
        logout()
        navigate('/admin/auth/login', { replace: true })
      }, 800)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to update password. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <PageHeader
        title="Change Password"
        subtitle="Update your account password for enhanced security."
      />

      <div className="row justify-content-center">
        <div className="col-lg-6">
          <ContentCard>
            <form onSubmit={handleSubmit} noValidate>
              {error && (
                <div className="alert alert-danger py-2" role="alert">
                  {error}
                </div>
              )}
              {success && (
                <div className="alert alert-success py-2" role="alert">
                  {success}
                </div>
              )}
              <div className="mb-3">
                <label className="form-label">Current Password</label>
                <div className="input-group-icon">
                  <i className="fas fa-lock" />
                  <input
                    type={showCurrent ? 'text' : 'password'}
                    className="form-control"
                    required
                    autoComplete="current-password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    aria-label="Toggle current password"
                    onClick={() => setShowCurrent((v) => !v)}
                  >
                    <i className={`fas ${showCurrent ? 'fa-eye-slash' : 'fa-eye'}`} />
                  </button>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">New Password</label>
                <div className="input-group-icon">
                  <i className="fas fa-lock" />
                  <input
                    type={showNew ? 'text' : 'password'}
                    className="form-control"
                    required
                    minLength={8}
                    autoComplete="new-password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    aria-label="Toggle new password"
                    onClick={() => setShowNew((v) => !v)}
                  >
                    <i className={`fas ${showNew ? 'fa-eye-slash' : 'fa-eye'}`} />
                  </button>
                </div>
                <div className="form-text">
                  Minimum 8 characters with uppercase, lowercase, number, and a special character.
                </div>
              </div>
              <div className="mb-4">
                <label className="form-label">Confirm New Password</label>
                <div className="input-group-icon">
                  <i className="fas fa-lock" />
                  <input
                    type={showConfirm ? 'text' : 'password'}
                    className="form-control"
                    required
                    autoComplete="new-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    aria-label="Toggle confirm password"
                    onClick={() => setShowConfirm((v) => !v)}
                  >
                    <i className={`fas ${showConfirm ? 'fa-eye-slash' : 'fa-eye'}`} />
                  </button>
                </div>
              </div>
              <button type="submit" className="btn btn-primary" disabled={submitting}>
                {submitting ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" aria-hidden="true" />
                    Updating...
                  </>
                ) : (
                  <>
                    <i className="fas fa-key me-1" /> Update Password
                  </>
                )}
              </button>
            </form>
          </ContentCard>
        </div>
      </div>
    </>
  )
}
