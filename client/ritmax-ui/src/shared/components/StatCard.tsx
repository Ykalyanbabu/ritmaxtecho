import type { ReactNode } from 'react'

type IconVariant = 'primary' | 'success' | 'warning' | 'info' | 'danger'

interface StatCardProps {
  value: ReactNode
  label: string
  icon?: ReactNode
  iconVariant?: IconVariant
  trend?: ReactNode
  trendDirection?: 'up' | 'down'
  className?: string
  textCenter?: boolean
}

export function StatCard({
  value,
  label,
  icon,
  iconVariant = 'primary',
  trend,
  trendDirection,
  className = '',
  textCenter = false,
}: StatCardProps) {
  return (
    <div className={`stat-card ${textCenter ? 'text-center' : ''} ${className}`.trim()}>
      {icon && (
        <div
          className={`d-flex justify-content-between align-items-start mb-3${
            textCenter ? ' justify-content-center' : ''
          }`}
        >
          <div className={`stat-card-icon ${iconVariant}${textCenter ? ' mx-auto mb-3' : ''}`}>
            {icon}
          </div>
          {trend && (
            <span className={`stat-card-trend ${trendDirection ?? ''}`}>{trend}</span>
          )}
        </div>
      )}
      {!icon && trend && (
        <div className="d-flex justify-content-between align-items-start mb-3">
          <span className={`stat-card-trend ${trendDirection ?? ''}`}>{trend}</span>
        </div>
      )}
      <div className="stat-card-value">{value}</div>
      <div className="stat-card-label">{label}</div>
    </div>
  )
}
