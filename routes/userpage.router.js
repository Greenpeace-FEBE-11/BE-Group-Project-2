const express = require('express')
const router = express.Router()

const {
    getInformasi,
    addInformasi,
    updateInformasi
    
} = require("../controllers/userpage.controller")

router.get("/", getInformasi)
router.post("/", addInformasi)
router.put("/id",updateInformasi)

module.exports = router
