require('dotenv').config();

const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const studentRoutes = require('./routes/students');
const ttechRoute = require('./routes/ttech');

app.use(express.json());
app.use('/students', studentRoutes);
app.use('/ttech', ttechRoute);

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



