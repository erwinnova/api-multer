const db = require('../database');
const transporter = require('../helper/nodemailer');

module.exports = {
    sendEmail : (req,res) => {
        let mailOptions = {
            from : 'Admin <tes@gmail.com>',
            to : 'kewink93@gmail.com',
            subject : 'Confirmation Email',
            html : '<h3>Halo</h3>'
        }
        transporter.sendMail(mailOptions, (err,res2) => {
            if(err){
                console.log(err)
                return res.status(500).send({ message : err })
            }
            console.log('success')
            return res.status(200).send({ message : 'Success'})
        })
    }
}