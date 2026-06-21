import { useCallback, useEffect, useState } from 'react'
import { apiGet, apiPut, apiUpload } from '@/shared/api/client'
import type { CompanyProfile, Industry, StateOption, UpdateCompanyRequest } from '@/shared/types/company'

export function useCompanyProfile() {
  const [company, setCompany] = useState<CompanyProfile | null>(null)
  const [industries, setIndustries] = useState<Industry[]>([])
  const [states, setStates] = useState<StateOption[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const [companyData, industryData, stateData] = await Promise.all([
        apiGet<CompanyProfile>('/company'),
        apiGet<Industry[]>('/industries'),
        apiGet<StateOption[]>('/states'),
      ])
      setCompany(companyData)
      setIndustries(industryData)
      setStates(stateData)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load company profile.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void load()
  }, [load])

  const save = useCallback(async (payload: UpdateCompanyRequest) => {
    const updated = await apiPut<CompanyProfile>('/company', payload)
    setCompany(updated)
    return updated
  }, [])

  const uploadLogo = useCallback(async (file: File) => {
    const formData = new FormData()
    formData.append('file', file)
    const updated = await apiUpload<CompanyProfile>('/company/logo', formData)
    setCompany(updated)
    return updated
  }, [])

  return { company, industries, states, loading, error, save, uploadLogo, reload: load }
}
