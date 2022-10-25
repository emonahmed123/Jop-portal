const express = require('express')
const router = express.Router()
const userController = require('../controller/jobs.controller')

router.route('/')
    .get(userController.getJobs)
    .post(userController.saveAJob)


    router.route("/:id")
    .get(userController.getSpecificJob)
    .patch(userController.updateJob)







module.exports = router