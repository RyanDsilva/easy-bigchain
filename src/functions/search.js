module.exports = function(connection, type, text, callback) {
  if (type == 'asset') {
    connection.searchAssets(text).then(results => {
      callback(results)
    })
  } else if (type == 'meta') {
    connection.searchMetadata(text).then(results => {
      callback(results)
    })
  } else {
    return new Error('Invalid Search!')
  }
}
