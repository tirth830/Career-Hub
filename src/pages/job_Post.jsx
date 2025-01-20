import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Modal from 'react-modal';
import Header from "../components/Header/Header";
import Searchbar from "../components/SearchBar/SearchBar";
import Logo1 from "../assets/clogo1.png";
import { SlLocationPin } from "react-icons/sl";
import { IoTimeOutline } from "react-icons/io5";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { getAlljobs } from "../operations/jobDetailsAPI";
import Dropdown from "../components/Dropdown/Dropdown";
import Footer from "../components/Footer/Footer";
import { AiOutlineCaretDown } from "react-icons/ai"

// Set the app element for accessibility
Modal.setAppElement('#root');

const Card = ({ children, onClick }) => (
  <div
    className="bg-white text-black rounded-lg hover:shadow-lg hover:shadow-zinc-300 duration-700 border-gray-300 border-2 p-6 cursor-pointer"
    onClick={onClick}
  >
    {children}
  </div>
);

const CardHeader = ({ children }) => <div className="mb-4">{children}</div>;

const CardTitle = ({ children }) => (
  <h3 className="text-lg font-bold">{children}</h3>
);

const CardDescription = ({ children }) => (
  <p className="text-sm text-gray-500">{children}</p>
);

const CardContent = ({ children }) => <div className="mb-4">{children}</div>;

const CardFooter = ({ children }) => <div className="mt-4">{children}</div>;

const Button = ({ children, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`bg-blue-900 text-white px-4 py-2 rounded hover:scale-105 duration-200 ${className}`}
  >
    {children}
  </button>
);

const JobPost = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [filters, setFilters] = useState({
    role: [],
    location: [],
    salary: [],
  });

  const [filterOptions, setFilterOptions] = useState({
    roles: [],
    locations: [],
    salaries: ["0-10000", "10000-25000", "26000-50000", "51000-100000", ">100000"],
  });

  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const jobsPerPage = 6;

  useEffect(() => {
    const fetchJobs = async () => {
      const result = await getAlljobs();
      if (result) {
        setJobs(result);

        const roles = [...new Set(result.map((job) => job.role))];
        const locations = [...new Set(result.map((job) => job.location.split(", ")[0]))];

        setFilterOptions((prev) => ({ ...prev, roles, locations }));

        // Set the first job as the selected job by default
        if (result.length > 0) {
          setSelectedJob(result[0]);
        }
      }
    };
    fetchJobs();
  }, []);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const title = job.jobTitle ? job.jobTitle.toLowerCase() : '';
      const company = job.companyName ? job.companyName.toLowerCase() : '';
      const description = job.jobDescription ? job.jobDescription.toLowerCase() : '';
      const location = job.location ? job.location.toLowerCase() : '';

      const searchMatch =
        title.includes(searchQuery.toLowerCase()) ||
        company.includes(searchQuery.toLowerCase()) ||
        description.includes(searchQuery.toLowerCase());

      const locationMatch = location.includes(locationQuery.toLowerCase());

      const roleMatch =
        filters.role.length === 0 || filters.role.includes(job.role);

      const salaryMatch =
        filters.salary.length === 0 ||
        filters.salary.some((range) => {
          if (range === ">100000") {
            return (
              Number(job.salary.replace(/[^0-9]/g, "")) > 100000
            );
          } else {
            const [min, max] = range.split("-").map(Number);
            const salary = Number(job.salary.replace(/[^0-9]/g, ""));
            return (
              (min ? salary >= min : true) && (max ? salary <= max : true)
            );
          }
        });

      const filterMatch =
        filters.location.length === 0 ||
        filters.location.includes(job.location.split(", ")[0]);

      return (
        searchMatch &&
        locationMatch &&
        roleMatch &&
        salaryMatch &&
        filterMatch
      );
    });
  }, [searchQuery, locationQuery, filters, jobs]);

  const handleSearch = (title, location) => {
    setSearchQuery(title);
    setLocationQuery(location);
    setCurrentPage(1);
  };

  const handleFilterChange = (type, value) => {
    if (value === "All") {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [type]: [],
      }));
    } else {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [type]: [value],
      }));
    }
    setCurrentPage(1);
  };

  const handleViewMore = (job) => {
    setSelectedJob(job);
    if (window.innerWidth < 1024) {
      setIsModalOpen(true);
    }
  };

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () =>
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  const prevPage = () => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));

  return (
    <>
      <Header />
      <div className="lg:px-24 md:px-12 px-6 py-8 text-black">
        <h3 className="font-bold text-4xl py-2 rounded-lg">
          Find your <span className="text-blue-900">NEW JOB</span> today
        </h3>
        <p className="text-gray-600 mb-8">
          Thousands of jobs in the computer, engineering, and technology sectors are waiting for you.
        </p>
        <Searchbar onSearch={handleSearch} />

        

        <div className="bg-white rounded-lg shadow-md p-6 border-gray-300 border-2 mb-8">
          <div className="flex flex-wrap items-center lg:gap-8">
            <h2 className="text-lg font-bold mb-4">Filters:</h2>
           <div className="lg:flex gap-4">
            <Dropdown
                label={
                  <div className="flex items-center">
                    Role
                    <AiOutlineCaretDown className="ml-1 text-sm text-richblack-100" />
                  </div>
              }
              options={["All", ...filterOptions.roles]}
              selectedOptions={filters.role}
              onChange={(value) => handleFilterChange("role", value)}
              defaultSelected="All"
            />
            <Dropdown
             label={
                  <div className="flex items-center">
                   Location
                    <AiOutlineCaretDown className="ml-1 text-sm text-richblack-100" />
                  </div>
              }
              options={["All", ...filterOptions.locations]}
              selectedOptions={filters.location}
              onChange={(value) => handleFilterChange("location", value)}
              defaultSelected="All"
            />
            <Dropdown
           label={
                  <div className="flex items-center">
                   Salary
                    <AiOutlineCaretDown className="ml-1 text-sm text-richblack-100" />
                  </div>
              }
              options={["All", ...filterOptions.salaries]}
              selectedOptions={filters.salary}
              onChange={(value) => handleFilterChange("salary", value)}
              defaultSelected="All"
            />
            </div>
          </div>
        </div>

        <p className="text-center mb-4 font-semibold text-gray-700">Total Jobs: {filteredJobs.length}</p>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_600px] gap-8">
          <div>
            <div className="grid grid-cols-1 gap-6">
              {currentJobs.length === 0 ? (
                <p className="text-center font-semibold text-gray-600">Data not found!</p>
              ) : (
                currentJobs.map((job) => (
                  <Card key={job.id} onClick={() => handleViewMore(job)}>
                    <div className="flex gap-2">
                      <img className="h-12" src={Logo1} alt="" />
                      <CardHeader>
                        <CardTitle>{job.jobTitle}</CardTitle>
                        <CardDescription>{job.companyName}</CardDescription>
                      </CardHeader>
                    </div>
                    <CardContent>
                      <div className="mb-4 flex flex-wrap gap-8 text-gray-900">
                        <p className="flex items-center gap-1">
                          <SlLocationPin className="text-blue-900 p-1.5 w-7 h-7 rounded-full bg-[#e7f3ff]" />
                          {job.location}
                        </p>
                        <p className="flex items-center gap-1">
                          <IoTimeOutline className="text-blue-900 p-1.5 w-7 h-7 rounded-full bg-[#e7f3ff]" />
                          {job.role}
                        </p>
                        <p className="flex items-center gap-1">
                          <RiMoneyRupeeCircleLine className="text-blue-900 p-1.5 w-7 h-7 rounded-full bg-[#e7f3ff]" />
                          {job.salary}
                        </p>
                      </div>
                      <p className="mb-4">{job.jobDescription}</p>
                    </CardContent>
                    <CardFooter>
                      <div className="flex gap-8">
                        <Button onClick={() => navigate(`/jobapplicationform/${job._id}`)}>
                          Apply
                        </Button>
                        <Button onClick={() => handleViewMore(job)}>
                          View More
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))
              )}
            </div>
            <div className="flex justify-center mt-8">
              <Button onClick={prevPage} className={currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""} disabled={currentPage === 1}>
                Previous
              </Button>
              {Array.from({ length: totalPages }, (_, index) => (
                <Button
                  key={index + 1}
                  onClick={() => paginate(index + 1)}
                  className={`mx-1 ${currentPage === index + 1 ? "bg-blue-700" : "bg-blue-900"}`}
                >
                  {index + 1}
                </Button>
              ))}
              <Button onClick={nextPage} className={currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""} disabled={currentPage === totalPages}>
                Next
              </Button>
            </div>
          </div>
          <div className="bg-white lg:block hidden rounded-lg shadow-md p-6 border-gray-300 border-2">
            {selectedJob ? (
              <>
                <h2 className="text-lg font-bold mb-4">Job Details:</h2>
                <hr />
                <div className="px-12 py-4">
                  <div className="flex gap-2">
                    <img className="h-12" src={Logo1} alt="" />
                    <CardHeader>
                      <CardTitle>{selectedJob.jobTitle}</CardTitle>
                      <CardDescription>{selectedJob.companyName}</CardDescription>
                    </CardHeader>
                  </div>
                  <CardContent>
                    <div className="mb-4 flex gap-4 text-gray-900">
                      <p className="flex items-center gap-2">
                        <SlLocationPin className="text-blue-900 p-1.5 w-7 h-7 rounded-full bg-[#e7f3ff]" />
                        {selectedJob.location}
                      </p>
                      <p className="flex items-center gap-2 my-2">
                        <IoTimeOutline className="text-blue-900 p-1.5 w-7 h-7 rounded-full bg-[#e7f3ff]" />
                        {selectedJob.role}
                      </p>
                      <p className="flex items-center gap-2 my-2">
                        <RiMoneyRupeeCircleLine className="text-blue-900 p-1.5 w-7 h-7 rounded-full bg-[#e7f3ff]" />
                        {selectedJob.salary}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold">Job Description:</h4>
                      <p className="mb-4 text-gray-700">{selectedJob.jobDescription}</p>

                      <h4 className="font-bold">Company Description:</h4>
                      <p className="mb-4 text-gray-700">{selectedJob.companyDescription}</p>
                    </div>

                    <div>
                      <h4 className="font-bold">Skills:</h4>
                      <p className="mb-4 text-gray-700">{selectedJob.skills}</p>
                    </div>

                  </CardContent>
                  <CardFooter>
                    <div className="flex gap-8">
                      <Button onClick={() => navigate(`/jobapplicationform/${selectedJob._id}`)}>
                        Apply
                      </Button>
                    </div>
                  </CardFooter>
                </div>
              </>
            ) : (
              <p className="text-center font-semibold text-gray-600">Select a job to view details</p>
            )}
          </div>
        </div>

        {/* Modal for small screens */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          contentLabel="Job Details"
          className="modal-content"
          overlayClassName="modal-overlay"
        >
          {selectedJob && (
            <div className="px-4 py-6">
              <button onClick={() => setIsModalOpen(false)} className="float-right text-xl font-bold">&times;</button>
              <h2 className="text-lg font-bold mb-4">Job Details:</h2>
              <hr />
              <div className="px-4 py-4">
                <div className="flex gap-2">
                  <img className="h-12" src={Logo1} alt="" />
                  <CardHeader>
                    <CardTitle>{selectedJob.jobTitle}</CardTitle>
                    <CardDescription>{selectedJob.companyName}</CardDescription>
                  </CardHeader>
                </div>
                <CardContent>
                  <div className="mb-4 flex flex-wrap gap-4 text-gray-900">
                    <p className="flex items-center gap-2">
                      <SlLocationPin className="text-blue-900 p-1.5 w-7 h-7 rounded-full bg-[#e7f3ff]" />
                      {selectedJob.location}
                    </p>
                    <p className="flex items-center gap-2 my-2">
                      <IoTimeOutline className="text-blue-900 p-1.5 w-7 h-7 rounded-full bg-[#e7f3ff]" />
                      {selectedJob.role}
                    </p>
                    <p className="flex items-center gap-2 my-2">
                      <RiMoneyRupeeCircleLine className="text-blue-900 p-1.5 w-7 h-7 rounded-full bg-[#e7f3ff]" />
                      {selectedJob.salary}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold">Job Description:</h4>
                    <p className="mb-4 text-gray-700">{selectedJob.jobDescription}</p>

                    <h4 className="font-bold">Company Description:</h4>
                    <p className="mb-4 text-gray-700">{selectedJob.companyDescription}</p>
                  </div>

                  <div>
                    <h4 className="font-bold">Skills:</h4>
                    <p className="mb-4 text-gray-700">{selectedJob.skills}</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex gap-8">
                    <Button onClick={() => navigate(`/jobapplicationform/${selectedJob._id}`)}>
                      Apply
                    </Button>
                  </div>
                </CardFooter>
              </div>
            </div>
          )}
        </Modal>
      </div>
      <Footer />
    </>
  );
};

export default JobPost;
