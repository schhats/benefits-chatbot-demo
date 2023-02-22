const config = {};

config.express = {};
config.express.port = 8080;

config.benefits = [
  'Medical',
  'Dental',
  'Vision',
  'Hospitalization',
  'Surgery',
  'Mental Health',
];

config.appointments = [
  '11:00 AM',
  '12:00 PM',
  '1:30 PM',
  '3:00 PM',
  '5:30 PM',
  '7:00 PM',
  '8:00 PM',
];

config.confirmation = {};
config.confirmation.idMax = 999;

config.confirmations = {
  'CD-001': {
    'id': 'CD-001',
    'benefit': 'Medical',
    'city': 'Los Angeles',
    'date': '2023-02-01',
    'appointment': '11:00 AM',
  },
  'CD-002': {
    'id': 'CD-002',
    'benefit': 'Dental',
    'city': 'Arlington',
    'date': '2023-02-21',
    'appointment': '9:00 PM',
  },
  'CD-003': {
    'id': 'CD-003',
    'benefit': 'Mental Health',
    'city': 'New York',
    'date': '2023-05-30',
    'appointment': '9:00 PM',
  },
};

module.exports = config;
