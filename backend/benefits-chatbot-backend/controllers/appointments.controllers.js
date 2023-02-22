//controller for appts
const utils = require('../utils');
const config = require('../config');

const getBenefitAppointments = (req, res, next) => {
  if (!config || !config.appointments || config.appointments.length <= 0) {
    res.status(500).json({
      message: `Error loading available Benefits. Please try again later`,
    });
  }

  hashInput = `${req.query.benefit}-${req.query.city}-${req.query.date}`;
  hash = utils.hashCode(hashInput);

  const benefitAppointments = [];
  for (const appointment of config.appointments) {
    const temp = hash % 10;
    if (temp >= 5) {
      benefitAppointments.push(appointment);
    }
    hash = Math.floor(hash / 10);
  }

  // just add 2 showtimes from the arr if none are added to list
  if (benefitAppointments.length == 0) {
    benefitAppointments.push(config.benefits[1]);
    benefitAppointments.push(config.benefits[3]);
  }

  res.status(200).json({
    appointments: benefitAppointments,
    count: benefitAppointments.length,
  });
};

const validateAppointment = (req, res, next) => {
  benefitAppointments = getBenefitAppointments(
      req.body.benefit,
      req.body.city,
      req.body.date,
  );

  if (!benefitAppointments.includes(req.body.appointment)) {
    return res.status(404).json({
      error: `No appointment time for ${req.body.benefit} on that location/date`,
    });
  }

  res.status(200).json({
    appointment: req.body.appointment,
    benefit: req.body.benefit,
    city: req.body.city,
    date: req.body.date,
  });
};

module.exports = {
  getBenefitAppointments,
  validateAppointment,
};
