// Requires:
const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const nodeMailerController = require('../controllers/nodeMailerController');

// Routes:

// Home:
router.get('/', mainController.home);

//Cotizador
router.get('/cotizador', mainController.cotizador);

// NodeMailer API:
router.post('/', nodeMailerController.sendEmail);

module.exports = router;
