const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    lat: {
        type: Number,
        required: true
    },
    long: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('Location', locationSchema);
