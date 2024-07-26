
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/khatabookcompleted', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Database connection successful');
}).catch((err) => {
  console.error('Database connection error:', err);
});

let db = mongoose.connection;

module.exports = db;