import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

import { editjob} from "../operations/jobDetailsAPI.js"
import IconBtn from "../components/common/IconBtn"

const role = ["full-time", "part-time", "contract", "internship"]
const experience = ["entry-level", "mid-level", "senior-level"]

export default function EditJob() {
  const { user } = useSelector((state) => state.profile)
  const { job } = useSelector((state) => state.job)
  const { token } = useSelector((state) => state.auth)
  const { jobid } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const submitjobForm = async (data) => {
    try {
      dispatch(editjob(token,jobid, data,navigate));

    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit(submitjobForm)}>
        {/* Profile Information */}
        <div className="my-10 flex flex-col gap-y-6 rounded-md bg-[#e7f3ff] bg-richblack-800 p-8 px-12 w-[950px]">
          <h2 className="text-lg font-semibold text-richblack-5">
            Profile Information
          </h2>
          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%] font-semibold text-blue-900">
            <label htmlFor="companyName" className="lable-style">
             Company Name
              </label>
              <input
                type="text"
                name="companyName"
                id="companyName"
                placeholder="Enter companyName"
                className="form-style w-full !pr-10  py-1 px-2 rounded-md text-gray-600 outline-none shadow-md"
                {...register("companyName", { required: true })}
                defaultValue={job?.companyName}
              />
              {errors.companyName && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your company Name.
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2 lg:w-[48%] font-semibold text-blue-900">
              <label htmlFor="lasjobTitletName" className="lable-style">
              Job Title
              </label>
              <input
                type="text"
                name="jobTitle"
                id="jobTitle"
                placeholder="Enter companyName"
                className="form-style w-full !pr-10  py-1 px-2 rounded-md text-gray-600 outline-none shadow-md"
                {...register("jobTitle", { required: true })}
                defaultValue={job?.jobTitle}
              />
              {errors.jobTitle && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your Job Title.
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2 lg:w-[98%] font-semibold text-blue-900 ">
              <label htmlFor="companyDescription" className="lable-style">
                Company Description
              </label>
              <textarea
                type="text"
                name="companyDescription"
                id="companyDescription"
                placeholder="Enter Bio Details"
              className="form-style w-full !pr-10 h-72 py-1 px-2 rounded-md text-gray-600 outline-none shadow-md resize-none"
                {...register("companyDescription", { required: true })}
                defaultValue={job?.companyDescription}
              />
              {errors.companyDescription && (
                <span className="-mt-1 text-[12px] text-red-600">
                  Please enter your Company Description.
                </span>
              )}
            </div>

          <div className="flex flex-col gap-5 lg:flex-row font-semibold text-blue-900">
            <div className="flex flex-col gap-2 lg:w-[48%] font-semibold text-blue-900">
              <label htmlFor="experience" className="lable-style">
              Experience
              </label>
              <select
                type="text"
                name="experience"
                id="experience"
                className="form-style w-full !pr-10  py-1 px-2 rounded-md text-gray-600 outline-none shadow-md"
                {...register("experience", { required: true })}
                defaultValue={user?.additionalDetails?.experience}
              >
                {experience.map((ele, i) => {
                  return (
                    <option key={i} value={ele}>
                      {ele}
                    </option>
                  )
                })}
              </select>
            </div>

            <div className="flex flex-col gap-2 lg:w-[48%] font-semibold text-blue-900">
              <label htmlFor="role" className="lable-style">
                Role
              </label>
              <select
                type="text"
                name="role"
                id="role"
                className="form-style w-full !pr-10  py-1 px-2 rounded-md text-gray-600 outline-none shadow-md"
                {...register("role", { required: true })}
                defaultValue={user?.additionalDetails?.role}
              >
                {role.map((ele, i) => {
                  return (
                    <option key={i} value={ele}>
                      {ele}
                    </option>
                  )
                })}
              </select>
            </div>

          </div>

        
            <div className="flex flex-col gap-2 lg:w-[98%] font-semibold text-blue-900 ">
              <label htmlFor="jobdescription" className="lable-style">
              jobDescription
              </label>
              <textarea
                type="text"
                name="jobdescription"
                id="jobdescription"
                placeholder="Enter jobdescription"
              className="form-style w-full !pr-10 h-72 py-1 px-2 rounded-md text-gray-600 outline-none shadow-md resize-none"
                {...register("jobDescription", { required: true })}
                defaultValue={job?.jobDescription}
              />
              {errors.about && (
                <span className="-mt-1 text-[12px] text-red-600">
                  Please enter your Job-description.
                </span>
              )}
            </div>

            <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%] font-semibold text-blue-900">
            <label htmlFor="location" className="lable-style">
              location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                placeholder="Enter companyName"
                className="form-style w-full !pr-10  py-1 px-2 rounded-md text-gray-600 outline-none shadow-md"
                {...register("location", { required: true })}
                defaultValue={job?.location}
              />
              {errors.location && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your loaction.
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2 lg:w-[48%] font-semibold text-blue-900">
              <label htmlFor="salary" className="lable-style">
              Salary
              </label>
              <input
                type="text"
                name="salary"
                id="salary"
                placeholder="Enter companyName"
                className="form-style w-full !pr-10  py-1 px-2 rounded-md text-gray-600 outline-none shadow-md"
                {...register("salary", { required: true })}
                defaultValue={job?.salary}
              />
              {errors.salary && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your Job salary.
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2 lg:w-[48%] font-semibold text-blue-900">
              <label htmlFor="skills" className="lable-style">
              Skills
              </label>
              <input
                type="text"
                name="skills"
                id="skills"
                placeholder="Enter skills"
                className="form-style w-full !pr-10  py-1 px-2 rounded-md text-gray-600 outline-none shadow-md"
                {...register("skills", { required: true })}
                defaultValue={job?.skills}
              />
              {errors.skills && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your skills.
                </span>
              )}
            </div>
          </div>

          
        
      

        <div className="flex justify-end gap-2">
          <button
            onClick={() => {
              navigate("/dashboard/my-profile")
            }}
            className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50"
          >
            Cancel
          </button>
          <IconBtn type="submit" text="Save" />
        </div>
      </form>
    </>
  )
}
