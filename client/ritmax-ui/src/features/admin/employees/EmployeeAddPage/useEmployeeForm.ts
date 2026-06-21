import { useCallback, useEffect, useState } from 'react'
import { apiGet, apiPost } from '@/shared/api/client'
import type { CreateEmployeeRequest, CreatedEmployee, EmployeeFormOptions } from '@/shared/types/employee'

const EMPTY_OPTIONS: EmployeeFormOptions = {
  departments: [],
  reportingManagers: [],
  states: [],
}

export function useEmployeeForm() {
  const [options, setOptions] = useState<EmployeeFormOptions>(EMPTY_OPTIONS)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await apiGet<EmployeeFormOptions>('/employees/form-options')
      setOptions(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load form options.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void load()
  }, [load])

  const submit = useCallback(async (payload: CreateEmployeeRequest) => {
    setSaving(true)
    try {
      return await apiPost<CreatedEmployee>('/employees', payload)
    } finally {
      setSaving(false)
    }
  }, [])

  return { options, loading, error, saving, submit, reload: load }
}
