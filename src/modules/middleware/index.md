---
title: Middleware
layout: layout.html
---

# Middleware

The `Middleware` allows you to hook into the HTTP server to handle requests.

The middleware uses **Express**.

* [Make your own](#make-your-own)

## Make your own

```javascript

module.exports = function(app, wrapper) {
  wrapper.get('/example', (http, req, res, next) => {
    res.send('Hello World!');
  });

  wrapper.use((http, req, res, next) => {
    return http.next();
  });

  wrapper.use((http, err, req, res, next) => {
    return http.next();
  });
};

```
