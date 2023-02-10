var mysql = require('mysql');
const config = require('../config');

var db = require('mysql2-promise')();

const query = async (sql, params, debug = false) => {

  if(debug){
    console.log(sql, params)
  }

  await db.configure(config.db);
  const results = await db.query(sql).spread(function (data) {
    return data
  });

  return results;
}

const exec = async (sql, params, debug = false) => {

  if(debug){
    console.log(sql, params)
  }

  await db.configure(config.db);
  const results = await db.execute(sql, params).spread(function (data) {
    return data
  });

  return results;
}

module.exports = {
  query,
  exec
}