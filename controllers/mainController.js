// Requires:
const express = require('express')


// Controller:
const mainController = {

    home: (req, res) => {
        return res.render('home')
    },
    
    sobre: (req, res) => {
        return res.render('sobre')
    },
    
    news: (req, res) => {
        return res.render('news')
      },

    blo: (req, res) => {
        return res.render('blo')
    },
    cotizador: (req, res) => {
      return res.render('cotizador')
    }
}


module.exports = mainController
