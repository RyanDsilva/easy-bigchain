const driver = require('bigchaindb-driver')

module.exports = function(connection, asset, metadata, owner) {
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
  connection.postTransactionCommit(signed).then(returnedTx => {
    return {
      signedTxId: signed.id,
      returnedTx: returnedTx
    }
  })
}
