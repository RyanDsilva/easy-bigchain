const connect = require('./src/functions/connect')
const keypair = require('./src/functions/keypair')
const create = require('./src/functions/create')
const transfer = require('./src/functions/transfer')

module.exports = {
  connect: connect,
  generateKeypair: keypair,
  createAsset: create,
  transferAsset: transfer
}
