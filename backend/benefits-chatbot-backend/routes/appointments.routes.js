//router for appointments

const express = require('express');
const router = new express.Router();

const appointmenttimesValidator = require('../middlewares/appointments.validators');
const appointmenttimesControllers = require('../controllers/appointments.controllers.js');

router.get('/',
    appointmenttimesValidator.getBenefitAppointments,
    appointmenttimesControllers.getBenefitAppointments,
);

router.post('/validate',
    appointmenttimesValidator.validateAppointment,
    appointmenttimesControllers.validateAppointment,
);

module.exports = router;
