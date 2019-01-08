module.exports = function(connection, type, text) {
  if (type == 'asset') {
    connection.searchAssets(text).then(results => {
      return results
    })
  } else if (type == 'meta') {
    connection.searchMetadata(text).then(results => {
      return results
    })
  } else {
    return new Error('Invalid Search!')
  }
}
