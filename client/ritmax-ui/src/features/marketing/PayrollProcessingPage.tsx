import { Link } from 'react-router-dom'

import { MARKETING_IMG as IMG } from '@/shared/constants/marketing'

const offerings = [
  'Efficient Payroll Management',
  'Compliance Assurance',
  'Direct Deposit Service',
  'Tax Filing and Reporting',
  'Employee Self-Service Portals',
]

const steps = [
  { num: 1, title: 'Payroll Processing Services', text: 'Efficiently manage your payroll with our state-of-the-art processing services. From accurate salary disbursements.' },
  { num: 2, title: 'Accounting and Bookkeeping', text: 'Navigate the complexities of financial management with our professional accounting and bookkeeping services.' },
  { num: 3, title: 'Tax Preparation and Filing', text: 'Ensure a seamless tax season with our expert tax preparation and filing services. We handle all necessary documentation.' },
  { num: 4, title: 'Financial Advisory', text: 'Empower your business with strategic financial guidance. Our experienced advisors provide insights and recommendations.', last: true },
]

export function PayrollProcessingPage() {
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
                  <span className="hover:text-s2 duration-300"> Services </span>
                </Link>
              </li>
              <li className="flex justify-start items-center gap-1">
                <i className="ph ph-caret-right" />
                Payroll Processing
              </li>
            </ul>
            <h1 className="display-3 pt-4">Payroll Processing</h1>
            <p className="text-bodyText pt-6">
              Welcome to Ritmax, your trusted partner for comprehensive financial solutions. Explore our range of services
              tailored to meet your business needs.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 flex justify-center items-center">
            <img src={`${IMG}/breadcrumb_img_2.webp`} alt="" className="object-fit max-sm:max-h-[300px]" />
          </div>
        </div>
      </section>

      <section className="stp-30 sbp-30">
        <div className="container grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6">
            <h1 className="display-4">We help you with payroll processing services</h1>
            <p className="text-bodyText pt-4 pb-6 lg:pb-8">
              At Ritmax, we understand the critical importance of accurate and timely payroll processing. Our
              comprehensive payroll solutions
            </p>
            <h3 className="heading-3 pb-6">Our Payroll Processing Offerings:</h3>
            <ul className="flex flex-col gap-5 justify-start items-start">
              {offerings.map((item) => (
                <li key={item}>
                  <div className="flex justify-start items-center gap-2">
                    <span className="text-2xl text-s1">
                      <i className="ph-fill ph-check-circle" />
                    </span>
                    {item}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="xxl:col-start-8 col-span-12 md:col-span-6 xxl:col-span-5 overflow-hidden flex justify-center items-center">
            <img src={`${IMG}/we_help.webp`} alt="" className="object-fit hover:scale-110 duration-500" />
          </div>
        </div>
      </section>

      <section className="bg-softBg1 stp-30 sbp-30">
        <div className="container">
          <div className="flex justify-center items-center">
            <div className="max-w-[700px] text-center flex justify-center items-center flex-col">
              <p className="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white">What We Do</p>
              <h1 className="display-4 pt-4 pb-4 lg:pb-6">Payroll services we provide for the client</h1>
              <p className="text-bodyText">
                At Ritmax, we specialize in delivering comprehensive Accounting and Payroll Processing services
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6 stp-15">
            <div className="col-span-12 lg:col-span-6 xl:col-span-5 flex overflow-hidden justify-center items-center self-stretch">
              <img src={`${IMG}/what_we_do.webp`} alt="" className="hover:scale-110 duration-500 w-full h-full" />
            </div>
            <div className="col-span-12 lg:col-span-6 lg:col-start-7 flex flex-col gap-6 xl:gap-10 justify-start items-start">
              {steps.map((step) => (
                <div key={step.num} className="flex justify-start items-start gap-4 sm:gap-6 group">
                  <div
                    className={`heading-4 group-hover:bg-s2 p-4 rounded-full relative duration-500 ${step.last ? '' : 'after:absolute after:bg-strokeColor after:h-[200px] min-[340px]:after:h-[170px] min-[450px]:after:h-[130px] lg:after:h-[150px] after:w-[1px] after:right-1/2 group-hover:after:bg-s2 after:duration-500 group-hover:after:w-[3px]'}`}
                  >
                    <span className="text-white bg-s1 w-10 h-10 rounded-full flex justify-center items-center !leading-none">
                      {step.num}
                    </span>
                  </div>
                  <div className={step.last ? '' : 'border-b border-strokeColor'}>
                    <h4 className="heading-4">{step.title}</h4>
                    <p className="text-bodyText pt-4 pb-6 xl:pb-10">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
