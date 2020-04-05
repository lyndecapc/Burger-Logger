// Here is the O.R.M. where you write functions that takes inputs and conditions
// and turns them into database commands like SQL.

var connection = require("./connection.js");

var orm = {
  selectAll: function(table, cb) {
    var dbQuery = "SELECT * FROM " + table + ";";

    connection.query(dbQuery, function(err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
  insertOne: function(table, cols, vals, cb) {
    var dbQuery =
      "INSERT INTO " +
      table +
      " (" +
      "VALUES (" +
      printQuestionMarks(vals.length) +
      ") ";

    console.log(dbQuery);
    connection.query(dbQuery, vals, function(err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
  updateOne: function(table, objColVals, condition, cb) {
    var dbQuery =
      "UPDATE " +
      table +
      " SET " +
      objToSql(objColVals) +
      " WHERE " +
      condition;

    console.log(dbQuery);
  }
}

module.exports = orm;
