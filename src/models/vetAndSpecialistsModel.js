const mongoose = require("mongoose");

const vetsAndSpecialistsSchema = new mongoose.Schema({
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
    type: [String]
  },
  address: {
    type: Array,
    required: true
  },
  landline: {
    type: [String],
    default: "Não informado"
  },
  cellPhoneAndWhatsapp: {
    type: [String],
    default: "Não informado"
  },
  instagram: {
    type: String
  },
  email: {
    type: String
  },
}, {
  timestamps: true
}, {
  versionKey: false,
});

const vetsAndSpecialists = mongoose.model("vetsAndSpecialists", vetsAndSpecialistsSchema);

module.exports = vetsAndSpecialists;