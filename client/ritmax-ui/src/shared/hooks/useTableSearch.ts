import { useMemo, useState } from 'react'

export function useTableSearch<T>(rows: T[], searchKeys: (keyof T)[]) {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return rows
    return rows.filter((row) =>
      searchKeys.some((key) => String(row[key]).toLowerCase().includes(q)),
    )
  }, [rows, query, searchKeys])

  return { query, setQuery, filtered }
}
