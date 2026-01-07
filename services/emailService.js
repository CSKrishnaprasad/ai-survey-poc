const nodemailer = require('nodemailer');

// 1. Create Transporter
// using Gmail for this POC. 
// Requires "App Password" if 2FA is on, or "Less Secure Apps" (deprecated)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // e.g., 'yourname@gmail.com'
        pass: process.env.EMAIL_PASS  // e.g., 'xxxx xxxx xxxx xxxx'
    }
});

/**
 * Sends the vehicle report email
 * @param {string} toEmail 
 * @param {string} name 
 * @param {string} reportContent 
 */
const sendReportEmail = async (toEmail, name, reportContent) => {
    try {
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.warn("Skipping email: EMAIL_USER or EMAIL_PASS not set.");
            return;
        }

        const mailOptions = {
            from: `"Autobacs India AI" <${process.env.EMAIL_USER}>`,
            to: toEmail,
            subject: 'Your Autobacs Vehicle Diagnostics Report',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #FF5F00;">Vehicle & Driver Condition Report</h2>
                    <p>Hello ${name || 'Driver'},</p>
                    <p>Thank you for completing the Autobacs AI Diagnostics Survey.</p>
                    <p>Please find your detailed report below:</p>
                    <hr style="border: 1px solid #eee; margin: 20px 0;">
                    <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">
                        ${reportContent}
                    </div>
                    <hr style="border: 1px solid #eee; margin: 20px 0;">
                    <p>Ready to upgrade? <a href="https://autobacsindia.com" style="color: #007bff;">Visit Autobacs India</a></p>
                </div>
            `
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent: " + info.response);
        return true;

    } catch (error) {
        console.error("Error sending email:", error);
        return false;
    }
};

module.exports = { sendReportEmail };
