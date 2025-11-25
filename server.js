require('dotenv').config(); // ✅ Load .env variables at the very top

const express = require('express');
const app = express();
const connectDB = require('./db/connect'); // your connect.js file
const studentRoutes = require('./routes/students');

app.use(express.json());
app.use('/students', studentRoutes);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => console.log(`Server running on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();


