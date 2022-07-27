const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId
  },
  fullName: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  genderIdentity: {
    type: String,
    required: true
  },
  address: {
    type: Array,
    required: true
  },
  landline: {
    type: [String]
  },
  cellPhoneAndWhatsapp: {
    type: [String],
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
}, {
  versionKey: false,
});

const users = mongoose.model("user", usersSchema);

module.exports = users;