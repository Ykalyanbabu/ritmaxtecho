/**
 * RITMAX - Payslip PDF Generator (demo data)
 */
(function () {
  'use strict';

  const COMPANY = {
    name: 'RITMAX Techo Systems Pvt. Ltd.',
    address: 'Plot No. 12, Cyber Towers Road, HITEC City',
    city: 'Madhapur, Hyderabad, Telangana 500081',
    gstin: '36AABCP1234A1Z5',
    pan: 'AABCP1234A',
    phone: '+91 40 4012 3456'
  };

  const PAYSLIPS = {
    'Priya Sharma': {
      empId: 'EMP-001',
      department: 'Engineering',
      designation: 'Senior Developer',
      location: 'Hyderabad',
      uan: '101234567890',
      pan: 'ABCDE1234F',
      bank: 'HDFC Bank',
      account: 'XXXXXX7890',
      ifsc: 'HDFC0001234',
      joinDate: '10 Jan 2022',
      payDate: '30 Jun 2026',
      period: 'June 2026',
      paidDays: 22,
      lopDays: 0,
      earnings: [
        ['Basic Salary', 75000],
        ['HRA', 7500],
        ['Special Allowance', 2500]
      ],
      deductions: [
        ['Provident Fund (PF)', 5270],
        ['ESI', 780],
        ['Professional Tax (Telangana)', 200],
        ['Income Tax (TDS)', 6500]
      ]
    },
    'Rahul Reddy': {
      empId: 'EMP-002',
      department: 'Sales',
      designation: 'Account Executive',
      location: 'Hyderabad',
      uan: '101234567891',
      pan: 'FGHIJ5678K',
      bank: 'State Bank of India',
      account: 'XXXXXX4521',
      ifsc: 'SBIN0001234',
      joinDate: '15 Mar 2021',
      payDate: '30 Jun 2026',
      period: 'June 2026',
      paidDays: 22,
      lopDays: 0,
      earnings: [
        ['Basic Salary', 55000],
        ['HRA', 5500],
        ['Travel Allowance', 1500]
      ],
      deductions: [
        ['Provident Fund (PF)', 3840],
        ['ESI', 570],
        ['Professional Tax (Telangana)', 200],
        ['Income Tax (TDS)', 4690]
      ]
    },
    'Ananya Rao': {
      empId: 'EMP-003',
      department: 'Marketing',
      designation: 'Marketing Manager',
      location: 'Hyderabad',
      uan: '101234567892',
      pan: 'KLMNO9012P',
      bank: 'ICICI Bank',
      account: 'XXXXXX3344',
      ifsc: 'ICIC0001234',
      joinDate: '01 Aug 2020',
      payDate: '30 Jun 2026',
      period: 'June 2026',
      paidDays: 20,
      lopDays: 2,
      earnings: [
        ['Basic Salary', 64000],
        ['HRA', 6400],
        ['Special Allowance', 600]
      ],
      deductions: [
        ['Provident Fund (PF)', 4400],
        ['ESI', 650],
        ['Professional Tax (Telangana)', 200],
        ['Income Tax (TDS)', 5400]
      ]
    }
  };

  function sumRows(rows) {
    return rows.reduce(function (total, row) { return total + row[1]; }, 0);
  }

  function formatINR(amount) {
    return 'Rs. ' + amount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  function amountInWords(num) {
    var a = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
      'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    var b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    function inWords(n) {
      if (n < 20) return a[n];
      if (n < 100) return b[Math.floor(n / 10)] + (n % 10 ? ' ' + a[n % 10] : '');
      if (n < 1000) return a[Math.floor(n / 100)] + ' Hundred' + (n % 100 ? ' ' + inWords(n % 100) : '');
      if (n < 100000) return inWords(Math.floor(n / 1000)) + ' Thousand' + (n % 1000 ? ' ' + inWords(n % 1000) : '');
      if (n < 10000000) return inWords(Math.floor(n / 100000)) + ' Lakh' + (n % 100000 ? ' ' + inWords(n % 100000) : '');
      return inWords(Math.floor(n / 10000000)) + ' Crore' + (n % 10000000 ? ' ' + inWords(n % 10000000) : '');
    }

    var rupees = Math.floor(num);
    var paise = Math.round((num - rupees) * 100);
    var words = inWords(rupees) + ' Rupees';
    if (paise > 0) words += ' and ' + inWords(paise) + ' Paise';
    return words + ' Only';
  }

  function downloadPayslip(employeeName) {
    if (typeof window.jspdf === 'undefined') {
      alert('PDF library not loaded. Please refresh the page.');
      return;
    }

    var data = PAYSLIPS[employeeName];
    if (!data) {
      alert('Demo payslip not available for ' + employeeName);
      return;
    }

    var gross = sumRows(data.earnings);
    var totalDeductions = sumRows(data.deductions);
    var netPay = gross - totalDeductions;

    var jsPDF = window.jspdf.jsPDF;
    var doc = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });
    var pageWidth = doc.internal.pageSize.getWidth();
    var margin = 14;
    var y = margin;

    doc.setFillColor(37, 99, 235);
    doc.rect(0, 0, pageWidth, 32, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text(COMPANY.name, margin, 14);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text(COMPANY.address + ', ' + COMPANY.city, margin, 20);
    doc.text('GSTIN: ' + COMPANY.gstin + '  |  PAN: ' + COMPANY.pan + '  |  ' + COMPANY.phone, margin, 26);

    y = 40;
    doc.setTextColor(15, 23, 42);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('SALARY PAYSLIP', margin, y);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 116, 139);
    doc.text('Pay Period: ' + data.period + '  |  Pay Date: ' + data.payDate, pageWidth - margin, y, { align: 'right' });

    y += 8;
    doc.setDrawColor(226, 232, 240);
    doc.line(margin, y, pageWidth - margin, y);
    y += 8;

    doc.setTextColor(15, 23, 42);
    doc.setFontSize(9);

    var col1x = margin;
    var col2x = pageWidth / 2 + 4;

    function labelValue(x, yy, label, value) {
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(100, 116, 139);
      doc.text(label, x, yy);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(15, 23, 42);
      doc.text(String(value), x + 38, yy);
    }

    labelValue(col1x, y, 'Employee Name:', employeeName);
    labelValue(col2x, y, 'Employee ID:', data.empId);
    y += 6;
    labelValue(col1x, y, 'Department:', data.department);
    labelValue(col2x, y, 'Designation:', data.designation);
    y += 6;
    labelValue(col1x, y, 'PAN:', data.pan);
    labelValue(col2x, y, 'UAN:', data.uan);
    y += 6;
    labelValue(col1x, y, 'Bank:', data.bank + ' (' + data.ifsc + ')');
    labelValue(col2x, y, 'Account:', data.account);
    y += 6;
    labelValue(col1x, y, 'Location:', data.location);
    labelValue(col2x, y, 'Paid Days / LOP:', data.paidDays + ' / ' + data.lopDays);

    y += 10;

    if (typeof doc.autoTable === 'function') {
      var earningsBody = data.earnings.map(function (r) { return [r[0], formatINR(r[1])]; });
      var deductionsBody = data.deductions.map(function (r) { return [r[0], formatINR(r[1])]; });

      doc.autoTable({
        startY: y,
        head: [['Earnings', 'Amount (INR)']],
        body: earningsBody,
        foot: [['Gross Earnings', formatINR(gross)]],
        margin: { left: margin, right: pageWidth / 2 + 2 },
        theme: 'grid',
        headStyles: { fillColor: [37, 99, 235], textColor: 255, fontSize: 9 },
        footStyles: { fillColor: [239, 246, 255], textColor: [15, 23, 42], fontStyle: 'bold', fontSize: 9 },
        styles: { fontSize: 9, cellPadding: 3 },
        columnStyles: { 1: { halign: 'right' } }
      });

      var earningsEndY = doc.lastAutoTable.finalY;

      doc.autoTable({
        startY: y,
        head: [['Deductions', 'Amount (INR)']],
        body: deductionsBody,
        foot: [['Total Deductions', formatINR(totalDeductions)]],
        margin: { left: pageWidth / 2 + 2, right: margin },
        theme: 'grid',
        headStyles: { fillColor: [37, 99, 235], textColor: 255, fontSize: 9 },
        footStyles: { fillColor: [254, 242, 242], textColor: [185, 28, 28], fontStyle: 'bold', fontSize: 9 },
        styles: { fontSize: 9, cellPadding: 3 },
        columnStyles: { 1: { halign: 'right' } }
      });

      y = Math.max(earningsEndY, doc.lastAutoTable.finalY) + 10;
    } else {
      y += 40;
    }

    doc.setFillColor(239, 246, 255);
    doc.rect(margin, y, pageWidth - margin * 2, 18, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(37, 99, 235);
    doc.text('Net Pay: ' + formatINR(netPay), margin + 4, y + 8);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 116, 139);
    doc.text('In words: ' + amountInWords(netPay), margin + 4, y + 14, { maxWidth: pageWidth - margin * 2 - 8 });

    y += 26;
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text('This is a system-generated payslip and does not require a signature.', margin, y);
    doc.text('Confidential — For employee use only. | RITMAX — Hyderabad, Telangana, India', margin, y + 4);

    var filename = 'Payslip_' + data.empId + '_' + data.period.replace(/\s+/g, '_') + '.pdf';
    doc.save(filename);
  }

  function initDownloadButtons() {
    document.querySelectorAll('[data-download-payslip]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var name = btn.getAttribute('data-employee');
        if (name) downloadPayslip(name);
      });
    });

    var downloadAll = document.getElementById('downloadAllPayslips');
    if (downloadAll) {
      downloadAll.addEventListener('click', function () {
        ['Priya Sharma', 'Rahul Reddy'].forEach(function (name, i) {
          setTimeout(function () { downloadPayslip(name); }, i * 600);
        });
      });
    }
  }

  document.addEventListener('DOMContentLoaded', initDownloadButtons);

  window.PayrollPayslipPDF = { download: downloadPayslip, data: PAYSLIPS };
})();
