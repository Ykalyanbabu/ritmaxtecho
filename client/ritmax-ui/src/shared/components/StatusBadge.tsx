import type { ReactNode } from 'react'

type BadgeStatus = 'active' | 'inactive' | 'pending' | 'processing'

interface StatusBadgeProps {
  status: BadgeStatus
  children: ReactNode
  showDot?: boolean
}

export function StatusBadge({ status, children, showDot = true }: StatusBadgeProps) {
  return (
    <span className={`status-badge ${status}`}>
      {showDot && <i className="fas fa-circle" style={{ fontSize: 6 }} />}
      {children}
    </span>
  )
}
