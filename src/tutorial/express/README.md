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

You can use the provided methods to set up routes from your Applications and Service Providers:

> [info] If you're adding routes in your service provider using this API, use the `start()` method in your provider.
 
> [info] Note that the last argument int `routeAuthenticated` (strict group check argument) defaults to `auth.requireAllGroups` configuration option.

```javascript
const {route, routeAuthenticated} = core.make('osjs/express');

const respond = (req, res) => res.json({result: 'pong'});

// Regular route
route('GET', '/ping', respond);

// Same as above, except requires user to be authenticated
routeAuthenticated('GET', '/ping', respond);

// Same as above, but also requires user to belong to *some* given groups (see note above)
routeAuthenticated('GET', '/ping', respond, ['admin']);

// Same as above, but also requires user to belong to *all* given groups
routeAuthenticated('GET', '/ping', respond, ['admin'], true);
```

### Inject middleware to route handler

To inject middleware into the route handler (`route()` and `routeAuthenticated()`), use the following service:

```javascript
const {middleware} = core.make('osjs/express');

middleware(true, (req, res, next) => {}); // routeAuthenticated()
middleware(false, (req, res, next) => {}); // route()
```

## Raw routes

You can also directly hook into the Express instance.

### Using bootstrap

In your `src/server/index.js` file:

```javascript
const osjs = new Core(config, {});
osjs.on('init', () => osjs.app.get('/ping', (req, res) => {}));
```

### Using Service Provider

```javascript
class ServiceProvider {
  start() {
    this.core.app.get('/ping', (req, res) => {});
  }
}
```

## Middleware and Extensions

To add middleware or other extensions to Express, you can add this in a couple of ways:

### Using bootstrap

In your `src/server/index.js` file:

```javascript
const something = require('library');

const osjs = new Core(config, {});
osjs.app.use(something);
```

### Using Service Provider

```javascript
const something = require('library');

class ServiceProvider {
  constructor(core, options) {
    this.core = core;
    this.options = options;

    this.core.app.use(something)
  }
}
```

## Sessions

You can access the session via `req.session`.

## Applications

See [Application tutorial](/tutorial/application/README.md) on how to attach your applications to the server.
