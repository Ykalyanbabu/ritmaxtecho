export interface SalaryEmployeeOption {
  employeeId: number
  code: string
  fullName: string
  baseSalary: number
}

export interface SalaryDetail {
  employeeId: number
  month: number
  year: number

  basic: number
  hra: number
  specialAllowance: number
  telephoneReimbursement: number
  otherEarnings: number

  providentFund: number
  incomeTax: number
  professionalTax: number
  esi: number
  otherDeductions: number

  grossEarnings: number
  grossDeductions: number
  netPay: number

  isPayslipGenerated: boolean
  exists: boolean
}

export interface SaveSalaryDetailRequest {
  employeeId: number
  month: number
  year: number

  hra: number
  specialAllowance: number
  telephoneReimbursement: number
  otherEarnings: number

  providentFund: number
  incomeTax: number
  professionalTax: number
  esi: number
  otherDeductions: number
}
