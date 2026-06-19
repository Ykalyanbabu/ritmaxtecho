import type { ReactNode } from 'react'
import { AdminStyles } from '@/shared/layouts/AdminStyles'

export function AdminAuthLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <AdminStyles />
      {children}
    </>
  )
}
