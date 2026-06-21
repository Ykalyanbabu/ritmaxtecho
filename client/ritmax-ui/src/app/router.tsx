import { createBrowserRouter, Navigate } from 'react-router-dom'
import { ProtectedRoute } from '@/shared/auth/ProtectedRoute'
import { MarketingLayout } from '@/shared/layouts/MarketingLayout'
import { AdminLayoutRoute } from '@/shared/layouts/AdminLayout'
import { AdminAuthLayout } from '@/shared/layouts/AdminAuthLayout'
import { HomePage } from '@/features/marketing/HomePage'
import { AboutPage } from '@/features/marketing/AboutPage'
import { ContactPage } from '@/features/marketing/ContactPage'
import { LoginPage as MarketingLoginPage } from '@/features/marketing/LoginPage'
import { RegisterPage } from '@/features/marketing/RegisterPage'
import { AllServicesPage } from '@/features/marketing/AllServicesPage'
import { PayrollProcessingPage } from '@/features/marketing/PayrollProcessingPage'
import { AccountingServicesPage } from '@/features/marketing/AccountingServicesPage'
import { TaxationServicesPage } from '@/features/marketing/TaxationServicesPage'
import { WebBasedPage } from '@/features/marketing/WebBasedPage'
import { DesktopBasedPage } from '@/features/marketing/DesktopBasedPage'
import { MobileAppPage } from '@/features/marketing/MobileAppPage'
import { DashboardPage } from '@/features/admin/dashboard/DashboardPage'
import { EmployeeListPage } from '@/features/admin/employees/EmployeeListPage'
import { EmployeeAddPage } from '@/features/admin/employees/EmployeeAddPage'
import { EmployeeProfilePage } from '@/features/admin/employees/EmployeeProfilePage'
import { DepartmentListPage } from '@/features/admin/departments/DepartmentListPage'
import { DepartmentFormPage } from '@/features/admin/departments/DepartmentFormPage'
import { PayrollGenerationPage } from '@/features/admin/payroll/PayrollGenerationPage'
import { PayrollCalculationPage } from '@/features/admin/payroll/PayrollCalculationPage'
import { PayslipPage } from '@/features/admin/payroll/PayslipPage'
import { PayrollBulkPage } from '@/features/admin/payroll/PayrollBulkPage'
import { TaxConfigPage } from '@/features/admin/tax/TaxConfigPage'
import { TaxDeductionsPage } from '@/features/admin/tax/TaxDeductionsPage'
import { AttendanceDashboardPage } from '@/features/admin/attendance/AttendanceDashboardPage'
import { AttendanceRecordsPage } from '@/features/admin/attendance/AttendanceRecordsPage'
import { LeaveManagementPage } from '@/features/admin/attendance/LeaveManagementPage'
import { HolidayCalendarPage } from '@/features/admin/attendance/HolidayCalendarPage'
import { PayrollReportsPage } from '@/features/admin/reports/PayrollReportsPage'
import { AttendanceReportsPage } from '@/features/admin/reports/AttendanceReportsPage'
import { TaxReportsPage } from '@/features/admin/reports/TaxReportsPage'
import { UserListPage } from '@/features/admin/users/UserListPage'
import { UserRolesPage } from '@/features/admin/users/UserRolesPage'
import { AccessControlPage } from '@/features/admin/users/AccessControlPage'
import { CompanySettingsPage } from '@/features/admin/settings/CompanySettingsPage'
import { PayrollSettingsPage } from '@/features/admin/settings/PayrollSettingsPage'
import { RolesSettingsPage } from '@/features/admin/settings/RolesSettingsPage'
import { NotificationsSettingsPage } from '@/features/admin/settings/NotificationsSettingsPage'
import { LoginPage as AdminLoginPage } from '@/features/admin/auth/LoginPage'
import { ForgotPasswordPage } from '@/features/admin/auth/ForgotPasswordPage'
import { ResetPasswordPage } from '@/features/admin/auth/ResetPasswordPage'
import { ChangePasswordPage } from '@/features/admin/auth/ChangePasswordPage'

export const router = createBrowserRouter([
  {
    element: <MarketingLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/login', element: <MarketingLoginPage /> },
      { path: '/register', element: <RegisterPage /> },
      { path: '/all-services', element: <AllServicesPage /> },
      { path: '/payroll-processing', element: <PayrollProcessingPage /> },
      { path: '/accounting-services', element: <AccountingServicesPage /> },
      { path: '/taxation-services', element: <TaxationServicesPage /> },
      { path: '/web-based', element: <WebBasedPage /> },
      { path: '/desktop-based', element: <DesktopBasedPage /> },
      { path: '/mobile-app', element: <MobileAppPage /> },
    ],
  },
  {
    path: '/admin/auth/login',
    element: (
      <AdminAuthLayout>
        <AdminLoginPage />
      </AdminAuthLayout>
    ),
  },
  {
    path: '/admin/auth/forgot-password',
    element: (
      <AdminAuthLayout>
        <ForgotPasswordPage />
      </AdminAuthLayout>
    ),
  },
  {
    path: '/admin/auth/reset-password',
    element: (
      <AdminAuthLayout>
        <ResetPasswordPage />
      </AdminAuthLayout>
    ),
  },
  {
    path: '/admin/auth/change-password',
    element: (
      <AdminAuthLayout>
        <ChangePasswordPage />
      </AdminAuthLayout>
    ),
  },
  {
    element: <ProtectedRoute />,
    children: [
  {
    path: '/admin',
    element: (
      <AdminLayoutRoute
        pageId="dashboard"
        breadcrumbs={[{ label: 'Home', path: '/admin' }, { label: 'Dashboard' }]}
      />
    ),
    children: [{ index: true, element: <DashboardPage /> }],
  },
  {
    path: '/admin/employees',
    element: (
      <AdminLayoutRoute
        pageId="employees-list"
        breadcrumbs={[
          { label: 'Home', path: '/admin' },
          { label: 'Employees', path: '/admin/employees' },
          { label: 'Employee List' },
        ]}
      />
    ),
    children: [{ index: true, element: <EmployeeListPage /> }],
  },
  {
    path: '/admin/employees/add',
    element: (
      <AdminLayoutRoute
        pageId="employees-add"
        breadcrumbs={[
          { label: 'Home', path: '/admin' },
          { label: 'Employees', path: '/admin/employees' },
          { label: 'Add Employee' },
        ]}
      />
    ),
    children: [{ index: true, element: <EmployeeAddPage /> }],
  },
  {
    path: '/admin/employees/profile',
    element: (
      <AdminLayoutRoute
        pageId="employees-list"
        breadcrumbs={[
          { label: 'Home', path: '/admin' },
          { label: 'Employees', path: '/admin/employees' },
          { label: 'Employee Profile' },
        ]}
      />
    ),
    children: [{ index: true, element: <EmployeeProfilePage /> }],
  },
  {
    path: '/admin/employees/profile/:employeeId',
    element: (
      <AdminLayoutRoute
        pageId="employees-list"
        breadcrumbs={[
          { label: 'Home', path: '/admin' },
          { label: 'Employees', path: '/admin/employees' },
          { label: 'Employee Profile' },
        ]}
      />
    ),
    children: [{ index: true, element: <EmployeeProfilePage /> }],
  },
  {
    path: '/admin/departments',
    element: (
      <AdminLayoutRoute
        pageId="departments-list"
        breadcrumbs={[
          { label: 'Home', path: '/admin' },
          { label: 'Departments', path: '/admin/departments' },
          { label: 'Department List' },
        ]}
      />
    ),
    children: [{ index: true, element: <DepartmentListPage /> }],
  },
  {
    path: '/admin/departments/add',
    element: (
      <AdminLayoutRoute
        pageId="departments-form"
        breadcrumbs={[
          { label: 'Home', path: '/admin' },
          { label: 'Departments', path: '/admin/departments' },
          { label: 'Add Department' },
        ]}
      />
    ),
    children: [{ index: true, element: <DepartmentFormPage /> }],
  },
  {
    path: '/admin/payroll/generation',
    element: (
      <AdminLayoutRoute
        pageId="payroll-generation"
        breadcrumbs={[
          { label: 'Home', path: '/admin' },
          { label: 'Payroll' },
          { label: 'Generation' },
        ]}
      />
    ),
    children: [{ index: true, element: <PayrollGenerationPage /> }],
  },
  {
    path: '/admin/payroll/calculation',
    element: (
      <AdminLayoutRoute
        pageId="payroll-calculation"
        breadcrumbs={[
          { label: 'Home', path: '/admin' },
          { label: 'Payroll' },
          { label: 'Calculation' },
        ]}
      />
    ),
    children: [{ index: true, element: <PayrollCalculationPage /> }],
  },
  {
    path: '/admin/payroll/payslips',
    element: (
      <AdminLayoutRoute
        pageId="payroll-payslip"
        breadcrumbs={[
          { label: 'Home', path: '/admin' },
          { label: 'Payroll' },
          { label: 'Payslips' },
        ]}
      />
    ),
    children: [{ index: true, element: <PayslipPage /> }],
  },
  {
    path: '/admin/payroll/bulk',
    element: (
      <AdminLayoutRoute
        pageId="payroll-bulk"
        breadcrumbs={[
          { label: 'Home', path: '/admin' },
          { label: 'Payroll' },
          { label: 'Bulk Processing' },
        ]}
      />
    ),
    children: [{ index: true, element: <PayrollBulkPage /> }],
  },
  {
    path: '/admin/tax/config',
    element: (
      <AdminLayoutRoute
        pageId="tax-config"
        breadcrumbs={[
          { label: 'Home', path: '/admin' },
          { label: 'Tax Management' },
          { label: 'Configuration' },
        ]}
      />
    ),
    children: [{ index: true, element: <TaxConfigPage /> }],
  },
  {
    path: '/admin/tax/deductions',
    element: (
      <AdminLayoutRoute
        pageId="tax-deductions"
        breadcrumbs={[
          { label: 'Home', path: '/admin' },
          { label: 'Tax Management' },
          { label: 'Deduction Reports' },
        ]}
      />
    ),
    children: [{ index: true, element: <TaxDeductionsPage /> }],
  },
  {
    path: '/admin/attendance',
    element: (
      <AdminLayoutRoute
        pageId="attendance-dashboard"
        breadcrumbs={[
          { label: 'Home', path: '/admin' },
          { label: 'Attendance' },
          { label: 'Dashboard' },
        ]}
      />
    ),
    children: [{ index: true, element: <AttendanceDashboardPage /> }],
  },
  {
    path: '/admin/attendance/records',
    element: (
      <AdminLayoutRoute
        pageId="attendance-records"
        breadcrumbs={[
          { label: 'Home', path: '/admin' },
          { label: 'Attendance' },
          { label: 'Daily Records' },
        ]}
      />
    ),
    children: [{ index: true, element: <AttendanceRecordsPage /> }],
  },
  {
    path: '/admin/attendance/leave',
    element: (
      <AdminLayoutRoute
        pageId="attendance-leave"
        breadcrumbs={[
          { label: 'Home', path: '/admin' },
          { label: 'Attendance' },
          { label: 'Leave Management' },
        ]}
      />
    ),
    children: [{ index: true, element: <LeaveManagementPage /> }],
  },
  {
    path: '/admin/attendance/holidays',
    element: (
      <AdminLayoutRoute
        pageId="attendance-holidays"
        breadcrumbs={[
          { label: 'Home', path: '/admin' },
          { label: 'Attendance' },
          { label: 'Holiday Calendar' },
        ]}
      />
    ),
    children: [{ index: true, element: <HolidayCalendarPage /> }],
  },
  {
    path: '/admin/reports/payroll',
    element: (
      <AdminLayoutRoute
        pageId="reports-payroll"
        breadcrumbs={[
          { label: 'Home', path: '/admin' },
          { label: 'Reports' },
          { label: 'Payroll Reports' },
        ]}
      />
    ),
    children: [{ index: true, element: <PayrollReportsPage /> }],
  },
  {
    path: '/admin/reports/attendance',
    element: (
      <AdminLayoutRoute
        pageId="reports-attendance"
        breadcrumbs={[
          { label: 'Home', path: '/admin' },
          { label: 'Reports' },
          { label: 'Attendance Reports' },
        ]}
      />
    ),
    children: [{ index: true, element: <AttendanceReportsPage /> }],
  },
  {
    path: '/admin/reports/tax',
    element: (
      <AdminLayoutRoute
        pageId="reports-tax"
        breadcrumbs={[
          { label: 'Home', path: '/admin' },
          { label: 'Reports' },
          { label: 'Tax Reports' },
        ]}
      />
    ),
    children: [{ index: true, element: <TaxReportsPage /> }],
  },
  {
    path: '/admin/users',
    element: (
      <AdminLayoutRoute
        pageId="users-list"
        breadcrumbs={[
          { label: 'Home', path: '/admin' },
          { label: 'User Management' },
          { label: 'User List' },
        ]}
      />
    ),
    children: [{ index: true, element: <UserListPage /> }],
  },
  {
    path: '/admin/users/roles',
    element: (
      <AdminLayoutRoute
        pageId="users-roles"
        breadcrumbs={[
          { label: 'Home', path: '/admin' },
          { label: 'User Management' },
          { label: 'Role Management' },
        ]}
      />
    ),
    children: [{ index: true, element: <UserRolesPage /> }],
  },
  {
    path: '/admin/users/access',
    element: (
      <AdminLayoutRoute
        pageId="users-access"
        breadcrumbs={[
          { label: 'Home', path: '/admin' },
          { label: 'User Management' },
          { label: 'Access Control' },
        ]}
      />
    ),
    children: [{ index: true, element: <AccessControlPage /> }],
  },
  {
    path: '/admin/settings/company',
    element: (
      <AdminLayoutRoute
        pageId="settings-company"
        breadcrumbs={[
          { label: 'Home', path: '/admin' },
          { label: 'Settings' },
          { label: 'Company Profile' },
        ]}
      />
    ),
    children: [{ index: true, element: <CompanySettingsPage /> }],
  },
  {
    path: '/admin/settings/payroll',
    element: (
      <AdminLayoutRoute
        pageId="settings-payroll"
        breadcrumbs={[
          { label: 'Home', path: '/admin' },
          { label: 'Settings' },
          { label: 'Payroll Settings' },
        ]}
      />
    ),
    children: [{ index: true, element: <PayrollSettingsPage /> }],
  },
  {
    path: '/admin/settings/roles',
    element: (
      <AdminLayoutRoute
        pageId="settings-roles"
        breadcrumbs={[
          { label: 'Home', path: '/admin' },
          { label: 'Settings' },
          { label: 'Roles & Permissions' },
        ]}
      />
    ),
    children: [{ index: true, element: <RolesSettingsPage /> }],
  },
  {
    path: '/admin/settings/notifications',
    element: (
      <AdminLayoutRoute
        pageId="settings-notifications"
        breadcrumbs={[
          { label: 'Home', path: '/admin' },
          { label: 'Settings' },
          { label: 'Notifications' },
        ]}
      />
    ),
    children: [{ index: true, element: <NotificationsSettingsPage /> }],
  },
    ],
  },
  { path: '*', element: <Navigate to="/" replace /> },
])
