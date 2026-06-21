import { useMemo } from 'react'
import { AgGridReact } from 'ag-grid-react'
import {
  themeQuartz,
  type ColDef,
  type GetRowIdFunc,
} from 'ag-grid-community'

export type { ColDef, ICellRendererParams, ValueFormatterParams } from 'ag-grid-community'

const ritmaxTheme = themeQuartz.withParams({
  accentColor: '#005151',
  borderColor: '#E2E8F0',
  headerBackgroundColor: '#F1F5F9',
  headerTextColor: '#64748B',
  headerFontWeight: 600,
  foregroundColor: '#0F172A',
  fontFamily:
    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontSize: 14,
  rowHoverColor: 'rgba(241, 245, 249, 0.6)',
  wrapperBorderRadius: 12,
})

export interface DataGridProps<T> {
  rows: T[]
  columns: ColDef<T>[]
  loading?: boolean
  error?: string | null
  quickFilterText?: string
  pagination?: boolean
  paginationPageSize?: number
  height?: number | string
  rowHeight?: number
  getRowId?: GetRowIdFunc<T>
  emptyMessage?: string
}

const DEFAULT_COL_DEF: ColDef = {
  sortable: true,
  filter: true,
  floatingFilter: true,
  resizable: true,
  flex: 1,
  minWidth: 120,
}

export function DataGrid<T>({
  rows,
  columns,
  loading = false,
  error = null,
  quickFilterText,
  pagination = true,
  paginationPageSize = 10,
  height = 520,
  rowHeight,
  getRowId,
  emptyMessage = 'No records found.',
}: DataGridProps<T>) {
  const paginationPageSizeSelector = useMemo(() => [10, 20, 50, 100], [])

  if (error) {
    return (
      <div className="alert alert-danger mb-0" role="alert">
        {error}
      </div>
    )
  }

  return (
    <div style={{ height, width: '100%' }}>
      <AgGridReact<T>
        theme={ritmaxTheme}
        rowData={rows}
        columnDefs={columns}
        defaultColDef={DEFAULT_COL_DEF}
        quickFilterText={quickFilterText}
        pagination={pagination}
        paginationPageSize={paginationPageSize}
        paginationPageSizeSelector={paginationPageSizeSelector}
        rowHeight={rowHeight}
        getRowId={getRowId}
        loading={loading}
        animateRows
        overlayNoRowsTemplate={`<span class="text-muted">${emptyMessage}</span>`}
      />
    </div>
  )
}
