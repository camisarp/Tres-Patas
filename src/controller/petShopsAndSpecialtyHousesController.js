const PetShopsAndSpecialtyHouses = require("../models/petShopsAndSpecialtyHousesModel");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const getAllPetShopsAndSpecialtyHouses = async (req, res) => {
  try {
    const allPetShopsAndSpecialtyHouses = await PetShopsAndSpecialtyHouses.find();

    if (!allPetShopsAndSpecialtyHouses) {
      return res.status(404).send("PetShops And Specialty Houses not Found");
    }
    res.status(200).json(allPetShopsAndSpecialtyHouses);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const getPetShopsAndSpecialtyHousesById = async (req, res) => {
  try {
    const findPetShopsAndSpecialtyHouses = await PetShopsAndSpecialtyHouses.findById(req.params.id);

    if (findPetShopsAndSpecialtyHouses == null) {
      return res.status(404).json({
        message: "Pet Shops And Specialty Houses ID not found"
      });
    }

    res.status(200).json(findPetShopsAndSpecialtyHouses);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
const getByName = async (req, res) => {
  try {
    const {
      name
    } = req.query;

    const findPetShopsAndSpecialtyHouses = await PetShopsAndSpecialtyHouses.find({
      // name: {
      //   $regex: reqName,
      //   $options: "i"
      // },
      name: name,
    });

    if (findPetShopsAndSpecialtyHouses.length == 0) {
      return res.status(404).json({
        message: "No Pet Shops And Specialty Houses found with this rating",
      });
    }
    res.status(200).json(findPetShopsAndSpecialtyHouses);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getByClassification = async (req, res) => {
  try {
    const {
      classification
    } = req.query;

    const findPetShopsAndSpecialtyHouses = await PetShopsAndSpecialtyHouses.find({
      // classification: {
      //   $regex: ReqClassification,
      //   $options: "i"
      // },
      classification: classification,
    });

    if (findPetShopsAndSpecialtyHouses.length == 0) {
      return res.status(404).json({
        message: "No Pet Shops And Specialty Houses found with this name",
      });
    }
    res.status(200).json(findPetShopsAndSpecialtyHouses);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



const getByAddress = async (req, res) => { //obs
  try {
    const {
      bairro
    } = req.query;

    const findPetShopsAndSpecialtyHouses = await PetShopsAndSpecialtyHouses.find({
      "address.bairro": bairro
    }, {
      address: {
        $elemMatch: {
          bairro: bairro
        }
      }
    });

    if (findPetShopsAndSpecialtyHouses.length == 0) {
      return res.status(404).json({
        message: "No Pet Shops And Specialty Houses found in this neighborhood",
      });
    }
    res.status(200).json(findPetShopsAndSpecialtyHouses);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const createNewPetShopsAndSpecialtyHouses = async (req, res) => {
  try {
    const authHeader = req.get("authorization");

    if (!authHeader) {
      return res.status(401).send("You need authorization to access here");
    }

    const token = authHeader.split(" ")[1];

    await jwt.verify(token, SECRET, async function (err) {
      if (err) {
        return res.status(403).send("Denied access");
      }
      const {
        name,
        classification,
        address,
        landline,
        cellPhoneAndWhatsapp,
        email,
        instagram,
        description
      } = req.body;

      const newPetShopsAndSpecialtyHouses = new PetShopsAndSpecialtyHouses({
        name,
        classification,
        address,
        landline,
        cellPhoneAndWhatsapp,
        email,
        instagram,
        description,
      });

      const savedPetShopsAndSpecialtyHouses = await newPetShopsAndSpecialtyHouses.save();
      res.status(201).json(savedPetShopsAndSpecialtyHouses);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message
    });
  }
};

const updatePetShopsAndSpecialtyHousesById = async (req, res) => {
  try {
    const authHeader = req.get("authorization");

    if (!authHeader) {
      return res.status(401).send("You need authorization to access here");
    }

    const token = authHeader.split(" ")[1];

    await jwt.verify(token, SECRET, async function (err) {
      if (err) {
        return res.status(403).send("Denied access");
      }
    });
    const {
      id
    } = req.params;
    const {
      name,
      classification,
      address,
      landline,
      cellPhoneAndWhatsapp,
      email,
      instagram,
      description
    } =
    req.body;

    const findPetShopsAndSpecialtyHouses = await PetShopsAndSpecialtyHouses.findById(id);
    if (findPetShopsAndSpecialtyHouses == null) {
      return res.status(404).json({
        message: "Pet Shops And Specialty Houses not found"
      });
    }

    findPetShopsAndSpecialtyHouses.name = name || findPetShopsAndSpecialtyHouses.name;
    findPetShopsAndSpecialtyHouses.classification = classification || findPetShopsAndSpecialtyHouses.classification;
    findPetShopsAndSpecialtyHouses.address = address || findPetShopsAndSpecialtyHouses.address;
    findPetShopsAndSpecialtyHouses.landline = landline || findPetShopsAndSpecialtyHouses.landline;
    findPetShopsAndSpecialtyHouses.cellPhoneAndWhatsapp = cellPhoneAndWhatsapp || findPetShopsAndSpecialtyHouses.cellPhoneAndWhatsapp;
    findPetShopsAndSpecialtyHouses.email = email || findPetShopsAndSpecialtyHouses.email;
    findPetShopsAndSpecialtyHouses.instagram = instagram || findPetShopsAndSpecialtyHouses.instagram;
    findPetShopsAndSpecialtyHouses.description = description || findPetShopsAndSpecialtyHouses.description;

    const savedPetShopsAndSpecialtyHouses = await findPetShopsAndSpecialtyHouses.save();
    res.status(200).json(savedPetShopsAndSpecialtyHouses);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message
    });
  }
};

const deletePetShopsAndSpecialtyHousesById = async (req, res) => {
  try {
    const authHeader = req.get("authorization");

    if (!authHeader) {
      return res.status(401).send("You need authorization");
    }

    const token = authHeader.split(" ")[1];

    await jwt.verify(token, SECRET, async function (err) {
      if (err) {
        return res.status(403).send("Denied access");
      }
    });
    const {
      id
    } = req.params;
    const deletePetShopsAndSpecialtyHouses = await PetShopsAndSpecialtyHouses.findByIdAndDelete(id);

    if (deletePetShopsAndSpecialtyHouses == null) {
      return res.status(404).json({
        message: `ID Pet Shops And Specialty Houses ${id} not found`
      });
    }

    await deletePetShopsAndSpecialtyHouses.remove();

    res
      .status(200)
      .json({
        message: `The Pet Shops And Specialty Houses ${deletePetShopsAndSpecialtyHouses.id} was successfully deleted`
      });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};


module.exports = {
  getAllPetShopsAndSpecialtyHouses,
  getPetShopsAndSpecialtyHousesById,
  getByName,
  getByClassification,
  getByAddress,
  createNewPetShopsAndSpecialtyHouses,
  updatePetShopsAndSpecialtyHousesById,
  deletePetShopsAndSpecialtyHousesById
};