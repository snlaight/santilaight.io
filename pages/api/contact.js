let nodemailer = require('nodemailer');

const contactMe = (req, res)=>{
    console.log(req.body)
    const transporter = nodemailer.createTransport({
        service:"gmail",
        host:"smpt.gmail.com",
        port:465,
        secure:true,
        auth: {
            user:"emailsantilaight@gmail.com",
            pass:'superSecurePassword123'
        },

    })
    const emailInfo = {
        from :"emailsantilaight@gmail.com",
        to:'snlaight10@gmail.com',
        subject:`Message from ${req.body.name}`,
        text:`${req.body.message}. 
        Please reply to ${req.body.email}, 
        Location: ${req.body.location}`,
       
    }

   return transporter.sendMail(emailInfo, ((err,info)=>{
        if(err)
        console.log(err)
        else
        console.log(info)
    }))
}

export default contactMe;