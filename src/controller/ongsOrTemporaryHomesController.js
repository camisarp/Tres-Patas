const OngOrHome = require("../models/ongsOrTemporaryHomesModel");

const getAllOngOrHome = async (req, res) => {
  try {
    let filter = {};
    for ([key, value] of Object.entries(req.query)) {
      filter[key] = new RegExp(value, 'i');
    }
    const findOngOrHome = await OngOrHome.find(filter);

    if (findOngOrHome.length == 0) {
      return res.status(404).json({
        message: "No ONG Or temporary homes found with these characteristics.",
      });
    }
    res.status(200).json(findOngOrHome);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getOngOrHomeId = async (req, res) => {
  try {
    const findOngOrHome = await OngOrHome.findById(req.params.id);

    if (findOngOrHome == null) {
      return res.status(404).json({
        message: "ONG Or temporary homes ID not found."
      });
    }
    res.status(200).json(findOngOrHome);
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

    const findOngOrHome = await OngOrHome.find({
      address: {
        $elemMatch: {
          district: new RegExp(district, "i")
        }
      }
    });

    if (findOngOrHome.length == 0) {
      return res.status(404).json({
        message: "No ONG Or temporary homes found in this neighborhood",
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
    const {
      name,
      classification,
      address,
      responsible,
      landline,
      cellPhoneOrWhatsapp,
      email,
      instagram,
      description
    } = req.body;

    const newOngOrHome = new OngOrHome({
      name,
      classification,
      address,
      responsible,
      landline,
      cellPhoneOrWhatsapp,
      email,
      instagram,
      description,
    });

    const savedOngOrHome = await newOngOrHome.save();
    res.status(201).json(savedOngOrHome);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message
    });
  }
};

const updateOngOrHomeId = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const {
      name,
      classification,
      address,
      responsible,
      landline,
      cellPhoneOrWhatsapp,
      email,
      instagram,
      description
    } =
    req.body;

    const findOngOrHome = await OngOrHome.findById(id);
    if (findOngOrHome == null) {
      return res.status(404).json({
        message: "ONG Or tempory home not found."
      });
    }

    findOngOrHome.name = name || findOngOrHome.name;
    findOngOrHome.classification = classification || findOngOrHome.classification;
    findOngOrHome.address = address || findOngOrHome.address;
    findOngOrHome.responsible = responsible || findOngOrHome.responsible;
    findOngOrHome.landline = landline || findOngOrHome.landline;
    findOngOrHome.cellPhoneOrWhatsapp = cellPhoneOrWhatsapp || findOngOrHome.cellPhoneOrWhatsapp;
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
    const {
      id
    } = req.params;
    const deleteOngOrHome = await OngOrHome.findByIdAndDelete(id);

    if (deleteOngOrHome == null) {
      return res.status(404).json({
        message: `ID ONG or temporary home ${id} not found.`
      });
    }

    await deleteOngOrHome.remove();

    res
      .status(200)
      .json({
        message: `The ONG or temporary home ${deleteOngOrHome.id} was successfully deleted`
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
  getByAddress,
  createNewOngOrHome,
  updateOngOrHomeId,
  deleteOngOrHomeId
};