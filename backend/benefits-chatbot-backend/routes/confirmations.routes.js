//router for confirmations
const express = require('express');
const router = new express.Router();

const confirmationsValidator = require('../middlewares/confirmations.validators');
const confirmationsControllers = require('../controllers/confirmations.controllers.js');

router.post('/',
    confirmationsValidator.createConfirmation,
    confirmationsControllers.createConfirmation);

router.get('/:confirmationId',
    confirmationsControllers.getConfirmation);

module.exports = router;
