import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Blogcard from "../components/BlogCard/card";

const blog = () => {
  return (
    <>
      <Header />

      <div className=" pt-10 pb-4">
        <h2 className="text-center text-blue-900 font-semibold text-5xl">Career Advices</h2>
        <p className="text-gray-600 text-center tracking-wide text-xl m-2">Learn more career tips from company's recruiter</p>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:px-32 md:px-24 px-6 pb-5'>
      <Blogcard />
      </div>
      <Footer />
    </>
  )
}

export default blog
