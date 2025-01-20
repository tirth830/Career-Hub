import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { contactusEndpoint } from "../apis";
import { useForm } from "react-hook-form";
import { apiConnector } from "../apiConnector";


const Contact = () => {
    const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm();
  
    const onSubmit = async (data) => {
      try {
        // Perform any necessary actions here
        console.log("Form Data: ", data);
        const res = await apiConnector("POST", contactusEndpoint.CONTACT_US_API, data);
        console.log("Email Res - ", res); // Optionally handle response
        reset(); // Reset form after successful submission
      } catch (error) {
        console.error("ERROR MESSAGE - ", error.message);
      }
    };
  
    useEffect(() => {
      if (isSubmitSuccessful) {
        reset({
          email: "",
          firstname: "",
          lastname: "",
          message: "",
          phoneNo: "",
        });
      }
    }, [reset, isSubmitSuccessful]);
  
    return (
      <>
        <Header />
        <div className="relative text-gray-800">
          <div className="area absolute inset-0">
            <ul className="circles">
              {/* Your circle elements */}
            </ul>
          </div>
          <div className="max-w-screen-lg mx-auto lg:p-5 md:p-5 p-2 h-full bg-transparent backdrop-blur-lg">
            <div className="grid grid-cols-1 md:grid-cols-12 bg-[#e7f3ff] rounded-md shadow-xl">
              <div className="md:col-span-4 p-10 text-gray-700">
                <h3 className="mt-4 text-xl text-blue-900 font-semibold leading-7 font-regular uppercase">
                  Contact
                </h3>
                <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
                  Get In <span className="text-blue-900">Touch</span>
                </h3>
                <p className="mt-4 leading-7 content-center w-90">
                  {/* Your contact form introductory text */}
                </p>
                <div className="flex mt-8">
                  {/* Your social media links */}
                </div>
              </div>
              <form className="md:col-span-8 p-10" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-first-name">
                      First Name
                    </label>
                    <input
                      {...register("firstname", { required: true })}
                      className="form-style w-full !pr-10 py-1 px-2 rounded-md text-gray-600 outline-none shadow-md"
                      id="grid-first-name"
                      type="text"
                      placeholder="Jane"
                    />
                    {errors.firstname && <p className="text-red-500 text-xs italic">Please enter your first name.</p>}
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-last-name">
                      Last Name
                    </label>
                    <input
                      {...register("lastname", { required: true })}
                      className="form-style w-full !pr-10 py-1 px-2 rounded-md text-gray-600 outline-none shadow-md"
                      id="grid-last-name"
                      type="text"
                      placeholder="Doe"
                    />
                    {errors.lastname && <p className="text-red-500 text-xs italic">Please enter your last name.</p>}
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-email">
                      Email Address
                    </label>
                    <input
                      {...register("email", { required: true })}
                      className="form-style w-full !pr-10 py-1 px-2 rounded-md text-gray-600 outline-none shadow-md"
                      id="grid-email"
                      type="email"
                      placeholder="xyz@gmail.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs italic">Please enter your email address.</p>}
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-message">
                      Your Message
                    </label>
                    <textarea
                      {...register("message", { required: true })}
                      rows="10"
                      className="form-style w-full !pr-10 py-1 px-2 rounded-md text-gray-600 outline-none shadow-md resize-none"
                      id="grid-message"
                      placeholder="Enter your message here"
                    />
                    {errors.message && <p className="text-red-500 text-xs italic">Please enter your message.</p>}
                  </div>
                  <div className="lg:flex md:flex flex-col justify-between w-full mt-5 px-3">
                    <div className="md:flex md:items-center items-center">
                      <label className="block font-bold">
                        <input className="mr-2 leading-tight" type="checkbox" {...register("newsletter")} />
                        <span className="text-sm">Send me your newsletter!</span>
                      </label>
                    </div>
                    <button
                      className="shadow bg-blue-900 hover:bg-blue-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded lg:my-0 md:my-0 my-4"
                      type="submit"
                    >
                     Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  };
  
  export default Contact;
