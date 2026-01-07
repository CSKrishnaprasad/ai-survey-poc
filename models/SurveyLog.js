const mongoose = require('mongoose');

const surveyLogSchema = new mongoose.Schema({
    timestamp: {
        type: Date,
        default: Date.now
    },
    classification: {
        type: String,
        required: false
    },
    score: {
        type: Number,
        required: false
    },
    survey_answers: {
        type: Object, // Store the raw JSON answers
        required: true
    },
    generated_report: {
        type: String,
        required: false
    }
}, { collection: 'survey_responses' });

module.exports = mongoose.model('SurveyLog', surveyLogSchema);
