# ⭐️ Easy Bigchain ⭐️

![Stars](https://img.shields.io/github/stars/knapsackt/easy-bigchain.svg?style=for-the-badge)
![Issues](https://img.shields.io/github/issues/knapsackt/easy-bigchain.svg?style=for-the-badge)
![MIT](https://img.shields.io/github/license/knapsackt/easy-bigchain.svg?style=for-the-badge)

[![HitCount](http://hits.dwyl.io/knapsackt/easy-bigchain.svg)](http://hits.dwyl.io/knapsackt/easy-bigchain)

> Helper library for BigChainDB tasks. Blockchain Database now with a high level abstracted API.

## Installation

```bash
$ npm install easy-bigchain --save
```

## Usage

```js
import bigchain from 'easy-bigchain'
```

### 1. Connect to BigChainDB

```js
const connection = bigchain.connect(CONNECTION_STRING)
// Default == https://test.bigchaindb.com/api/v1/
```

### 2. Generate KeyPairs for Users

```js
const user = bigchain.generateKeypair()
```

> OR

```js
const user = bigchain.generateKeypair(SEED_PHRASE)
```

### 3. Create Asset

```js
bigchain.createAsset(CONNECTION_OBJECT, ASSET, METADATA, USER, function(
  transaction
) {
  // execute code
})
```

- CONNECTION OBJECT : Object returned from the _connect()_ function call
- ASSET : The main data object (immutable)
- METADATA : Additonal Information to be stored
- USER : Object returned from the _generateKeypair()_ function call

### 4. Transfer Asset

```js
bigchain.transferAsset(
  CONNECTION_OBJECT
  TRANSACTION,
  METADATA,
  CURRENT_OWNER,
  NEW_OWNER,
  function(transaction) {
    // execute code
  }
)
```

- CONNECTION OBJECT : Object returned from the _connect()_ function call
- TRANSACTION - The original Transaction from where the asset is to be transferred
- METADATA : Additonal Information to be stored
- CURRENT OWNER and NEW OWNER are objects returned from the _generateKeypair()_ function call

#### Due to some unexpected behaviour of the _getTransaction()_ function, I have made use of the entire transaction itself. Not efficient but works till that issue is fixed.

---

## Contributing

Please send a Pull Request with appropriate documentation and I would be more than happy to merge it! 😄
