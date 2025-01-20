import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Link, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { IoIosArrowBack } from 'react-icons/io';
import { getFullDetailsOfJob } from '../../operations/jobDetailsAPI';
import { useSelector } from 'react-redux';  
import { useForm } from 'react-hook-form';
import {sendemailendpoint} from "../../apis"
import { apiConnector } from '../../apiConnector';

function JobApplicationForm() {
  const { token } = useSelector((state) => state.auth);
  const { id } = useParams();

  const { register, handleSubmit, setValue, reset ,formState: { errors } } = useForm();

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (id) {
      fetchJobDetails(id);
    }
  }, [id]);

  const fetchJobDetails = async (id) => {
    try {
      const result = await getFullDetailsOfJob(id, token);
      if (result?.jobDetails) {
        setValue('email_jobadmin', result.jobDetails.jobadmin.email);
      }
    } catch (error) {
      console.error('Error fetching job details:', error);
    }
  };
  const onSubmit = async (formData) => {
    try {
      // Perform any necessary actions here
      console.log("Form Data: ", formData);
      const res = await apiConnector("POST", sendemailendpoint.SEND_MAIL, formData ,token);
      console.log("Email Res - ", res); // Optionally handle response`
      reset()
    } catch (error) {
      console.error("ERROR MESSAGE - ", error.message);
    }
  };

  return (
    <>
      <Header />
      <button className='flex items-center gap-1 bg-blue-900 px-2 py-1 pr-4 ml-8 mt-5 rounded-[8px] text-white'> 
        <Link className='flex items-center' to='/job'><IoIosArrowBack />back</Link>
      </button>
      <div className='m-6'>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6 p-6 bg-white rounded shadow-lg max-w-3xl mx-auto'>
          <h1 className='text-2xl font-bold mb-4'>Job Application Form</h1>

          {/* Basic Information */}
          <div className='space-y-4'>
            <label className='block'>
              Full Name
              <input type='text' name='fullName' {...register('fullName', { required: 'Full Name is required' })} className='block w-full mt-1 p-2 border rounded' />
              {errors.fullName && <span className='text-red-500'>{errors.fullName.message}</span>}
            </label>
            <label className='block'>
              Email
              <input type='text' name='email' {...register('email', { required: 'Email is required' })} className='block w-full mt-1 p-2 border rounded' />
              {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
            </label>
            <label className='block'>
              Phone Number
              <input type='tel' name='phone' {...register('phone', { required: 'Phone Number is required' })} className='block w-full mt-1 p-2 border rounded' />
              {errors.phone && <span className='text-red-500'>{errors.phone.message}</span>}
            </label>
            <label className='block'>
              LinkedIn Profile
              <input type='url' name='linkedIn' {...register('linkedIn')} className='block w-full mt-1 p-2 border rounded' />
            </label>
            <label className='block'>
              Portfolio/Website
              <input type='url' name='portfolio' {...register('portfolio')} className='block w-full mt-1 p-2 border rounded' />
            </label>
            <label className='block'>
              Github Profile
              <input type='url' name='Github' {...register('Github')} className='block w-full mt-1 p-2 border rounded' />
            </label>
          </div>

          {/* Work Experience */}
          <div className='space-y-4'>
            <label className='block'>
              Job Title
              <input type='text' name='title' {...register('title')} className='block w-full mt-1 p-2 border rounded' />
            </label>
            <label className='block'>
              Years of Experience
              <input type='text' name='years' {...register('years')} className='block w-full mt-1 p-2 border rounded' />
            </label>
          </div>

          {/* Skills */}
          <div className='space-y-4'>
            <label className='block'>
              Relevant Skills
              <input type='text' name='skills' {...register('skills')} className='block w-full mt-1 p-2 border rounded' />
            </label>
          </div>  
        
          {/* Additional Information */}
          <div className='space-y-4'>
            <label className='block'>
              Resume/CV
              <input type='file' name='resume' {...register('resume')} className='block w-full mt-1 p-2 border rounded' />
            </label>
          </div>

          <button type='submit' className='block w-full bg-blue-900 hover:bg-blue-800 text-white py-2 rounded'>
            Submit Application
          </button>
        </form>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75'
          overlayClassName='fixed inset-0 bg-gray-800 bg-opacity-75'
        >
          <div className='bg-white p-6 rounded shadow-lg max-w-md mx-auto animate-fade-in'>
            <h2 className='text-2xl font-bold mb-4'>Application Submitted</h2>
            <p className='mb-4'>Thank you for submitting your application. We will review your application and get back to you shortly.</p>
            <button onClick={() => setIsModalOpen(false)} className='bg-blue-500 text-white py-2 px-4 rounded'>
              <Link to='/'> Close </Link>
            </button>
          </div>
        </Modal>

        <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          .animate-fade-in {
            animation: fade-in 0.5s ease-in-out;
          }
        `}</style>
      </div>
      <Footer />
    </>
  );
}

export default JobApplicationForm;
