'use strict';

const orm = require('../config/orm');

const burger = {
  selectAll: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res);
    });
  },
  insertOne: function(colName, val, cb) {
    orm.insertOne('burgers', colName, val, function(res) {
      cb(res);
    });
  },
  updateOne: function(colToUpdate, newVal, conditionCol, conditionVal) {
    orm.updateOne(
      'cats',
      colToUpdate,
      newVal,
      conditionCol,
      conditionVal,
      function(res) {
        cb(res);
      }
    );
  },
  deleteOne: function(colName, colVal, cb) {
    orm.deleteOne('cats', colName, colVal, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
