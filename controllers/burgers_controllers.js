'use strict';

const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

router.get('/', (req, res) => {
  burger.selectAll(function(data) {
    const allBurgersObj = {
      burgers: data
    };
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

module.exports = router;
