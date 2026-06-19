import type { ReactNode } from 'react'

interface ContentCardProps {
  title?: ReactNode
  headerActions?: ReactNode
  children: ReactNode
  className?: string
  bodyClassName?: string
}

export function ContentCard({
  title,
  headerActions,
  children,
  className = '',
  bodyClassName = '',
}: ContentCardProps) {
  return (
    <div className={`content-card ${className}`.trim()}>
      {(title || headerActions) && (
        <div className="content-card-header">
          {title && <h5 className="content-card-title">{title}</h5>}
          {headerActions}
        </div>
      )}
      <div className={`content-card-body ${bodyClassName}`.trim()}>{children}</div>
    </div>
  )
}
