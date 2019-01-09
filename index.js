let bigchain = exports

const connect = require('./src/functions/connect')
const keypair = require('./src/functions/keypair')
const create = require('./src/functions/create')
const transfer = require('./src/functions/transfer')
const search = require('./src/functions/search')

bigchain.connect = connect
bigchain.generateKeypair = keypair
bigchain.createAsset = create
bigchain.transferAsset = transfer
bigchain.search = search
