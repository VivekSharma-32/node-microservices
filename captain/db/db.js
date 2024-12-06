const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connected with DB");
    })
    .catch((err) => {
      console.log("Unable to connect with the mongodb", err.message);
    });
};

module.exports = connectDB;
