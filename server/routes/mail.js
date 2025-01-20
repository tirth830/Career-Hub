const express = require("express")
const router = express.Router()
const { mailController } = require("../Controllers/mail")

router.post("/mail", mailController)

module.exports = router
