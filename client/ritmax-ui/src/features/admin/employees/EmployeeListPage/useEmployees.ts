import { useCallback, useEffect, useState } from 'react'
import { apiGet } from '@/shared/api/client'
import type { EmployeeListItem, EmployeeListResponse } from '@/shared/types/employee'

export function useEmployees() {
  const [employees, setEmployees] = useState<EmployeeListItem[]>([])
  const [totalCount, setTotalCount] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await apiGet<EmployeeListResponse>('/employees')
      setEmployees(data.employees)
      setTotalCount(data.totalCount)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load employees.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void load()
  }, [load])

  return { employees, totalCount, loading, error, reload: load }
}
