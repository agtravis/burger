'use strict';

const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

router.get('/', (req, res) => {
  burger.selectAll(async function(data) {
    const allBurgersObj = {
      burgers: data
    };
    const skipWordsArr = ['double', 'triple', 'extra', 'large', 'big', 'the'];
    for (const burger of allBurgersObj.burgers) {
      const asArr = burger.burger_name.split(' ');
      let firstWord = asArr[0];
      if (skipWordsArr.includes(firstWord.toLowerCase())) {
        firstWord = asArr[1];
      }
      burger.firstWord = firstWord.toLowerCase();
    }
    res.render('index', allBurgersObj);
  });
});

router.put('/api/burgers/:id', (req, res) => {
  const id = req.params.id;
  let status;
  if (req.body.devoured === 'true') {
    status = false;
  } else {
    status = true;
  }
  burger.updateOne('devoured', status, 'id', id, function(result) {
    if (result.changedRows === 0) {
      res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.post('/api/burgers/', (req, res) => {
  burger.insertOne('burger_name', req.body.name, function(result) {
    res.json({ id: result.insertId });
  });
});

router.delete('/api/burgers/:id', (req, res) => {
  const id = req.params.id;
  burger.deleteOne('id', id, function(result) {
    if (result.affectedRows === 0) {
      res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete('/api/burgers/', (req, res) => {
  burger.deleteOne('devoured', 1, function(result) {
    if (result.affectedRows === 0) {
      res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
