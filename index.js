const connect = require('./src/functions/connect')
const keypair = require('./src/functions/keypair')
const create = require('./src/functions/create')
const transfer = require('./src/functions/transfer')
const search = require('./src/functions/search')

module.exports = {
  connect: connect,
  generateKeypair: keypair,
  createAsset: create,
  transferAsset: transfer,
  search: search
}
