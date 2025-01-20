const express = require("express")
const router = express.Router()

const { auth, isRecruiter } = require("../middlewares/auth")
const { createjob ,editjob , getAlljobs , deletejob , getuserjobs, getFulljobDetails} = require("../Controllers/Jobpost")

router.post("/createjob",auth,isRecruiter, createjob)
router.put("/editjob/:jobid",auth,isRecruiter, editjob)
router.get("/getAlljobs", getAlljobs)
router.delete("/deletejob",auth,isRecruiter, deletejob)
router.post("/getFulljobDetails",auth,  getFulljobDetails)
router.get("/getuserjobs",auth, getuserjobs)


module.exports = router