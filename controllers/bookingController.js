// controllers/bookingController.js
// controllers/bookingController.js
const Booking = require('../models/booking');

const createBooking = async (req, res) => {
    try {
        const booking = new Booking(req.body);
        await booking.save();
        res.status(201).send(booking);
    } catch (error) {
        res.status(400).send(error);
    }
};

const getAllBookingsWithRoomDetails = async (req, res) => {
    try {
        console.log('Fetching all bookings with room details');
        const bookings = await Booking.find().populate('room').exec();
        
        const bookingDetails = bookings.map(booking => ({
            roomName: booking.room.name,
            bookedStatus: booking.status,
            customerName: booking.customer,
            date: booking.date,
            startTime: booking.startTime,
            endTime: booking.endTime
        }));

        res.status(200).json(bookingDetails);
    } catch (error) {
        console.error('Error fetching booking details:', error);
        res.status(500).json({ error: 'An error occurred while fetching booking details.' });
    }
};
    
const getAllCustomersWithBookingDetails = async (req, res) => {
    try {
        const bookings = await Booking.find().populate('room').exec();
        
        const customerDetails = bookings.map(booking => ({
            customerName: booking.customer,
            roomName: booking.room.name,
            date: booking.date,
            startTime: booking.startTime,
            endTime: booking.endTime
        }));

        res.status(200).json(customerDetails);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching customer details.' });
    }
};

const getCustomerBookings = async (req, res) => {
    try {
        const bookings = await Booking.find().populate('room').exec();
        
        const customerBookings = bookings.map(booking => ({
            customerName: booking.customer,
            roomName: booking.room.name,
            date: booking.date,
            startTime: booking.startTime,
            endTime: booking.endTime,
            bookingId: booking._id,
            bookingDate: booking.createdAt,
            bookingStatus: booking.status
        }));

        res.status(200).json(customerBookings);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching booking details.' });
    }
};
module.exports = { createBooking, getAllBookingsWithRoomDetails, getAllCustomersWithBookingDetails,  getCustomerBookings  };
