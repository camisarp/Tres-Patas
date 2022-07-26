const mongoose = require("mongoose");

const petsSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId
  },
  name: {
    type: String,
    required: true
  },
  species: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  disabilityOrIllness: {
    type: [String],
    required: true
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    required: true
  },
  neutered: {
    type: Boolean,
    required: true
  },
  wormed: {
    type: Boolean,
    required: true
  },
  vaccinated: {
    type: Boolean,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  ongsOrTemporaryHomesId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "ongsOrTemporaryHomes"
  },
}, {
  timestamps: true
}, {
  versionKey: false,
});

const pets = mongoose.model("pet", petsSchema);

module.exports = pets;