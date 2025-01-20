import React from "react";
import CountUp from "react-countup";


const steps = () => {
  return (
    <>
      
      
      <div className="text-gray-900">
        <span className="lg:text-4xl text-3xl text-orange-500 flex justify-center mt-20">
          How it works?
        </span>
        <h3 className="lg:text-6xl text-4xl text-blue-900 flex justify-center mt-4">
          Follow Easy 3 step
        </h3>

        {/* // All card */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center lg:gap-4 lg:m-8 mt-3 lg:mx-auto  lg:px-40 px-3">
          {/* // card 1 */}
          <div className="border-2 relative shadow-2xl lg:h-[320px] lg:w-[300px] h-[270px] m-[20px] p-1 -z-0  overflow-hidden rounded-3xl duration-200 hover:shadow-black">
            <div className="relative h-full w-full bg-white z-[99] pl-5 pt-8 pr-5 rounded-3xl">
              <div className="flex items-center gap-1 justify-between mx-5 mb-9">
                <svg
                  className="lg:w-16 lg:h-16 w-12 h-12 text-blue-900"
                  viewBox="0 0 64 64"
                  fill="currentColor"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit={10}
                    strokeWidth={2}
                    d="M16 24h22M16 34h22M16 44h22M16 54h22M12 24H8M12 34H8M12 44H8M12 54H8M14 8H1v55h44V8H32"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit={10}
                    strokeWidth={2}
                    d="M27 5V1h-8v4h-4l-2 8h20l-2-8zM55 1v53l4 8 4-8V1zM55 11h8"
                  />
                </svg>
                <svg
                  className="lg:w-16 lg:h-16 w-12 h-12 text-blue-900"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm7.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312z" />
                </svg>
              </div>
              <div>
                <h5 className="text-2xl font-semibold text-blue-900 mb-3">
                  Register
                </h5>
                <p className="text-sm">
                  Click on apply now, fill in your details, upload your resume
                  and identification documents. We'll reach out to discuss your
                  experiences.
                </p>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] rotate-[143deg] h-[550px] w-[150px] text-blue-900 .animate-move"></div>
          </div>

          {/* // card 2 */}
          <div className="border-2 relative shadow-2xl lg:h-[320px] lg:w-[300px] h-[270px] m-[20px] p-1 -z-0  overflow-hidden rounded-3xl duration-200 hover:shadow-black">
            <div className="relative h-full w-full bg-white z-[99] pl-5 pt-8 pr-5 rounded-3xl">
              <div className="flex items-center gap-1 justify-between mx-5 mb-9">
                <svg
                  className="lg:w-16 lg:h-16 w-12 h-12 text-blue-900"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 11.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zM3.854 2.146a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708 0l-.5-.5a.5.5 0 11.708-.708L2 3.293l1.146-1.147a.5.5 0 01.708 0zm0 4a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708 0l-.5-.5a.5.5 0 11.708-.708L2 7.293l1.146-1.147a.5.5 0 01.708 0zm0 4a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708 0l-.5-.5a.5.5 0 01.708-.708l.146.147 1.146-1.147a.5.5 0 01.708 0z"
                  />
                </svg>
                <svg
                  className="lg:w-16 lg:h-16 w-12 h-12 text-blue-900 "
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm4.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306z" />
                </svg>
              </div>
              <div className="">
                <h5 className="text-2xl font-semibold text-blue-900 mb-3">
                  Seamless Screening
                </h5>
                <p className="text-sm">
                  We want you to be successful, Our a Recruiter will guide you
                  to an online - vetting process that is smooth and quick.
                </p>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] rotate-[143deg] h-[550px] w-[150px] .animate-move"></div>
          </div>

          {/* // card 3 */}
          <div className="border-2 relative shadow-2xl lg:h-[320px] lg:w-[300px] h-[270px] m-[20px] p-1 -z-0  overflow-hidden rounded-3xl duration-200 hover:shadow-black">
            <div className="relative h-full w-full bg-white z-[99] pl-5 pt-8 pr-5 rounded-3xl">
              <div className="flex items-center gap-1 justify-between mx-5 mb-9">
                <svg
                  className="lg:w-16 lg:h-16 w-12 h-12 text-blue-900"
                  viewBox="0 0 640 512"
                  fill="currentColor"
                >
                  <path d="M144 160c-44.2 0-80-35.8-80-80S99.8 0 144 0s80 35.8 80 80-35.8 80-80 80zm368 0c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7-1.3 7.2-1.9 14.7-1.9 22.3 0 38.2 16.8 72.5 43.3 96H21.3C9.6 320 0 310.4 0 298.7zM405.3 320h-.7c26.6-23.5 43.3-57.8 43.3-96 0-7.6-.7-15-1.9-22.3 13.6-6.3 28.7-9.7 44.6-9.7h42.7c58.9 0 106.7 47.8 106.7 106.7 0 11.8-9.6 21.3-21.3 21.3H405.3zm10.7-96c0 53-43 96-96 96s-96-43-96-96 43-96 96-96 96 43 96 96zM128 485.3c0-73.6 59.7-133.3 133.3-133.3h117.4c73.6 0 133.3 59.7 133.3 133.3 0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" />
                </svg>
                <svg
                  className="lg:w-16 lg:h-16 w-12 h-12 text-blue-900"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm5.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318z" />
                </svg>
              </div>
              <div className="">
                <h5 className="text-2xl font-semibold text-blue-900 mb-3">
                  Get Hired Instantly
                </h5>
                <p className="text-sm">
                  You'll be instantly notified of jobs that matches with your
                  skills & experience. Pick a job that suits your availability &
                  location.
                </p>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] rotate-[143deg] h-[550px] w-[150px] .animate-move"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default steps;
