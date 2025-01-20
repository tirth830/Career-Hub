import React, { useRef, useEffect } from "react";
import Header from "../components/Header/Header";
import MenImg from "../assets/men.png";
// import AboutImg from "../assets/about.png";
import Footer from "../components/Footer/Footer";
import { GoDotFill } from "react-icons/go";
import ProfileCards from "../components/ProfileCards/ProfileCards";



const About = () => {
  return (
    <>
      <Header />
      <div className="lg:flex  border-2 lg:pr-10 lg:my-10 my-4 lg:mx-28 mx-4 justify-center duration-700 hover:shadow-lg">
        <img className="mx-auto w-[490px]" src={MenImg} alt="" />
        <div className="flex flex-col items-center py-10">
          <h2 className="px-10 font-semibold text-3xl my-3 text-blue-900 ">
            Our Mission
          </h2>
          <p className="my-4 lg:px-10 px-4 lg:text-lg text-center md:text-md text-blue-800">
            {" "}
            At Career Hub, our mission is to help people get jobs. We have more
            than 5000 global employees passionately pursuing this purpose and
            improving the recruitment journey through real stories and data. We
            foster a collaborative workspace that strives to create the best
            experience for job seekers.{" "}
          </p>
          <p className="my-4 lg:px-10 px-4 lg:text-lg text-md  text-center text-blue-800">
            {" "}
            We aim to provide a seamless and efficient platform where
            individuals can discover their dream jobs and companies can find
            their perfect hires.
          </p>
        </div>
      </div>
      
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:mx-28 mx-4 gap-4 mb-8 font-sans ">
    <div className="px-4 py-6 border-2 bg-white rounded-lg duration-700 hover:shadow-lg">
      <h2 className="text-3xl font-semibold text-center py-3 ">Our Services</h2>
      <ul className="list-none space-y-4 lg:text-lg text-md ">
        <li className="flex items-start gap-2">
          <GoDotFill className="text-blue-900 mt-1" />
          <span>
            <span className="font-semibold">Job Posting:</span> Employers can easily post job openings and find the right candidates.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <GoDotFill className="text-blue-900 mt-1" />
          <span>
            <span className="font-semibold">Job Searching:</span> Job seekers can explore thousands of job listings in various sectors.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <GoDotFill className="text-blue-900 mt-1" />
          <span>
            <span className="font-semibold">Resume Building:</span> Tools and tips to help job seekers create standout resumes.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <GoDotFill className="text-blue-900 mt-1" />
          <span>
            <span className="font-semibold">Career Advice:</span> Expert advice and resources to help job seekers advance their careers.
          </span>
        </li>
      </ul>
    </div>
    <div className="px-4 py-6 border-2 bg-white rounded-lg duration-700 hover:shadow-lg">
      <h2 className="text-3xl font-semibold text-center py-3 ">Our Values</h2>
      <ul className="list-none space-y-4 lg:text-lg text-md">
        <li className="flex items-start gap-2">
          <GoDotFill className="text-blue-900 mt-1" />
          <span>
            <span className="font-semibold">Integrity:</span> We operate with honesty, ensuring transparency in every interaction.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <GoDotFill className="text-blue-900 mt-1" />
          <span>
            <span className="font-semibold">Innovation:</span> Continuously evolving our platform to meet the changing needs of the job market.

          </span>
        </li>
        <li className="flex items-start gap-2">
          <GoDotFill className="text-blue-900 mt-1" />
          <span>
            <span className="font-semibold">Customer Focus:</span> Prioritizing the needs of our users, providing top-notch service and support.

          </span>
        </li>
        <li className="flex items-start gap-2">
          <GoDotFill className="text-blue-900 mt-1" />
          <span>
            <span className="font-semibold">Diversity:</span> Promoting an inclusive job market where everyone has equal opportunities.
          </span>
        </li>
      </ul>
    </div>
  </div>

  <div className="font-sans">
    <div className="py-6">
    <h2 className="text-3xl text-center font-semibold ">Meet Our Team</h2>
    <p className="text-gray-700 text-center md:px-0 px-4 md:text-md text-sm">We’re a dynamic group of individuals who are passionate about what we do.</p>
    </div>
    <div>
      <ProfileCards />
    </div>
    
  </div>
      <Footer />
    </>
  );
};

export default About;
