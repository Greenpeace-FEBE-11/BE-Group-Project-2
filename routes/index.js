const express = require('express')
const router = express.Router()

const userRouter = require("./userpage.router")

router.use("/userpage", userRouter)

module.exports = router
