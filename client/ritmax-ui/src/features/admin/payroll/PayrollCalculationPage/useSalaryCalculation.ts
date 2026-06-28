import { useCallback, useEffect, useState } from 'react'
import { apiGet, apiPost } from '@/shared/api/client'
import type {
  SalaryDetail,
  SalaryEmployeeOption,
  SaveSalaryDetailRequest,
} from '@/shared/types/salary'

export function useSalaryCalculation() {
  const [employees, setEmployees] = useState<SalaryEmployeeOption[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)

  const loadEmployees = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await apiGet<SalaryEmployeeOption[]>('/salary-details/employees')
      setEmployees(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load employees.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void loadEmployees()
  }, [loadEmployees])

  const fetchDetail = useCallback(
    (employeeId: number, month: number, year: number) =>
      apiGet<SalaryDetail>(`/salary-details?employeeId=${employeeId}&month=${month}&year=${year}`),
    [],
  )

  const save = useCallback(async (payload: SaveSalaryDetailRequest) => {
    setSaving(true)
    try {
      return await apiPost<SalaryDetail>('/salary-details', payload)
    } finally {
      setSaving(false)
    }
  }, [])

  return { employees, loading, error, saving, fetchDetail, save, reloadEmployees: loadEmployees }
}
