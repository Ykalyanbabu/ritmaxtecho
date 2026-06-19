export type EmployeeStatus = 'active' | 'inactive' | 'pending'

export interface Employee {
  id: string
  initials: string
  name: string
  email: string
  department: string
  designation: string
  salary: string
  status: EmployeeStatus
  statusLabel: string
}

export const employees: Employee[] = [
  {
    id: 'EMP-001',
    initials: 'PS',
    name: 'Priya Sharma',
    email: 'priya.s@payrollpro.in',
    department: 'Engineering',
    designation: 'Senior Developer',
    salary: '₹85,000',
    status: 'active',
    statusLabel: 'Active',
  },
  {
    id: 'EMP-002',
    initials: 'RR',
    name: 'Rahul Reddy',
    email: 'rahul.r@payrollpro.in',
    department: 'Sales',
    designation: 'Account Executive',
    salary: '₹62,000',
    status: 'active',
    statusLabel: 'Active',
  },
  {
    id: 'EMP-003',
    initials: 'AR',
    name: 'Ananya Rao',
    email: 'ananya.r@payrollpro.in',
    department: 'Marketing',
    designation: 'Marketing Manager',
    salary: '₹71,000',
    status: 'pending',
    statusLabel: 'On Leave',
  },
  {
    id: 'EMP-004',
    initials: 'VS',
    name: 'Vikram Singh',
    email: 'vikram.s@payrollpro.in',
    department: 'Finance',
    designation: 'Financial Analyst',
    salary: '₹58,000',
    status: 'active',
    statusLabel: 'Active',
  },
  {
    id: 'EMP-005',
    initials: 'LD',
    name: 'Lakshmi Devi',
    email: 'lakshmi.d@payrollpro.in',
    department: 'HR',
    designation: 'HR Specialist',
    salary: '₹54,000',
    status: 'inactive',
    statusLabel: 'Inactive',
  },
]

export const employeeTotalCount = 248
