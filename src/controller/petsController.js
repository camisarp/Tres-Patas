const Pets = require("../models/petsModel");
const OngOrHome = require("../models/ongsOrTemporaryHomesModel");

const getAllPets = async (req, res) => {
  try {

    let filter = {};
    for ([key, value] of Object.entries(req.query)) {
      filter[key] = new RegExp(value, 'i');
    }
    const findPets = await Pets.find(filter).populate("ongsOrTemporaryHomesId", "name  -_id, instagram, landline, cellPhoneOrWhatsapp");

    if (findPets.length == 0) {
      return res.status(404).json({
        message: "No pets found with these characteristics.",
      });
    }
    res.status(200).json(findPets);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getPetById = async (req, res) => {
  try {
    const findPets = await Pets.findById(req.params.id).populate("ongsOrTemporaryHomesId", "name  -_id, instagram, landline, cellPhoneOrWhatsapp");

    if (findPets == null) {
      return res.status(404).json({
        message: "Pet ID not found."
      });
    }

    res.status(200).json(findPets);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const createNewPet = async (req, res) => {
  try {
    const {
      name,
      species,
      gender,
      age,
      disabilityOrIllness,
      description,
      status,
      neutered,
      wormed,
      vaccinated,
      size,
      ongsOrTemporaryHomesId,
    } = req.body;
    if (!ongsOrTemporaryHomesId) {
      return res.status(400).json({
        message: "The ONG Or Temporary Homes Id is required."
      });
    }
    const findongsOrTemporaryHomes = await OngOrHome.findById(ongsOrTemporaryHomesId);
    if (!findongsOrTemporaryHomes) {
      return res.status(404).json({
        message: "ONG Or Temporary Homes not found."
      });
    }
    const newPet = new Pets({
      name,
      species,
      gender,
      age,
      disabilityOrIllness,
      description,
      status,
      neutered,
      wormed,
      vaccinated,
      size,
      ongsOrTemporaryHomesId,
    });
    const savedPet = await newPet.save();
    res.status(200).json(savedPet);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message
    });
  }
};

const updatePetById = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const {
      name,
      species,
      gender,
      age,
      disabilityOrIllness,
      description,
      status,
      neutered,
      wormed,
      vaccinated,
      size,
      ongsOrTemporaryHomesId,
    } = req.body;
    const findPets = await Pets.findById(id);
    if (!findPets) {
      return res.status(404).json({
        message: "Pets not found"
      });
    }
    if (ongsOrTemporaryHomesId) {
      const findOngsOrTemporaryHomes = await OngOrHome.findById(ongsOrTemporaryHomesId);

      if (!findOngsOrTemporaryHomes) {
        return res.status(404).json({
          message: "Ongs Or Temporary Homes not found"
        });
      }
    }
    findPets.name = name || findPets.name;
    findPets.species = species || findPets.species;
    findPets.gender = gender || findPets.gender;
    findPets.age = age || findPets.age;
    findPets.disabilityOrIllness = disabilityOrIllness || findPets.disabilityOrIllness;
    findPets.description = description || findPets.description;
    findPets.status = status || findPets.status;
    findPets.neutered = neutered || findPets.neutered;
    findPets.wormed = wormed || findPets.wormed;
    findPets.vaccinated = vaccinated || findPets.vaccinated;
    findPets.size = size || findPets.size;
    findPets.ongsOrTemporaryHomesId = ongsOrTemporaryHomesId || findPets.ongsOrTemporaryHomesId;
    const savedPets = await findPets.save();
    res.status(200).json(savedPets);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const deletePetById = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const deletePet = await Pets.findByIdAndDelete(id);

    if (deletePet == null) {
      return res.status(404).json({
        message: `ID Pet ${id} not found.`
      });
    }

    await deletePet.remove();

    res
      .status(200)
      .json({
        message: `The Pet  ${deletePet.id} was successfully deleted.`
      });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  getAllPets,
  getPetById,
  createNewPet,
  updatePetById,
  deletePetById,
};