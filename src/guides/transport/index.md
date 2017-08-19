---
title: VFS Transport Guide
layout: layout.html
---

# VFS Transport Guide

A VFS Transport handles requests for filesystem interactions.

These classes are written in ES6. Look at the API Documentation for methods, etc.

## Client

```javascript
export default class MyTransport extends OSjsTransport {

  request(method, args, options) {

    // Available methods are:
    //   copy(src, dest [, options, mountpoint])
    //   exists(file [, options, mountpoint])
    //   fileinfo(file [, options, mountpoint])
    //   find(file [, options, mountpoint])
    //   freeSpace(root [, options, mountpoint])
    //   mkdir(dir [, options, mountpoint])
    //   move(src, dest [, options, mountpoint])
    //   read(file [, options, mountpoint])
    //   scandir(dir [, options, mountpoint])
    //   trash(file [, options, mountpoint])
    //   unlink(file [, options, mountpoint])
    //   untrash(file [, options, mountpoint])
    //   upload(dest, upload [, options, mountpoint])
    //   write(dest, contents [, options, mountpoint])

    return Promise.resolve(/* ... */)
  }

}
```

## Server

```javascript
function createReadStream(filename, options) {
  return Promise.resolve(null);
}

function createWriteStream(filename, options) {
  return Promise.resolve(null);
}

module.exports.request = function(user, method, args) {
  return Promise.reject(new Error('No such VFS method'));
};

module.exports.createReadStream = createReadStream;
module.exports.createWriteStream = createWriteStream;
module.exports.name = 'MyTransport';
```
