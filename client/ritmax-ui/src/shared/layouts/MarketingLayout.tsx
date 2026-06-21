import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { MARKETING_IMG as IMG } from '@/shared/constants/marketing'
import { MobileNavDropdown, NavDropdown } from '@/shared/components/marketing/NavDropdown'

const serviceLinks = [
  { to: '/all-services', label: 'All Services' },
  { to: '/payroll-processing', label: 'Payroll Processing' },
  { to: '/accounting-services', label: 'Accounting Services' },
  { to: '/taxation-services', label: 'Taxation Services' },
]

const productLinks = [
  { to: '/desktop-based', label: 'Desktop Based' },
  { to: '/web-based', label: 'Online Software' },
  { to: '/mobile-app', label: 'Mobile App' },
]

export function MarketingLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <div className="marketing-site">
      <header className="header">
        <div className="top-0 left-0 right-0 z-50 header headerAbsolute 2">
          <div className="flex justify-between items-center container text-s1 py-6">
            <div className="pb-1 flex justify-start items-center gap-3">
              <button
                type="button"
                className="lg:hidden text-3xl mobileMenuOpenButton border-0 bg-transparent"
                aria-label="Open menu"
                onClick={() => setMobileMenuOpen(true)}
              >
                <i className="ph ph-list" />
              </button>
              <Link to="/">
                <img src={`${IMG}/logo.png`} alt="RITMAX logo" />
              </Link>
            </div>
            <nav className="max-lg:hidden">
              <ul className="flex justify-center items-center gap-3">
                <li className="list-none">
                  <Link to="/" className="menu hover:header_menu_shadow duration-700 px-2 py-3 rounded-lg">
                    Home
                  </Link>
                </li>
                <li className="list-none">
                  <Link to="/about" className="hover:header_menu_shadow duration-700 px-2 py-3 rounded-lg menu">
                    About
                  </Link>
                </li>
                <NavDropdown label="Services" items={serviceLinks} />
                <NavDropdown label="Products" items={productLinks} />
                <li className="list-none">
                  <Link to="/contact" className="hover:header_menu_shadow duration-700 px-2 py-3 rounded-lg menu">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex justify-end items-center gap-2 sm:gap-6 xl:gap-10 font-medium max-sm:hidden">
              <div className="flex justify-between items-center gap-1">
                <i className="ph ph-phone-call bg-s1 rounded-full text-s2 p-2 md:p-3 text-lg lg:text-2xl !leading-none" />
                <a href="tel:+919346882119" className="max-xl:hidden">
                  +91 93468 82119
                </a>
              </div>
              <Link
                to="/admin/auth/login"
                className="flex justify-center max-sm:text-sm items-center gap-3 py-2 md:py-3 px-3 md:px-6 rounded-full bg-s2 border border-mainTextColor text-mainTextColor group font-medium"
              >
                Login
                <i className="ph-bold ph-arrow-up-right group-hover:rotate-[45deg] duration-500 text-base sm:text-xl lg:text-2xl !leading-[0]" />
              </Link>
            </div>
          </div>
        </div>
        <nav>
          <div
            className={`fixed top-0 left-0 bg-s1/80 h-full w-full lg:hidden duration-700 z-[998] mobileMenuBg ${
              mobileMenuOpen ? 'mobileMenuBgOpen' : 'mobileMenuBgClose'
            }`}
            onClick={closeMobileMenu}
            onKeyDown={() => undefined}
            role="presentation"
          />
          <div
            className={`flex justify-start flex-col items-start gap-8 pb-10 lg:gap-20 fixed lg:hidden top-0 left-0 w-3/4 min-[500px]:w-1/2 h-full bg-s2 overflow-y-auto duration-700 z-[999] mobileMenu ${
              mobileMenuOpen ? 'mobileMenuOpen' : 'mobileMenuClose'
            }`}
          >
            <div className="flex justify-between items-center w-full p-4 sm:p-8">
              <Link to="/" onClick={closeMobileMenu}>
                <img src={`${IMG}/logo.png`} alt="logo" />
              </Link>
              <button
                type="button"
                className="!text-3xl cursor-pointer mobileMenuCloseButton border-0 bg-transparent"
                aria-label="Close menu"
                onClick={closeMobileMenu}
              >
                <i className="ph ph-x" />
              </button>
            </div>
            <ul className="text-lg sm:text-xl flex gap-6 lg:gap-10 items-start flex-col pl-8 list-none m-0">
              <li className="list-none">
                <Link to="/" className="menu-hover hover:after:border-p1" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="list-none">
                <Link to="/about" className="menu-hover hover:after:border-p1" onClick={closeMobileMenu}>
                  About
                </Link>
              </li>
              <MobileNavDropdown label="Services" items={serviceLinks} />
              <MobileNavDropdown label="Products" items={productLinks} />
              <li className="list-none">
                <Link to="/contact" className="menu-hover hover:after:border-p1" onClick={closeMobileMenu}>
                  Contact
                </Link>
              </li>
              <li className="list-none">
                <Link to="/admin/auth/login" className="text-base" onClick={closeMobileMenu}>
                  <span>-</span> Login
                </Link>
              </li>
              <li className="list-none">
                <Link to="/register" className="text-base" onClick={closeMobileMenu}>
                  <span>-</span> Registration
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="bg-mainTextColor text-white/60">
        <div className="container grid grid-cols-12 stp-30 sbp-30 gap-6 max-xxl:pr-4">
          <div className="col-span-12 min-[450px]:col-span-6 lg:col-span-3 flex flex-col gap-6 lg:gap-8">
            <Link to="/">
              <img src={`${IMG}/logo1.png`} alt="RITMAX" />
            </Link>
            <p>
              Your trusted partner in accounting and payroll solutions. We deliver precision, efficiency, and tailored
              services
            </p>
            <ul className="flex justify-start items-center gap-2 list-none m-0 p-0">
              <li className="list-none">
                <a
                  className="bg-s1/50 rounded-full w-[40px] h-[40px] hover:bg-s1 duration-500 hover:-translate-y-1 text-white flex justify-center items-center"
                  href="#"
                >
                  <i className="ph ph-facebook-logo leading-[0] text-2xl" />
                </a>
              </li>
              <li className="list-none">
                <a
                  className="bg-s1/50 rounded-full w-[40px] h-[40px] hover:bg-s1 duration-500 hover:-translate-y-1 text-white flex justify-center items-center"
                  href="#"
                >
                  <i className="ph ph-reddit-logo leading-[0] text-2xl" />
                </a>
              </li>
              <li className="list-none">
                <a
                  className="bg-s1/50 rounded-full w-[40px] h-[40px] hover:bg-s1 duration-500 hover:-translate-y-1 text-white flex justify-center items-center"
                  href="#"
                >
                  <i className="ph ph-youtube-logo leading-[0] text-2xl" />
                </a>
              </li>
              <li className="list-none">
                <a
                  className="bg-s1/50 rounded-full w-[40px] h-[40px] hover:bg-s1 duration-500 hover:-translate-y-1 text-white flex justify-center items-center"
                  href="#"
                >
                  <i className="ph ph-pinterest-logo leading-[0] text-2xl" />
                </a>
              </li>
            </ul>
          </div>
          <div className="xl:pl-30 col-span-12 min-[400px]:col-span-6 lg:col-span-3">
            <h4 className="heading-4 mb-6 pb-2 relative text-white after:absolute after:w-[20%] after:h-[2px] after:bottom-0 after:left-0 after:bg-p1 hover:after:w-[40%] after:duration-500">
              Resources
            </h4>
            <ul className="flex flex-col gap-4 md:gap-5 list-none m-0 p-0">
              <li className="list-none">
                <Link to="/contact" className="flex justify-start items-center gap-2 hover:text-white hover:translate-x-2 duration-500">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="xl:pl-30 col-span-12 min-[400px]:col-span-6 lg:col-span-3">
            <h4 className="heading-4 mb-6 pb-2 relative text-white after:absolute after:w-[20%] after:h-[2px] after:bottom-0 after:left-0 after:bg-p1 hover:after:w-[40%] after:duration-500">
              Services
            </h4>
            <ul className="flex flex-col gap-4 md:gap-5 list-none m-0 p-0">
              <li className="list-none">
                <Link
                  to="/taxation-services"
                  className="flex justify-start items-center gap-2 hover:text-white hover:translate-x-2 duration-500"
                >
                  Taxations Services
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/accounting-services"
                  className="flex justify-start items-center gap-2 hover:text-white hover:translate-x-2 duration-500"
                >
                  Accounting Services
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/payroll-processing"
                  className="flex justify-start items-center gap-2 hover:text-white hover:translate-x-2 duration-500"
                >
                  Payroll Processing
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 min-[450px]:col-span-6 lg:col-span-3 xl:pl-30">
            <h4 className="heading-4 mb-4 md:mb-6 pb-2 relative after:absolute after:w-[20%] after:h-[2px] after:bottom-0 after:left-0 after:bg-p1 hover:after:w-[40%] after:duration-500 text-white">
              Get In Touch
            </h4>
            <ul className="flex flex-col gap-4 md:gap-3 list-none m-0 p-0">
              <li className="list-none">
                <a
                  href="mailto:info@ritmax.com"
                  className="flex justify-start items-center gap-2 hover:text-white hover:translate-x-2 duration-500"
                >
                  <span className="text-2xl pt-2">
                    <i className="ph ph-envelope-simple-open" />
                  </span>
                  info@ritmax.com
                </a>
              </li>
              <li className="list-none">
                <a
                  href="tel:+919346882119"
                  className="flex justify-start items-center gap-2 hover:text-white hover:translate-x-2 duration-500"
                >
                  <span className="text-2xl pt-2">
                    <i className="ph ph-phone-call" />
                  </span>
                  +91 93468 82119
                </a>
              </li>
              <li className="list-none">
                <p className="flex justify-start items-center gap-2 hover:text-white hover:translate-x-2 duration-500 m-0">
                  <span className="text-2xl pt-2">
                    <i className="ph ph-paper-plane-tilt" />
                  </span>
                  Uppal, Hyderabad, Telangana.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="container py-6 flex justify-between items-center max-md:flex-col gap-6">
            <p className="max-sm:text-center">RITMAX Techo Systems © Copyright 2026. All Rights Reserved.</p>
            <div className="flex justify-end items-center">
              <p>
                Designed &amp; Developed by :{' '}
                <a href="http://kalyanteja.nextcoderit.com" target="_blank" rel="noreferrer" className="text-p1 hover:text-s2">
                  KalyanTeja Inspired Web Solutions.
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
