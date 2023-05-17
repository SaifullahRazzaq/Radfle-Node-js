const mongoose = require("mongoose");

const config = {
  connectTimeoutMS: 5000,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

exports.connect = () => {
  // Connecting to the database
  mongoose.set("strictQuery", false);
  mongoose.connect("mongodb+srv://Quiz:quiz@cluster0.9fmtj.mongodb.net/test",config)
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};
