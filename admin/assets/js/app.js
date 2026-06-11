/**
 * RITMAX - Core Application JavaScript
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    initSidebar();
    initNotifications();
    initFormValidation();
    initPasswordToggle();
  });

  function initSidebar() {
    const sidebar = document.getElementById('sidebar');
    const toggle = document.getElementById('sidebarToggle');
    const backdrop = document.getElementById('sidebarBackdrop');

    if (!sidebar || !toggle) return;

    const collapsed = localStorage.getItem('sidebarCollapsed') === 'true';
    if (collapsed && window.innerWidth >= 992) {
      sidebar.classList.add('collapsed');
      document.body.classList.add('sidebar-collapsed');
    }

    toggle.addEventListener('click', function () {
      if (window.innerWidth < 992) {
        sidebar.classList.toggle('mobile-open');
        backdrop.classList.toggle('active');
      } else {
        sidebar.classList.toggle('collapsed');
        document.body.classList.toggle('sidebar-collapsed');
        localStorage.setItem('sidebarCollapsed', sidebar.classList.contains('collapsed'));
      }
    });

    if (backdrop) {
      backdrop.addEventListener('click', function () {
        sidebar.classList.remove('mobile-open');
        backdrop.classList.remove('active');
      });
    }
  }

  function initNotifications() {
    const btn = document.getElementById('notificationBtn');
    const panel = document.getElementById('notificationPanel');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('closeNotifications');
    const markAll = document.getElementById('markAllRead');

    if (!btn || !panel) return;

    function openPanel() {
      panel.classList.add('open');
      overlay.classList.add('active');
    }

    function closePanel() {
      panel.classList.remove('open');
      overlay.classList.remove('active');
    }

    btn.addEventListener('click', openPanel);
    if (closeBtn) closeBtn.addEventListener('click', closePanel);
    if (overlay) overlay.addEventListener('click', closePanel);

    if (markAll) {
      markAll.addEventListener('click', function () {
        document.querySelectorAll('.notification-item.unread').forEach(function (el) {
          el.classList.remove('unread');
        });
      });
    }
  }

  function initFormValidation() {
    document.querySelectorAll('form[data-validate]').forEach(function (form) {
      form.addEventListener('submit', function (e) {
        if (!form.checkValidity()) {
          e.preventDefault();
          e.stopPropagation();
        }
        form.classList.add('was-validated');
      });
    });
  }

  function initPasswordToggle() {
    document.querySelectorAll('.password-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const input = btn.parentElement.querySelector('input');
        const icon = btn.querySelector('i');
        if (input.type === 'password') {
          input.type = 'text';
          icon.classList.replace('fa-eye', 'fa-eye-slash');
        } else {
          input.type = 'password';
          icon.classList.replace('fa-eye-slash', 'fa-eye');
        }
      });
    });
  }
})();
