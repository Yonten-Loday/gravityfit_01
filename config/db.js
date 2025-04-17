const mongoose = require('mongoose');

require('dotenv').config();
mongoose.connect(process.env.MONGODB_URI); //reading db URI

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('✅ MongoDB Connected');
    } catch (error) {
      console.error('❌ MongoDB connection failed:', error.message);
      process.exit(1);
    }
  };
  
  module.exports = connectDB;