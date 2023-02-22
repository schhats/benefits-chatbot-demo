//router for benefits
const express = require('express');
const router = new express.Router();

const benefitsValidator = require('../middlewares/benefits.validators');
const benefitsControllers = require('../controllers/benefits.controllers.js');

router.get('/',
    benefitsValidator.getBenefitsNowRegistering,
    benefitsControllers.getBenefitsNowRegistering);

module.exports = router;
