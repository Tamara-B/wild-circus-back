const mongoose = require("mongoose");

const circusBookingSchema = new mongoose.Schema({
  bookerName: {
    type: String,
    required: true,
  },
  bookerEmail: {
    type: String,
    required: true,
  },
  bookerAdultNumber: {
    type: Number,
    required: true,
  },
  bookerChildAboveNumber: {
    type: Number,
  },
  bookerChildBelowNumber: {
    type: Number,
  },
  bookerSchool: {
    type: String,
  },
  bookerNote: {
    type: String,
  },
});

const CircusBookingSchema = mongoose.model(
  "circusBookingSchema",
  circusBookingSchema
);
module.exports = CircusBookingSchema;
