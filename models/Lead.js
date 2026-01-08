const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: false,
        trim: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    source: {
        type: String,
        default: 'web_survey'
    },
    type: {
        type: String, // 'booking' or 'download'
        required: false
    },
    bookingDate: {
        type: String,
        required: false
    },
    bookingTime: {
        type: String,
        required: false
    },
    feedback: {
        type: String,
        required: false
    },
    classification: { type: String, required: false },
    score: { type: Number, required: false },
    reportContent: { type: String, required: false }
});

module.exports = mongoose.model('Lead', leadSchema);
