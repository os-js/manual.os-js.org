---
description: OS.js v3 Express Tutorial
full_title: Express Tutorial
---

# Express Tutorial

The OS.js server runs on Express and this turial shows you how access the APIs.

> NOTE: A body-parser middleware is used by default to decode both JSON and urlencoded data.

## Usage

You can retrieve the Express server and all other related instances via the `core` class injected into all methods.

* `app` - The Express `express()` instance
* `session` - The Express session
* `ws` - The Express WebSocket
* `httpServer` - The `http.Server` instance

## Routes

You can use the provided methods to set up routes:

```javascript
const {route, routeAuthenticated} = core.make('osjs/express');

const respond = (req, res) => res.json({result: 'pong'});

// Regular route
route('GET', '/ping', respond);

// Same as above, except requires user to be authenticated
routeAuthenticated('GET', '/ping', respond);

// Same as above, but also requires user to belong to given groups
routeAuthenticated('GET', '/ping', respond, ['admin']);
```

> NOTE: If you want to add routes in the `index.js` distro file, use the `.on('init')` event on the core instance.

## Sessions

You can access the session via `req.session`.

## Applications

See [Application tutorial](/tutorial/application/README.md) on how to attach your applications to the server.
