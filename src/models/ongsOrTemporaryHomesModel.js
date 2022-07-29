const mongoose = require("mongoose");

const address = new mongoose.Schema({
  "street": String,
  "district": String,
  "city": String,
  "state": String,
  "zipCode": String
})

const ongsOrTemporaryHomesSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId
  },
  name: {
    type: String,
    required: true
  },
  classification: {
    type: [String],
    required: true
  },
  address: {
    type: [address],
    required: true
  },
  responsible: {
    type: String,
    default: "Uninformed"
  },
  landline: {
    type: [String], default: "Uninformed",
  },
  cellPhoneOrWhatsapp: {
    type: [String],
    required: true
  },
  email: {
    type: String,
  },
  instagram: {
    type: String,
  },
  description: {
    type: String,
    default: "Uninformed",
    minLength: 0,
    maxLength: 500
  }
}, {
  timestamps: true
}, {
  versionKey: false,
});

const ongsOrTemporaryHomes = mongoose.model("ongsOrTemporaryHomes", ongsOrTemporaryHomesSchema);

module.exports = ongsOrTemporaryHomes;