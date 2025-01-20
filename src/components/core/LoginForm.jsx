import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../operations/authAPI.js";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  // Handle input changes
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      // Dispatch the login action
      await dispatch(login(email, password, navigate));
    } catch (error) {
      console.error("Error during login:", error);
      // Handle error (e.g., show error message to the user)
    }
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className="mt-6 flex w-full flex-col gap-y-4"
    >
      {/* Email Field */}
      <label className="w-full">
        <p className="mb-2 font-semibold text-[0.875rem] leading-[1.375rem]">
          Email Address <sup className="text-red-500">*</sup>
        </p>
        <input
          required
          type="email"
          name="email"
          value={email}
          onChange={handleOnChange}
          placeholder="Enter email address"
          className="form-style w-full h-9 rounded-md pl-4 text-gray-600 outline-none shadow-md"
        />
      </label>

      {/* Password Field */}
      <label className="w-full">
        <p className="mb-2 text-[0.875rem] font-semibold leading-[1.375rem]">
          Password <sup className="text-red-500">*</sup>
        </p>
        <input
          required
          type="password"
          name="password"
          value={password}
          onChange={handleOnChange}
          placeholder="Enter Password"
          className="w-full h-9 rounded-md pl-4 text-gray-600 outline-none shadow-md"
        />
        <Link to="/forgot-password">
          <p className="mt-1 ml-auto max-w-max text-sm lg:text-base text-blue-900">
            Forgot Password?
          </p>
        </Link>
      </label>

      {/* Submit Button */}
      <button
        type="submit"
        className="lg:mt-6 rounded-[8px] bg-blue-900 hover:bg-blue-800 duration-200 py-[8px] px-[12px] font-medium text-white"
      >
        Sign In
      </button>
    </form>
  );
}

export default LoginForm;
