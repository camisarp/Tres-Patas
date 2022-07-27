const OngOrHome = require("../models/ongsOrTemporaryHomesModel");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const getAllOngOrHome = async (req, res) => {
  try {
    const allOngOrHome = await OngOrHome.find();

    if (!allOngOrHome) {
      return res.status(404).send("OngOrHome not Found");
    }
    res.status(200).json(allOngOrHome);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const getOngOrHomeId = async (req, res) => {
  try {
    const findOngOrHome = await OngOrHome.findById(req.params.id);

    if (findOngOrHome == null) {
      return res.status(404).json({
        message: "Ongs Or temporary homes ID not found"
      });
    }

    res.status(200).json(findOngOrHome);
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

    const findOngOrHome = await OngOrHome.find({
      status: {
        $regex: reqStatus,
        $options: "i"
      },
      name: name,
    });

    if (findOngOrHomelength == 0) {
      return res.status(404).json({
        message: "No Ong or temporary home found with this rating",
      });
    }
    res.status(200).json(findOngOrHome);
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

    const findOngOrHome = await OngOrHome.find({
      status: {
        $regex: reqStatus,
        $options: "i"
      },
      classification: classification,
    });

    if (findOngOrHomelength == 0) {
      return res.status(404).json({
        message: "No Ong or temporary home found with this name",
      });
    }
    res.status(200).json(findOngOrHome);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


const getByAddress = async (req, res) => {
  try {
    const {
      bairro
    } = req.query;

    const findOngOrHome = await OngOrHome.find({
      "address.bairro": bairro
    }, {
      address: {
        $elemMatch: {
          bairro: bairro
        }
      }
    });

    if (findOngOrHome.length == 0) {
      return res.status(404).json({
        message: "No Ong or temporary home found in this neighborhood",
      });
    }
    res.status(200).json(findOngOrHome);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const createNewOngOrHome = async (req, res) => {
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

      const newOngOrHome = new OngOrHome({
        name,
        classification,
        address,
        landline,
        cellPhoneAndWhatsapp,
        email,
        instagram,
        description,
      });

      const savedOngOrHome = await newOngOrHome.save();
      res.status(201).json(savedOngOrHome);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message
    });
  }
};

const updateOngOrHomeId = async (req, res) => {
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

    const findOngOrHome = await OngOrHome.findById(id);
    if (findOngOrHome == null) {
      return res.status(404).json({
        message: "Ong Or tempory home not found"
      });
    }

    findOngOrHome.name = name || findOngOrHome.name;
    findOngOrHome.classification = classification || findOngOrHome.classification;
    findOngOrHome.address = address || findOngOrHome.address;
    findOngOrHome.landline = landline || findOngOrHome.landline;
    findOngOrHome.cellPhoneAndWhatsapp = cellPhoneAndWhatsapp || findOngOrHome.cellPhoneAndWhatsapp;
    findOngOrHome.email = email || findOngOrHome.email;
    findOngOrHome.instagram = instagram || findOngOrHome.instagram;
    findOngOrHome.description = description || findOngOrHome.description;

    const savedOngOrHome = await findOngOrHome.save();
    res.status(200).json(savedOngOrHome);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message
    });
  }
};

const deleteOngOrHomeId = async (req, res) => {
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
    const deleteOngOrHome = await OngOrHome.findByIdAndDelete(id);

    if (deleteOngOrHome == null) {
      return res.status(404).json({
        message: `ID Ong or temporary home ${id} not found`
      });
    }

    await deleteOngOrHome.remove();

    res
      .status(200)
      .json({
        message: `The Ong or temporary home ${deleteOngOrHome.id} was successfully deleted`
      });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};


module.exports = {
  getAllOngOrHome,
  getOngOrHomeId,
  getByName,
  getByClassification,
  getByAddress,
  createNewOngOrHome,
  updateOngOrHomeId,
  deleteOngOrHomeId
};