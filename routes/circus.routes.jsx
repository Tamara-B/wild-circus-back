const express = require("express");
const router = express.Router();
const circusPerformanceController = require("../controllers/circusPerformance.controller.jsx");
const circusBookingController = require("../controllers/circusBooking.controller.jsx");

router.post("/performance", circusPerformanceController.createPerformance);
router.get("/performance", circusPerformanceController.getPerformances);
router.get("/performance/:id", circusPerformanceController.getPerformanceById);
router.delete(
  "/performance/:id",
  circusPerformanceController.deletePerformance
);
router.patch("/performance/:id", circusPerformanceController.updatePerformance);

router.post("/prices_and_booking", circusBookingController.createBooking);
router.get("/prices_and_booking", circusBookingController.getBookings);
router.get("/prices_and_booking/:id", circusBookingController.getBookingById);
router.delete("/prices_and_booking/:id", circusBookingController.deleteBooking);
router.patch("/prices_and_booking/:id", circusBookingController.updateBooking);

module.exports = router;
