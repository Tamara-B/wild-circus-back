const CircusPerformanceSchema = require("../models/circusPerformance.model.jsx");

const createPerformance = async (reqBody) => {
  const performance = await CircusPerformanceSchema.create(reqBody);
  return performance;
};

const getPerformances = async () => {
  const performances = await CircusPerformanceSchema.find();
  return performances;
};

const getPerformanceById = async (performanceId) => {
  const performance = await CircusPerformanceSchema.findById(performanceId);
  if (!performance) {
    throw new Error("Not found");
  }
  return performance;
};

const deletePerformance = async (performanceId) => {
  const performance = await getPerformanceById(performanceId);
  await performance.remove();
  return performance;
};

const updatePerformance = async (performanceId, updateParam) => {
  const performance = await getPerformanceById(performanceId);
  Object.assign(performance, updateParam);
  performance.save();
  return performance;
};

module.exports = {
  createPerformance,
  getPerformances,
  getPerformanceById,
  deletePerformance,
  updatePerformance,
};
