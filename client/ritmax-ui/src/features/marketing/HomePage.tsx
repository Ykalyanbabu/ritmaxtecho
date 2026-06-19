import { Link } from 'react-router-dom'

import { MARKETING_IMG as IMG } from '@/shared/constants/marketing'

export function HomePage() {
  return (
    <>
      <section className="bg-repeat stp-30 hero_bg_gradient overflow-hidden">
        <img
          src={`${IMG}/hero_bg_element1.png`}
          alt=""
          className="absolute top-0 left-0 xxxl:left-36 max-lg:w-[300px] max-xxl:w-[500px] max-md:hidden"
        />
        <img
          src={`${IMG}/hero_bg_element2.png`}
          alt=""
          className="absolute top-0 right-0 max-xxl:w-[300px] max-sm:hidden"
        />
        <div className="absolute -left-[200px] -bottom-1/2 bg-white blur-[200px] rounded-[1176px] max-w-full lg:w-[1176px] h-[1176px] overflow-hidden" />
        <div className="xxl:ml-[calc((100%-1296px)/2)] lg:max-xxl:py-10 max-xxl:container relative z-20 max-lg:pt-15 text-s1 grid grid-cols-12">
          <img src={`${IMG}/hero_bg_element3.png`} alt="" className="absolute top-1/3 left-1/3 max-sm:hidden" />
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-center gap-2">
            <p className="uppercase text-base lg:text-xl font-semibold animate__animated animate__fadeInUp">
              Efficiency Payroll and workforce mastery
            </p>
            <div className="display-2">
              We Make
              <div className="text-s3 inline-flex">Payroll</div>
              <br />
              Painless.
            </div>
            <p className="max-w-[550px]">
              We get your employees paid while providing online access to paystubs, tax reports &amp; payroll tax
              filings.
            </p>
            <div className="flex justify-start items-center gap-4 pt-6 lg:pt-8 pb-15">
              <Link
                to="/contact"
                className="font-medium bg-s2 py-2 lg:py-3 px-4 lg:px-6 rounded-full text-mainTextColor"
              >
                Get Started
              </Link>
              <Link to="/contact" className="underline font-medium">
                Learn More
              </Link>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <img
              src={`${IMG}/hero_illus.png`}
              alt=""
              style={{ maxWidth: '90%', height: 'auto' }}
              className="animate__animated animate__fadeInUp"
            />
          </div>
        </div>
      </section>

      <section className="stp-30 sbp-30 relative">
        <img src={`${IMG}/circleIcon.webp`} alt="" className="absolute top-10 left-0 max-xxl:hidden xxl:-left-72 xxxl:-left-40" />
        <img src={`${IMG}/sliceIcon.webp`} alt="" className="absolute right-0 sm:right-2 lg:right-10 top-10 xl:top-32 max-md:h-[80px]" />
        <div className="container z-10 relative">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center max-xxl:overflow-hidden">
              <div className="max-w-[700px] text-center flex justify-center items-center flex-col">
                <p className="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white wow animate__animated animate__fadeInUp">
                  Solutions
                </p>
                <h1 className="display-4 pt-4 pb-4 lg:pb-6 wow animate__animated animate__fadeInDown">
                  The global payroll solution
                </h1>
                <p className="text-bodyText wow animate__animated animate__fadeInDown">
                  When it comes to payroll solutions, we have a variety of options that benefit both your company and
                  your contractor.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 stp-15 max-lg:gap-6">
            <div className="col-span-12 lg:col-span-6">
              <div className="flex justify-center items-center overflow-hidden self-stretch">
                <img src={`${IMG}/SI.webp`} alt="" className="hover:scale-110 duration-500 w-full" />
              </div>
            </div>
            <div className="col-span-12 lg:col-start-8 lg:col-span-5 flex justify-center items-start flex-col">
              <h1 className="heading-1 pb-5">Consolidate Payroll Processing</h1>
              <p className="text-bodyText">
                We have designed a fast and effective payroll system that streamlines your payment process.
              </p>
              <div className="grid grid-cols-2 gap-4 lg:gap-6 py-6 lg:py-10 w-full">
                {[
                  { icon: 'ph-fill ph-file-text', label: 'Tax Preparation' },
                  { icon: 'ph-fill ph-hand-heart', label: 'Payroll Processing' },
                  { icon: 'ph-fill ph-lightbulb-filament', label: 'Cost Effective' },
                  { icon: 'ph-fill ph-rocket-launch', label: 'Scale Rapidly' },
                ].map((item) => (
                  <div key={item.label} className="group col-span-2 sm:col-span-1 flex justify-start items-center gap-5">
                    <i
                      className={`${item.icon} rounded-full border border-strokeColor bg-softBg w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] text-4xl text-s1 group-hover:text-mainTextColor group-hover:bg-s2 group-hover:border-mainTextColor duration-500 !leading-[0] flex justify-center items-center`}
                    />
                    <p className="text-lg font-medium group-hover:text-s1 duration-500">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-start items-start">
                <Link
                  to="/contact"
                  className="flex justify-center max-sm:text-sm items-center gap-3 py-2 md:py-3 px-3 md:px-6 rounded-full bg-s2 border border-mainTextColor text-mainTextColor group font-medium"
                >
                  Contact Us
                  <span className="group-hover:rotate-[45deg] duration-500 text-base sm:text-xl lg:text-2xl !leading-[0]">
                    <i className="ph-bold ph-arrow-up-right" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-softBg1 stp-30 sbp-30">
        <div className="container">
          <div className="flex justify-between items-end gap-6 max-lg:flex-col max-lg:items-start">
            <div className="max-w-[600px] flex justify-center items-start flex-col">
              <p className="bg-p1 py-3 px-5 rounded-full text-white wow animate__animated animate__fadeInUp">Features</p>
              <h1 className="display-4 pt-4 wow animate__animated animate__fadeInDown">
                Perfect solutions for your business
              </h1>
            </div>
            <p className="text-bodyText max-w-[500px]">
              We&apos;re simplifying every aspect of managing a world-wide team, from benefits and equity to working
              visas and equipment. It&apos;s one platform made to get you set up.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-6 stp-15">
            {[
              { icon: 'ph-fill ph-users-three', title: 'EOR employees', text: 'Easily hire and pay employees where you don\'t have entities with Jonny\'s world-wide infrastructure.' },
              { icon: 'ph-fill ph-hand-coins', title: 'Global Payroll', text: 'Streamline your global payroll with precision and compliance. Our expert services ensure accurate and timely.' },
              { icon: 'ph-fill ph-user-gear', title: 'Contractors', text: 'Reliable contractors delivering quality craftsmanship and exceptional service. Your perfect project,' },
              { icon: 'ph-fill ph-user-plus', title: 'Direct employees', text: 'Maximize workforce efficiency with our Direct Employees services. Streamline hiring, payroll,' },
            ].map((card) => (
              <div key={card.title} className="col-span-12 sm:col-span-6 lg:col-span-3 wow animate__animated animate__fadeInUp">
                <div className="bg-white p-6 xl:p-8 flex flex-col border border-white group hover:border-mainTextColor duration-700 hover:bg-s2">
                  <div className="text-4xl text-s1 pb-6 group-hover:text-mainTextColor duration-500">
                    <i className={card.icon} />
                  </div>
                  <h4 className="heading-4 pb-5">{card.title}</h4>
                  <p className="text-bodyText pb-6">{card.text}</p>
                  <Link to="/contact" className="flex justify-start items-center gap-2 font-medium">
                    Learn more <i className="ph ph-arrow-right" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stp-30 sbp-30">
        <div className="container">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center max-xxl:overflow-hidden">
              <div className="max-w-[900px] text-center flex justify-center items-center flex-col">
                <p className="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white wow animate__animated animate__fadeInUp">
                  How it works
                </p>
                <h1 className="display-4 pt-4 pb-4 lg:pb-6 wow animate__animated animate__fadeInDown">
                  A Step-by-Step Guide to Our Platform
                </h1>
                <p className="text-bodyText wow animate__animated animate__fadeInUp">
                  Explore our platform with ease! Sign up, select your industry, and seamlessly integrate our tailored
                  payment solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center gap-6 md:gap-4 lg:gap-6 stp-15 relative max-md:flex-col">
            <img src={`${IMG}/stepArrow1.webp`} alt="" className="absolute top-28 right-[22%] max-xxl:right-[23%] max-xxl:top-24 max-xxl:w-[200px] max-lg:right-[25%] max-lg:w-[100px] max-md:hidden" />
            <img src={`${IMG}/stepArrow2.webp`} alt="" className="absolute top-16 left-[21%] max-xxl:top-20 max-xxl:left-[23%] max-xxl:w-[200px] max-lg:left-[25%] max-lg:w-[100px] max-md:hidden" />
            {[
              { icon: 'ph-fill ph-file-plus', title: 'Create An Account', text: 'Join our platform effortlessly! Streamlined user registration with secure verification.' },
              { icon: 'ph-fill ph-user', title: 'Add Your Employees', text: 'Join our platform effortlessly! Streamlined user registration with secure verification.' },
              { icon: 'ph-fill ph-hand-coins', title: 'Run Your First Payroll', text: 'Join our platform effortlessly! Streamlined user registration with secure verification.' },
            ].map((step) => (
              <div key={step.title} className="flex justify-center items-center text-center flex-col max-w-[350px]">
                <div className="text-s1 bg-softBg border border-strokeColor rounded-full p-6 lg:p-7 text-3xl lg:text-5xl">
                  <i className={step.icon} />
                </div>
                <h4 className="heading-4 pt-8 pb-6">{step.title}</h4>
                <p className="text-bodyText">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-softBg1 stp-30 sbp-30 overflow-hidden">
        <div className="container">
          <div className="flex justify-between items-end gap-6 max-lg:flex-col max-lg:items-start">
            <div className="max-w-[600px] flex justify-center items-start flex-col">
              <p className="bg-p1 py-3 px-5 rounded-full text-white">Why RITMAX</p>
              <h1 className="display-4 pt-4">A platform for your global team</h1>
            </div>
            <p className="text-bodyText max-w-[500px]">
              Your dependable guide to achieving freedom from manual HR work and building that perfect workplace you
              have always aspired to build.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-6 stp-15">
            {[
              { img: 'whyAccoupayCard_1.webp', title: 'Hire or relocate team member with in house visa support' },
              { img: 'whyAccoupayCard_2.webp', title: 'Create complaint contracts with a single click' },
              { img: 'whyAccoupayCard_3.webp', title: 'Send equipment worldwide, without the hassle' },
              { img: 'whyAccoupayCard_4.webp', title: 'Offer country- specific benefits at competitive rates' },
              { img: 'whyAccoupayCard_5.webp', title: 'Provide your team with co-working access via work' },
              { img: 'whyAccoupayCard_6.webp', title: 'Save time using advance integrations' },
            ].map((card) => (
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

      <section className="stp-30 sbp-30">
        <div className="container grid grid-cols-12">
          <div className="flex justify-start items-start col-span-12 lg:col-span-5 max-lg:sbp-15">
            <div className="max-w-[600px] flex justify-start items-start flex-col">
              <p className="bg-p1 py-3 px-5 rounded-full text-white wow animate__animated animate__fadeInUp">
                Integrations
              </p>
              <h1 className="display-4 pt-4 pb-6 wow animate__animated animate__fadeInDown">All in One Place All in Sync.</h1>
              <p className="text-bodyText wow animate__animated animate__fadeInUp">
                Experience seamless coordination with our comprehensive services. From accounting to payroll, we bring
                everything together in one place,
              </p>
            </div>
          </div>
          {[
            { icon: 'ph-fill ph-currency-circle-dollar', title: 'Payment Gateways', bg: 'bg-softBg1 border-softBg1', iconBg: 'bg-white' },
            { icon: 'ph-fill ph-money', title: 'Tax Software Integration', bg: 'border-white', iconBg: 'bg-softBg1' },
            { icon: 'ph-fill ph-users-three', title: 'Expense Management', bg: 'bg-softBg1 border-softBg1', iconBg: 'bg-white' },
            { icon: 'ph-fill ph-timer', title: 'Time Tracking Systems', bg: 'border-white', iconBg: 'bg-softBg1' },
          ].map((item, i) => (
            <div
              key={item.title}
              className={`col-span-12 min-[500px]:col-span-6 lg:col-span-3 ${i === 2 ? 'lg:col-start-4 min-[500px]:max-lg:order-2' : ''} hover:bg-s2 border hover:border-mainTextColor duration-500 min-h-[250px] lg:min-h-[300px] flex justify-start items-start flex-col p-8 ${item.bg}`}
            >
              <div className={`text-4xl rounded-full text-s1 leading-[0] p-4 ${item.iconBg}`}>
                <i className={item.icon} />
              </div>
              <h4 className="heading-4 pt-6 w-[200px]">{item.title}</h4>
              <div className="flex justify-end items-end w-full pt-10 lg:pt-15 text-xl font-medium">
                <Link to="/all-services" className="bg-white p-2 rounded-full shadow2 leading-[0]">
                  <i className="ph ph-arrow-right" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-p1 pt-15 overflow-hidden">
        <div className="max-xxl:container xxl:ml-[calc((100%-1296px)/2)] flex justify-between text-white sm:max-xxl:gap-6 max-lg:flex-col">
          <div className="flex flex-col justify-center items-start w-full lg:max-xxl:w-1/2 xxl:max-w-[550px] max-xxl:pb-8 max-xxl:overflow-hidden">
            <p className="text-lg font-medium underline wow animate__animated animate__fadeInUp">Experience RITMAX</p>
            <h1 className="display-4 pb-6 pt-4 wow animate__animated animate__fadeInDown">
              We&apos;ve got everything you need?
            </h1>
            <p className="pb-8 wow animate__animated animate__fadeInUp">
              We save you from all that boring paperwork! From global hiring, to instant payments, and taxes, we&apos;ve
              got your back.
            </p>
            <Link
              to="/contact"
              className="flex justify-center max-sm:text-sm items-center gap-3 py-2 md:py-3 px-3 md:px-6 rounded-full bg-s2 border border-mainTextColor text-mainTextColor group font-medium"
            >
              Contact Us
              <span className="group-hover:rotate-[45deg] duration-500 text-base sm:text-xl lg:text-2xl">
                <i className="ph-bold ph-arrow-up-right" />
              </span>
            </Link>
          </div>
          <div className="w-full lg:max-xxl:w-1/2 self-stretch flex justify-center max-xxl:items-center lg:pt-10 wow animate__animated animate__fadeInUp">
            <img src={`${IMG}/contact_illus.webp`} alt="" className="object-cover" />
          </div>
        </div>
      </div>

      <section className="stp-30 sbp-30 overflow-hidden">
        <div className="container">
          <div className="flex justify-between items-end">
            <div className="max-w-[900px] flex justify-end items-start flex-col">
              <p className="bg-p1 py-3 px-5 rounded-full text-white">News &amp; Blog</p>
              <h1 className="display-4 pt-4 pb-6">Stay updates with RITMAX News</h1>
              <p>Stay informed and empowered with our latest articles on accounting, payroll processing, and financial management.</p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6 stp-15">
            {[
              { date: 'Jan 15, 2024', tag: 'Taxation', img: 'blogImg1.webp', title: 'Key Considerations in Choosing Payroll Processing Services' },
              { date: 'Jan 17, 2024', tag: 'Processing', img: 'blogImg2.webp', title: 'The Role of Technology in Modern Accounting Practices' },
              { date: 'Jan 24, 2024', tag: 'Taxation', img: 'blogImg3.webp', title: 'Common Mistakes in Accounting and How to Avoid Them' },
            ].map((post) => (
              <div key={post.title} className="col-span-12 sm:col-span-6 md:col-span-4 text-bodyText group wow animate__animated animate__fadeInUp">
                <div className="flex flex-col justify-start items-start">
                  <div className="flex justify-between items-center w-full pb-5">
                    <p>{post.date}</p>
                    <p className="border border-strokeColor rounded-full group-hover:bg-s2 group-hover:border-mainTextColor group-hover:text-mainTextColor duration-500 py-1 lg:py-3 px-3 lg:px-5">
                      {post.tag}
                    </p>
                  </div>
                  <div className="flex justify-center items-center w-full overflow-hidden">
                    <img src={`${IMG}/${post.img}`} alt="" className="object-cover hover:scale-110 duration-500" />
                  </div>
                  <h4 className="heading-4 text-mainTextColor pb-4 pt-6">{post.title}</h4>
                  <Link to="/contact" className="text-mainTextColor flex justify-start items-center gap-3 border-b border-mainTextColor hover:border-s2 duration-500">
                    Read more
                    <i className="ph ph-arrow-right" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sbp-30 overflow-hidden">
        <div className="container">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center max-xxl:overflow-hidden">
              <div className="max-w-[700px] text-center flex justify-center items-center flex-col">
                <p className="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white wow animate__animated animate__zoomIn">Contact</p>
                <h1 className="display-4 pt-4 pb-4 lg:pb-6 wow animate__animated animate__fadeInUp">Questions? Meet Answer</h1>
                <p className="text-bodyText wow animate__animated animate__fadeInDown">
                  Startups thrive with RITMAX. Their flexible payroll solutions have been instrumental in our journey,
                  providing the support
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6 stp-15">
            {[
              { icon: 'ph-fill ph-binoculars', title: 'Compare RITMAX', text: 'Explore how RITMAX stands out. Check our comparison.' },
              { icon: 'ph-fill ph-desktop', title: 'Explore The Demo', text: 'Curious about our services? Request a demo to experience firsthand' },
              { icon: 'ph-fill ph-headphones', title: 'Give Us a Ring', text: 'Monday through Friday from 6AM - 6PM MST' },
              { icon: 'ph-fill ph-chat-centered', title: 'Help Centre', text: 'Looking for answers? Visit our Help Center for detailed guides' },
            ].map((item) => (
              <div key={item.title} className="col-span-12 min-[450px]:col-span-6 md:col-span-3 wow animate__animated animate__fadeInUp">
                <div className="flex justify-center items-center flex-col">
                  <div className="text-7xl text-s1">
                    <i className={item.icon} />
                  </div>
                  <h4 className="heading-4 pb-4 pt-3">{item.title}</h4>
                  <p className="pb-5 text-center">{item.text}</p>
                  <Link to="/contact" className="text-s1 underline font-medium">
                    {item.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative after:absolute after:bg-mainTextColor after:bottom-0 after:right-0 after:left-0 after:h-1/2 overflow-hidden">
        <div className="container bg-p1 py-12 sm:py-20 px-4 sm:px-10 md:px-20 lg:px-40 relative z-10 wow animate__animated animate__fadeInUp">
          <img src={`${IMG}/sliceIcon.webp`} alt="" className="absolute -top-4 sm:-top-6 lg:top-0 right-0 h-[60px] sm:h-[80px] lg:h-[120px] -rotate-90" />
          <p className="display-3 text-center text-white !leading-[130%]">
            Make RITMAX Part Of Your Work And Get Daily Update
          </p>
          <form
            className="pt-6 sm:pt-10 relative"
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <div className="flex justify-center items-center gap-3 max-[500px]:flex-col">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="border border-mainTextColor outline-none bg-white py-3 sm:py-4 px-4 md:px-8 max-[500px]:w-full lg:w-2/4"
              />
              <button type="submit" className="border border-mainTextColor bg-s2 py-3 sm:py-4 px-4 md:px-8 font-medium">
                Subscribe Now
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
