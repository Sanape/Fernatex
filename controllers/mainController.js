// Requires:
const express = require('express');

// Controller:
const mainController = {
  home: (req, res) => {
    return res.render('home');
  },

  cotizador: (req, res) => {
    return res.render('cotizador');
  },
};

module.exports = mainController;
