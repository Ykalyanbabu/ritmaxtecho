import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'
import { company } from '@/shared/data/company'
import { payslips, type PayslipData } from '@/shared/data/payslips'

function sumLines(lines: { amount: number }[]) {
  return lines.reduce((total, line) => total + line.amount, 0)
}

function formatINR(amount: number) {
  return 'Rs. ' + amount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

function amountInWords(num: number) {
  const a = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
    'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
  const b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']

  function inWords(n: number): string {
    if (n < 20) return a[n]
    if (n < 100) return b[Math.floor(n / 10)] + (n % 10 ? ' ' + a[n % 10] : '')
    if (n < 1000) return a[Math.floor(n / 100)] + ' Hundred' + (n % 100 ? ' ' + inWords(n % 100) : '')
    if (n < 100000) return inWords(Math.floor(n / 1000)) + ' Thousand' + (n % 1000 ? ' ' + inWords(n % 1000) : '')
    if (n < 10000000) return inWords(Math.floor(n / 100000)) + ' Lakh' + (n % 100000 ? ' ' + inWords(n % 100000) : '')
    return inWords(Math.floor(n / 10000000)) + ' Crore' + (n % 10000000 ? ' ' + inWords(n % 10000000) : '')
  }

  const rupees = Math.floor(num)
  const paise = Math.round((num - rupees) * 100)
  let words = inWords(rupees) + ' Rupees'
  if (paise > 0) words += ' and ' + inWords(paise) + ' Paise'
  return words + ' Only'
}

function buildPdf(employeeName: string, data: PayslipData) {
  const gross = sumLines(data.earnings)
  const totalDeductions = sumLines(data.deductions)
  const netPay = gross - totalDeductions

  const doc = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' })
  const pageWidth = doc.internal.pageSize.getWidth()
  const margin = 14
  let y = margin

  doc.setFillColor(0, 81, 81)
  doc.rect(0, 0, pageWidth, 32, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(18)
  doc.setFont('helvetica', 'bold')
  doc.text(company.name, margin, 14)
  doc.setFontSize(9)
  doc.setFont('helvetica', 'normal')
  doc.text(`${company.address}, ${company.city}`, margin, 20)
  doc.text(`GSTIN: ${company.gstin}  |  PAN: ${company.pan}  |  ${company.phone}`, margin, 26)

  y = 40
  doc.setTextColor(15, 23, 42)
  doc.setFontSize(14)
  doc.setFont('helvetica', 'bold')
  doc.text('SALARY PAYSLIP', margin, y)
  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(100, 116, 139)
  doc.text(`Pay Period: ${data.period}  |  Pay Date: ${data.payDate}`, pageWidth - margin, y, { align: 'right' })

  y += 8
  doc.setDrawColor(226, 232, 240)
  doc.line(margin, y, pageWidth - margin, y)
  y += 8

  const col1x = margin
  const col2x = pageWidth / 2 + 4

  const labelValue = (x: number, yy: number, label: string, value: string) => {
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(100, 116, 139)
    doc.text(label, x, yy)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(15, 23, 42)
    doc.text(value, x + 38, yy)
  }

  labelValue(col1x, y, 'Employee Name:', employeeName)
  labelValue(col2x, y, 'Employee ID:', data.empId)
  y += 6
  labelValue(col1x, y, 'Department:', data.department)
  labelValue(col2x, y, 'Designation:', data.designation)
  y += 6
  labelValue(col1x, y, 'PAN:', data.pan)
  labelValue(col2x, y, 'UAN:', data.uan)
  y += 6
  labelValue(col1x, y, 'Bank:', `${data.bank} (${data.ifsc})`)
  labelValue(col2x, y, 'Account:', data.account)
  y += 6
  labelValue(col1x, y, 'Location:', data.location)
  labelValue(col2x, y, 'Paid Days / LOP:', `${data.paidDays} / ${data.lopDays}`)

  y += 10

  autoTable(doc, {
    startY: y,
    head: [['Earnings', 'Amount (INR)']],
    body: data.earnings.map((r) => [r.description, formatINR(r.amount)]),
    foot: [['Gross Earnings', formatINR(gross)]],
    margin: { left: margin, right: pageWidth / 2 + 2 },
    theme: 'grid',
    headStyles: { fillColor: [0, 81, 81], textColor: 255, fontSize: 9 },
    footStyles: { fillColor: [228, 242, 241], textColor: [15, 23, 42], fontStyle: 'bold', fontSize: 9 },
    styles: { fontSize: 9, cellPadding: 3 },
    columnStyles: { 1: { halign: 'right' } },
  })

  const earningsEndY = (doc as jsPDF & { lastAutoTable: { finalY: number } }).lastAutoTable.finalY

  autoTable(doc, {
    startY: y,
    head: [['Deductions', 'Amount (INR)']],
    body: data.deductions.map((r) => [r.description, formatINR(r.amount)]),
    foot: [['Total Deductions', formatINR(totalDeductions)]],
    margin: { left: pageWidth / 2 + 2, right: margin },
    theme: 'grid',
    headStyles: { fillColor: [0, 81, 81], textColor: 255, fontSize: 9 },
    footStyles: { fillColor: [254, 242, 242], textColor: [185, 28, 28], fontStyle: 'bold', fontSize: 9 },
    styles: { fontSize: 9, cellPadding: 3 },
    columnStyles: { 1: { halign: 'right' } },
  })

  y = Math.max(earningsEndY, (doc as jsPDF & { lastAutoTable: { finalY: number } }).lastAutoTable.finalY) + 10

  doc.setFillColor(228, 242, 241)
  doc.rect(margin, y, pageWidth - margin * 2, 18, 'F')
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(12)
  doc.setTextColor(0, 81, 81)
  doc.text('Net Pay: ' + formatINR(netPay), margin + 4, y + 8)
  doc.setFontSize(8)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(100, 116, 139)
  doc.text('In words: ' + amountInWords(netPay), margin + 4, y + 14, { maxWidth: pageWidth - margin * 2 - 8 })

  y += 26
  doc.setFontSize(8)
  doc.setTextColor(148, 163, 184)
  doc.text('This is a system-generated payslip and does not require a signature.', margin, y)
  doc.text('Confidential — For employee use only. | RITMAX — Hyderabad, Telangana, India', margin, y + 4)

  const filename = `Payslip_${data.empId}_${data.period.replace(/\s+/g, '_')}.pdf`
  doc.save(filename)
}

export function downloadPayslip(employeeName: string) {
  const data = payslips[employeeName]
  if (!data) {
    alert('Demo payslip not available for ' + employeeName)
    return
  }
  buildPdf(employeeName, data)
}

export function downloadAllDemoPayslips() {
  ;['Priya Sharma', 'Rahul Reddy'].forEach((name, i) => {
    setTimeout(() => downloadPayslip(name), i * 600)
  })
}
