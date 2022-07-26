const mongoose = require("mongoose");

const address = new mongoose.Schema({
  "street": String,
  "district": String,
  "city": String,
  "state": String,
  "zipCode": String
})

const usersSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId
  },
  fullName: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    required: true
  },
  genderIdentity: {
    type: String,
  },
  address: {
    type: [address],
    required: true
  },
  landline: {
    type: String,
  },
  cellPhoneOrWhatsapp: {
    type: [String],
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  }
}, {
  timestamps: true
}, {
  versionKey: false,
});

const users = mongoose.model("user", usersSchema);

module.exports = users;