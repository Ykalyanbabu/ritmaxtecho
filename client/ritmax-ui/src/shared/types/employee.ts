export interface LookupItem {
  id: number
  name: string
}

export interface EmployeeFormOptions {
  departments: LookupItem[]
  reportingManagers: LookupItem[]
  states: LookupItem[]
}

export interface CreateEmployeeRequest {
  firstName: string
  lastName: string
  email: string
  phone?: string | null
  dateOfBirth?: string | null
  gender?: number | null
  city?: string | null
  stateId?: number | null
  pinCode?: number | null
  address?: string | null

  joinDate: string
  departmentId: number
  designation: string
  grade?: string | null
  employmentType: number
  reportingManagerId?: number | null

  baseSalary: number
  pan?: string | null
  aadhaar?: string | null
  uan?: string | null
  pfNumber?: string | null
  esiNumber?: string | null

  bankName?: string | null
  accountNumber?: string | null
  ifscCode?: string | null
}

export interface CreatedEmployee {
  id: number
  employeeCode: string
  username: string
  fullName: string
}

export interface EmployeeListItem {
  employeeId: number
  id: string
  name: string
  email: string
  department: string
  designation: string
  salary: number
  status: string
  initials: string
}

export interface EmployeeListResponse {
  employees: EmployeeListItem[]
  totalCount: number
}

export interface EmployeeDetail {
  id: number
  employeeCode: string
  fullName: string
  initials: string
  designation: string
  department: string
  status: string
  employmentType: string
  email: string
  phone?: string | null
  location?: string | null
  dateOfBirth?: string | null
  joinDate: string
  managerName?: string | null
  baseSalary: number
  payFrequency: string
}
