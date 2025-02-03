const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/socialNetworkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.set('debug', false);

module.exports = mongoose.connection;