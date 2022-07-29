const mongoose = require("mongoose");

const address = new mongoose.Schema({
  "name": String,
  "street": String,
  "district": String,
  "city": String,
  "state": String,
  "zipCode": String
})

const vetsOrSpecialistsSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  profession: {
    type: [String],
    required: true
  },
  specialty: {
    type: [String],
    required: true
  },
  whereDoYouWork: {
    type: [address],
    required: true
  },
  landline: {
    type: [String],
    default: "Uninformed"
  },
  cellPhoneOrWhatsapp: {
    type: [String],
    default: "Uninformed"
  },
  instagram: {
    type: String
  },
  email: {
    type: String
  },
  description: {
    type: String,
    minLength: 0,
    maxLength: 500
  }
}, {
  timestamps: true
}, {
  versionKey: false,
});

const vetsOrSpecialists = mongoose.model("vetsOrSpecialists", vetsOrSpecialistsSchema);

module.exports = vetsOrSpecialists;