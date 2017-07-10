const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  country: { type: String, required: false },
  city: { type: Number, required: false }
});

module.exports= mongoose.model('User',userSchema);
