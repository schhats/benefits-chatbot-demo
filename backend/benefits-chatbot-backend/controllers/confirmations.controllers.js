//controller for confirmations
const config = require('../config');

const confirmations = config.confirmations || {};

const createConfirmation = (req, res, next) => {
  confirmationId = `CD-${Math.floor(Math.random() * config.confirmation.idMax)
      .toString().padStart(config.confirmation.idMax.toString().length, '0')}`;

  confirmation = {
    id: confirmationId,
    benefit: req.body.benefit,
    city: req.body.city,
    date: req.body.date,
    appointment: req.body.appointment,
  };
  confirmations[confirmationId] = confirmation;

  res.status(200).json(confirmation);
};

const getConfirmation = (req, res, next) => {
  if (!(req.params.confirmationId in confirmations)) {
    res.status(404).json({
      error: `Confirmation: ${req.params.confirmationId} Not Found`,
    });
  }

  res.status(200).json(confirmations[req.params.confirmationId]);
};

module.exports = {
  createConfirmation,
  getConfirmation,
};
