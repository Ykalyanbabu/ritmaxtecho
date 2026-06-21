import { clearSession, getToken } from '@/shared/auth/authStorage'

const API_BASE = '/api'
const LOGIN_PATH = '/admin/auth/login'

export interface ApiResponse<T> {
  success: boolean
  data?: T
  message?: string
}

function authHeaders(extra?: HeadersInit): HeadersInit {
  const headers = new Headers(extra)
  const token = getToken()
  if (token) {
    headers.set('Authorization', `Bearer ${token}`)
  }
  return headers
}

function handleUnauthorized() {
  clearSession()
  if (!window.location.pathname.startsWith(LOGIN_PATH)) {
    window.location.assign(LOGIN_PATH)
  }
}

async function unwrap<T>(response: Response): Promise<T> {
  if (response.status === 401) {
    handleUnauthorized()
  }

  let body: ApiResponse<T> | null = null
  try {
    body = (await response.json()) as ApiResponse<T>
  } catch {
    // Non-JSON response (e.g. server error page)
  }

  if (!response.ok || !body || body.success === false) {
    throw new Error(body?.message ?? `Request failed with status ${response.status}`)
  }

  return body.data as T
}

export async function apiGet<T>(path: string): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: authHeaders(),
  })
  return unwrap<T>(response)
}

export async function apiPost<T>(path: string, payload: unknown): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    headers: authHeaders({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(payload),
  })
  return unwrap<T>(response)
}

export async function apiPut<T>(path: string, payload: unknown): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`, {
    method: 'PUT',
    headers: authHeaders({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(payload),
  })
  return unwrap<T>(response)
}

export async function apiUpload<T>(path: string, formData: FormData): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    headers: authHeaders(),
    body: formData,
  })
  return unwrap<T>(response)
}
