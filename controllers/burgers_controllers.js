'use strict';

const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

router.get('/', (req, res) => {
  burger.selectAll(function(data) {
    console.log(data);
    const allBurgersObj = {
      burgers: data
    };
    console.log(allBurgersObj);
    res.render('index', allBurgersObj);
  });
});

router.put('/api/burgers/:id', (req, res) => {
  const id = req.params.id;
  console.log(req.body);
});

// colToUpdate, newVal, conditionCol, conditionVal

// router.put('/api/cats/:id', (req, res) => {
//     const condition = 'id = ' + req.params.id;

//     console.log('condition', condition);

//     cat.update(
//       {
//         sleepy: req.body.sleepy
//       },
//       condition,
//       function(result) {
//         if (result.changedRows == 0) {
//           // If no rows were changed, then the ID must not exist, so 404
//           return res.status(404).end();
//         } else {
//           res.status(200).end();
//         }
//       }
//     );
//   });

module.exports = router;
