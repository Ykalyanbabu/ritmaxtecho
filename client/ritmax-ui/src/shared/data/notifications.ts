export interface NotificationItem {
  id: string
  icon: string
  iconClass: string
  title: string
  message: string
  time: string
  unread: boolean
}

export const notifications: NotificationItem[] = [
  {
    id: '1',
    icon: 'fa-money-bill-wave',
    iconClass: 'payroll',
    title: 'Payroll processed for March 2026',
    message: '248 employees paid successfully',
    time: '2 hours ago',
    unread: true,
  },
  {
    id: '2',
    icon: 'fa-user-clock',
    iconClass: 'attendance',
    title: '5 leave requests pending approval',
    message: 'Requires your review',
    time: '4 hours ago',
    unread: true,
  },
  {
    id: '3',
    icon: 'fa-triangle-exclamation',
    iconClass: 'alert',
    title: 'TDS return filing deadline approaching',
    message: 'Q4 FY 2025-26 due in 5 days',
    time: 'Yesterday',
    unread: false,
  },
  {
    id: '4',
    icon: 'fa-file-invoice',
    iconClass: 'payroll',
    title: 'New employee onboarded',
    message: 'Arjun Mehta joined Sales — Hyderabad office',
    time: '2 days ago',
    unread: false,
  },
]
