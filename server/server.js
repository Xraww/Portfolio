const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
    }
});

app.post('/send-email', (req, res) => {
    const { email, message } = req.body;

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Message from Contact Form',
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error sending email.');
        }
        res.status(200).send('Email sent successfully.');
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
