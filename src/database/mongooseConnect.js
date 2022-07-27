const DATABASE_URI = process.env.DATABASE_URI;

const mongoose = require("mongoose");

const connect = async () => {
  try {
    mongoose.connect(DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected database!");
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  connect,
};