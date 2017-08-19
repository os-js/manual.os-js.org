---
title: Service Guide
layout: layout.html
---

# Service Guide

A `Service` allows you to run things alongside the server or do general operations when it starts.

This is a **Node Server Service**, not a *Service Package* (which is client-side).

## Server

```javascript

module.exports.destroy = function() {
  return Promise.resolve(true);
};

module.exports.register = function(env, config, wrapper) {
  return Promise.resolve(true);
};

```
