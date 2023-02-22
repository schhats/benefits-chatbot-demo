//controller for benefits
const utils = require('../utils');
const config = require('../config');

const getBenefitsNowRegistering = (req, res, next) => {
  if (!config || !config.benefits || config.benefits.length <= 0) {
    res.status(500).json({
      message: `Error loading available benefits. Please try again later`,
    });
  }

  hashInput = `${req.query.city}-${req.query.date}`;
  hash = utils.hashCode(hashInput);

  const benefitsNowRegistering = [];
  for (const benefit of config.benefits) {
    const temp = hash % 10;
    if (temp >= 5) {
      benefitsNowRegistering.push(benefit);
    }
    hash = Math.floor(hash / 10);
  }

  // just add 2 benefits from the arr if none are added to list
  if (benefitsNowRegistering.length == 0) {
    benefitsNowRegistering.push(config.benefits[0]);
    benefitsNowRegistering.push(config.benefits[2]);
  }

  benefitsNowRegistering.sort();

  res.status(200).json({
    benefits: benefitsNowRegistering,
    count: benefitsNowRegistering.length,
  });
};

module.exports = {
  getBenefitsNowRegistering,
};
