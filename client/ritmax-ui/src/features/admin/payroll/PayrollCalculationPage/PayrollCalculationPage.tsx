import { useEffect, useMemo, useState } from 'react'
import { ContentCard } from '@/shared/components/ContentCard'
import { PageHeader } from '@/shared/components/PageHeader'
import type { SaveSalaryDetailRequest } from '@/shared/types/salary'
import { useSalaryCalculation } from './useSalaryCalculation'

type AmountField =
  | 'hra'
  | 'specialAllowance'
  | 'telephoneReimbursement'
  | 'otherEarnings'
  | 'providentFund'
  | 'incomeTax'
  | 'professionalTax'
  | 'esi'
  | 'otherDeductions'

type AmountForm = Record<AmountField, string>

const EMPTY_AMOUNTS: AmountForm = {
  hra: '',
  specialAllowance: '',
  telephoneReimbursement: '',
  otherEarnings: '',
  providentFund: '',
  incomeTax: '',
  professionalTax: '',
  esi: '',
  otherDeductions: '',
}

const EARNING_FIELDS: { field: AmountField; label: string }[] = [
  { field: 'hra', label: 'HRA' },
  { field: 'specialAllowance', label: 'Special Allowance' },
  { field: 'telephoneReimbursement', label: 'Telephone Reimbursement' },
  { field: 'otherEarnings', label: 'Other Earnings' },
]

const DEDUCTION_FIELDS: { field: AmountField; label: string }[] = [
  { field: 'providentFund', label: 'Provident Fund (PF)' },
  { field: 'incomeTax', label: 'Income Tax (TDS)' },
  { field: 'professionalTax', label: 'Professional Tax' },
  { field: 'esi', label: 'ESI / Insurance' },
  { field: 'otherDeductions', label: 'Other Deductions' },
]

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

// Positive amounts only, with at most two decimal places.
const AMOUNT_PATTERN = /^\d*(\.\d{0,2})?$/

const currencyFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

const now = new Date()
const CURRENT_MONTH = now.getMonth() + 1
const CURRENT_YEAR = now.getFullYear()
const YEAR_OPTIONS = Array.from({ length: 7 }, (_, i) => CURRENT_YEAR - 5 + i)

function toNumber(value: string): number {
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : 0
}

export function PayrollCalculationPage() {
  const { employees, loading, error, saving, fetchDetail, save } = useSalaryCalculation()

  const [employeeId, setEmployeeId] = useState('')
  const [month, setMonth] = useState(String(CURRENT_MONTH))
  const [year, setYear] = useState(String(CURRENT_YEAR))

  const [basic, setBasic] = useState(0)
  const [amounts, setAmounts] = useState<AmountForm>(EMPTY_AMOUNTS)
  const [isPayslipGenerated, setIsPayslipGenerated] = useState(false)

  const [detailLoading, setDetailLoading] = useState(false)
  const [feedback, setFeedback] = useState<{ type: 'success' | 'danger'; text: string } | null>(null)

  // Load the salary record whenever the employee or pay period changes.
  useEffect(() => {
    if (!employeeId) {
      setBasic(0)
      setAmounts(EMPTY_AMOUNTS)
      setIsPayslipGenerated(false)
      return
    }

    let cancelled = false
    setDetailLoading(true)
    setFeedback(null)

    fetchDetail(Number(employeeId), Number(month), Number(year))
      .then((detail) => {
        if (cancelled) return
        setBasic(detail.basic)
        setIsPayslipGenerated(detail.isPayslipGenerated)
        setAmounts({
          hra: String(detail.hra),
          specialAllowance: String(detail.specialAllowance),
          telephoneReimbursement: String(detail.telephoneReimbursement),
          otherEarnings: String(detail.otherEarnings),
          providentFund: String(detail.providentFund),
          incomeTax: String(detail.incomeTax),
          professionalTax: String(detail.professionalTax),
          esi: String(detail.esi),
          otherDeductions: String(detail.otherDeductions),
        })
      })
      .catch((err: unknown) => {
        if (cancelled) return
        setFeedback({
          type: 'danger',
          text: err instanceof Error ? err.message : 'Failed to load salary details.',
        })
      })
      .finally(() => {
        if (!cancelled) setDetailLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [employeeId, month, year, fetchDetail])

  const locked = isPayslipGenerated || !employeeId

  const updateAmount = (field: AmountField) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const next = event.target.value
    if (next === '' || AMOUNT_PATTERN.test(next)) {
      setAmounts((prev) => ({ ...prev, [field]: next }))
    }
  }

  const blockInvalidKeys = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (['-', '+', 'e', 'E'].includes(event.key)) {
      event.preventDefault()
    }
  }

  const totals = useMemo(() => {
    const totalEarnings =
      basic +
      toNumber(amounts.hra) +
      toNumber(amounts.specialAllowance) +
      toNumber(amounts.telephoneReimbursement) +
      toNumber(amounts.otherEarnings)

    const totalDeductions =
      toNumber(amounts.providentFund) +
      toNumber(amounts.incomeTax) +
      toNumber(amounts.professionalTax) +
      toNumber(amounts.esi) +
      toNumber(amounts.otherDeductions)

    return {
      totalEarnings,
      totalDeductions,
      netSalary: totalEarnings - totalDeductions,
    }
  }, [basic, amounts])

  const handleSave = async () => {
    if (!employeeId) return
    setFeedback(null)

    const payload: SaveSalaryDetailRequest = {
      employeeId: Number(employeeId),
      month: Number(month),
      year: Number(year),
      hra: toNumber(amounts.hra),
      specialAllowance: toNumber(amounts.specialAllowance),
      telephoneReimbursement: toNumber(amounts.telephoneReimbursement),
      otherEarnings: toNumber(amounts.otherEarnings),
      providentFund: toNumber(amounts.providentFund),
      incomeTax: toNumber(amounts.incomeTax),
      professionalTax: toNumber(amounts.professionalTax),
      esi: toNumber(amounts.esi),
      otherDeductions: toNumber(amounts.otherDeductions),
    }

    try {
      const saved = await save(payload)
      setBasic(saved.basic)
      setIsPayslipGenerated(saved.isPayslipGenerated)
      setFeedback({ type: 'success', text: 'Salary details saved successfully.' })
    } catch (err) {
      setFeedback({ type: 'danger', text: err instanceof Error ? err.message : 'Failed to save salary details.' })
    }
  }

  if (loading) {
    return (
      <>
        <PageHeader title="Salary Calculation" subtitle="Calculate salary components, allowances, and deductions." />
        <ContentCard>
          <div className="text-center text-muted py-5">
            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" />
            Loading…
          </div>
        </ContentCard>
      </>
    )
  }

  if (error) {
    return (
      <>
        <PageHeader title="Salary Calculation" subtitle="Calculate salary components, allowances, and deductions." />
        <ContentCard>
          <div className="alert alert-danger mb-0" role="alert">
            {error}
          </div>
        </ContentCard>
      </>
    )
  }

  return (
    <>
      <PageHeader
        title="Salary Calculation"
        subtitle="Calculate salary components, allowances, and deductions."
      />

      {feedback && (
        <div className={`alert alert-${feedback.type}`} role="alert">
          {feedback.text}
        </div>
      )}

      {isPayslipGenerated && (
        <div className="alert alert-warning" role="alert">
          <i className="fas fa-lock me-1" /> Payslip already generated — these details can no longer be updated.
        </div>
      )}

      <div className="row g-3">
        <div className="col-lg-5">
          <ContentCard title="Calculation Input">
            <div className="mb-3">
              <label className="form-label">Employee</label>
              <select
                className="form-select"
                value={employeeId}
                onChange={(event) => setEmployeeId(event.target.value)}
              >
                <option value="">Select employee…</option>
                {employees.map((employee) => (
                  <option key={employee.employeeId} value={employee.employeeId}>
                    {employee.fullName} ({employee.code})
                  </option>
                ))}
              </select>
            </div>

            <div className="row g-2 mb-3">
              <div className="col-6">
                <label className="form-label">Month</label>
                <select className="form-select" value={month} onChange={(event) => setMonth(event.target.value)}>
                  {MONTHS.map((name, index) => (
                    <option key={name} value={index + 1}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-6">
                <label className="form-label">Year</label>
                <select className="form-select" value={year} onChange={(event) => setYear(event.target.value)}>
                  {YEAR_OPTIONS.map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Basic Salary</label>
              <div className="input-group">
                <span className="input-group-text">₹</span>
                <input type="text" className="form-control" value={basic.toFixed(2)} readOnly />
              </div>
            </div>

            <h6 className="form-section-title mt-4">Earnings</h6>
            {EARNING_FIELDS.map(({ field, label }) => (
              <div className="row g-2 mb-2 align-items-center" key={field}>
                <div className="col-7">
                  <label className="form-label small mb-0">{label}</label>
                </div>
                <div className="col-5">
                  <input
                    type="text"
                    inputMode="decimal"
                    className="form-control form-control-sm"
                    placeholder="0.00"
                    value={amounts[field]}
                    onChange={updateAmount(field)}
                    onKeyDown={blockInvalidKeys}
                    disabled={locked}
                  />
                </div>
              </div>
            ))}

            <h6 className="form-section-title mt-3">Deductions</h6>
            {DEDUCTION_FIELDS.map(({ field, label }) => (
              <div className="row g-2 mb-2 align-items-center" key={field}>
                <div className="col-7">
                  <label className="form-label small mb-0">{label}</label>
                </div>
                <div className="col-5">
                  <input
                    type="text"
                    inputMode="decimal"
                    className="form-control form-control-sm"
                    placeholder="0.00"
                    value={amounts[field]}
                    onChange={updateAmount(field)}
                    onKeyDown={blockInvalidKeys}
                    disabled={locked}
                  />
                </div>
              </div>
            ))}

            <button
              type="button"
              className="btn btn-primary w-100 mt-3"
              onClick={handleSave}
              disabled={locked || saving || detailLoading}
            >
              {saving ? (
                <>
                  <span className="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true" />
                  Saving…
                </>
              ) : (
                <>
                  <i className="fas fa-save me-1" /> Save Salary Details
                </>
              )}
            </button>
          </ContentCard>
        </div>

        <div className="col-lg-7">
          <ContentCard title="Calculation Result">
            {employeeId ? (
              <div className="info-list">
                <div className="info-item">
                  <span className="info-label">Basic Salary</span>
                  <span className="info-value">{currencyFormatter.format(basic)}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Total Earnings</span>
                  <span className="info-value text-success">{currencyFormatter.format(totals.totalEarnings)}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Total Deductions</span>
                  <span className="info-value text-danger">{currencyFormatter.format(totals.totalDeductions)}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Net Salary</span>
                  <span className="info-value fw-bold text-primary" style={{ fontSize: '1.25rem' }}>
                    {currencyFormatter.format(totals.netSalary)}
                  </span>
                </div>
              </div>
            ) : (
              <div className="text-center text-muted py-5">Select an employee to view the calculation.</div>
            )}
          </ContentCard>
        </div>
      </div>
    </>
  )
}
