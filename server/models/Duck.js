const mongoose = require('mongoose');
const DuckSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  firstName: { type: String, require: true },
  lastName: { type: String },
  email: { type: String },
  phone: { type: Number },
  completed: {
    type: Boolean,
    default: false,
  },
  modified: {
    type: Date,
    default: Date.now
  }
});

module.exports = Duck = mongoose.model('duck', DuckSchema);
