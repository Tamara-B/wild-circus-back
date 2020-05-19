const circusPerformanceService = require("../services/circusPerformance.services.jsx");

const createPerformance = async (req, res, next) => {
  console.log("req", req.body);
  try {
    const performance = await circusPerformanceService.createPerformance({
      performanceName: req.body.performanceName,
      performanceArtist: req.body.performanceArtist,
      performanceImg: req.body.performanceImg,
      performanceSummary: req.body.performanceSummary,
    });
    res.status(200).json({ result: performance });
  } catch (err) {
    next(err);
  }
};

const getPerformances = async (req, res, next) => {
  try {
    const performances = await circusPerformanceService.getPerformances();
    res.status(200).json({ result: performances });
  } catch (err) {
    next(err);
  }
};

const getPerformanceById = async (req, res, next) => {
  try {
    const performance = await circusPerformanceService.getPerformanceById(
      req.params.id
    );
    res.status(200).json({ result: performance });
  } catch (err) {
    next(err);
  }
};

const deletePerformance = async (req, res, next) => {
  try {
    const performance = await circusPerformanceService.deletePerformance(
      req.params.id
    );
    res.status(200).json({ result: "done", deletedPerformance: performance });
  } catch (err) {
    next(err);
  }
};

const updatePerformance = async (req, res, next) => {
  try {
    const performance = await circusPerformanceService.updatePerformance(
      req.params.id,
      req.body
    );
    res.status(200).json({ result: "done", updatedPerformance: performance });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createPerformance,
  getPerformances,
  getPerformanceById,
  deletePerformance,
  updatePerformance,
};
