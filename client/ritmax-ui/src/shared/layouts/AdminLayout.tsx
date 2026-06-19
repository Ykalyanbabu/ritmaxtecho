import { Fragment, useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { currentUser, navSections, type Breadcrumb } from '@/shared/data/navigation'
import { notifications as initialNotifications } from '@/shared/data/notifications'
import { AdminStyles } from '@/shared/layouts/AdminStyles'

interface AdminLayoutProps {
  pageId: string
  breadcrumbs: Breadcrumb[]
}

export function AdminLayout({ pageId, breadcrumbs }: AdminLayoutProps) {
  const location = useLocation()
  const [sidebarCollapsed, setSidebarCollapsed] = useState(
    () => localStorage.getItem('sidebarCollapsed') === 'true',
  )
  const [mobileOpen, setMobileOpen] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [notifications, setNotifications] = useState(initialNotifications)
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const expanded: Record<string, boolean> = {}
    navSections.forEach((section) => {
      section.items.forEach((item) => {
        if (item.children?.some((c) => c.id === pageId)) {
          expanded[item.id] = true
        }
      })
    })
    setExpandedMenus(expanded)
  }, [pageId])

  const toggleSidebar = () => {
    if (window.innerWidth < 992) {
      setMobileOpen((v) => !v)
    } else {
      const next = !sidebarCollapsed
      setSidebarCollapsed(next)
      localStorage.setItem('sidebarCollapsed', String(next))
    }
  }

  const markAllRead = () => {
    setNotifications((items) => items.map((n) => ({ ...n, unread: false })))
  }

  return (
    <>
      <AdminStyles />
      <div className={`app-body ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
      <div className="app-wrapper">
        <aside
          className={`app-sidebar ${sidebarCollapsed ? 'collapsed' : ''} ${mobileOpen ? 'mobile-open' : ''}`}
          id="sidebar"
        >
          <div className="sidebar-brand">
            <div className="sidebar-brand-icon">
              <i className="fas fa-wallet" />
            </div>
            <div className="sidebar-brand-text">
              RIT<span>MAX</span>
            </div>
          </div>
          <nav className="sidebar-nav">
            <ul className="list-unstyled mb-0">
              {navSections.map((section) => (
                <Fragment key={section.section}>
                  <li className="nav-section-title">
                    {section.section}
                  </li>
                  {section.items.map((item) => {
                    const isParentActive =
                      item.id === pageId ||
                      item.children?.some((c) => c.id === pageId)
                    const isExpanded = expandedMenus[item.id] ?? isParentActive

                    if (item.children) {
                      return (
                        <li key={item.id} className="nav-item">
                          <button
                            type="button"
                            className={`nav-link w-100 border-0 bg-transparent text-start ${isParentActive ? 'active' : ''}`}
                            onClick={() =>
                              setExpandedMenus((prev) => ({
                                ...prev,
                                [item.id]: !isExpanded,
                              }))
                            }
                            aria-expanded={isExpanded}
                          >
                            <i className={`fas ${item.icon} nav-icon`} />
                            <span className="nav-label">{item.label}</span>
                            {item.badge && <span className="nav-badge">{item.badge}</span>}
                            <i className="fas fa-chevron-right nav-arrow" />
                          </button>
                          <ul className={`submenu collapse ${isExpanded ? 'show' : ''}`}>
                            {item.children.map((child) => (
                              <li key={child.id} className="nav-item">
                                <Link
                                  className={`nav-link ${child.id === pageId ? 'active' : ''}`}
                                  to={child.path}
                                  onClick={() => setMobileOpen(false)}
                                >
                                  <span className="nav-label">{child.label}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      )
                    }

                    return (
                      <li key={item.id} className="nav-item">
                        <Link
                          className={`nav-link ${item.id === pageId ? 'active' : ''}`}
                          to={item.path!}
                          onClick={() => setMobileOpen(false)}
                        >
                          <i className={`fas ${item.icon} nav-icon`} />
                          <span className="nav-label">{item.label}</span>
                        </Link>
                      </li>
                    )
                  })}
                </Fragment>
              ))}
            </ul>
          </nav>
        </aside>

        <div
          className={`sidebar-backdrop ${mobileOpen ? 'active' : ''}`}
          id="sidebarBackdrop"
          onClick={() => setMobileOpen(false)}
          onKeyDown={() => undefined}
          role="presentation"
        />

        <div className="app-main">
          <header className="app-header">
            <button
              type="button"
              className="header-toggle"
              id="sidebarToggle"
              aria-label="Toggle sidebar"
              onClick={toggleSidebar}
            >
              <i className="fas fa-bars" />
            </button>
            <div className="header-search">
              <i className="fas fa-search" />
              <input type="search" placeholder="Search employees, payroll, reports..." aria-label="Global search" />
            </div>
            <div className="header-actions">
              <button
                type="button"
                className="header-action-btn"
                aria-label="Notifications"
                onClick={() => setNotificationsOpen(true)}
              >
                <i className="fas fa-bell" />
                {notifications.some((n) => n.unread) && <span className="badge-dot" />}
              </button>
              <button type="button" className="header-action-btn" aria-label="Help">
                <i className="fas fa-circle-question" />
              </button>
              <div className="dropdown">
                <button
                  type="button"
                  className="user-profile-dropdown dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="user-avatar">{currentUser.initials}</div>
                  <div className="user-info">
                    <span className="user-name">{currentUser.name}</span>
                    <span className="user-role">{currentUser.role}</span>
                  </div>
                </button>
                <ul className="dropdown-menu dropdown-menu-end shadow border-0 mt-2">
                  <li>
                    <Link className="dropdown-item" to="/admin/employees/profile">
                      <i className="fas fa-user me-2" />
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/admin/settings/company">
                      <i className="fas fa-gear me-2" />
                      Settings
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/admin/auth/change-password">
                      <i className="fas fa-key me-2" />
                      Change Password
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item text-danger" to="/admin/auth/login">
                      <i className="fas fa-right-from-bracket me-2" />
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </header>

          <nav className="breadcrumb-nav px-4 pt-3" aria-label="breadcrumb">
            <ol className="breadcrumb">
              {breadcrumbs.map((crumb, i) =>
                i === breadcrumbs.length - 1 ? (
                  <li key={crumb.label} className="breadcrumb-item active" aria-current="page">
                    {crumb.label}
                  </li>
                ) : (
                  <li key={crumb.label} className="breadcrumb-item">
                    {crumb.path ? <Link to={crumb.path}>{crumb.label}</Link> : crumb.label}
                  </li>
                ),
              )}
            </ol>
          </nav>

          <div className="app-content">
            <Outlet key={location.pathname} />
          </div>

          <footer className="app-footer">
            <span>&copy; 2026 RITMAX. All rights reserved.</span>
            <span>Version 1.0.0 &middot; Hyderabad, Telangana, India</span>
          </footer>
        </div>
      </div>

      <div
        className={`overlay ${notificationsOpen ? 'active' : ''}`}
        onClick={() => setNotificationsOpen(false)}
        onKeyDown={() => undefined}
        role="presentation"
      />
      <div className={`notification-panel ${notificationsOpen ? 'open' : ''}`}>
        <div className="notification-panel-header">
          <h6 className="mb-0 fw-semibold">Notifications</h6>
          <div>
            <button type="button" className="btn btn-sm btn-link text-decoration-none" onClick={markAllRead}>
              Mark all read
            </button>
            <button
              type="button"
              className="btn btn-sm btn-link text-decoration-none"
              onClick={() => setNotificationsOpen(false)}
            >
              <i className="fas fa-times" />
            </button>
          </div>
        </div>
        <div className="notification-panel-body">
          {notifications.map((n) => (
            <div key={n.id} className={`notification-item ${n.unread ? 'unread' : ''}`}>
              <div className={`notification-icon ${n.iconClass}`}>
                <i className={`fas ${n.icon}`} />
              </div>
              <div>
                <div className="fw-semibold small">{n.title}</div>
                <div className="text-muted small">{n.message}</div>
                <div className="text-muted" style={{ fontSize: '0.7rem' }}>
                  {n.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  )
}

export function AdminLayoutRoute({
  pageId,
  breadcrumbs,
}: AdminLayoutProps) {
  return <AdminLayout pageId={pageId} breadcrumbs={breadcrumbs} />
}
