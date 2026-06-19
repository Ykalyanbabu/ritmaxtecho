import { Link } from 'react-router-dom'

import { MARKETING_IMG as IMG } from '@/shared/constants/marketing'

const expertise = [
  { icon: 'ph-fill ph-coin', title: 'Tax Preparation and Filing', text: 'Ensure a seamless tax season with our expert tax preparation services. We handle all necessary documentation and filing requirements,' },
  { icon: 'ph-fill ph-hand-coins', title: 'Strategic Tax Planning', text: 'Plan for the future with our strategic tax planning services. We help optimize your financial decisions to maximize savings and minimize potential risks.' },
  { icon: 'ph-fill ph-seal-check', title: 'Compliance Assurance', text: 'Stay compliant with ever-changing tax regulations. Our team stays abreast of updates, ensuring your business adheres to all relevant tax laws' },
  { icon: 'ph-fill ph-headphones', title: 'Audit Support', text: 'In the event of an audit, our experienced team provides support, helping you navigate the process efficiently and effectively.' },
]

const whyChoose = [
  { icon: 'ph-fill ph-user', title: 'Expert Tax Professionals', text: 'Our team of tax professionals brings extensive knowledge and expertise to handle various tax scenarios.' },
  { icon: 'ph-fill ph-users-three', title: 'Personalized Consultations', text: 'We understand that every business is unique. Our personalized consultations ensure that our tax services.' },
  { icon: 'ph-fill ph-lightbulb-filament', title: 'Strategic Advice', text: 'Beyond compliance, we offer strategic advice to help you make informed financial decisions that benefit your business.' },
]

export function TaxationServicesPage() {
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
                Taxations Services
              </li>
            </ul>
            <h1 className="display-3 pt-4">Taxations Services</h1>
            <p className="text-bodyText pt-6">
              Ritmax takes the complexity out of taxes, offering a range of services to ensure your business stays
              compliant and maximizes.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 flex justify-center items-center">
            <img src={`${IMG}/breadcrumb_img_4.webp`} alt="" className="object-fit max-sm:max-h-[300px]" />
          </div>
        </div>
      </section>

      <section className="stp-30 sbp-30">
        <div className="container grid grid-cols-12 gap-6 max-xxl:overflow-hidden">
          <div className="col-span-12 lg:col-span-6 xxl:col-span-5">
            <div className="flex justify-start items-start flex-col">
              <p className="bg-p1 py-3 px-5 rounded-full text-white">Taxation</p>
              <h2 className="display-4 pt-4 pb-6">Ritmax&apos;s Taxation Expertise</h2>
              <p className="text-bodyText pb-10">
                Feel neglected by your accountant? Experience the attentive and personalized service you deserve with
                Ritmax.
              </p>
              <div className="flex justify-center items-center w-full overflow-hidden">
                <img src={`${IMG}/taxation_services_img.webp`} alt="" className="hover:scale-110 duration-500 w-full h-full" />
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 xxl:col-start-7 flex flex-col gap-6 xl:gap-10 justify-center items-center">
            {expertise.map((item) => (
              <div key={item.title}>
                <div className="flex justify-start items-start gap-4">
                  <div className="text-s1 !leading-[0] text-2xl sm:text-3xl p-3 sm:p-4 rounded-full bg-softBg1">
                    <i className={item.icon} />
                  </div>
                  <div>
                    <h4 className="heading-4">{item.title}</h4>
                    <p className="text-bodyText pt-3">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-softBg1 stp-30 sbp-30">
        <div className="container">
          <div className="flex justify-between items-end gap-6 max-lg:flex-col max-lg:items-start">
            <div className="max-w-[600px] flex justify-center items-start flex-col">
              <p className="bg-p1 py-3 px-5 rounded-full text-white">What We Do</p>
              <h1 className="display-4 pt-4">Why Choose Ritmax for Taxation Services?</h1>
            </div>
            <p className="text-bodyText max-w-[500px]">
              Accounting, Taxation &amp; Payroll Processing Services refer to a range of professional services provided by
              accounting firms or specialized firms that assist businesses
            </p>
          </div>
          <div className="grid grid-cols-12 gap-6 stp-15">
            {whyChoose.map((item) => (
              <div key={item.title} className="col-span-12 sm:col-span-6 md:col-span-4">
                <div className="bg-white p-6 xl:p-8 flex flex-col border border-white group hover:border-mainTextColor duration-700 hover:bg-s2 group items-start justify-start">
                  <div className="text-4xl !leading-[0] text-s1 p-3 group-hover:text-mainTextColor duration-500 bg-softBg1 group-hover:bg-white rounded-full">
                    <i className={item.icon} />
                  </div>
                  <h4 className="heading-4 pb-5 pt-8">{item.title}</h4>
                  <p className="text-bodyText">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
