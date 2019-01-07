const driver = require('bigchaindb-driver')
const bip39 = require('bip39')

module.exports = function(SECRET = '') {
  return driver.Ed25519Keypair(bip39.mnemonicToSeed(SECRET).slice(0, 32))
}
