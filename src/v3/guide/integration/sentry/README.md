---
description: A guide on how to integrate sentry.io with OS.js
full_title: Sentry Integration Guide
---

# Sentry Integration Guide

This guide shows how to set up [sentry.io](https://sentry.io/) with OS.js.

## Prepare

Create an account and a project for client (web) and server (node).

## Server Integration

First, run `npm install @sentry/node`.

Then, in your `src/server/index.js` file, add the following:

```javascript
const Sentry = require('@sentry/node');
Sentry.init({dsn: 'https://xxxxxxxxxxxx@sentry.io/xxxxxx'});
```

> [info] Restart your server after adding these changes

## Client Integration

Add the sentry client script to your template in `src/client/index.ejs`:

```html
    <!-- Add before the closing body tag -->
    <script src="https://browser.sentry-cdn.com/4.4.1/bundle.min.js" crossorigin="anonymous"></script>
  </body>
</html>
```

In the bottom of your `src/client/index.js` file, add the following:

```javascript
Sentry.init({dsn: 'https://xxxxxxxxxxxx@sentry.io/xxxxxx'});
```

> [info] Rebuild your client with `npm run build`
