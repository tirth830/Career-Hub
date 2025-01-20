import React from "react";
import ServiceCard from "./ServiceCard";

const ServiceGrid = () => {
  return (
    <div className="pb-6 min-h-screen w-full bg-slate-900 pt-8 lg:px-10 px-4 md:px-24">
      <h2 className="pb-4 text-white text-center font-bold lg:text-5xl text-4xl">Job Category</h2>
      <p className="pb-8 text-center lg:text-lg text-sm w-full text-gray-300">
        Find a job should not be a full-time endeavor. Tell us <br />
        what you're searching for, and we will find you job
      </p>
      <div className="grid lg:gap-14 gap-7 mx-4 md:grid-cols-3 md:gap-8">
        {/* // card 1 */}
        <div className="hover:scale-105 ease-in duration-300">
          <ServiceCard
            icon={
              <svg viewBox="0 0 64 64" fill="currentColor" className="lg:h-8 lg:w-10 h-7">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit={10}
                  strokeWidth={2}
                  d="M23 57h18v6H23zM19 47h26v10H19zM41 47v-4l7-13L32 1 16 30l7 13v4"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit={10}
                  strokeWidth={2}
                  d="M36 28.875 A4 4 0 0 1 32 32.875 A4 4 0 0 1 28 28.875 A4 4 0 0 1 36 28.875 z"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit={10}
                  strokeWidth={2}
                  d="M32 1v24"
                />
              </svg>
            }
            title="Graphic Design"
            description="You will be expected to lead the entire Graphic Design strategy."
            bgColor="bg-teal-400"
            shadowColor="shadow-teal-500"
          />
        </div>

        {/* // card 2 */}
        <div className="hover:scale-105 ease-in duration-300">
          <ServiceCard
            icon={
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="lg:h-6 w-6 h-5 text-white"
              >
                <path
                  d="M12 0C11.0532 0 10.2857 0.767511 10.2857 1.71432V5.14285H13.7142V1.71432C13.7142 0.767511 12.9467 0 12 0Z"
                  fill="#F5F5FC"
                ></path>
                <path
                  d="M36 0C35.0532 0 34.2856 0.767511 34.2856 1.71432V5.14285H37.7142V1.71432C37.7143 0.767511 36.9468 0 36 0Z"
                  fill="#F5F5FC"
                ></path>
                <path
                  d="M42.8571 5.14282H37.7143V12C37.7143 12.9468 36.9468 13.7143 36 13.7143C35.0532 13.7143 34.2857 12.9468 34.2857 12V5.14282H13.7142V12C13.7142 12.9468 12.9467 13.7143 11.9999 13.7143C11.0531 13.7143 10.2856 12.9468 10.2856 12V5.14282H5.14285C2.30253 5.14282 0 7.44535 0 10.2857V42.8571C0 45.6974 2.30253 48 5.14285 48H42.8571C45.6975 48 48 45.6974 48 42.8571V10.2857C48 7.44535 45.6975 5.14282 42.8571 5.14282ZM44.5714 42.8571C44.5714 43.8039 43.8039 44.5714 42.857 44.5714H5.14285C4.19605 44.5714 3.42854 43.8039 3.42854 42.8571V20.5714H44.5714V42.8571Z"
                  fill="#F5F5FC"
                ></path>
                <path
                  d="M13.7142 23.9999H10.2857C9.33889 23.9999 8.57138 24.7674 8.57138 25.7142C8.57138 26.661 9.33889 27.4285 10.2857 27.4285H13.7142C14.661 27.4285 15.4285 26.661 15.4285 25.7142C15.4285 24.7674 14.661 23.9999 13.7142 23.9999Z"
                  fill="#F5F5FC"
                ></path>
                <path
                  d="M25.7143 23.9999H22.2857C21.3389 23.9999 20.5714 24.7674 20.5714 25.7142C20.5714 26.661 21.3389 27.4285 22.2857 27.4285H25.7143C26.6611 27.4285 27.4286 26.661 27.4286 25.7142C27.4286 24.7674 26.6611 23.9999 25.7143 23.9999Z"
                  fill="#F5F5FC"
                ></path>
                <path
                  d="M37.7143 23.9999H34.2857C33.3389 23.9999 32.5714 24.7674 32.5714 25.7142C32.5714 26.661 33.3389 27.4285 34.2857 27.4285H37.7143C38.6611 27.4285 39.4286 26.661 39.4286 25.7142C39.4286 24.7674 38.6611 23.9999 37.7143 23.9999Z"
                  fill="#F5F5FC"
                ></path>
              </svg>
            }
            title="UI/Ux Design"
            description="You will be expected to lead the entire UI/Ux Design strategy."
            bgColor="bg-orange-400"
            shadowColor="shadow-orange-500"
          />
        </div>

        {/* // card 3 */}
        <div className="hover:scale-105 ease-in duration-300">
          <ServiceCard
            icon={
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="lg:h-6 lg:w-6 h-5 text-white"
              >
                <path
                  d="M14 27H22V14H14V27ZM26 34H34V21H26V34ZM40 0H8C3.6 0 0 3.6 0 8V40C0 44.4 3.6 48 8 48H40C44.4 48 48 44.4 48 40V8C48 3.6 44.4 0 40 0ZM44 40C44 41.1 43.1 42 42 42H6C4.9 42 4 41.1 4 40V10H44V40Z"
                  fill="white"
                ></path>
              </svg>
            }
            title="Development"
            description="You will be expected to lead the entire Web Application strategy."
            bgColor="bg-purple-400"
            shadowColor="shadow-purple-500"
          />
        </div>

        {/* // card 4 */}
        <div className="hover:scale-105 ease-in duration-300 lg:mt-5">
          <ServiceCard
            icon={
              <svg viewBox="0 0 64 64" fill="currentColor" className="lg:h-8 lg:w-10 h-6">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit={10}
                  strokeWidth={2}
                  d="M1 7h62v50H1zM1 15h62M10 11H6M18 11h-4M26 11h-4M6 25h27M6 33h27M6 41h27"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit={10}
                  strokeWidth={2}
                  d="M38 25h19v16H38z"
                />
              </svg>
            }
            title="Web Application"
            description="You will be expected to lead the entire Web Application strategy."
            bgColor="bg-pink-400"
            shadowColor="shadow-purple-500"
          />
        </div>

        {/* // card 5 */}
        <div className="hover:scale-105 ease-in duration-300 lg:mt-5">
          <ServiceCard
            icon={
              <svg
                viewBox="0 0 640 512"
                fill="currentColor"
                className="lg:h-10 lg:w-8 h-7 w-7 text-white"
              >
                <path d="M64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm32 64h224c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32zM64 368c0-8.8 7.2-16 16-16h256c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16zm320 0c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H400c-8.8 0-16-7.2-16-16zM80 320c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm80-16c0 8.8-7.2 16-16 16s-16-7.2-16-16 7.2-16 16-16 16 7.2 16 16zm48 16c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm80-16c0 8.8-7.2 16-16 16s-16-7.2-16-16 7.2-16 16-16 16 7.2 16 16zm48 16c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z" />
              </svg>
            }
            title="Digital marketing"
            description="You will be expected to lead the entire Digital marketing strategy."
            bgColor="bg-green-400"
            shadowColor="shadow-purple-500"
          />
        </div>

        {/* // card 6 */}
        <div className="hover:scale-105 ease-in duration-300 lg:mt-5">
          <ServiceCard
            icon={
              <svg fill="none" viewBox="0 0 15 15" className="lg:h-8 lg:w-8 h-7">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M4 2.5a.5.5 0 01.5-.5h6a.5.5 0 01.5.5v10a.5.5 0 01-.5.5h-6a.5.5 0 01-.5-.5v-10zM4.5 1A1.5 1.5 0 003 2.5v10A1.5 1.5 0 004.5 14h6a1.5 1.5 0 001.5-1.5v-10A1.5 1.5 0 0010.5 1h-6zM6 11.65a.35.35 0 100 .7h3a.35.35 0 100-.7H6z"
                  clipRule="evenodd"
                />
              </svg>
            }
            title="Mobile App Design"
            description="You will be expected to lead the entire Mobile App strategy."
            bgColor="bg-blue-400"
            shadowColor="shadow-purple-500"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceGrid;
