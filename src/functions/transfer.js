const driver = require('bigchaindb-driver')

module.exports = function(connection, id, metadata, currentOwner, newOwner) {
  const transaction = connection.getTransaction(id)
  const transfer = driver.Transaction.makeTransferTransaction([
    { tx: transaction, output_index: 0 },
    [
      driver.Transaction.makeOutput(
        driver.Transaction.makeEd25519Condition(newOwner.publicKey)
      )
    ],
    metadata
  ])
  const signed = driver.Transaction.signTransaction(
    transfer,
    currentOwner.privateKey
  )
  connection.postTransactionCommit(signed).then(returnedTx => {
    return {
      signedTxId: signed.id,
      returnedTx: returnedTx
    }
  })
}
