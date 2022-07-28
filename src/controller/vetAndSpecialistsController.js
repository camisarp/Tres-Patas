const vetAndSpecialists = require("../models/vetAndSpecialistsModel");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const getAllvetAndSpecialists = async (req, res) => {
  try {
    const allvetAndSpecialists = await vetAndSpecialists.find();

    if (!allvetAndSpecialists) {
      return res.status(404).send("Veterinarian and specialists not Found");
    }
    res.status(200).json(allvetAndSpecialists);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const getvetAndSpecialistsId = async (req, res) => {
  try {
    const findvetAndSpecialists = await vetAndSpecialists.findById(req.params.id);

    if (findvetAndSpecialists == null) {
      return res.status(404).json({
        message: "Veterinarian and specialists ID not found"
      });
    }

    res.status(200).json(findvetAndSpecialists);
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

    const findvetAndSpecialists = await vetAndSpecialistsModel.find({
      // name: {
      //   $regex: reqName,
      //   $options: "i"
      // },
      name: name,
    });

    if (findvetAndSpecialistslength == 0) {
      return res.status(404).json({
        message: "No veterinarian and specialists found with this rating",
      });
    }
    res.status(200).json(findvetAndSpecialists);
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

    const findvetAndSpecialists = await vetAndSpecialists.find({
      // classification: {
      //   $regex: ReqClassification,
      //   $options: "i"
      // },
      classification: classification,
    });

    if (findvetAndSpecialistslength == 0) {
      return res.status(404).json({
        message: "No veterinarian and specialists found with this name",
      });
    }
    res.status(200).json(findvetAndSpecialists);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


const getByAddress = async (req, res) => {
  try {
    const {
      address
    } = req.query;

    const findvetAndSpecialists = await vetAndSpecialists.find({
      address: address,
    });

    if (findvetAndSpecialistslength == 0) {
      return res.status(404).json({
        message: "No veterinarian and specialists found in this neighborhood",
      });
    }
    res.status(200).json(findvetAndSpecialists);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const createNewvetAndSpecialists = async (req, res) => {
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
        profession,
        specialty,
        whereDoYouWork,
        address,
        landline,
        cellPhoneAndWhatsapp,
        email,
        instagram,
        description
      } = req.body;

      const newvetAndSpecialists = new vetAndSpecialists({
        name,
        profession,
        specialty,
        whereDoYouWork,
        address,
        landline,
        cellPhoneAndWhatsapp,
        email,
        instagram,
        description
      });

      const savedvetAndSpecialists = await newvetAndSpecialists.save();
      res.status(201).json(savedvetAndSpecialists);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message
    });
  }
};

const updatevetAndSpecialistsId = async (req, res) => {
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
      profession,
      specialty,
      whereDoYouWork,
      address,
      landline,
      cellPhoneAndWhatsapp,
      email,
      instagram,
      description
    } =
    req.body;

    const findvetAndSpecialists = await vetAndSpecialists.findById(id);
    if (findvetAndSpecialists == null) {
      return res.status(404).json({
        message: "Veterinarian and specialists not found"
      });
    }

    findvetAndSpecialists.name = name || findvetAndSpecialists.name;
    findvetAndSpecialists.profession = profession || findvetAndSpecialists.profession;
    findvetAndSpecialists.specialty = specialty || findvetAndSpecialists.specialty;
    findvetAndSpecialists.whereDoYouWork = whereDoYouWork || findvetAndSpecialists.whereDoYouWork;
    findvetAndSpecialists.address = address || findvetAndSpecialists.address;
    findvetAndSpecialists.landline = landline || findvetAndSpecialists.landline;
    findvetAndSpecialists.cellPhoneAndWhatsapp = cellPhoneAndWhatsapp || findvetAndSpecialists.cellPhoneAndWhatsapp;
    findvetAndSpecialists.email = email || findvetAndSpecialists.email;
    findvetAndSpecialists.instagram = instagram || findvetAndSpecialists.instagram;
    findvetAndSpecialists.description = description || findvetAndSpecialists.description;

    const savedvetAndSpecialists = await findvetAndSpecialists.save();
    res.status(200).json(savedvetAndSpecialists);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message
    });
  }
};

const deletevetAndSpecialistsId = async (req, res) => {
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
    const deleteVetAndSpecialists = await vetAndSpecialists.findByIdAndDelete(id);

    if (deleteVetAndSpecialists == null) {
      return res.status(404).json({
        message: `ID vet And Specialists ${id} not found`
      });
    }

    await deleteVetAndSpecialists.remove();

    res
      .status(200)
      .json({
        message: `The Ong or temporary home ${deleteVetAndSpecialists.id} was successfully deleted`
      });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};


module.exports = {
  getAllvetAndSpecialists,
  getvetAndSpecialistsId,
  getByName,
  getByClassification,
  getByAddress,
  createNewvetAndSpecialists,
  updatevetAndSpecialistsId,
  deletevetAndSpecialistsId
};