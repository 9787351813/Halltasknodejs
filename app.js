// import express
const express = require('express');
const roomRouter = require('./routes/roomRoutes');
const bookingRouter = require('./routes/bookingRoutes');

// create an express app
const app = express();

app.use(express.json());

app.use('/rooms', roomRouter);
app.use('/bookings', bookingRouter);
// export the app
module.exports = app;