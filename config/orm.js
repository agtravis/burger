'use strict';

const connectionJS = require('./connection');

const connection = connectionJS.connection;

const orm = {
  selectAll: function(table, cb) {
    const query = `Select * FROM ??;`;
    connection.query(query, [table], (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },
  insertOne: function(table, colName, val, cb) {
    const query = `INSERT INTO ?? (??) VALUES (?);`;
    connection.query(query, [table, colName, val], (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },
  updateOne: function(
    table,
    colToUpdate,
    newVal,
    conditionCol,
    conditionVal,
    cb
  ) {
    const query = `UPDATE ?? SET ?? = ? WHERE ?? = ?;`;
    connection.query(
      query,
      [table, colToUpdate, newVal, conditionCol, conditionVal],
      (err, res) => {
        if (err) throw err;
        cb(res);
      }
    );
  },
  deleteOne: function(table, colName, colVal, cb) {
    const query = `DELETE FROM ?? WHERE ?? = ?;`;
    connection.query(query, [table, colName, colVal], (err, res) => {
      if (err) throw err;
      cb(res);
    });
  }
};

module.exports = orm;
