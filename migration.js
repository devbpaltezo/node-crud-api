var mysql = require('mysql');
var migration = require('mysql-migrations');

var config = require("./config");

var connection = mysql.createPool({
  connectionLimit : 10,
  ...config.db
});

migration.init(connection, __dirname + '/migrations');