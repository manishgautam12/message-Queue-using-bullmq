import { Queue } from "bullmq";
import { emailTemplates } from "./emailTemplates/template.js";

const emailQueue = new Queue("email-queue", {
    connection: {
        host: "localhost", // or "127.0.0.1"
        port: 6379
    }
});

(async function () {
const templateName = "Booking cancellation"; // Change to the desired template name
const emailTemplate = emailTemplates.find(template => template.name === templateName);
// Check if the template is found
if (!emailTemplate) {
    return res.status(500).json({ error: 'Email template not found' });
}
const personalizedEmail = emailTemplate.html.replace('[Recipient Name]', 'John Doe'); // Replace with actual recipient name
    const res = await emailQueue.add("email to manish", {
        email: "mentalengineer01@gmail.com",
        subject: emailTemplate.subject,
        html: personalizedEmail
    });
    console.log("Job added to queue", res.id);
})();






