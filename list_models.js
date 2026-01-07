require('dotenv').config();

async function main() {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
        console.log("No GEMINI_API_KEY found in .env");
        return;
    }

    console.log("Querying models with key: " + key.substring(0, 5) + "...");

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${key}`);
        const data = await response.json();

        if (data.error) {
            console.error("API Error:", data.error);
        } else if (data.models) {
            console.log("Available Models:");
            data.models.forEach(m => {
                if (m.supportedGenerationMethods.includes('generateContent')) {
                    console.log(`- ${m.name} (${m.displayName})`);
                }
            });
        } else {
            console.log("No models returned or unexpected format:", data);
        }
    } catch (err) {
        console.error("Fetch error:", err);
    }
}

main();
