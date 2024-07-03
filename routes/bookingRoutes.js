// routes/bookingRoutes.js
const express = require('express');
const { createBooking, getAllBookingsWithRoomDetails,  getAllCustomersWithBookingDetails,  getCustomerBookings   } = require('../controllers/bookingController');



const bookingRouter = express.Router();

bookingRouter.post('/', createBooking);
bookingRouter.get('/', getAllBookingsWithRoomDetails);
bookingRouter.get('/customers', getAllCustomersWithBookingDetails);
bookingRouter.get('/customer-bookings', getCustomerBookings);



module.exports = bookingRouter;
