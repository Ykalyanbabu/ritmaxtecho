import { useEffect, useRef } from 'react'
import { Chart } from '@/shared/lib/chartSetup'
import {
  attendanceData,
  chartColors,
  departmentData,
  leaveData,
  payrollTrendData,
  salaryExpenseData,
  taxData,
} from '@/shared/data/charts'

const chartDefaults = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  scales: {
    x: { grid: { display: false }, ticks: { font: { size: 11 }, color: '#64748B' } },
    y: { grid: { color: '#E2E8F0' }, ticks: { font: { size: 11 }, color: '#64748B' } },
  },
}

export function useDashboardCharts() {
  const salaryRef = useRef<HTMLCanvasElement>(null)
  const attendanceRef = useRef<HTMLCanvasElement>(null)
  const payrollRef = useRef<HTMLCanvasElement>(null)
  const departmentRef = useRef<HTMLCanvasElement>(null)
  const taxRef = useRef<HTMLCanvasElement>(null)
  const leaveRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const charts: Chart[] = []

    if (salaryRef.current) {
      charts.push(
        new Chart(salaryRef.current, {
          type: 'bar',
          data: {
            labels: salaryExpenseData.labels,
            datasets: [{
              label: 'Salary Expense',
              data: salaryExpenseData.values,
              backgroundColor: chartColors.primary,
              borderRadius: 6,
              barThickness: 32,
            }],
          },
          options: {
            ...chartDefaults,
            plugins: {
              legend: { display: false },
              tooltip: {
                callbacks: {
                  label: (ctx) => '₹' + (ctx.parsed.y ?? 0).toLocaleString('en-IN'),
                },
              },
            },
          },
        }),
      )
    }

    if (attendanceRef.current) {
      charts.push(
        new Chart(attendanceRef.current, {
          type: 'doughnut',
          data: {
            labels: attendanceData.labels,
            datasets: [{
              data: attendanceData.values,
              backgroundColor: [chartColors.success, chartColors.danger, chartColors.warning, chartColors.primary],
              borderWidth: 0,
            }],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            plugins: {
              legend: {
                position: 'bottom',
                labels: { padding: 16, usePointStyle: true, font: { size: 11 } },
              },
            },
          },
        }),
      )
    }

    if (payrollRef.current) {
      charts.push(
        new Chart(payrollRef.current, {
          type: 'line',
          data: {
            labels: payrollTrendData.labels,
            datasets: [{
              label: 'Net Payroll',
              data: payrollTrendData.values,
              borderColor: chartColors.primary,
              backgroundColor: chartColors.primaryLight,
              fill: true,
              tension: 0.4,
              pointRadius: 4,
              pointBackgroundColor: chartColors.primary,
            }],
          },
          options: chartDefaults,
        }),
      )
    }

    if (departmentRef.current) {
      charts.push(
        new Chart(departmentRef.current, {
          type: 'bar',
          data: {
            labels: departmentData.labels,
            datasets: [{
              label: 'Headcount',
              data: departmentData.values,
              backgroundColor: [chartColors.primary, chartColors.info, chartColors.success, chartColors.warning, chartColors.danger, chartColors.gray],
              borderRadius: 6,
            }],
          },
          options: { ...chartDefaults, indexAxis: 'y' },
        }),
      )
    }

    if (taxRef.current) {
      charts.push(
        new Chart(taxRef.current, {
          type: 'pie',
          data: {
            labels: taxData.labels,
            datasets: [{
              data: taxData.values,
              backgroundColor: [chartColors.primary, chartColors.info, chartColors.success, chartColors.warning, chartColors.gray],
              borderWidth: 2,
              borderColor: '#fff',
            }],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: 'right', labels: { font: { size: 11 } } } },
          },
        }),
      )
    }

    if (leaveRef.current) {
      charts.push(
        new Chart(leaveRef.current, {
          type: 'bar',
          data: {
            labels: leaveData.labels,
            datasets: [
              { label: 'Approved', data: leaveData.approved, backgroundColor: chartColors.success, borderRadius: 4 },
              { label: 'Pending', data: leaveData.pending, backgroundColor: chartColors.warning, borderRadius: 4 },
            ],
          },
          options: {
            ...chartDefaults,
            plugins: { legend: { position: 'top', labels: { font: { size: 11 } } } },
          },
        }),
      )
    }

    return () => charts.forEach((c) => c.destroy())
  }, [])

  return { salaryRef, attendanceRef, payrollRef, departmentRef, taxRef, leaveRef }
}
