import React, { useState } from "react";

import FAQImg from "../assets/faq.png";

const faqItems = [
    {
      id: 1,
      question: 'How can I post a job?',
      answer: `To post a job, log in to your employer account, click on the 'Post a Job' button, 
               fill out the job details, and click 'Submit.' Your job listing will be reviewed and 
               published shortly.`,
    },
    {
      id: 2,
      question: 'How do I edit or delete a job posting?',
      answer: `To edit or delete a job posting, log in to your account, navigate to 'My Job Postings,' 
               find the job you want to edit or delete, and click the respective button to make changes.`,
    },
    {
      id: 3,
      question: 'How can I search for candidates?',
      answer: `To search for candidates, log in to your employer account, go to the 'Search Candidates' 
               section, use the filters to refine your search, and browse through the profiles that match 
               your criteria.`,
    },
    {
      id: 4,
      question: 'How do I contact a candidate?',
      answer: `To contact a candidate, view their profile and click on the 'Contact' button. You can send 
               a message directly through the platform or find their contact details if provided.`,
    },
    {
      id: 5,
      question: 'How do I manage my subscription?',
      answer: `To manage your subscription, log in to your account, go to the 'Subscription' section 
               under your profile settings, and update your plan or payment details as needed.`,
    },
    {
      id: 6,
      question: 'What should I do if I encounter an issue?',
      answer: `If you encounter an issue, please visit the 'Support' section on our website, fill out the 
               contact form with details about the problem, and our support team will assist you as soon as possible.`,
    },
  ];

const AccordionItem = ({ item, isActive, onToggle }) => (
  <div
    className={`accordion border border-solid border-gray-300 lg:p-4 p-3 rounded-xl transition duration-500 lg:mb-8 mb-3 ${
      isActive ? "bg-[#e7f3ff] border-blue-900" : ""
    }`}
  >
    <button
      className={`accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-blue-900 ${
        isActive ? "font-medium text-blue-900" : ""
      }`}
      onClick={onToggle}
      aria-expanded={isActive}
    >
      <h5>{item.question}</h5>
      <svg
        className={`w-6 h-6 transition duration-500 ${
          isActive ? "text-blue-900" : "text-gray-900"
        } group-hover:text-blue-900`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={isActive ? "M6 12H18" : "M6 12H18M12 18V6"}
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </button>
    {isActive && (
      <div className="accordion-content w-full overflow-hidden pr-4">
        <p className="text-base text-gray-900 font-normal leading-6">
          {item.answer}
        </p>
      </div>
    )}
  </div>
);

const faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <section className=" bg-slate-100 lg:py-16 lg:px-24 flex lg:flex-row md:flex-col-reverse flex-col-reverse  gap-4 items-center justify-between">
        <div>
          <div className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h3 className="lg:text-5xl hidden lg:block md:text-3xl text-2xl font-manrope text-center font-bold text-blue-950 leading-[3.25rem]">
                Frequently asked questions
              </h3>
            </div>

            <div className="accordion-group lg:w-[720px] md:w-[520px] w-[360px] -mt-24 px-4 lg:mt-0 lg:px-0">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onToggle={() => handleToggle(index)}
                />
              ))}
            </div>
          </div>
        </div>

        <div>
            <img className="lg:h-[530px] lg:w-[590px] md:h-[430px] md:w-[490px] lg:mt-24 h-[350px]" src={FAQImg} alt="FAQ-image" />
        </div>
      </section>
    </>
  );
};

export default faqs;
