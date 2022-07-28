const Pets = require("../models/petsModel");
const OngOrHome = require("../models/ongsOrTemporaryHomesModel");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const getAllPets = async (req, res) => {
  try {
    const allPets = await Pets.find();

    if (!allPets) {
      return res.status(404).send("Pets not Found");
    }
    res.status(200).json(allPets);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const getPetById = async (req, res) => {
  try {
    const findPets = await Pets.findById(req.params.id);

    if (findPets == null) {
      return res.status(404).json({
        message: "Pet ID not found"
      });
    }

    res.status(200).json(findPets);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const getByStatus = async (req, res) => {
  try {
    const reqStatus = req.query.status;

    const findPets = await Pets.find({
      status: {
        $regex: reqStatus,
        $options: "i"
      },
    });

    if (findPets.length > 0) {
      res.status(200).json(findPets);
    } else {
      return res.status(404).json({
        message: "Status not found"
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const getBySpecifications = async (req, res) => {
  try {
    const {
      species,
      gender
    } = req.query;

    let findPets = {};

    if (!species) {
      findPets = await Pets.find({
        gender: gender
      });
    } else if (!gender) {
      findPets = await Pets.find({
        species: species
      });
    } else {
      findPets = await Pets.find({
        gender: gender,
        species: species,
      });
    }

    if (findPets.length == 0) {
      return res.status(404).json({
        message: "No pets found with these characteristics",
      });
    }
    res.status(200).json(findPets);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const createNewPet = async (req, res) => {
  try {
    const authHeader = req.get("authorization");
    if (!authHeader) {
      return res.status(401).send("You need authorization to access here");
    }
    const token = authHeader.split(" ")[1];
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("Access denied");
      }
      const {
        name,
        species,
        gender,
        age,
        disabilityOrIllness,
        descriptiondisabilityOrIllness,
        status,
        neutered,
        wormed,
        vaccinated,
        size,
        ongsOrTemporaryHomesId,
        responsible,
        whatsapp,
        email,
      } = req.body;
      if (!ongsOrTemporaryHomesId) {
        return res.status(400).json({
          message: "The ongsOrTemporaryHomes Id is required"
        });
      }
      const findongsOrTemporaryHomes = await OngOrHome.findById(ongsOrTemporaryHomesId);
      if (!findongsOrTemporaryHomes) {
        return res.status(404).json({
          message: "ongsOrTemporaryHomes not found"
        });
      }
      const newPet = new Pets({
        name,
        species,
        gender,
        age,
        disabilityOrIllness,
        descriptiondisabilityOrIllness,
        status,
        neutered,
        wormed,
        vaccinated,
        size,
        ongsOrTemporaryHomesId,
        responsible,
        whatsapp,
        email,
      });
      const savedPet = await newPet.save();
      res.status(200).json(savedPet);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message
    });
  }
};

const updatePetById = async (req, res) => {
  try {
    const authHeader = req.get("authorization");
    if (!authHeader) {
      return res.status(401).send("You need authorization to access here");
    }
    const token = authHeader.split(" ")[1];
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("Access denied");
      }
      const {
        id
      } = req.params;
      const {
        name,
        species,
        gender,
        age,
        disabilityOrIllness,
        descriptiondisabilityOrIllness,
        status,
        neutered,
        wormed,
        vaccinated,
        size,
        ongsOrTemporaryHomesId,
        responsible,
        whatsapp,
        email,
      } = req.body;
      const findPets = await Pets.findById(id);
      if (findPets == null) {
        return res.status(404).json({
          message: "Pets not found"
        });
      }
      findPets.name = name || findPets.name;
      findPets.species = species || findPets.species;
      findPets.gender = gender || findPets.gender;
      findPets.age = age || findPets.age;
      findPets.disabilityOrIllness = disabilityOrIllness || findPets.disabilityOrIllness;
      findPets.descriptiondisabilityOrIllness = descriptiondisabilityOrIllness || findPets.descriptiondisabilityOrIllness;
      findPets.status = status || findPets.status;
      findPets.neutered = neutered || findPets.neutered;
      findPets.wormed = wormed || findPets.wormed;
      findPets.vaccinated = vaccinated || findPets.vaccinated;
      findPets.size = size || findPets.size;
      findPets.ongsOrTemporaryHomesId = ongsOrTemporaryHomesId || findPets.ongsOrTemporaryHomesId;
      findPets.responsible = responsible || findPets.responsible;
      findPets.whatsapp = whatsapp || findPets.whatsapp;
      findPets.email = email || findPets.email;
      const savedPets = await findPets.save();
      res.status(200).json(savedPets);
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const deletePetById = async (req, res) => {
  try {
    const authHeader = req.get("authorization");
    if (!authHeader) {
      return res.status(401).send("You need authorization to access here");
    }
    const token = authHeader.split(" ")[1];
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("Access denied");
      }
      const {
        id
      } = req.params;
      const deletePet = await Pets.findByIdAndDelete(id);
      const message = `The Pets with id ${deletePet.name} was successfully deleted`;
      res.status(200).json({
        message,
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAllPets,
  getPetById,
  getBySpecifications,
  getByStatus,
  createNewPet,
  updatePetById,
  deletePetById,
};