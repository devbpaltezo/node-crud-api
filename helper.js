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

  module.exports = {
    getOffset,
    emptyOrRows,
    camelToUnderscore
  }