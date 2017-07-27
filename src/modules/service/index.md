---
title: Service
layout: layout.html
---

# Service

A `Service` allows you to run things alongside the server or do general operations when it starts.

* [Make your own](#make-your-own)

## Make your own

```javascript

module.exports.destroy = function() {
  return Promise.resolve();
};

module.exports.register = function(env, config, wrapper) {
  return Promise.resolve();
};

```
