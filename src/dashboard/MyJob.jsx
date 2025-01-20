import { VscAdd } from "react-icons/vsc"
import { getuserjobs } from "../operations/jobDetailsAPI"
import IconBtn from "../components/common/IconBtn"
import JobTable from "../userjob/JobsTable"
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function MyJobs() {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const result = await getuserjobs(token);
      if (result) {
        setJobs(result);
      }
    };
    fetchJobs();
  }, [token]); // Add token as a dependency

  return (
    <div>
      <div className="mb-14 flex items-center justify-between">
        <h1 className="text-3xl font-medium text-richblack-5">My Jobs</h1>
        <IconBtn text="Post New Job" onclick={() => navigate("/postform")}>
          <VscAdd />
        </IconBtn>
      </div>
      {jobs && <JobTable jobs={jobs} setJobs={setJobs} />}
    </div>
  );
}
