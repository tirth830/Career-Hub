import { useSelector } from "react-redux"

import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

function Template({ title, description1, description2, image, formType }) {
  // const { loading } = useSelector((state) => state.auth)

  return (
    <div className="relative text-white">
        {/* Background Animation */}
        <div className="area absolute inset-0 mt-[-16px]">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
      {/* {loading ? (
        <div className="spinner"></div>
      ) : ( */}{
        <div className="mx-auto  flex w-11/12 max-w-maxContent lg:w-[1000px] lg:pl-10 flex-col-reverse bg-opacity-40 text-blue-900 bg-[#e7f3ff]  rounded-2xl shadow-xl justify-around gap-y-12 lg:py-12 py-4 md:flex-row md:gap-y-0 md:gap-x-12">
          <div className="mx-auto w-11/12 max-w-[450px] md:mx-0 lg:-mr-10 mt-3 lg:mt-0">
            <h2 className="lg:text-[1.79rem] text-2xl font-semibold lg:leading-[2.375rem] text-richblack-5">
              {title}
            </h2>
            <p className="lg:mt-4 mt-2 lg:text-[1.125rem] text-base lg:leading-[1.625rem] mb-5">
              <span className="text-richblack-100">{description1}</span>{" "}
              <span className="font-edu-sa font-bold italic text-yellow-300">
                {description2}
              </span>
            </p>
            {formType === "signup" ? <SignupForm /> : <LoginForm />}
          </div>
          <div className="relative mx-auto w-11/12 max-w-[450px] md:mx-0 lg:ml-10 -mt-[70px] md:mt-0 lg:mt-0`">
            <img
              src={image}
              alt="Students"
              width={558}
              height={504}
              loading="lazy"
              className="absolute -top-4 right-4 z-10 hidden md:block lg:block"
            />
          </div>
        </div>
      }
    </div>
    </div>
  )
}

export default Template
