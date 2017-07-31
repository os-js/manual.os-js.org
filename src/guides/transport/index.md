---
title: VFS Transport Guide
layout: layout.html
---

# VFS Transport Guide

A VFS Transport handles requests for filesystem interactions.

## Client

```javascript
export default class MyTransport extends OSjsTransport {

  request(method, args, options) {}

}
```

## Server

```javascript
function createReadStream(http, path) {
  return Promise.resolve(null);
}

function createWriteStream(http, path) {
  return Promise.resolve(null);
}

module.exports.request = function(http, method, args) {
  return Promise.reject(new Error('No such VFS method'));
};

module.exports.createReadStream = createReadStream;
module.exports.createWriteStream = createWriteStream;
module.exports.name = 'MyTransport';
```
