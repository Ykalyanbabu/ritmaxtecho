import { Link } from 'react-router-dom'

import { MARKETING_IMG as IMG } from '@/shared/constants/marketing'

export function AboutPage() {
  return (
    <>
      <section className="pt-24 lg:stp-30 sbp-30 bg-softBg1 relative">
        <img src={`${IMG}/circleIcon.webp`} alt="" className="absolute top-60 -left-20 max-lg:h-[400px] max-sm:hidden" />
        <img src={`${IMG}/about_vector.webp`} alt="" className="absolute top-36 right-0 xl:right-28 max-lg:hidden" />
        <div className="container pb-10">
          <ul className="flex justify-start items-center gap-1">
            <li>
              <Link to="/" className="flex justify-start items-center gap-1">
                <i className="ph ph-house" />
                <span className="hover:text-s2 duration-300">Home</span>
              </Link>
            </li>
            <li className="flex justify-start items-center gap-1">
              <i className="ph ph-caret-right" /> About Us
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className="flex justify-center items-center pb-10 lg:pb-16 xl:pb-24">
            <div className="max-w-[600px] text-center flex justify-center items-center flex-col">
              <p className="bg-p1 py-3 px-5 rounded-full text-white">About</p>
              <h1 className="display-4 pt-4 pb-6">Work with Ritmax</h1>
              <p className="text-bodyText">
                Welcome to Ritmax, where financial excellence meets personalized service. At Ritmax, we understand the
                intricacies of accounting and payroll processing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="stp-30 sbp-30">
        <div className="container grid grid-cols-12 max-lg:gap-6">
          <div className="col-span-12 md:col-span-6 lg:col-span-5 flex flex-col justify-center items-start">
            <p className="bg-p1 py-3 px-5 rounded-full text-white">Ritmax Story</p>
            <h1 className="display-4 pt-4 pb-6">In 2012, an exciting journey began with a daring vision.</h1>
            <p className="uppercase text-bodyText font-medium text-base lg:text-xl">message from our ceo.</p>
            <p className="heading-4 xl:text-[32px] pt-4 pb-6">
              &ldquo;A successful team requires members with complementary skill sets.&rdquo;
            </p>
            <div className="flex justify-start items-center gap-3">
              <div>
                <p>VENKATA SATYA SAI PAVAN KUMAR &amp; V B S MADHAVI</p>
                <p className="text-bodyText text-sm">DIRECTORS</p>
              </div>
            </div>
          </div>
          <div className="lg:col-start-7 col-span-12 md:col-span-6 flex flex-col gap-6 lg:gap-10 max-md:pt-6">
            {[
              { title: 'Who We Are', text: 'Ritmax has been at the forefront of delivering innovative financial solutions. Our journey began with a vision to simplify financial processes for businesses of all sizes. Today, we stand proud as a trusted partner,' },
              { title: 'Our Mission', text: 'Ritmax is on a mission to empower businesses by providing reliable, efficient, and innovative financial services. We strive to be your go-to partner for all your accounting and payroll needs, enabling you to focus on what you do best.' },
              { title: 'Expert Team', text: 'Our team of experienced professionals brings a wealth of knowledge to every client interaction. From payroll processing to financial advisory, we have the expertise to guide your business.' },
            ].map((block) => (
              <div key={block.title} className="border-b pb-6 lg:pb-10">
                <h4 className="heading-4 pb-6">{block.title}</h4>
                <p className="text-bodyText">{block.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stp-30 sbp-30 bg-softBg1">
        <div className="container">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center max-xxl:overflow-hidden">
              <div className="max-w-[700px] text-center flex justify-center items-center flex-col">
                <p className="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white">Our Values</p>
                <h1 className="display-4 pt-4 pb-4 lg:pb-6">Our Values</h1>
                <p className="text-bodyText">
                  At Ritmax, our values are the foundation of everything we do. They reflect our commitment to
                  excellence, integrity, and client success.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6 stp-15">
            {[
              { icon: 'ph-fill ph-handshake', title: 'Integrity', text: 'We are transparent and do the right thing for the right reason' },
              { icon: 'ph-fill ph-check-circle', title: 'Accountability', text: 'We take ownership of outcomes and deliver on our commitments' },
              { icon: 'ph-fill ph-users-three', title: 'Diversity', text: 'We seek and leverage differences and unique perspectives' },
              { icon: 'ph-fill ph-user', title: 'Customer Centricity', text: 'We start with the customer in everything we do' },
            ].map((value) => (
              <div key={value.title} className="col-span-12 min-[450px]:col-span-6 md:col-span-3 flex justify-center items-center flex-col">
                <div className="text-6xl text-s1">
                  <i className={value.icon} />
                </div>
                <h4 className="heading-4 pb-4 pt-3">{value.title}</h4>
                <p className="pb-5 text-center">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
