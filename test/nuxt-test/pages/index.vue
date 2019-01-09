<template>
  <section class="container">
    <div>
      <h1 class="title">Easy BigChain Test</h1>
      <h2 class="subtitle">Helper Library for BigChainDB</h2>
      <div>
        <button @click="connect">Connect</button>
        <button @click="generate(1)">Generate User 1</button>
        <button @click="generate(2)">Generate User 2</button>
        <button @click="create">Create Asset</button>
        <button @click="transfer">Transfer Asset</button>
        <input type="text" v-model="keyword" />
        <button @click="search">Search</button>
      </div>
      <br />
      <div class="output" v-html="output"></div>
      }
    </div>
  </section>
</template>

<script>
import bigchain from '../../../index.js'
const driver = require('bigchaindb-driver')

export default {
  name: 'Index',
  data() {
    return {
      output: '',
      connection: {},
      user1: {},
      user2: {},
      asset: {
        car: {
          model: 'Lambhorghini Aventador GTX',
          make: 'Sports Car'
        }
      },
      metadata: {
        price: '$2000000'
      },
      createResult: {},
      transferResult: {},
      transferMeta: {
        price: '$2500000'
      },
      keyword: '',
      res: ''
    }
  },
  methods: {
    connect() {
      this.connection = bigchain.connect()
      console.log(this.connection)
      this.output += 'Connected to BigChainDB <br>'
    },
    generate(USER_ID) {
      if (USER_ID == 1) {
        this.user1 = bigchain.generateKeypair('ryandsilva')
        console.log(this.user1)
        this.output += 'User 1:' + this.user1.publicKey + '<br>'
      } else if (USER_ID == 2) {
        this.user2 = bigchain.generateKeypair()
        console.log(this.user2)
        this.output += 'User 2:' + this.user2.publicKey + '<br>'
      } else {
        console.log('Invalid Input')
      }
    },
    create() {
      let instance = this
      bigchain.createAsset(
        this.connection,
        this.asset,
        this.metadata,
        this.user1,
        function(tx) {
          instance.createResult = tx
          console.log(instance.createResult)
          instance.output += 'Create ID:' + tx.id + '<br>'
        }
      )
    },
    transfer() {
      let instance = this
      bigchain.transferAsset(
        this.connection,
        this.createResult,
        this.transferMeta,
        this.user1,
        this.user2,
        function(tx) {
          instance.transferResult = tx
          console.log(instance.transferResult)
          instance.output += 'Transfer ID:' + tx.id + '<br>'
        }
      )
    },
    search() {
      let instance = this
      bigchain.search(this.connection, 'asset', this.keyword, function(
        results
      ) {
        instance.res = results
      })
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
