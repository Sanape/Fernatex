// Requires:
const express = require('express');
const nodemailer = require('nodemailer');

// Controller:
const nodeMailerController = {
  sendEmail: (req, res) => {
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      post: 587,
      secure: false,
      auth: {
        user: 'orrin.conn20@ethereal.email',
        pass: '7MD6cBgEn1z7YDhsW6',
      },
    });
    const mailOptions = {
      from: 'info@fernatex.com.ar', //Capturar email del input
      //from: `${req.body.email}`,
      //to: 'info@fernatex.com.ar',
      //to: 'sanape.sa@gmail.com',
      to: `${req.body.email}`,
      subject: 'Deseo recibir las ultimas novedades de Fernatex!',
      text: '',
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.status(500).send(error.message);
      } else {
        console.log('Email Enviado: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.status(200).send(info);
      }
      transporter.close();
    });
  },
};

module.exports = nodeMailerController;
