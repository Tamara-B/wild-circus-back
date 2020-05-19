const mongoose = require("mongoose");

const circusPerformanceSchema = new mongoose.Schema({
  performanceName: {
    type: String,
    required: true,
  },
  performanceArtist: {
    type: String,
    required: true,
  },
  performanceImg: {
    type: String,
  },
  performanceSummary: {
    type: String,
  },
});

const CircusPerformanceSchema = mongoose.model(
  "circusPerformanceSchema",
  circusPerformanceSchema
);
module.exports = CircusPerformanceSchema;
