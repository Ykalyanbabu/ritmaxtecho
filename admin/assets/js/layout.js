/**
 * RITMAX - Layout Component Loader
 * Injects reusable sidebar, header, footer, and notification panel.
 */
(function () {
  'use strict';

  const basePath = document.body.dataset.basePath || '';

  const navItems = [
  {
    section: 'Main',
    items: [
      { id: 'dashboard', icon: 'fa-gauge-high', label: 'Dashboard', href: `${basePath}index.html` }
    ]
  },
  {
    section: 'Workforce',
    items: [
      {
        id: 'employees', icon: 'fa-users', label: 'Employees', href: '#',
        children: [
          { id: 'employees-list', label: 'Employee List', href: `${basePath}pages/employees/index.html` },
          { id: 'employees-add', label: 'Add Employee', href: `${basePath}pages/employees/add.html` }
        ]
      },
      {
        id: 'departments', icon: 'fa-building', label: 'Departments', href: '#',
        children: [
          { id: 'departments-list', label: 'Department List', href: `${basePath}pages/departments/index.html` },
          { id: 'departments-form', label: 'Add Department', href: `${basePath}pages/departments/form.html` }
        ]
      }
    ]
  },
  {
    section: 'Payroll',
    items: [
      {
        id: 'payroll', icon: 'fa-money-check-dollar', label: 'Payroll', href: '#', badge: '3',
        children: [
          { id: 'payroll-generation', label: 'Generation', href: `${basePath}pages/payroll/generation.html` },
          { id: 'payroll-calculation', label: 'Calculation', href: `${basePath}pages/payroll/calculation.html` },
          { id: 'payroll-payslip', label: 'Payslips', href: `${basePath}pages/payroll/payslip.html` },
          { id: 'payroll-bulk', label: 'Bulk Processing', href: `${basePath}pages/payroll/bulk.html` }
        ]
      },
      {
        id: 'tax', icon: 'fa-file-invoice-dollar', label: 'Tax Management', href: '#',
        children: [
          { id: 'tax-config', label: 'Configuration', href: `${basePath}pages/tax/config.html` },
          { id: 'tax-deductions', label: 'Deduction Reports', href: `${basePath}pages/tax/deductions.html` }
        ]
      }
    ]
  },
  {
    section: 'Operations',
    items: [
      {
        id: 'attendance', icon: 'fa-calendar-check', label: 'Attendance', href: '#',
        children: [
          { id: 'attendance-dashboard', label: 'Dashboard', href: `${basePath}pages/attendance/index.html` },
          { id: 'attendance-records', label: 'Daily Records', href: `${basePath}pages/attendance/records.html` },
          { id: 'attendance-leave', label: 'Leave Management', href: `${basePath}pages/attendance/leave.html` },
          { id: 'attendance-holidays', label: 'Holiday Calendar', href: `${basePath}pages/attendance/holidays.html` }
        ]
      },
      {
        id: 'reports', icon: 'fa-chart-pie', label: 'Reports', href: '#',
        children: [
          { id: 'reports-payroll', label: 'Payroll Reports', href: `${basePath}pages/reports/payroll.html` },
          { id: 'reports-attendance', label: 'Attendance Reports', href: `${basePath}pages/reports/attendance.html` },
          { id: 'reports-tax', label: 'Tax Reports', href: `${basePath}pages/reports/tax.html` }
        ]
      }
    ]
  },
  {
    section: 'Administration',
    items: [
      {
        id: 'users', icon: 'fa-user-shield', label: 'User Management', href: '#',
        children: [
          { id: 'users-list', label: 'User List', href: `${basePath}pages/users/index.html` },
          { id: 'users-roles', label: 'Role Management', href: `${basePath}pages/users/roles.html` },
          { id: 'users-access', label: 'Access Control', href: `${basePath}pages/users/access.html` }
        ]
      },
      {
        id: 'settings', icon: 'fa-gear', label: 'Settings', href: '#',
        children: [
          { id: 'settings-company', label: 'Company Profile', href: `${basePath}pages/settings/company.html` },
          { id: 'settings-payroll', label: 'Payroll Settings', href: `${basePath}pages/settings/payroll.html` },
          { id: 'settings-roles', label: 'Roles & Permissions', href: `${basePath}pages/settings/roles.html` },
          { id: 'settings-notifications', label: 'Notifications', href: `${basePath}pages/settings/notifications.html` }
        ]
      }
    ]
  }
];

  function buildSidebar() {
    const currentPage = document.body.dataset.page || '';
    let html = `
      <aside class="app-sidebar" id="sidebar">
        <div class="sidebar-brand">
          <div class="sidebar-brand-icon"><i class="fas fa-wallet"></i></div>
          <div class="sidebar-brand-text">RIT<span>MAX</span></div>
        </div>
        <nav class="sidebar-nav"><ul class="list-unstyled mb-0">`;

    navItems.forEach(section => {
      html += `<li class="nav-section-title">${section.section}</li>`;
      section.items.forEach(item => {
        const isParentActive = item.children && item.children.some(c => c.id === currentPage);
        const isActive = item.id === currentPage || isParentActive;
        if (item.children) {
          html += `
            <li class="nav-item">
              <a class="nav-link ${isActive ? 'active' : ''}" href="${item.href}"
                 data-bs-toggle="collapse" data-bs-target="#submenu-${item.id}"
                 aria-expanded="${isActive ? 'true' : 'false'}">
                <i class="fas ${item.icon} nav-icon"></i>
                <span class="nav-label">${item.label}</span>
                ${item.badge ? `<span class="nav-badge">${item.badge}</span>` : ''}
                <i class="fas fa-chevron-right nav-arrow"></i>
              </a>
              <ul class="submenu collapse ${isActive ? 'show' : ''}" id="submenu-${item.id}">`;
          item.children.forEach(child => {
            html += `
              <li class="nav-item">
                <a class="nav-link ${child.id === currentPage ? 'active' : ''}" href="${child.href}">
                  <span class="nav-label">${child.label}</span>
                </a>
              </li>`;
          });
          html += `</ul></li>`;
        } else {
          html += `
            <li class="nav-item">
              <a class="nav-link ${isActive ? 'active' : ''}" href="${item.href}">
                <i class="fas ${item.icon} nav-icon"></i>
                <span class="nav-label">${item.label}</span>
              </a>
            </li>`;
        }
      });
    });

    html += `</ul></nav></aside><div class="sidebar-backdrop" id="sidebarBackdrop"></div>`;
    return html;
  }

  function buildHeader() {
    const breadcrumbs = document.body.dataset.breadcrumbs
      ? JSON.parse(document.body.dataset.breadcrumbs)
      : [{ label: 'Home', href: `${basePath}index.html` }, { label: 'Dashboard' }];

    let breadcrumbHtml = breadcrumbs.map((crumb, i) => {
      if (i === breadcrumbs.length - 1) {
        return `<li class="breadcrumb-item active" aria-current="page">${crumb.label}</li>`;
      }
      return `<li class="breadcrumb-item"><a href="${crumb.href || '#'}">${crumb.label}</a></li>`;
    }).join('');

    return `
      <header class="app-header">
        <button class="header-toggle" id="sidebarToggle" aria-label="Toggle sidebar">
          <i class="fas fa-bars"></i>
        </button>
        <div class="header-search">
          <i class="fas fa-search"></i>
          <input type="search" placeholder="Search employees, payroll, reports..." id="globalSearch" aria-label="Global search">
        </div>
        <div class="header-actions">
          <button class="header-action-btn" id="notificationBtn" aria-label="Notifications">
            <i class="fas fa-bell"></i>
            <span class="badge-dot"></span>
          </button>
          <button class="header-action-btn" aria-label="Help">
            <i class="fas fa-circle-question"></i>
          </button>
          <div class="dropdown">
            <button class="user-profile-dropdown dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <div class="user-avatar">RK</div>
              <div class="user-info">
                <span class="user-name">Rajesh Kumar</span>
                <span class="user-role">HR Administrator</span>
              </div>
            </button>
            <ul class="dropdown-menu dropdown-menu-end shadow border-0 mt-2">
              <li><a class="dropdown-item" href="${basePath}pages/employees/profile.html"><i class="fas fa-user me-2"></i>My Profile</a></li>
              <li><a class="dropdown-item" href="${basePath}pages/settings/company.html"><i class="fas fa-gear me-2"></i>Settings</a></li>
              <li><a class="dropdown-item" href="${basePath}pages/auth/change-password.html"><i class="fas fa-key me-2"></i>Change Password</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item text-danger" href="${basePath}pages/auth/login.html"><i class="fas fa-right-from-bracket me-2"></i>Logout</a></li>
            </ul>
          </div>
        </div>
      </header>
      <nav class="breadcrumb-nav px-4 pt-3" aria-label="breadcrumb">
        <ol class="breadcrumb">${breadcrumbHtml}</ol>
      </nav>`;
  }

  function buildFooter() {
    return `
      <footer class="app-footer">
        <span>&copy; 2026 RITMAX. All rights reserved.</span>
        <span>Version 1.0.0 &middot; Hyderabad, Telangana, India</span>
      </footer>`;
  }

  function buildNotificationPanel() {
    return `
      <div class="overlay" id="overlay"></div>
      <div class="notification-panel" id="notificationPanel">
        <div class="notification-panel-header">
          <h6 class="mb-0 fw-semibold">Notifications</h6>
          <div>
            <button class="btn btn-sm btn-link text-decoration-none" id="markAllRead">Mark all read</button>
            <button class="btn btn-sm btn-link text-decoration-none" id="closeNotifications"><i class="fas fa-times"></i></button>
          </div>
        </div>
        <div class="notification-panel-body">
          <div class="notification-item unread">
            <div class="notification-icon payroll"><i class="fas fa-money-bill-wave"></i></div>
            <div>
              <div class="fw-semibold small">RITMAXcessed for March 2026</div>
              <div class="text-muted small">248 employees paid successfully</div>
              <div class="text-muted" style="font-size:0.7rem">2 hours ago</div>
            </div>
          </div>
          <div class="notification-item unread">
            <div class="notification-icon attendance"><i class="fas fa-user-clock"></i></div>
            <div>
              <div class="fw-semibold small">5 leave requests pending approval</div>
              <div class="text-muted small">Requires your review</div>
              <div class="text-muted" style="font-size:0.7rem">4 hours ago</div>
            </div>
          </div>
          <div class="notification-item">
            <div class="notification-icon alert"><i class="fas fa-triangle-exclamation"></i></div>
            <div>
              <div class="fw-semibold small">TDS return filing deadline approaching</div>
              <div class="text-muted small">Q4 FY 2025-26 due in 5 days</div>
              <div class="text-muted" style="font-size:0.7rem">Yesterday</div>
            </div>
          </div>
          <div class="notification-item">
            <div class="notification-icon payroll"><i class="fas fa-file-invoice"></i></div>
            <div>
              <div class="fw-semibold small">New employee onboarded</div>
              <div class="text-muted small">Arjun Mehta joined Sales — Hyderabad office</div>
              <div class="text-muted" style="font-size:0.7rem">2 days ago</div>
            </div>
          </div>
        </div>
      </div>`;
  }

  function initLayout() {
    const sidebarContainer = document.getElementById('sidebar-container');
    const headerContainer = document.getElementById('header-container');
    const footerContainer = document.getElementById('footer-container');

    if (sidebarContainer) sidebarContainer.outerHTML = buildSidebar();
    if (headerContainer) headerContainer.outerHTML = buildHeader();
    if (footerContainer) footerContainer.outerHTML = buildFooter();

    if (!document.getElementById('notificationPanel')) {
      document.body.insertAdjacentHTML('beforeend', buildNotificationPanel());
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLayout);
  } else {
    initLayout();
  }
})();
