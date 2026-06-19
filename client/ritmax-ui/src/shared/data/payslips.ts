export interface PayslipLine {
  description: string
  amount: number
}

export interface PayslipData {
  empId: string
  department: string
  designation: string
  location: string
  uan: string
  pan: string
  bank: string
  account: string
  ifsc: string
  joinDate: string
  payDate: string
  period: string
  paidDays: number
  lopDays: number
  earnings: PayslipLine[]
  deductions: PayslipLine[]
}

export const payslips: Record<string, PayslipData> = {
  'Priya Sharma': {
    empId: 'EMP-001',
    department: 'Engineering',
    designation: 'Senior Developer',
    location: 'Hyderabad',
    uan: '101234567890',
    pan: 'ABCDE1234F',
    bank: 'HDFC Bank',
    account: 'XXXXXX7890',
    ifsc: 'HDFC0001234',
    joinDate: '10 Jan 2022',
    payDate: '30 Jun 2026',
    period: 'June 2026',
    paidDays: 22,
    lopDays: 0,
    earnings: [
      { description: 'Basic Salary', amount: 75000 },
      { description: 'HRA', amount: 7500 },
      { description: 'Special Allowance', amount: 2500 },
    ],
    deductions: [
      { description: 'Provident Fund (PF)', amount: 5270 },
      { description: 'ESI', amount: 780 },
      { description: 'Professional Tax (Telangana)', amount: 200 },
      { description: 'Income Tax (TDS)', amount: 6500 },
    ],
  },
  'Rahul Reddy': {
    empId: 'EMP-002',
    department: 'Sales',
    designation: 'Account Executive',
    location: 'Hyderabad',
    uan: '101234567891',
    pan: 'FGHIJ5678K',
    bank: 'State Bank of India',
    account: 'XXXXXX4521',
    ifsc: 'SBIN0001234',
    joinDate: '15 Mar 2021',
    payDate: '30 Jun 2026',
    period: 'June 2026',
    paidDays: 22,
    lopDays: 0,
    earnings: [
      { description: 'Basic Salary', amount: 55000 },
      { description: 'HRA', amount: 5500 },
      { description: 'Travel Allowance', amount: 1500 },
    ],
    deductions: [
      { description: 'Provident Fund (PF)', amount: 3840 },
      { description: 'ESI', amount: 570 },
      { description: 'Professional Tax (Telangana)', amount: 200 },
      { description: 'Income Tax (TDS)', amount: 4690 },
    ],
  },
  'Ananya Rao': {
    empId: 'EMP-003',
    department: 'Marketing',
    designation: 'Marketing Manager',
    location: 'Hyderabad',
    uan: '101234567892',
    pan: 'KLMNO9012P',
    bank: 'ICICI Bank',
    account: 'XXXXXX3344',
    ifsc: 'ICIC0001234',
    joinDate: '01 Aug 2020',
    payDate: '30 Jun 2026',
    period: 'June 2026',
    paidDays: 20,
    lopDays: 2,
    earnings: [
      { description: 'Basic Salary', amount: 64000 },
      { description: 'HRA', amount: 6400 },
      { description: 'Special Allowance', amount: 600 },
    ],
    deductions: [
      { description: 'Provident Fund (PF)', amount: 4400 },
      { description: 'ESI', amount: 650 },
      { description: 'Professional Tax (Telangana)', amount: 200 },
      { description: 'Income Tax (TDS)', amount: 5400 },
    ],
  },
}
