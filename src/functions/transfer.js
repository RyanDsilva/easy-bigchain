const driver = require('bigchaindb-driver')

module.exports = function(
  connection,
  transaction,
  metadata,
  currentOwner,
  newOwner,
  callback
) {
  //const transaction = connection.getTransaction(id)
  const transfer = driver.Transaction.makeTransferTransaction(
    [{ tx: transaction, output_index: 0 }],
    [
      driver.Transaction.makeOutput(
        driver.Transaction.makeEd25519Condition(newOwner.publicKey)
      )
    ],
    metadata
  )
  const signed = driver.Transaction.signTransaction(
    transfer,
    currentOwner.privateKey
  )
  connection.postTransactionCommit(signed).then(returnedTx => {
    callback(returnedTx)
  })
}
