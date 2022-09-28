const router = require("express").Router()
const { catchErrors } = require("../handlers/errorHandler");

// CONTOLLERS ====================================================================================================
const maincontrollers = require('../controllers/main.controller')

router.post("/upload", (maincontrollers.uploadFile));
router.get("/get", (maincontrollers.getFile));
router.get("/delete", (maincontrollers.deleteFile));

  module.exports = router