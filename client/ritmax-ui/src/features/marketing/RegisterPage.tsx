import { Link } from 'react-router-dom'

import { MARKETING_IMG as IMG } from '@/shared/constants/marketing'

const testimonials = [
  {
    quote:
      '"Incredible customer service. Their responsiveness and dedication to understanding our unique needs make them a trusted ally in our financial journey."',
    name: 'David Warner',
    role: 'Web Designer',
  },
]

export function RegisterPage() {
  return (
    <main>
      <section className="flex justify-start items-center gap-8 xl:gap-20 xxl:gap-32 max-xl:flex-col">
        <div className="relative lg:max-h-screen lg:min-h-screen overflow-hidden max-xl:order-2">
          <img src={`${IMG}/register_bg_img.png`} alt="" className="object-cover h-full" />
          <div className="absolute bottom-10 xl:bottom-20 left-4 xl:left-16 xxl:left-24 xxxl:left-32 testimonial-bg p-4 sm:p-8 max-xl:container lg:w-[550px] rounded-xl overflow-hidden">
            <div className="swiper review-carousel">
              <div className="swiper-wrapper">
                {testimonials.map((item) => (
                  <div key={item.name} className="swiper-slide">
                    <div className="relative">
                      <p className="text-lg sm:text-xl">{item.quote}</p>
                      <div className="flex gap-3 pt-3 justify-between">
                        <div>
                          <p className="text-lg sm:text-2xl font-medium">{item.name}</p>
                          <p className="max-sm:text-xs">{item.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-end items-center gap-3 absolute right-0 sm:right-4 bottom-4 z-20">
                <button type="button" className="bg-mainTextColor rounded-full text-white p-3 ara-prev !leading-[0]">
                  <i className="ph ph-arrow-left" />
                </button>
                <button type="button" className="bg-mainTextColor rounded-full text-white p-3 ara-next !leading-[0]">
                  <i className="ph ph-arrow-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="max-xl:container xl:w-[650px] xl:pr-8 max-xl:stp-30">
          <Link to="/">
            <img src={`${IMG}/logo.png`} alt="Ritmax logo" />
          </Link>
          <h2 className="display-4 py-5">Register</h2>
          <p className="text-bodyText pb-6 lg:pb-10">Join Our Community: Register for Exclusive Access</p>
          <button type="button" className="flex justify-center items-center gap-2 font-semibold bg-softBg py-4 rounded-xl w-full">
            <span>
              <img src={`${IMG}/google.png`} alt="" />
            </span>
            Sign up with Google
          </button>
          <div className="py-6 lg:py-8 text-center">
            <p className="relative after:absolute after:top-3 after:left-0 after:h-px after:bg-strokeColor after:w-[40%] before:absolute before:top-3 before:right-0 before:h-px before:bg-strokeColor max-md:before:content-none max-md:after:content-none before:w-[40%]">
              Or Sign In With
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2 sm:col-span-1">
              <input type="text" placeholder="First Name" className="placeholder:text-bodyText py-4 px-8 border w-full outline-none" />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <input type="text" placeholder="Last Name" className="placeholder:text-bodyText py-4 px-8 border w-full outline-none" />
            </div>
            <div className="col-span-2 py-4 px-8 border flex justify-start items-center gap-2">
              <span className="text-xl text-bodyText">
                <i className="ph-fill ph-envelope" />
              </span>
              <input type="email" placeholder="Type email address" className="placeholder:text-bodyText w-full outline-none" />
            </div>
            <div className="col-span-2 py-4 px-8 border flex justify-start items-center gap-2">
              <span className="text-xl text-bodyText">
                <i className="ph-fill ph-lock" />
              </span>
              <input type="password" placeholder="Password" className="placeholder:text-bodyText w-full outline-none" />
            </div>
            <div className="col-span-2 table-checkbox">
              <label className="flex justify-start items-center gap-2">
                <input type="checkbox" />
                <p>
                  Agree With <span className="font-semibold underline">Privacy &amp; Policy</span>
                </p>
              </label>
            </div>
            <div className="col-span-2">
              <button
                type="button"
                className="py-4 bg-p1 text-white block text-center border border-p1 hover:bg-s2 hover:border-mainTextColor hover:text-mainTextColor duration-500 w-full"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
