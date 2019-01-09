const driver = require('bigchaindb-driver')

module.exports = function async(connection, asset, metadata, owner, callback) {
  const transaction = driver.Transaction.makeCreateTransaction(
    asset,
    metadata,
    [
      driver.Transaction.makeOutput(
        driver.Transaction.makeEd25519Condition(owner.publicKey)
      )
    ],
    owner.publicKey
  )
  const signed = driver.Transaction.signTransaction(
    transaction,
    owner.privateKey
  )
  connection
    .postTransactionCommit(signed)
    .then(returnedTx => {
      callback(returnedTx)
    })
    .catch(err => {
      return new Error('Please check the information entered!' + err)
    })
}
