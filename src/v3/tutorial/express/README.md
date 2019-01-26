---
description: This tutorial shows how to use and extend the Express server.
full_title: Express Tutorial
---

# Express Tutorial

This tutorial shows how to use and extend the Express server.

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

### Express calls

You can call any method on the express instance with:

> [info] For routes it is recommended that you use the methods described above.

```javascript
const {call} = core.make('osjs/express');
call('use', (req, res, next) => {}); // global middleware
call('get', (req, res) => {}); // GET route
```

### Inject middleware to route handler

To inject middleware into the route handler (`route()` and `routeAuthenticated()`), use the following service:

```javascript
const {middleware} = core.make('osjs/express');

middleware(true, (req, res, next) => {}); // routeAuthenticated()
middleware(false, (req, res, next) => {}); // route()
```

## Sessions

You can access the session via `req.session`.

## Applications

See [Application tutorial](/tutorial/application/README.md) on how to attach your applications to the server.
