const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kewink93@gmail.com',
        pass: 'pmyyozvvvwiapbui'
    },
    tls: {
        rejectUnauthorized: false
    }
})

module.exports = transporter;