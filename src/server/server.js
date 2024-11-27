import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: 'http://localhost:5173', // Frontend URL
    methods: ['GET', 'POST'],        // Allowed HTTP methods
}));
app.use(bodyParser.json());          // Parse JSON bodies

// POST route to handle form submission
app.post('/send', async (req, res) => {
    const { name, email, subject, message } = req.body;

    // Validate request body
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
        // Set up Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,          // Your email
                pass: process.env.EMAIL_PASSWORD // Your email password or app password
            },
            debug: true,                         // Enable debugging logs
            logger: true,                        // Enable detailed logs
        });

        // Email options
        const mailOptions = {
            from: email,                         // Sender email
            to: process.env.EMAIL,              // Recipient email (your email)
            subject: `[Contact Form]: ${subject}`, // Email subject
            text: `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`, // Email body
        };

        // Send the email
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully!');
        res.status(200).json({ message: 'Email sent successfully!' });

    } catch (error) {
        console.error('Error sending email:', error.message, error.stack);
        res.status(500).json({ error: 'Failed to send email.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
