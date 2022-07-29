const mongoose = require("mongoose");

const address = new mongoose.Schema({
  "street": String,
  "district": String,
  "city": String,
  "state": String,
  "zipCode": String
})

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
    type: [address],
    required: true
  },
  landline: {
    type: [String]
  },
  cellPhoneOrWhatsapp: {
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