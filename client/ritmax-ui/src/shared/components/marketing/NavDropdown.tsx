import { useState } from 'react'
import { Link } from 'react-router-dom'

interface NavDropdownProps {
  label: string
  items: { to: string; label: string }[]
}

export function NavDropdown({ label, items }: NavDropdownProps) {
  const [open, setOpen] = useState(false)

  return (
    <li
      className="relative list-none"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="flex justify-center items-center gap-1 relative px-2 py-3 rounded-lg hover:header_menu_shadow subMenuTitle border-0 bg-transparent text-s1 cursor-pointer"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {label}
        <i className={`ph ph-caret-down pt-0.5 block duration-700 ${open ? 'rotate-180' : ''}`} />
      </button>
      <ul
        className={`absolute top-12 left-0 flex flex-col w-[200px] py-6 gap-3 bg-s1 text-white/80 rounded-lg duration-500 list-none m-0 pl-0 ${
          open
            ? 'visible opacity-100 z-[60] translate-y-0 scale-100 pointer-events-auto'
            : 'invisible opacity-0 pointer-events-none translate-y-8 scale-75'
        }`}
      >
        {items.map((item) => (
          <li key={item.to} className="list-none">
            <Link
              to={item.to}
              className="px-6 hover:ml-2 duration-500 hover:text-s2 subMenuItem block"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  )
}

interface MobileNavDropdownProps {
  label: string
  items: { to: string; label: string }[]
}

export function MobileNavDropdown({ label, items }: MobileNavDropdownProps) {
  const [open, setOpen] = useState(false)

  return (
    <li className="list-none">
      <button
        type="button"
        className="flex justify-start items-center cursor-pointer border-0 bg-transparent p-0 text-inherit"
        onClick={() => setOpen((value) => !value)}
      >
        <span>{label}</span>
        <i className={`ph ph-caret-right !text-xl pl-1 pt-1 duration-500 ${open ? 'rotate-90' : ''}`} />
      </button>
      <ul className={`pl-4 flex flex-col gap-2 overflow-hidden duration-700 list-none ${open ? 'subMenuOpen max-h-96 pt-2' : 'subMenuClose max-h-0'}`}>
        {items.map((item) => (
          <li key={item.to} className="list-none">
            <Link to={item.to} className="text-base">
              <span>-</span> {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  )
}
