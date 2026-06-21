import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ContentCard } from '@/shared/components/ContentCard'
import { PageHeader } from '@/shared/components/PageHeader'
import { StatusBadge } from '@/shared/components/StatusBadge'
import {
  DataGrid,
  type ColDef,
  type ICellRendererParams,
  type ValueFormatterParams,
} from '@/shared/components/DataGrid'
import type { EmployeeListItem } from '@/shared/types/employee'
import { useEmployees } from './useEmployees'

const currencyFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
})

type BadgeStatus = 'active' | 'inactive' | 'pending'

function statusMeta(status: string): { status: BadgeStatus; label: string } {
  switch (status.toLowerCase()) {
    case 'active':
      return { status: 'active', label: 'Active' }
    case 'onleave':
      return { status: 'pending', label: 'On Leave' }
    case 'inactive':
    default:
      return { status: 'inactive', label: status === '' ? 'Unknown' : 'Inactive' }
  }
}

function EmployeeCell({ data }: ICellRendererParams<EmployeeListItem>) {
  if (!data) return null
  return (
    <div className="d-flex align-items-center gap-2 h-100">
      <span className="table-avatar flex-shrink-0">{data.initials}</span>
      <div className="d-flex flex-column justify-content-center lh-sm overflow-hidden">
        <span className="fw-semibold text-truncate">{data.name}</span>
        <small className="text-muted text-truncate">{data.email}</small>
      </div>
    </div>
  )
}

function StatusCell({ value }: ICellRendererParams<EmployeeListItem, string>) {
  const meta = statusMeta(value ?? '')
  return <StatusBadge status={meta.status}> {meta.label}</StatusBadge>
}

function ActionsCell({ data }: ICellRendererParams<EmployeeListItem>) {
  return (
    <div className="btn-group btn-group-sm">
      <Link
        to={data ? `/admin/employees/profile/${data.employeeId}` : '/admin/employees/profile'}
        className="btn btn-light-custom"
        title="View"
      >
        <i className="fas fa-eye" />
      </Link>
      <button type="button" className="btn btn-light-custom" title="Edit">
        <i className="fas fa-pen" />
      </button>
      <button type="button" className="btn btn-light-custom text-danger" title="Delete">
        <i className="fas fa-trash" />
      </button>
    </div>
  )
}

export function EmployeeListPage() {
  const { employees, totalCount, loading, error } = useEmployees()
  const [search, setSearch] = useState('')

  const columns = useMemo<ColDef<EmployeeListItem>[]>(
    () => [
      {
        headerName: 'Employee',
        field: 'name',
        flex: 2,
        minWidth: 240,
        cellRenderer: EmployeeCell,
        getQuickFilterText: (params) => `${params.data.name} ${params.data.email}`,
      },
      { headerName: 'ID', field: 'id', maxWidth: 140 },
      { headerName: 'Department', field: 'department' },
      { headerName: 'Designation', field: 'designation' },
      {
        headerName: 'Salary',
        field: 'salary',
        filter: 'agNumberColumnFilter',
        valueFormatter: (params: ValueFormatterParams<EmployeeListItem, number>) =>
          params.value == null ? '' : currencyFormatter.format(params.value),
      },
      {
        headerName: 'Status',
        field: 'status',
        maxWidth: 160,
        cellRenderer: StatusCell,
      },
      {
        headerName: 'Actions',
        colId: 'actions',
        sortable: false,
        filter: false,
        floatingFilter: false,
        resizable: false,
        maxWidth: 150,
        cellRenderer: ActionsCell,
      },
    ],
    [],
  )

  return (
    <>
      <PageHeader
        title="Employee Management"
        subtitle="Manage your workforce, view profiles, and track employee data."
        actions={
          <Link to="/admin/employees/add" className="btn btn-primary">
            <i className="fas fa-user-plus me-1" /> Add Employee
          </Link>
        }
      />

      <ContentCard className="" bodyClassName="">
        <div className="table-toolbar">
          <div className="table-search">
            <i className="fas fa-search" />
            <input
              type="search"
              placeholder="Search employees..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="d-flex gap-2 flex-wrap">
            <button type="button" className="btn btn-outline-primary btn-sm">
              <i className="fas fa-download me-1" /> Export
            </button>
          </div>
        </div>

        <DataGrid<EmployeeListItem>
          rows={employees}
          columns={columns}
          loading={loading}
          error={error}
          quickFilterText={search}
          rowHeight={56}
          getRowId={(params) => params.data.id}
          emptyMessage="No employees found."
        />

        <div className="table-pagination mt-2">
          <span>
            {loading ? 'Loading…' : `Showing ${employees.length} of ${totalCount} employees`}
          </span>
        </div>
      </ContentCard>
    </>
  )
}
