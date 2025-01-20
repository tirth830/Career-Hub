import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Editjob from "./EditJob.jsx"

import {
  getFullDetailsOfJob,
} from "../operations/jobDetailsAPI.js"
import { setJob, setEditJob } from "../slices/jobSlice.js"

export default function EditJob() {
  const dispatch = useDispatch()
  const { jobid } = useParams()
  const { job } = useSelector((state) => state.job)
  const [loading, setLoading] = useState(false)
  const { token } = useSelector((state) => state.auth)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      const result = await getFullDetailsOfJob(jobid, token)
      if (result?.jobDetails) {
        dispatch(setEditJob(true))
        dispatch(setJob(result?.jobDetails))
      }
      setLoading(false)
    })()
  }, [])

  if (loading) {
    return (
      <div className="grid flex-1 place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <div>
      <h1 className="mb-14 text-3xl font-medium text-richblack-5">
        Edit Job
      </h1>
      <div className="mx-auto">
        {job ? (
        <Editjob/>
        ) : (
          <p className="mt-14 text-center text-3xl font-semibold text-richblack-100">
            Job not found
          </p>
        )}
      </div>
    </div>
  )
}
