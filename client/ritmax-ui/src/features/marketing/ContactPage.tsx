import { Link } from 'react-router-dom'

import { MARKETING_IMG as IMG } from '@/shared/constants/marketing'

export function ContactPage() {
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
                Contact
              </li>
            </ul>
            <h1 className="display-3 pt-4">Connect With Us</h1>
            <p className="text-bodyText pt-6">
              Connect with us for expert accounting and payroll services. Reach out via the form or contact information
              below.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 flex justify-center items-center">
            <img src={`${IMG}/breadcrumb_img_21.webp`} alt="" className="object-fit max-sm:max-h-[300px]" />
          </div>
        </div>
      </section>

      <section className="container grid grid-cols-12 stp-30 sbp-30">
        <div className="col-span-12 lg:col-span-8 lg:col-start-3 grid grid-cols-12 gap-4 lg:gap-6">
          <div className="flex flex-col justify-start items-start p-4 lg:p-8 bg-p1 text-white w-full col-span-12 sm:col-span-4 border border-p1 hover:bg-s2 hover:text-mainTextColor hover:border-mainTextColor duration-500 group">
            <div className="bg-white text-p1 text-2xl rounded-full p-4 group-hover:text-white group-hover:bg-mainTextColor duration-500 !leading-[0]">
              <i className="ph-fill ph-envelope" />
            </div>
            <h4 className="heading-4 pt-5 pb-2">Chat to Sales</h4>
            <a href="mailto:ritmax@gmail.com">ritmax@gmail.com</a>
          </div>
          <div className="flex flex-col justify-start items-start p-4 lg:p-8 bg-p1 text-white w-full col-span-12 sm:col-span-4 border border-p1 hover:bg-s2 hover:text-mainTextColor hover:border-mainTextColor duration-500 group">
            <div className="bg-white text-p1 text-2xl rounded-full p-4 group-hover:text-white group-hover:bg-mainTextColor duration-500 !leading-[0]">
              <i className="ph-fill ph-phone-call" />
            </div>
            <h4 className="heading-4 pt-5 pb-2">Contact Us</h4>
            <a href="tel:+918008882119">+91 80088 82119</a>
          </div>
          <div className="flex flex-col justify-start items-start p-4 lg:p-8 bg-p1 text-white w-full col-span-12 sm:col-span-4 border border-p1 hover:bg-s2 hover:text-mainTextColor hover:border-mainTextColor duration-500 group">
            <div className="bg-white text-p1 text-2xl rounded-full p-4 group-hover:text-white group-hover:bg-mainTextColor duration-500 !leading-[0]">
              <i className="ph-fill ph-map-pin" />
            </div>
            <h4 className="heading-4 pt-5 pb-2">Visit Our Office</h4>
            <p>Uppal, Hyderabad, Telangana.</p>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-8 lg:col-start-3 border p-4 sm:p-6 lg:p-10">
          <h4 className="heading-4 pb-6">Fill the From Below</h4>
          <form
            className="grid grid-cols-2 gap-6"
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <div className="col-span-2 sm:col-span-1">
              <input type="text" placeholder="First Name" className="placeholder:text-bodyText py-4 px-8 border w-full" required />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <input type="text" placeholder="Last Name" className="placeholder:text-bodyText py-4 px-8 border w-full" required />
            </div>
            <div className="col-span-2 sm:col-span-1 py-4 px-8 border flex justify-start items-center gap-2">
              <span className="text-xl text-bodyText">
                <i className="ph-fill ph-envelope" />
              </span>
              <input type="email" placeholder="Type email address" className="placeholder:text-bodyText w-full outline-none" required />
            </div>
            <div className="col-span-2 sm:col-span-1 py-4 px-8 border flex justify-start items-center gap-2">
              <span className="text-xl text-bodyText">
                <i className="ph-fill ph-pencil-simple" />
              </span>
              <input type="text" placeholder="Subject" className="placeholder:text-bodyText w-full outline-none" required />
            </div>
            <div className="col-span-2 py-4 px-8 border flex justify-start items-center gap-2">
              <textarea placeholder="Type Your message..." className="placeholder:text-bodyText w-full outline-none h-[200px]" required />
            </div>
            <div className="col-span-2 table-checkbox flex justify-between items-center max-[400px]:flex-col max-[400px]:items-start gap-5">
              <label className="flex justify-start items-center gap-2">
                <input type="checkbox" />
                <p>Subscribe to our newsletter.</p>
              </label>
              <button
                type="submit"
                className="py-2 sm:py-3 px-4 sm:px-6 bg-p1 text-white block text-center border border-p1 hover:bg-s2 hover:border-mainTextColor hover:text-mainTextColor duration-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="relative after:absolute after:bg-mainTextColor after:bottom-0 after:right-0 after:left-0 after:h-1/2 overflow-hidden">
        <div className="container bg-p1 py-12 sm:py-20 px-4 sm:px-10 md:px-20 lg:px-40 relative z-10 wow animate__animated animate__fadeInUp">
          <img src={`${IMG}/sliceIcon.webp`} alt="" className="absolute -top-4 sm:-top-6 lg:top-0 right-0 h-[60px] sm:h-[80px] lg:h-[120px] -rotate-90" />
          <p className="display-3 text-center text-white !leading-[130%]">Make Ritmax Part Of Your Work And Get Daily Update</p>
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
