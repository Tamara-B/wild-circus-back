const circusBookingService = require("../services/circusBooking.services.jsx");

const createBooking = async (req, res, next) => {
  console.log("req", req.body);
  try {
    const booking = await circusBookingService.createBooking({
      bookerName: req.body.bookerName,
      bookerEmail: req.body.bookerEmail,
      bookerAdultNumber: req.body.bookerAdultNumber,
      bookerChildAboveNumber: req.body.bookerChildAboveNumber,
      bookerChildBelowNumber: req.body.bookerChildBelowNumber,
      bookerSchool: req.body.bookerSchool,
      bookerNote: req.body.bookerNote,
    });
    res.status(200).json({ result: booking });
  } catch (err) {
    next(err);
  }
};

const getBookings = async (req, res, next) => {
  try {
    const bookings = await circusBookingService.getBookings();
    res.status(200).json({ result: bookings });
  } catch (err) {
    next(err);
  }
};

const getBookingById = async (req, res, next) => {
  try {
    const booking = await circusBookingService.getBookingById(req.params.id);
    res.status(200).json({ result: booking });
  } catch (err) {
    next(err);
  }
};

const deleteBooking = async (req, res, next) => {
  try {
    const booking = await circusBookingService.deleteBooking(req.params.id);
    res.status(200).json({ result: "done", deletedBooking: booking });
  } catch (err) {
    next(err);
  }
};

const updateBooking = async (req, res, next) => {
  try {
    const booking = await circusBookingService.updateBooking(
      req.params.id,
      req.body
    );
    res.status(200).json({ result: "done", updatedBooking: booking });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createBooking,
  getBookings,
  getBookingById,
  deleteBooking,
  updateBooking,
};
