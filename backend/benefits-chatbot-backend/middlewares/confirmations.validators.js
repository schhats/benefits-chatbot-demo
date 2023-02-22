//mw for conformations
const {body, validationResult} = require('express-validator');

exports.createConfirmation = [
  // time in AM/PM format
  body('appointment', 'missing parameter appointment').exists()
      .matches(/\b((1[0-2]|0?[1-9]):([0-5][0-9]) ([AaPp][Mm]))/),
  body('benefit', 'missing parameter benefit').exists(),
  body('city', 'missing parameter city').exists(),
  body('date', 'invalid date').exists().isDate(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        error: `Bad Request`,
        errorReason: errors.array(),
      });
    }
    next();
  },
];
