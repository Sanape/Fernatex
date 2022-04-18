// Requires:
const express = require('express')
const nodemailer = require('nodemailer')


// Controller:
const nodeMailerController ={

    sendEmail: (req, res) => {
        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            post: 587,
            secure: false,
            auth: {
                user: "orrin.conn20@ethereal.email",
                pass: "7MD6cBgEn1z7YDhsW6"
            }
        })
        const mailOptions = {
            from: "Remitente", //Capturar email del input
            to: "lauutarolfs@gmail.com",
            subject: "Enviado desde NodeMailer",
            text: "Hola mundo!"
        }

        transporter.sendMail(mailOptions, (error, info) =>{
            if(error){
                res.status(500).send(error.message)
            } else {
                console.log('Email Enviado')
                res.status(200).jsonp(req.body)
            }
        })
    }
}
                
        

module.exports = nodeMailerController