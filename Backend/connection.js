// connection.js

const mongoose = require("mongoose");
require("dotenv").config(); // Import dotenv to load environment variables

// Retrieve MongoDB URI from environment variable
const uri = process.env.MONGO_URI;

// Establish MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB Atlas successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB; // Export the function to be used elsewhere
