export interface AuthUser {
  id: number
  fullName: string
  email: string
  username?: string | null
  role: string
  companyId: number
  isPasswordUpdated: boolean
}

export interface LoginRequest {
  identifier: string
  password: string
}

export interface LoginResponse {
  token: string
  expiresAtUtc: string
  user: AuthUser
}

export interface ChangePasswordRequest {
  currentPassword: string
  newPassword: string
  confirmPassword: string
}
