---
title: Service Guide
layout: layout.html
---

# Service Guide

A `Service` allows you to run things alongside the server or do general operations when it starts.

## Server

```javascript

module.exports.destroy = function() {
  return Promise.resolve();
};

module.exports.register = function(env, config, wrapper) {
  return Promise.resolve();
};

```
