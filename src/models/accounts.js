const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  number: { type: String, unique: true, required: true },
  creationDate: { type: Date, default: Date.now, required: true },
  balance: { type: Number, required: true },
  client: {type: mongoose.Schema.Types.ObjectId, ref:'client'}
})

module.exports = mongoose.model('account', accountSchema);