const driver = require('bigchaindb-driver')

module.exports = function(API_PATH = 'https://test.bigchaindb.com/api/v1/') {
  return new driver.Connection(API_PATH)
}
