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
    section: 'Main',
    items: [{ id: 'dashboard', icon: 'fa-gauge-high', label: 'Dashboard', path: '/admin' }],
  },
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
      {
        id: 'departments',
        icon: 'fa-building',
        label: 'Departments',
        children: [
          { id: 'departments-list', label: 'Department List', path: '/admin/departments' },
          { id: 'departments-form', label: 'Add Department', path: '/admin/departments/add' },
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
        badge: '3',
        children: [
          { id: 'payroll-generation', label: 'Generation', path: '/admin/payroll/generation' },
          { id: 'payroll-calculation', label: 'Calculation', path: '/admin/payroll/calculation' },
          { id: 'payroll-payslip', label: 'Payslips', path: '/admin/payroll/payslips' },
          { id: 'payroll-bulk', label: 'Bulk Processing', path: '/admin/payroll/bulk' },
        ],
      },
      {
        id: 'tax',
        icon: 'fa-file-invoice-dollar',
        label: 'Tax Management',
        children: [
          { id: 'tax-config', label: 'Configuration', path: '/admin/tax/config' },
          { id: 'tax-deductions', label: 'Deduction Reports', path: '/admin/tax/deductions' },
        ],
      },
    ],
  },
  {
    section: 'Operations',
    items: [
      {
        id: 'attendance',
        icon: 'fa-calendar-check',
        label: 'Attendance',
        children: [
          { id: 'attendance-dashboard', label: 'Dashboard', path: '/admin/attendance' },
          { id: 'attendance-records', label: 'Daily Records', path: '/admin/attendance/records' },
          { id: 'attendance-leave', label: 'Leave Management', path: '/admin/attendance/leave' },
          { id: 'attendance-holidays', label: 'Holiday Calendar', path: '/admin/attendance/holidays' },
        ],
      },
      {
        id: 'reports',
        icon: 'fa-chart-pie',
        label: 'Reports',
        children: [
          { id: 'reports-payroll', label: 'Payroll Reports', path: '/admin/reports/payroll' },
          { id: 'reports-attendance', label: 'Attendance Reports', path: '/admin/reports/attendance' },
          { id: 'reports-tax', label: 'Tax Reports', path: '/admin/reports/tax' },
        ],
      },
    ],
  },
  {
    section: 'Administration',
    items: [
      {
        id: 'users',
        icon: 'fa-user-shield',
        label: 'User Management',
        children: [
          { id: 'users-list', label: 'User List', path: '/admin/users' },
          { id: 'users-roles', label: 'Role Management', path: '/admin/users/roles' },
          { id: 'users-access', label: 'Access Control', path: '/admin/users/access' },
        ],
      },
      {
        id: 'settings',
        icon: 'fa-gear',
        label: 'Settings',
        children: [
          { id: 'settings-company', label: 'Company Profile', path: '/admin/settings/company' },
          { id: 'settings-payroll', label: 'Payroll Settings', path: '/admin/settings/payroll' },
          { id: 'settings-roles', label: 'Roles & Permissions', path: '/admin/settings/roles' },
          { id: 'settings-notifications', label: 'Notifications', path: '/admin/settings/notifications' },
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
