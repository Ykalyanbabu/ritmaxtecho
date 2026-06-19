import type { ReactNode } from 'react'

interface PageHeaderProps {
  title: string
  subtitle?: string
  actions?: ReactNode
  className?: string
}

export function PageHeader({ title, subtitle, actions, className = '' }: PageHeaderProps) {
  const baseClass = actions
    ? 'page-header d-flex flex-wrap align-items-center justify-content-between gap-3'
    : 'page-header'

  return (
    <div className={`${baseClass} ${className}`.trim()}>
      <div>
        <h1 className="page-title">{title}</h1>
        {subtitle && <p className="page-subtitle">{subtitle}</p>}
      </div>
      {actions}
    </div>
  )
}
