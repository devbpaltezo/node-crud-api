const bcrypt = require('bcrypt');

function getOffset(currentPage = 1, listPerPage) {
  return (currentPage - 1) * [listPerPage];
}
  
function emptyOrRows(rows) {
  if (!rows) {
    return [];
  }
  return rows;
}
  
function camelToUnderscore(key) {
  var result = key.replace( /([A-Z])/g, " $1" );
  return result.split(' ').join('_').toLowerCase();
}

function createHash (value) {

  const saltRounds = 10;

  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(value, salt);

  return hash;
}

function compareHash (password, hash) {
  return bcrypt.compareSync(password, hash);
}

module.exports = {
  getOffset,
  emptyOrRows,
  camelToUnderscore,
  createHash,
  compareHash
}