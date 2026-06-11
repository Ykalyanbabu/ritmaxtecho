/**
 * RITMAX - Chart.js Initialization
 */
(function () {
  'use strict';

  const colors = {
    primary: '#005151',
    primaryLight: 'rgba(0, 81, 81, 0.1)',
    success: '#10B981',
    warning: '#FFBF3F',
    danger: '#EF4444',
    info: '#005151',
    gray: '#94A3B8'
  };

  const chartDefaults = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: { grid: { display: false }, ticks: { font: { size: 11 }, color: '#64748B' } },
      y: { grid: { color: '#E2E8F0' }, ticks: { font: { size: 11 }, color: '#64748B' } }
    }
  };

  document.addEventListener('DOMContentLoaded', function () {
    initSalaryExpenseChart();
    initAttendanceChart();
    initPayrollTrendChart();
    initDepartmentChart();
    initTaxChart();
    initLeaveChart();
  });

  function initSalaryExpenseChart() {
    const el = document.getElementById('salaryExpenseChart');
    if (!el || typeof Chart === 'undefined') return;

    new Chart(el, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Salary Expense',
          data: [34860000, 36105000, 37184000, 37516000, 38263000, 39425000],
          backgroundColor: colors.primary,
          borderRadius: 6,
          barThickness: 32
        }]
      },
      options: {
        ...chartDefaults,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: function (ctx) {
                return '₹' + ctx.parsed.y.toLocaleString('en-IN');
              }
            }
          }
        }
      }
    });
  }

  function initAttendanceChart() {
    const el = document.getElementById('attendanceChart');
    if (!el || typeof Chart === 'undefined') return;

    new Chart(el, {
      type: 'doughnut',
      data: {
        labels: ['Present', 'Absent', 'On Leave', 'Remote'],
        datasets: [{
          data: [215, 8, 12, 13],
          backgroundColor: [colors.success, colors.danger, colors.warning, colors.primary],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: { padding: 16, usePointStyle: true, font: { size: 11 } }
          }
        }
      }
    });
  }

  function initPayrollTrendChart() {
    const el = document.getElementById('payrollTrendChart');
    if (!el || typeof Chart === 'undefined') return;

    new Chart(el, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Net Payroll',
          data: [31540000, 32536000, 33283000, 33615000, 34196000, 34860000],
          borderColor: colors.primary,
          backgroundColor: colors.primaryLight,
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointBackgroundColor: colors.primary
        }]
      },
      options: chartDefaults
    });
  }

  function initDepartmentChart() {
    const el = document.getElementById('departmentChart');
    if (!el || typeof Chart === 'undefined') return;

    new Chart(el, {
      type: 'bar',
      data: {
        labels: ['Engineering', 'Sales', 'Marketing', 'HR', 'Finance', 'Operations'],
        datasets: [{
          label: 'Headcount',
          data: [85, 42, 28, 15, 22, 56],
          backgroundColor: [colors.primary, colors.info, colors.success, colors.warning, colors.danger, colors.gray],
          borderRadius: 6
        }]
      },
      options: { ...chartDefaults, indexAxis: 'y' }
    });
  }

  function initTaxChart() {
    const el = document.getElementById('taxChart');
    if (!el || typeof Chart === 'undefined') return;

    new Chart(el, {
      type: 'pie',
      data: {
        labels: ['Income Tax (TDS)', 'Professional Tax', 'Provident Fund', 'ESI', 'Other'],
        datasets: [{
          data: [35, 18, 22, 15, 10],
          backgroundColor: [colors.primary, colors.info, colors.success, colors.warning, colors.gray],
          borderWidth: 2,
          borderColor: '#fff'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'right', labels: { font: { size: 11 } } }
        }
      }
    });
  }

  function initLeaveChart() {
    const el = document.getElementById('leaveChart');
    if (!el || typeof Chart === 'undefined') return;

    new Chart(el, {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [
          { label: 'Approved', data: [5, 3, 7, 4, 6], backgroundColor: colors.success, borderRadius: 4 },
          { label: 'Pending', data: [2, 1, 3, 2, 1], backgroundColor: colors.warning, borderRadius: 4 }
        ]
      },
      options: {
        ...chartDefaults,
        plugins: { legend: { position: 'top', labels: { font: { size: 11 } } } }
      }
    });
  }
})();
