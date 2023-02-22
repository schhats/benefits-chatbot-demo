//added app.js
const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config');
const benefitsRouter = require('./routes/benefits.routes');
const appointmentsRouter = require('./routes/appointments.routes');
const confirmationsRouter = require('./routes/confirmations.routes');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get(['/', '/healthcheck'], (req, res) => {
  res.status(200).json({
    message: `Looks Good To Me`,
  });
});

app.use('/benefits', benefitsRouter);
app.use('/appointments', appointmentsRouter);
app.use('/confirmations', confirmationsRouter);

app.use(function(req, res, next) {
  res.status(404).json({
    message: `No such route exists: ${req.path}`,
  });
});

app.listen(config.express.port, () => {
  console.log(`The Benefits Mock API is up at port ${config.express.port}`);
});
