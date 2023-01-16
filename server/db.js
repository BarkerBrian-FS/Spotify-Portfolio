const mongoose = require("mongoose");

// Mongoose uses promises so use async/await
const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected through`);
  } catch (err) {
    console.log(`Error connecting to MongoDB`);
  }
};

module.exports = connectDB;