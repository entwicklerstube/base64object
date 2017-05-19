# base64object
> Encode and decode objects without stringify / parseing the data in browser / node

[![Zero Dependencies](https://img.shields.io/badge/zero-dependencies-brightgreen.svg)]()
[![Build Status](https://travis-ci.org/entwicklerstube/base64object.svg?branch=master)](https://travis-ci.org/entwicklerstube/base64object)
[![devDependencies Status](https://david-dm.org/entwicklerstube/base64object/dev-status.svg)](https://david-dm.org/entwicklerstube/base64object?type=dev)

### Install
**npm**
```
npm install base64object
```

**yarn**
```
yarn add base64object
```

### Usage
```js
base64object.encode({ hello: 'world' })
// response eyJoZWxsbyI6IndvcmxkIn0=

base64object.decode('eyJoZWxsbyI6IndvcmxkIn0=')
// response { hello: 'world' }
```

### Support
**Browser**
Under the hood it uses the `window.atob()` native feature which is supported in each major browser and IE from version 10 ([`check mozilla dev site`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/atob#Browser_compatibility))

**Node**
Uses the native `Buffer` API from node ([`check node documentation`](https://nodejs.org/api/buffer.html#buffer_buffers_and_character_encodings))
