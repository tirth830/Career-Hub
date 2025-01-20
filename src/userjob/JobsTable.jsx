import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Tbody, Td, Th, Thead, Tr } from 'react-super-responsive-table';
import { FiEdit2 } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../dashboard/formatDate';
import { deletejob, getuserjobs } from '../operations/jobDetailsAPI';
import ConfirmationModal from '../components/common/ConfirmationModal';

import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

export default function JobTable({ jobs, setJobs }) {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(null);

  const handleJobDelete = async (jobid) => {
    setLoading(true);
    await deletejob({ jobid }, token);
    const result = await getuserjobs(token);
    if (result) {
      setJobs(result);
    }
    setConfirmationModal(null);
    setLoading(false);
  };

  return (
    <>
      <Table className="rounded-xl border border-richblack-800">
        <Thead>
          <Tr className="flex gap-x-[90px] rounded-t-md border-b border-b-richblack-800 px-6 py-2">
            <Th className="flex-1 text-left text-sm font-medium uppercase text-richblack-100">Job-Title</Th>
            <Th className="text-left text-sm font-medium uppercase text-richblack-100">Salary</Th>
            <Th className="text-left text-sm font-medium uppercase text-richblack-100">Role</Th>
            <Th className="text-left text-sm font-medium uppercase text-richblack-100">experience</Th>
            <Th className="text-left text-sm font-medium uppercase text-richblack-100">Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {jobs?.length === 0 ? (
            <Tr>
              <Td className="py-10 text-center text-2xl font-medium text-richblack-100">No job posted</Td>
            </Tr>
          ) : (
            jobs?.map((job) => (
              <Tr key={job._id  } className="flex gap-x-20 border-b border-richblack-800 px-6 py-8">
                <Td className="flex flex-1 gap-x-14">
                  <div>
                  <h3 className='mb-2 w-[220px]'> {job.jobTitle}</h3>
                  <p className='text-gray-500 line-clamp-3'>{job.jobDescription}</p>
                  </div>
                  <div className="flex flex-col justify-between">
                    <p className="text-[12px] text-white">Created: {formatDate(job.createdAt)}</p>
                  </div>
                </Td>
                <Td className="text-sm font-medium text-richblack-100"><p className="text-lg font-semibold text-richblack-5 lg:top-0 top-64">{job.salary}</p></Td>
                <Td className="text-sm font-medium text-richblack-100">{job.role}</Td>
                <Td className="w-[80px] text-sm font-medium text-richblack-100">{job.experience}</Td>
                <Td className="text-sm font-medium text-richblack-100">
                  <button
                    disabled={loading}
                    onClick={() => navigate(`/dashboard/edit-job/${job._id}`)}
                    title="Edit"
                    className="px-2 transition-all duration-200 hover:scale-110 hover:text-caribbeangreen-300"
                  >
                    <FiEdit2 size={20} />
                  </button>
                  <button
                    disabled={loading}
                    onClick={() => setConfirmationModal({
                      text1: "Do you want to delete this job?",
                      text2: "All the data related to this job will be deleted",
                      btn1Text: !loading ? "Delete" : "Loading...",
                      btn2Text: "Cancel",
                      btn1Handler: !loading ? () => handleJobDelete(job._id) : () => {},
                      btn2Handler: !loading ? () => setConfirmationModal(null) : () => {},
                    })}
                    title="Delete"
                    className="px-1 transition-all duration-200 hover:scale-110 hover:text-[#ff0000]"
                  >
                    <RiDeleteBin6Line size={20} />
                  </button>
                </Td>
              </Tr>
            ))
          )}
        </Tbody>
      </Table>
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  );
}
