const PetShopsOrSpecialtyHouses = require("../models/petShopsOrSpecialtyHousesModel");

const getAllPetShopsOrSpecialtyHouses = async (req, res) => {
    try {
      let filter = {};
      for ([key, value] of Object.entries(req.query)) {
        filter[key] = new RegExp(value, 'i');
      }
      const findPetShopsOrSpecialtyHouses = await PetShopsOrSpecialtyHouses.find(filter);

      if (findPetShopsOrSpecialtyHouses.length == 0) {
        return res.status(404).json({
          message: "No PetShops Or Specialty Houses found with these characteristics.",
        });
      }
      res.status(200).json(findPetShopsOrSpecialtyHouses);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

const getPetShopsOrSpecialtyHousesById = async (req, res) => {
  try {
    const findPetShopsOrSpecialtyHouses = await PetShopsOrSpecialtyHouses.findById(req.params.id);

    if (findPetShopsOrSpecialtyHouses == null) {
      return res.status(404).json({
        message: "Pet Shops Or Specialty Houses ID not found."
      });
    }

    res.status(200).json(findPetShopsOrSpecialtyHouses);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const getByAddress = async (req, res) => { //obs
  try {
    const {
      district
    } = req.query;

    const findPetShopsOrSpecialtyHouses = await PetShopsOrSpecialtyHouses.find({
      address: {
        $elemMatch: {
          district: new RegExp(district, "i")
        }
      }
    });

    if (findPetShopsOrSpecialtyHouses.length == 0) {
      return res.status(404).json({
        message: "No Pet Shops Or Specialty Houses found in this neighborhood.",
      });
    }
    res.status(200).json(findPetShopsOrSpecialtyHouses);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const createNewPetShopsOrSpecialtyHouses = async (req, res) => {
  try {
    const {
      name,
      classification,
      address,
      landline,
      cellPhoneOrWhatsapp,
      email,
      instagram,
      description
    } = req.body;

    const newPetShopsOrSpecialtyHouses = new PetShopsOrSpecialtyHouses({
      name,
      classification,
      address,
      landline,
      cellPhoneOrWhatsapp,
      email,
      instagram,
      description,
    });

    const savedPetShopsOrSpecialtyHouses = await newPetShopsOrSpecialtyHouses.save();
    res.status(201).json(savedPetShopsOrSpecialtyHouses);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message
    });
  }
};

const updatePetShopsOrSpecialtyHousesById = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const {
      name,
      classification,
      address,
      landline,
      cellPhoneOrWhatsapp,
      email,
      instagram,
      description
    } =
    req.body;

    const findPetShopsOrSpecialtyHouses = await PetShopsOrSpecialtyHouses.findById(id);
    if (findPetShopsOrSpecialtyHouses == null) {
      return res.status(404).json({
        message: "Pet Shops And Specialty Houses not found."
      });
    }

    findPetShopsOrSpecialtyHouses.name = name || findPetShopsOrSpecialtyHouses.name;
    findPetShopsOrSpecialtyHouses.classification = classification || findPetShopsOrSpecialtyHouses.classification;
    findPetShopsOrSpecialtyHouses.address = address || findPetShopsOrSpecialtyHouses.address;
    findPetShopsOrSpecialtyHouses.landline = landline || findPetShopsOrSpecialtyHouses.landline;
    findPetShopsOrSpecialtyHouses.cellPhoneOrWhatsapp = cellPhoneOrWhatsapp || findPetShopsOrSpecialtyHouses.cellPhoneOrWhatsapp;
    findPetShopsOrSpecialtyHouses.email = email || findPetShopsOrSpecialtyHouses.email;
    findPetShopsOrSpecialtyHouses.instagram = instagram || findPetShopsOrSpecialtyHouses.instagram;
    findPetShopsOrSpecialtyHouses.description = description || findPetShopsOrSpecialtyHouses.description;

    const savedPetShopsOrSpecialtyHouses = await findPetShopsOrSpecialtyHouses.save();
    res.status(200).json(savedPetShopsOrSpecialtyHouses);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message
    });
  }
};

const deletePetShopsOrSpecialtyHousesById = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const deletePetShopsOrSpecialtyHouses = await PetShopsOrSpecialtyHouses.findByIdAndDelete(id);

    if (deletePetShopsOrSpecialtyHouses == null) {
      return res.status(404).json({
        message: `ID Pet Shops Or Specialty Houses ${id} not found.`
      });
    }

    await deletePetShopsOrSpecialtyHouses.remove();

    res
      .status(200)
      .json({
        message: `The Pet Shops Or Specialty Houses ${deletePetShopsOrSpecialtyHouses.id} was successfully deleted.`
      });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  getAllPetShopsOrSpecialtyHouses,
  getPetShopsOrSpecialtyHousesById,
  getByAddress,
  createNewPetShopsOrSpecialtyHouses,
  updatePetShopsOrSpecialtyHousesById,
  deletePetShopsOrSpecialtyHousesById
};