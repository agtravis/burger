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

// cat.update(
//   {
//     sleepy: req.body.sleepy
//   },
//   condition,
//   function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   }
// );

module.exports = router;
