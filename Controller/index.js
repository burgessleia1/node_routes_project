const express = require('express');
const router = express.Router();
const { getAllStudents } = require('../Controller/index');

// Route to get all students
router.get('/ttech', getAllStudents);

module.exports = router;

