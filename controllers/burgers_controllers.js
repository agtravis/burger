'use strict';

const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

router.get('/', (req, res) => {
  burger.selectAll(function(data) {
    const allBurgersObj = {
      burgers: data
    };
    console.log(allBurgersObj);
    res.render('index', allBurgersObj);
  });
});

module.exports = router;
