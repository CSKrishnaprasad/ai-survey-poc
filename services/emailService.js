const { Resend } = require('resend');

// Initialize Resend with API Key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Sends the vehicle report email using Resend API
 * @param {string} toEmail 
 * @param {string} name 
 * @param {string} reportContent 
 */
const sendReportEmail = async (toEmail, name, reportContent) => {
    try {
        if (!process.env.RESEND_API_KEY) {
            console.warn("Skipping email: RESEND_API_KEY not set.");
            return false;
        }

        console.log(`Sending email via Resend to ${toEmail}...`);

        const { data, error } = await resend.emails.send({
            from: 'Autobacs India AI <onboarding@resend.dev>', // Using testing domain for reliability
            to: [toEmail],
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
        });

        if (error) {
            console.error("Resend API Error:", error);
            return false;
        }

        console.log("Email sent successfully via Resend. ID:", data.id);
        return true;

    } catch (error) {
        console.error("Error sending email via Resend:", error);
        return false;
    }
};

module.exports = { sendReportEmail };
