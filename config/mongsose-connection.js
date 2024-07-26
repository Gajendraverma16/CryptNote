
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/khatabookcompleted', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 10000 
}).then(() => {
  console.log('Database connection successful');
}).catch((err) => {
  console.error('Database connection error:', err);
});

let db = mongoose.connection;

module.exports = db;