const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    required: true
  },
  currentCollege: {
    type: String,
    required: true
  },
  enrolled: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Student', StudentSchema);


