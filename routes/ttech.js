const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

router.get('/', async (req, res) => {
  try {
    const students = await Student.find();

    let html = `
      <h1>TTECH Students</h1>
      <ul>
    `;

    students.forEach((s) => {
      html += `<li>${s.firstName || s.name} - Age: ${s.age}</li>`;
    });

    html += `</ul>`;

    res.send(html);
  } catch (error) {
    res.status(500).send("Error loading students");
  }
});

module.exports = router;
