import { Link } from 'react-router-dom'

import { MARKETING_IMG as IMG } from '@/shared/constants/marketing'

const services = [
  { icon: 'ph-fill ph-calculator', title: 'Bookkeeping', text: 'Maintain precise and up-to-date records with our professional bookkeeping services.' },
  { icon: 'ph-fill ph-file-text', title: 'Financial Reporting', text: "Gain valuable insights into your business's performance with our detailed financial reporting." },
  { icon: 'ph-fill ph-money', title: 'Tax Planning', text: 'Stay tax-compliant and maximize your savings with our expert tax planning services.' },
  { icon: 'ph-fill ph-chart-line-up', title: 'Financial Analysis', text: 'Harness the power of data with our financial analysis services. We interpret financial trends,' },
]

const benefits = [
  { icon: 'ph-fill ph-chat-circle', title: 'Great Communication', text: 'We resolve issues and offer advice quickly.' },
  { icon: 'ph-fill ph-chart-line-up', title: 'Growth Potential', text: 'We proactively offer growth and profitability advice' },
  { icon: 'ph-fill ph-note-pencil', title: 'Stay in Compliance', text: 'Your dedicated expert knows your business inside and out.' },
]

export function AccountingServicesPage() {
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
                Accounting Services
              </li>
            </ul>
            <h1 className="display-3 pt-4">Accounting Services</h1>
            <p className="text-bodyText pt-6">
              Discover comprehensive accounting services tailored to your business needs. From bookkeeping to financial
              reporting,
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 flex justify-center items-center">
            <img src={`${IMG}/breadcrumb_img_3.webp`} alt="" className="object-fit max-sm:max-h-[300px]" />
          </div>
        </div>
      </section>

      <section className="stp-30 sbp-30">
        <div className="flex justify-center items-center">
          <div className="max-w-[700px] text-center flex justify-center items-center flex-col">
            <p className="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white">Accounting Services</p>
            <h1 className="display-4 pt-4 pb-4 lg:pb-6">Explore Our Accounting Services</h1>
            <p className="text-bodyText">
              At Ritmax, our Accounting Services are designed to provide you with a comprehensive and accurate financial
              picture.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="grid grid-cols-12 stp-15 gap-6">
            {services.map((service) => (
              <div key={service.title} className="col-span-12 sm:col-span-6 xl:col-span-3 wow animate__animated animate__fadeInUp">
                <div className="flex justify-start items-start flex-col p-6 xl:p-10 group border border-strokeColor hover:bg-s2 hover:border-mainTextColor duration-500">
                  <div className="bg-softBg1 p-4 rounded-full text-s1 group-hover:bg-mainTextColor group-hover:text-white duration-500 text-5xl">
                    <i className={service.icon} />
                  </div>
                  <h4 className="heading-4 pb-5 pt-8">{service.title}</h4>
                  <p className="text-bodyText lg:pr-4">{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-softBg1 stp-30 sbp-30 max-xxl:overflow-hidden">
        <div className="container grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6 xl:col-span-5 flex justify-center items-center max-lg:order-2 max-lg:stp-15 overflow-hidden">
            <img src={`${IMG}/never_worry_img.webp`} alt="" className="hover:scale-110 duration-500 w-full h-full" />
          </div>
          <div className="xxl:col-start-7 col-span-12 lg:col-span-6">
            <h1 className="display-4">Never Worry About Your Accounting Again</h1>
            <p className="pt-6 text-bodyText pb-6 xl:pb-8">
              Experience peace of mind with Ritmax. Our comprehensive accounting services ensure accuracy and compliance,
              so you can focus on growing your business
            </p>
            <div className="flex flex-col gap-6 xl:gap-10 justify-start items-start pb-6 xl:pb-12">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex justify-start items-center gap-4">
                  <div className="text-s1 text-2xl sm:text-3xl p-3 sm:p-4 rounded-full bg-white !leading-[0]">
                    <i className={benefit.icon} />
                  </div>
                  <div>
                    <h4 className="heading-4">{benefit.title}</h4>
                    <p className="text-bodyText pt-2">{benefit.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/contact" className="bg-s2 rounded-full py-3 px-6 font-medium">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
