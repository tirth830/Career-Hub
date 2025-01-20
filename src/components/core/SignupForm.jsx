import React, { useState } from "react";
import { toast } from "react-hot-toast"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { sendOtp } from "../../operations/authAPI.js"
import { setSignupData } from "../../slices/authSlice.js"
import { ACCOUNT_TYPE } from "../../utils/constants.js";
import Tab from "../common/Tab.jsx";



function SignupForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // student or instructor
  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.APPLICANT)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const { firstName, lastName, email, password, confirmPassword } = formData

  // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
      
    }))
  }

  // Handle Form Submission
  const handleOnSubmit = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast.error("Passwords Do Not Match")
      return
    }
    const signupData = {
      ...formData,
      accountType,
    }
console.log(signupData,"herer");
    // Setting signup data to state
    // To be used after otp verification
    dispatch(setSignupData(signupData))
    // Send OTP to user for verification
    dispatch(sendOtp(formData.email, navigate))

    // Reset
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    })
    setAccountType(ACCOUNT_TYPE.APPLICANT)
  }
  const tabData = [
    {
      id: 1,
      tabName: "Applicant",
      type: ACCOUNT_TYPE.APPLICANT,
    },
    {
      id: 2,
      tabName: "Recruiter",
      type: ACCOUNT_TYPE.RECRUITER,
    },
  ]

  return (
    <div>
      <Tab tabData={tabData} field={accountType} setField={setAccountType} />
      {/* Form */}
      <form onSubmit={handleOnSubmit} className="flex w-full flex-col gap-y-4 ">
        <div className="md:flex lg:flex block gap-x-4 w-full">
          <label className="w-full ">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] font-semibold relative">
              First Name <sup className="text-red-500 text-lg absolute -top-1">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleOnChange}
              placeholder="Enter first name"
              className="form-style w-full py-1 px-2 rounded-md text-gray-600 outline-none shadow-md"
            />
          </label>
          <label className="w-full">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] font-semibold relative mt-2 lg:mt-0">
              Last Name <sup className="text-red-500 text-lg absolute -top-1">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleOnChange}
              placeholder="Enter last name"
              className="form-style w-full text-gray-600 outline-none shadow-md py-1 px-2 rounded-md"
            />
          </label>
        </div>
        <label className="w-full">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] font-semibold relative -mt-1.5 lg:mt-0">
            Email Address <sup className="text-red-500 text-lg absolute -top-1">*</sup>
          </p>
          <input
            required
            type="text"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter email address"
            className=" w-full py-1 px-2 rounded-md text-gray-600 outline-none shadow-md"
          />
        </label>
        <div className="md:flex lg:flex block gap-x-4">
          <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] font-semibold relative -mt-1.5 lg:mt-0">
              Create Password <sup className="text-red-500 text-lg absolute -top-1">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter Password"
              className="form-style w-full !pr-3  py-1 px-2 rounded-md text-gray-600 outline-none shadow-md"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 lg:top-[30px] top-[25px] z-[10] cursor-pointer "
            >
              {/* {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )} */}
            </span>
          </label>
          <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] font-semibold relative mt-2 lg:mt-0">
              Confirm Password <sup className="text-red-500 text-lg absolute -top-1">*</sup>
            </p>
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleOnChange}
              placeholder="Confirm Password"
              className="form-style w-full !pr-3  py-1 px-2 rounded-md text-gray-600 outline-none shadow-md"
            />
            <span
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-[63px] md:top-[30px] lg:top-[30px] z-[10] cursor-pointer "
            >
              {/* {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )} */}
            </span>
          </label>
        </div>
        <button
          type="submit"
          className="lg:mt-6 rounded-[8px] bg-blue-900 hover:bg-blue-800  duration-200 py-[8px] px-[12px] font-medium text-white"
        >
          Create Account
        </button>
      </form>
    </div>
  )
}

export default SignupForm
