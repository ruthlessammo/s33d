const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  country: { type: String, required: false },
  city: { type: String, required: false }
});

module.exports= mongoose.model('User',userSchema);
