const express = require('express');
const path = require('path');
const db = require('./db');

const bookingsRoute=require('./routes/bookingsRoute');
const roomsRoute = require('./routes/roomsRoute');
const userRoute = require('./routes/userRoute');

const app = express();

app.use(express.json());

app.use('/api/rooms', roomsRoute);
app.use('/api/users' , userRoute);
app.use('/api/bookings' , bookingsRoute);

if(process.env.NODE_ENV ==='production')
{
    app.use('/' , express.static('client/build'))

    app.get('*' , (req , res)=>{

        res.sendFile(path.resolve(__dirname  , 'client/build/index.html'))

    })
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port} using nodemon`));
