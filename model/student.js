const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      class: {
        type: String,
        required: true,
      },
      roll: {
        type: String,
        required: true,
      },     
})
const Student = mongoose.model("STUDENT", studentSchema);

module.exports = Student