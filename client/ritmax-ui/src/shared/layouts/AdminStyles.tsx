import { useEffect } from 'react'

export function AdminStyles() {
  useEffect(() => {
    document.body.classList.add('admin-app')

    let active = true
    const injected: HTMLStyleElement[] = []

    void Promise.all([
      import('bootstrap/dist/css/bootstrap.min.css?inline'),
      import('@/styles/admin/variables.css?inline'),
      import('@/styles/admin/main.css?inline'),
    ]).then((modules) => {
      if (!active) return
      modules.forEach((module) => {
        const style = document.createElement('style')
        style.dataset.adminStyle = ''
        style.textContent = module.default
        document.head.appendChild(style)
        injected.push(style)
      })
    })

    void import('bootstrap/dist/js/bootstrap.bundle.min.js')

    return () => {
      active = false
      document.body.classList.remove('admin-app')
      injected.forEach((style) => style.remove())
    }
  }, [])

  return null
}
