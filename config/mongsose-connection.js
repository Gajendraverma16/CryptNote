
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://gajendraverma353:5Yk0wRwJm8jNSFAY@cluster0.bt6pfsh.mongodb.net/Khatabook', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 10000 
}).then(() => {
  console.log('Database connection successful');
}).catch((err) => {
  console.error('Database connection error:', err);
});

let db = mongoose.connection
module.exports = db;