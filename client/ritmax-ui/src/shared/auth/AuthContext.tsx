import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import { apiPost } from '@/shared/api/client'
import { clearSession, getStoredUser, getToken, setSession } from '@/shared/auth/authStorage'
import type { AuthUser, LoginResponse } from '@/shared/types/auth'

interface AuthContextValue {
  user: AuthUser | null
  isAuthenticated: boolean
  login: (identifier: string, password: string) => Promise<AuthUser>
  logout: () => void
  markPasswordUpdated: () => void
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(() =>
    getToken() ? getStoredUser() : null,
  )

  const login = useCallback(async (identifier: string, password: string) => {
    const result = await apiPost<LoginResponse>('/auth/login', { identifier, password })
    setSession(result.token, result.user)
    setUser(result.user)
    return result.user
  }, [])

  const logout = useCallback(() => {
    clearSession()
    setUser(null)
  }, [])

  const markPasswordUpdated = useCallback(() => {
    setUser((current) => {
      if (!current || current.isPasswordUpdated) return current
      const updated = { ...current, isPasswordUpdated: true }
      const token = getToken()
      if (token) {
        setSession(token, updated)
      }
      return updated
    })
  }, [])

  const value = useMemo<AuthContextValue>(
    () => ({ user, isAuthenticated: user !== null, login, logout, markPasswordUpdated }),
    [user, login, logout, markPasswordUpdated],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return ctx
}
