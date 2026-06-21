import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '@/shared/auth/AuthContext'

export function ProtectedRoute() {
  const { isAuthenticated, user } = useAuth()
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to="/admin/auth/login" replace state={{ from: location.pathname }} />
  }

  if (user && !user.isPasswordUpdated) {
    return <Navigate to="/admin/auth/change-password" replace />
  }

  return <Outlet />
}
