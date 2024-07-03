// import mongoose
const mongoose = require('mongoose');
 // Ensure this matches the port you're trying to connect to

// import the MONGODB_URI from the config file
const { MONGODB_URI, PORT } = require('./utils/config');

// import the app
const app = require('./app');
const port = process.env.PORT || 3001;
app.get('/',(request, response)=> {
    response.send('server is running')
})
console.log('Connecting to MongoDB...');

// connect to the database
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');

        // start the server
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${port}`);
        })
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB', err.message);
    });