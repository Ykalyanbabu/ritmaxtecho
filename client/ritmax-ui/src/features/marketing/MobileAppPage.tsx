import { Link } from 'react-router-dom'

import { MARKETING_IMG as IMG } from '@/shared/constants/marketing'

const features = [
  { icon: 'ph-fill ph-hand-coins', title: 'Payroll in Mobile App', text: 'Efficient payroll processing tailored to the unique needs of healthcare professionals. Ensure accurate and timely compensation' },
  { icon: 'ph-fill ph-gear', title: 'Compliance Management', text: 'Stay compliant with ever-evolving healthcare regulations. Our services include compliance management to ensure your practice' },
  { icon: 'ph-fill ph-users-three', title: 'HRMS Consulting', text: 'Receive personalized consulting services to address the unique challenges of your healthcare practice.' },
  { icon: 'ph-fill ph-heartbeat', title: 'Financial Advisory', text: 'Navigate the financial landscape of healthcare with our expert advisory services. From budgeting to strategic planning,' },
]

const highlights = [
  { icon: 'ph-fill ph-timer', title: 'Save Time and Money', text: 'Ditch the spreadsheets and save hours each month with built-in time tracking, automated payroll, and worry-free tax filing.' },
  { icon: 'ph-fill ph-note-pencil', title: 'Compliance Made Simple', text: 'Employees can access earnings, check their paystubs, and add expenses, at the office or on the go.' },
  { icon: 'ph-fill ph-gear', title: 'Reduce turnover', text: 'Burnout is real. Keep your team happy with better benefits, flexible scheduling options, and empowering' },
]

const appFeatures = [
  { icon: 'ph-fill ph-device-mobile', label: 'Mobile Payroll Processing' },
  { icon: 'ph-fill ph-wallet', label: 'Billing and Invoicing' },
  { icon: 'ph-fill ph-timer', label: 'Real-Time Compliance' },
  { icon: 'ph-fill ph-chart-line-up', label: 'Performance Analytics' },
]

export function MobileAppPage() {
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
              <li>
                <Link to="/all-services" className="flex justify-start items-center gap-1">
                  <i className="ph ph-caret-right" />
                  <span className="hover:text-s2 duration-300"> Products </span>
                </Link>
              </li>
              <li className="flex justify-start items-center gap-1">
                <i className="ph ph-caret-right" />
                Mobile App
              </li>
            </ul>
            <h1 className="display-3 pt-4">Mobile App</h1>
            <p className="text-bodyText pt-6">
              Ritmax&apos;s Mobile App is designed to support the financial health of your medical practice or healthcare
              facility
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 flex justify-center items-center">
            <img src={`${IMG}/breadcrumb_img_6.webp`} alt="" className="object-fit max-sm:max-h-[300px]" />
          </div>
        </div>
      </section>

      <section className="stp-30 sbp-30">
        <div className="container">
          <div className="max-w-[700px] mx-auto text-center flex justify-center items-center flex-col">
            <p className="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white">Mobile App</p>
            <h1 className="display-4 pt-4 pb-4 lg:pb-6">Mobile App for Payroll Services</h1>
            <p className="text-bodyText">
              We get it—managing payroll for healthcare is complex. That&apos;s why we&apos;ve designed our platform to streamline
              your workflow from start to finish.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-6 stp-15">
            <div className="col-span-12 lg:col-span-6 xl:col-span-5 flex justify-center items-center overflow-hidden">
              <img src={`${IMG}/healthcare_section_img.webp`} alt="" className="hover:scale-110 duration-500 w-full h-full" />
            </div>
            <div className="col-span-12 lg:col-span-6 xxl:col-start-7 flex flex-col gap-6 xl:gap-10 justify-center items-center">
              {features.map((item) => (
                <div key={item.title} className="flex justify-start items-start gap-4">
                  <div className="text-s1 text-2xl sm:text-3xl p-3 sm:p-4 rounded-full bg-softBg1 !leading-[0]">
                    <i className={item.icon} />
                  </div>
                  <div>
                    <h4 className="heading-4">{item.title}</h4>
                    <p className="text-bodyText pt-3">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-softBg1 stp-30 sbp-30">
        <div className="container grid grid-cols-12 gap-6">
          {highlights.map((item) => (
            <div key={item.title} className="col-span-12 md:col-span-4">
              <div className="flex justify-start items-center flex-col">
                <div className="text-5xl text-s1">
                  <i className={item.icon} />
                </div>
                <h4 className="heading-4 pt-6 pb-3 text-center">{item.title}</h4>
                <p className="text-center lg:px-4 xxl:px-8">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="stp-30 sbp-30">
        <div className="container grid grid-cols-12 gap-6 max-xxl:overflow-hidden">
          <div className="col-span-12 md:col-span-6">
            <div className="max-w-[600px] flex justify-start items-start flex-col">
              <p className="bg-p1 py-3 px-5 rounded-full text-white">Mobile App</p>
              <h1 className="display-4 pt-4 pb-6">Manage Your Mobile App.</h1>
              <p className="text-bodyText pb-8">
                Discover the freedom to oversee and optimize your home health care operations from anywhere with
                Ritmax&apos;s mobile-friendly management solutions.
              </p>
              <ul className="grid grid-cols-2 gap-6">
                {appFeatures.map((item) => (
                  <li key={item.label} className="col-span-1">
                    <div className="flex justify-start items-center gap-2">
                      <span className="block bg-softBg1 rounded-full p-3 text-s1 text-2xl">
                        <i className={item.icon} />
                      </span>
                      {item.label}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-5 xxl:col-start-8 flex justify-center items-center">
            <img src={`${IMG}/manage_health_section_img.webp`} alt="" />
          </div>
        </div>
      </section>
    </>
  )
}
