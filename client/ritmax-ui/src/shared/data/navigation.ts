export interface NavChild {
  id: string
  label: string
  path: string
}

export interface NavItem {
  id: string
  icon: string
  label: string
  path?: string
  badge?: string
  children?: NavChild[]
}

export interface NavSection {
  section: string
  items: NavItem[]
}

export const navSections: NavSection[] = [
  {
    section: 'Workforce',
    items: [
      {
        id: 'employees',
        icon: 'fa-users',
        label: 'Employees',
        children: [
          { id: 'employees-list', label: 'Employee List', path: '/admin/employees' },
          { id: 'employees-add', label: 'Add Employee', path: '/admin/employees/add' },
        ],
      },
    ],
  },
  {
    section: 'Payroll',
    items: [
      {
        id: 'payroll',
        icon: 'fa-money-check-dollar',
        label: 'Payroll',
        children: [
          { id: 'payroll-calculation', label: 'Calculation', path: '/admin/payroll/calculation' },
          { id: 'payroll-generation', label: 'Generation', path: '/admin/payroll/generation' },
          { id: 'payroll-payslip', label: 'Payslips', path: '/admin/payroll/payslips' },
        ],
      },
    ],
  },
  {
    section: 'Administration',
    items: [
      {
        id: 'settings',
        icon: 'fa-gear',
        label: 'Settings',
        children: [
          { id: 'settings-company', label: 'Company Profile', path: '/admin/settings/company' },
        ],
      },
    ],
  },
]

export interface Breadcrumb {
  label: string
  path?: string
}

export const currentUser = {
  name: 'Rajesh Kumar',
  role: 'HR Administrator',
  initials: 'RK',
}
