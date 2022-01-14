const express = require('express');
const path = require('path');
const db = require('./db');

const roomsRoute = require('./routes/roomsRoute');
const userRoute = require('./routes/userRoute');
const bookingsRoute=require('./routes/bookingsRoute');

const app = express();

app.use(express.json());

app.use('/api/rooms', roomsRoute);
app.use('/api/users' , userRoute);
app.use('/api/bookings' , bookingsRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port} using nodemon`));
