export interface CompanyProfile {
  id: number
  name: string
  legalName?: string | null
  gstin: string
  pan: string
  cin?: string | null
  industryId?: number | null
  industryName?: string | null
  address: string
  city: string
  stateId?: number | null
  stateName?: string | null
  pinCode?: number | null
  phoneNo: string
  mobile?: number | null
  website?: string | null
  email?: string | null
  logoPath?: string | null
}

export interface Industry {
  id: number
  name: string
}

export interface StateOption {
  id: number
  name: string
}

export interface UpdateCompanyRequest {
  name: string
  legalName?: string | null
  gstin: string
  pan: string
  cin?: string | null
  industryId?: number | null
  address: string
  city: string
  stateId?: number | null
  pinCode?: number | null
  phoneNo: string
  mobile?: number | null
  website?: string | null
  email?: string | null
}
