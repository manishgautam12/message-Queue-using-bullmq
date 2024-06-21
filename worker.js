import { Worker } from "bullmq";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    port: 465,
    auth: {
        user: "manish.aith12@gmail.com",
        pass: "arlahwtwismiipvm"
    }
});

const worker = new Worker("email-queue", async (job) => {
    console.log(`Message received id: ${job.id}`);
    console.log("Processing message");
    console.log(`Sending email to ${job.data.email}`);
    // Email options
    const mailOptions = {
        from: "manish.aith12@gmail.com",
        to: job.data.email,
        subject: job.data.subject,
        html: job.data.html,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Error occurred while sending email:", error);
        } else {
            console.log("Email sent successfully:", info.response);
        }
    });
},{
    connection: {
        host: "localhost", // or "127.0.0.1"
        port: 6379
    },
    removeOnComplete: { count: 1000 },
    removeOnFail: { count: 0 }
}
);