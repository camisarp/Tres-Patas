const mongoose = require("mongoose");

const petShopOrSpecializedHouseSchema = new mongoose.Schema({
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
    type: [String]
  },
  email: {
    type: String
  },
  instagram: {
    type: String
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

const petShopOrSpecializedHouse = mongoose.model("petShopOrSpecializedHouse", petShopOrSpecializedHouseSchema);

module.exports = petShopOrSpecializedHouse;