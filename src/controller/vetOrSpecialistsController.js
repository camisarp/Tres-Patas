const VetOrSpecialists = require("../models/vetOrSpecialistsModel");

const getAllVetOrSpecialists = async (req, res) => {
  try {

    let filter = {};
    for ([key, value] of Object.entries(req.query)) {
      filter[key] = new RegExp(value, 'i');
    }
    const findVetOrSpecialists = await VetOrSpecialists.find(filter);

    if (findVetOrSpecialists.length == 0) {
      return res.status(404).json({
        message: "No Veterinarian or Specialists found with these characteristics",
      });
    }
    res.status(200).json(findVetOrSpecialists);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getVetOrSpecialistsId = async (req, res) => {
  try {
    const findVetOrSpecialists = await VetOrSpecialists.findById(req.params.id);

    if (findVetOrSpecialists == null) {
      return res.status(404).json({
        message: "Veterinarian or Specialists ID not found"
      });
    }

    res.status(200).json(findVetOrSpecialists);
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

    const findVetOrSpecialists = await VetOrSpecialists.find({
      address: {
        $elemMatch: {
          district: new RegExp(district, "i")
        }
      }
    });

    if (findVetOrSpecialists.length == 0) {
      return res.status(404).json({
        message: "Veterinarian or Specialists found in this neighborhood.",
      });
    }
    res.status(200).json(findVetOrSpecialists);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const createNewVetOrSpecialists = async (req, res) => {
  try {
    const {
      name,
      profession,
      specialty,
      whereDoYouWork,
      landline,
      cellPhoneOrWhatsapp,
      instagram,
      email,
      description
    } = req.body;

    const newVetOrSpecialists = new VetOrSpecialists({
      name,
      profession,
      specialty,
      whereDoYouWork,
      landline,
      cellPhoneOrWhatsapp,
      instagram,
      email,
      description
    });

    const savedVetOrSpecialists = await newVetOrSpecialists.save();
    res.status(201).json(savedVetOrSpecialists);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message
    });
  }
};

const updateVetOrSpecialistsId = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const {
      name,
      profession,
      specialty,
      whereDoYouWork,
      landline,
      cellPhoneOrWhatsapp,
      instagram,
      email,
      description
    } =
    req.body;

    const findVetOrSpecialists = await VetOrSpecialists.findById(id);
    if (findVetOrSpecialists == null) {
      return res.status(404).json({
        message: "Veterinarian or Specialists not found."
      });
    }

    findVetOrSpecialists.name = name || findVetOrSpecialists.name;
    findVetOrSpecialists.profession = profession || findVetOrSpecialists.profession;
    findVetOrSpecialists.specialty = specialty || findVetOrSpecialists.specialty;
    findVetOrSpecialists.whereDoYouWork = whereDoYouWork || findVetOrSpecialists.whereDoYouWork;
    findVetOrSpecialists.landline = landline || findVetOrSpecialists.landline;
    findVetOrSpecialists.cellPhoneOrWhatsapp = cellPhoneOrWhatsapp || findVetOrSpecialists.cellPhoneOrWhatsapp;
    findVetOrSpecialists.instagram = instagram || findVetOrSpecialists.instagram;
    findVetOrSpecialists.email = email || findVetOrSpecialists.email;
    findVetOrSpecialists.description = description || findVetOrSpecialists.description;

    const savedVetOrSpecialists = await findVetOrSpecialists.save();
    res.status(200).json(savedVetOrSpecialists);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message
    });
  }
};

const deleteVetOrSpecialistsId = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const deleteVetOrSpecialists = await VetOrSpecialists.findByIdAndDelete(id);

    if (deleteVetOrSpecialists == null) {
      return res.status(404).json({
        message: `ID Veterinarian or Specialists ${id} not found.`
      });
    }

    await deleteVetOrSpecialists.remove();

    res
      .status(200)
      .json({
        message: `The Veterinarian or Specialists ${deleteVetOrSpecialists.id} was successfully deleted.`
      });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};


module.exports = {
  getAllVetOrSpecialists,
  getVetOrSpecialistsId,
  getByAddress,
  createNewVetOrSpecialists,
  updateVetOrSpecialistsId,
  deleteVetOrSpecialistsId
};