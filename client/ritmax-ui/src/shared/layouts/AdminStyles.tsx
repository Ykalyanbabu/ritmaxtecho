import { useEffect } from 'react'

export function AdminStyles() {
  useEffect(() => {
    document.body.classList.add('admin-app')

    void Promise.all([
      import('bootstrap/dist/css/bootstrap.min.css'),
      import('@/styles/admin/variables.css'),
      import('@/styles/admin/main.css'),
      import('bootstrap/dist/js/bootstrap.bundle.min.js'),
    ])

    return () => {
      document.body.classList.remove('admin-app')
    }
  }, [])

  return null
}
