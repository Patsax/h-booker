const mongoose = require('mongoose');

var mongoURL = 'mongodb+srv://Patrick-Admin:Good%40eats1234@cluster0.sscut.mongodb.net/hbooker-rooms';

mongoose.connect(mongoURL, {useUnifiedTopology: true, useNewUrlParser: true});

var connection = mongoose.connection

connection.on('error', () => {
    console.log('MongoDB connection failed')
});

connection.on('connected', () => {
    console.log('MongoDB connection successful')
});

module.exports = mongoose;
