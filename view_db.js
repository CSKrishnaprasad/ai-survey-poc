require('dotenv').config();
const mongoose = require('mongoose');
const Lead = require('./models/Lead');
const SurveyLog = require('./models/SurveyLog');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB...");
    } catch (error) {
        console.error("Connection Error:", error);
        process.exit(1);
    }
};

const viewData = async () => {
    await connectDB();

    console.log("\n--- RECENT LEADS (Last 5) ---");
    const leads = await Lead.find().sort({ timestamp: -1 }).limit(5);
    if (leads.length === 0) console.log("No leads found.");
    leads.forEach(l => {
        console.log(`[${l.timestamp.toISOString()}] ${l.name || 'Anonymous'} (${l.email})`);
        if (l.type === 'booking') {
            console.log(`   Appointment: ${l.bookingDate} at ${l.bookingTime} (${l.phone})`);
        }
    });

    console.log("\n--- RECENT SURVEY LOGS (Last 3) ---");
    const logs = await SurveyLog.find().sort({ timestamp: -1 }).limit(3);
    if (logs.length === 0) console.log("No survey logs found.");
    logs.forEach(l => {
        console.log(`\nID: ${l._id}`);
        console.log(`Date: ${l.timestamp}`);
        console.log(`Classification: ${l.classification} (Score: ${l.score})`);
        console.log(`Answers Summary: ${Object.keys(l.survey_answers || {}).length} questions answered`);
        console.log(`Report Snippet: ${(l.generated_report || "").substring(0, 100)}...`);
    });

    console.log("\nDone.");
    process.exit(0);
};

viewData();
