const nodemailer = require('nodemailer');

module.exports = { mailsender: async (email, title, body) => {
    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth:{
                user: 'bertleyprisy@gmail.com', 
                pass: 'rlbhnqoqtrqxqexf',
            },
        });
        let info = await transporter.sendMail({
            from: 'bertleyprisy@gmail.com',
            to: email,
            subject: title,
            text: body,   
        });

        console.log("Email info:", info);
        return info;
    } catch (error){
        console.log(error.message);
    }
}

};

};

