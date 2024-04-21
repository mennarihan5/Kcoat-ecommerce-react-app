const nodemailer = require('nodemailer');

const mailsender = async (email, title, body) => {
    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth:{
                user: 'pris@gmail.com', 
                pass: 'password',
            },
        });
        let info = await transporter.sendMail({
            from: 'pris@gmail.com',
            to: email,
            subject: title,
            text: body,   
        });

        console.log("Email info:", info);
        return info;
    } catch (error){
        console.log(error.message);
    }
};

module.exports = mailsender;