const CircusBookingSchema = require("../models/circusBooking.model.jsx");

const createBooking = async (reqBody) => {
  const booking = await CircusBookingSchema.create(reqBody);
  return booking;
};

const getBookings = async () => {
  const bookings = await CircusBookingSchema.find();
  return bookings;
};

const getBookingById = async (bookingId) => {
  const booking = await CircusBookingSchema.findById(bookingId);
  if (!booking) {
    throw new Error("Not found");
  }
  return booking;
};

const deleteBooking = async (bookingId) => {
  const booking = await getBookingById(bookingId);
  await booking.remove();
  return booking;
};

const updateBooking = async (bookingId, updateParam) => {
  const booking = await getBookingById(bookingId);
  Object.assign(booking, updateParam);
  booking.save();
  return booking;
};

module.exports = {
  createBooking,
  getBookings,
  getBookingById,
  deleteBooking,
  updateBooking,
};
