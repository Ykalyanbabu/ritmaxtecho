import { Link } from 'react-router-dom'

import { MARKETING_IMG as IMG } from '@/shared/constants/marketing'

const coreServices = [
  { icon: 'ph-fill ph-user', title: 'Accounting Services', href: '/accounting-services', text: 'Efficient payroll management is at the heart of our services. Experience seamless payroll processing.' },
  { icon: 'ph-fill ph-hand-coins', title: 'Payroll Processing', href: '/payroll-processing', text: 'Efficient payroll management is at the heart of our services. Experience seamless payroll processing,' },
  { icon: 'ph-fill ph-file', title: 'Taxation services', href: '/taxation-services', text: 'Efficient payroll management is at the heart of our services. Experience seamless payroll processing,' },
]

const whyCards = [
  { img: 'whyAccoupayCard_1.webp', title: 'Hire or relocate team member with in house visa support' },
  { img: 'whyAccoupayCard_2.webp', title: 'Create complaint contracts with a single click' },
  { img: 'whyAccoupayCard_3.webp', title: 'Send equipment worldwide, without the hassle' },
  { img: 'whyAccoupayCard_4.webp', title: 'Offer country- specific benefits at competitive rates' },
  { img: 'whyAccoupayCard_5.webp', title: 'Provide your team with co-working access via work' },
  { img: 'whyAccoupayCard_6.webp', title: 'Save time using advance integrations' },
]

export function AllServicesPage() {
  return (
    <>
      <section className="stp-30 bg-softBg1 relative max-xxl:overflow-hidden">
        <img src={`${IMG}/breadcrump_icon.webp`} alt="" className="absolute bottom-0 left-[-10%] xxl:left-0 max-lg:hidden" />
        <div className="container grid grid-cols-12 gap-6 max-md:stp-15 relative z-10">
          <div className="col-span-12 md:col-span-6 flex justify-center items-start flex-col">
            <ul className="flex justify-start items-center gap-1 flex-wrap">
              <li>
                <Link to="/" className="flex justify-start items-center gap-1">
                  <i className="ph ph-house" />
                  <span className="hover:text-s2 duration-300">Home</span>
                </Link>
              </li>
              <li className="flex justify-start items-center gap-1">
                <i className="ph ph-caret-right" />
                Services
              </li>
            </ul>
            <h1 className="display-3 pt-4">Our All Services</h1>
            <p className="text-bodyText pt-6">
              Welcome to Ritmax, your trusted partner for comprehensive financial solutions. Explore our range of services
              tailored to meet your business needs.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 flex justify-center items-center">
            <img src={`${IMG}/breadcrumb_img_1.webp`} alt="" className="object-fit max-sm:max-h-[300px]" />
          </div>
        </div>
      </section>

      <section className="stp-30 sbp-30 overflow-hidden">
        <div className="container">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center max-w-[600px] flex-col">
              <h1 className="display-4 wow animate__animated animate__fadeInUp">Our Core Services</h1>
              <p className="text-bodyText text-center pt-6 wow animate__animated animate__fadeInDown">
                hile we go so much further and do so much more for clients, these core services help provide a framework
                to provide you with relevant, reliable &amp; real-time reporting.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 stp-15 gap-6">
            {coreServices.map((service) => (
              <div key={service.title} className="col-span-12 sm:col-span-6 md:col-span-4 wow animate__animated animate__fadeInUp">
                <div className="flex justify-start items-start flex-col p-6 lg:p-10 group border border-strokeColor hover:bg-s2 hover:border-mainTextColor duration-500">
                  <div className="bg-softBg1 p-4 rounded-full text-s1 group-hover:bg-mainTextColor group-hover:text-white duration-500 text-5xl">
                    <i className={service.icon} />
                  </div>
                  <Link to={service.href}>
                    <h4 className="heading-4 pb-5 pt-8 hover:underline duration-300">{service.title}</h4>
                  </Link>
                  <p className="text-bodyText lg:pr-4">{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-softBg1 stp-30 sbp-30 overflow-hidden">
        <div className="container">
          <div className="flex justify-between items-end gap-6 max-lg:flex-col max-lg:items-start">
            <div className="max-w-[600px] flex justify-center items-start flex-col">
              <p className="bg-p1 py-3 px-5 rounded-full text-white">Why Ritmax</p>
              <h1 className="display-4 pt-4">A platform for your global team</h1>
            </div>
            <p className="text-bodyText max-w-[500px]">
              Your dependable guide to achieving freedom from manual HR work and building that perfect workplace you have
              always aspired to build.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-6 stp-15">
            {whyCards.map((card) => (
              <div
                key={card.title}
                className="col-span-12 sm:col-span-6 lg:col-span-4 bg-white p-6 xl:py-10 xl:px-15 flex flex-col items-center border border-white group hover:border-mainTextColor duration-700 hover:bg-s2 wow animate__animated animate__fadeInUp"
              >
                <img src={`${IMG}/${card.img}`} alt="" />
                <h4 className="pt-8 heading-4">{card.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
