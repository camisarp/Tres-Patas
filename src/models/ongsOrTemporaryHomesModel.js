const mongoose = require("mongoose");

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
    type: Array,
    required: true
  },
  landline: {
    type: String
  },
  cellPhoneAndWhatsapp: {
    type: [String],
    required: true
  },
  email: {
    type: String
  },
  instagram: {
    type: String
  },
  description: {
    type: String,
    required: true,
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