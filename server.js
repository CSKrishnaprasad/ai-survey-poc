require('dotenv').config();
const express = require('express');
const { OpenAI } = require('openai');
const path = require('path');
const mongoose = require('mongoose');

// Import Models
const Lead = require('./models/Lead');
const SurveyLog = require('./models/SurveyLog');
const { sendReportEmail } = require('./services/emailService');

const app = express();
const port = process.env.PORT || 3000;

// Initialize OpenAI
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// Helper: Connect to MongoDB
// In production, this should likely be called at startup. 
// For this POC, we'll ensure it's connected or connect on demand, but connecting on startup is standard.
const connectDB = async () => {
    if (mongoose.connection.readyState === 0) {
        try {
            await mongoose.connect(process.env.MONGO_URI);
            console.log("MongoDB Connected");
        } catch (error) {
            console.error("MongoDB Connection Error:", error);
        }
    }
};

// Connect immediately on start
if (process.env.MONGO_URI) {
    connectDB();
} else {
    console.log("Skipping MongoDB connection on startup (MONGO_URI not set yet).");
}

app.use(express.static('.'));
app.use(express.json());

app.post('/api/analyze', async (req, res) => {
    const data = req.body;
    console.log("Received survey data:", data);

    try {
        await connectDB(); // Ensure connection

        const prompt = `
You are a Senior Automotive Diagnostics Expert & Upgrade Consultant at Autobacs India.
Your task is to analyse vehicle behaviour survey answers and generate a diagnostic pre-inspection evaluation report along with a strictly accurate lead classification.

The output must feel like a real automotive assessment prepared after analysing user behaviour — not marketing content and not assumptions.

OUTPUT GOAL
Produce a clear, structured, text-only document report suitable for PDF/Google Docs.
Use NO markdown characters (# * > etc).
CRITICAL: DO NOT use double quotes (") inside the text content. Use single quotes (') instead if needed.
CRITICAL: DO NOT include any visual bars, progress bars, ASCII art, or "visual representations" of the score. The score is strictly numeric.
Minimum length: 350 words.
Tone: Indian English — professional, diagnostic, confident, encouraging, never judgemental.

INTERNAL SCORING LOGIC (MANDATORY & STRICT)
Calculate the following three internal scores (0–10 each). DO NOT display raw numbers — only use them internally.

1. Maintenance Awareness (0–10)
- Score LOW (0–3) if: Frequent "never", "rarely", "don’t know", reactive servicing only.
- Score MEDIUM (4–6) if: Occasional checks, aware but inconsistent.
- Score HIGH (7–10) if: Regular checks, proactive ownership.

2. Condition Signals (0–10)
- Score based on symptoms ONLY.
- LOW (0–3): No discomfort/noise.
- MEDIUM (4–6): Mild bounce, stiffness, noise.
- HIGH (7–10): Multiple symptoms, "bad", "needs refresh", "unsafe", "uncomfortable".
*IMPORTANT: Condition Signals reflect vehicle condition only — NOT buying intent.*

3. Upgrade Intent (0–10)
- Score ONLY from explicit intent signals.
- LOW (0–3): "Just checking", "No plans", cost-avoidant.
- MEDIUM (4–6): Curious but hesitant, mentions performance without urgency.
- HIGH (7–10): Clearly states interest, mentions dissatisfaction/desire to improve.
*CRITICAL RULE: DO NOT increase Upgrade Intent just because problems exist.*

LEAD CLASSIFICATION (NON-NEGOTIABLE)
Compute: total_score = Maintenance Awareness + Condition Signals + Upgrade Intent
overall_score = round((total_score / 30) × 100)

Classify strictly as:
- HOT LEAD (80–100): Clear vehicle issues AND clear intent to upgrade.
- WARM LEAD (50–79): Vehicle issues present but intent unclear/cautious.
- COLD LEAD (0–49): Low intent OR good condition with no urgency.
*HARD RULE: High Condition Signals + Low Upgrade Intent MUST NOT be classified as HOT.*

REQUIRED REPORT STRUCTURE (USE EXACTLY in "full_report_content")
AUTOBACS INDIA — VEHICLE & DRIVER CONDITION REPORT

Date: ${new Date().toLocaleString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true })}
Overall Vehicle Improvement Score: <overall_score>/100 (NUMERIC ONLY)

SECTION 1: EXECUTIVE SUMMARY
(Detailed professional summary...)

SECTION 2: MAINTENANCE AWARENESS
(Diagnostic analysis...)

SECTION 3: VEHICLE CLASSIFICATION & CONDITION
(Detailed breakdown of symptoms and state...)

SECTION 4: UPGRADE POTENTIAL & INTENT
(Analysis of their desire to improve...)

SECTION 5: FINAL ADVISORY & RECCOMENDATIONS
(Expert advice...)

------------------------------------------
STRICT OUTPUT FORMAT (JSON ONLY)
------------------------------------------
You must return only valid JSON. Do not wrap in markdown code blocks.

Structure the JSON response based on the classification rules above.

IF CLASSIFICATION = "Cold Lead":
- summary: A short text summary (from Section 5).
- score: <overall_score>
- links: Include links to "https://autobacsindia.com/", instagram "https://instagram.com/autobacsindia", youtube "https://www.youtube.com/@autobacsindia".
- downloadOption: false
- callOption: false
- full_report_content: The full 350+ word text report as defined above.

IF CLASSIFICATION = "Hot Lead" OR "Warm Lead":
- summary: A brief teaser context (e.g., "Your car has significant potential for improvement...").
- score: <overall_score>
- links: {} (empty or null)
- downloadOption: true
- callOption: true
- userDataRequest: { "name": true, "email": true, "phone": true }
- booking: { "date": null, "time": null }
- full_report_content: The full 350+ word text report as defined above.

Example structure:
{
  "classification": "Hot Lead",
  "summary": "We identified critical areas for improvement...",
  "score": 65,
  "links": { ... },
  "downloadOption": true,
  "callOption": true,
  "full_report_content": "AUTOBACS INDIA REPORT..."
}

Here is the survey data:
${JSON.stringify(data, null, 2)}
`;


        const completion = await openai.chat.completions.create({
            messages: [{ role: "user", content: prompt }],
            model: "gpt-4o",
        });

        const text = completion.choices[0].message.content;

        let jsonResponse;
        try {
            // Clean up any potential markdown formatting
            const cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();
            jsonResponse = JSON.parse(cleanText);
        } catch (e) {
            console.error("Failed to parse AI JSON:", text);
            // Fallback for demo
            jsonResponse = {
                classification: "Warm Lead",
                summary: "We analyzed your survey. Please contact us for details.",
                score: 50,
                links: {},
                downloadOption: false,
                callOption: false,
                full_report_content: "Error parsing report."
            };
        }

        // Force update the date to current server time to avoid AI hallucinations
        const realDate = new Date().toLocaleString('en-IN', {
            day: 'numeric', month: 'long', year: 'numeric',
            hour: '2-digit', minute: '2-digit', hour12: true
        });

        if (jsonResponse && jsonResponse.full_report_content) {
            jsonResponse.full_report_content = jsonResponse.full_report_content.replace(
                /Date: .*/i,
                `Date: ${realDate}`
            );
        }

        console.log("AI Response JSON:", jsonResponse);

        // --- LOG LOGIC START (MONGODB) ---
        try {
            const logEntry = new SurveyLog({
                classification: jsonResponse.classification,
                score: jsonResponse.score,
                survey_answers: data,
                generated_report: jsonResponse.full_report_content
            });
            await logEntry.save();
            console.log("Survey logged successfully to MongoDB");
        } catch (dbError) {
            console.error("Error saving survey log to MongoDB:", dbError);
        }
        // --- LOG LOGIC END ---

        res.json(jsonResponse);

    } catch (error) {
        console.error("AI Error:", error);

        res.status(500).json({
            briefing: "We couldn't generate a custom briefing right now. Please drive safely and check your vehicle manual!"
        });
    }
});

app.post('/api/save-lead', async (req, res) => {
    const leadData = req.body;

    // Add timestamp
    leadData.timestamp = new Date();

    try {
        await connectDB(); // Ensure connection
        const newLead = new Lead(leadData);
        await newLead.save();
        console.log("Lead saved to MongoDB:", leadData.email);

        // Send Email if report content exists
        if (leadData.reportContent && leadData.email) {
            console.log(`Sending email to ${leadData.email}...`);
            // Fire and forget (don't await to avoid blocking response)
            sendReportEmail(leadData.email, leadData.name, leadData.reportContent)
                .then(success => {
                    if (success) console.log("Email sent successfully.");
                    else console.log("Email failed to send.");
                });
        }

        res.json({ success: true });
    } catch (err) {
        console.error("Error saving lead to MongoDB:", err);
        res.status(500).json({ error: "Failed to save lead" });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
