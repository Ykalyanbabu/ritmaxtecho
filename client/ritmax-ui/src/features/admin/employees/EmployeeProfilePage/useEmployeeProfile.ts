import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiGet } from '@/shared/api/client'
import { useAuth } from '@/shared/auth/AuthContext'
import type { EmployeeDetail } from '@/shared/types/employee'

export function useEmployeeProfile() {
  const { employeeId } = useParams<{ employeeId?: string }>()
  const { user } = useAuth()

  const targetId = employeeId ?? (user?.id != null ? String(user.id) : undefined)

  const [employee, setEmployee] = useState<EmployeeDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async () => {
    if (!targetId) {
      setLoading(false)
      setError('No employee selected.')
      return
    }

    setLoading(true)
    setError(null)
    try {
      const data = await apiGet<EmployeeDetail>(`/employees/${targetId}`)
      setEmployee(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load employee profile.')
    } finally {
      setLoading(false)
    }
  }, [targetId])

  useEffect(() => {
    void load()
  }, [load])

  return { employee, loading, error, reload: load }
}
