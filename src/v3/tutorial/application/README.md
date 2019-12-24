---
description: This tutorial will show you how to create an application and use some of the functionalities.
full_title: Application Tutorial
---

# Application Tutorial

This tutorial will show you how to create an application and use some of the functionalities.

## Creation

To create a new application package, run the following command inside your OS.js installation: `npm run make:application`.

> The created application will be placed in `src/packages` (by default) and is based on the [official example](https://github.com/os-js/osjs-example-application).

<!-- -->

> For general information about development see [development article](../../development/README.md).

## Metadata

The `metadata.json` file describes your application and contains a list of files that is required to load the application.

```json
{
  "type": "application",

  // The unique name
  "name": "MyApplication",

  // What category this application belongs to
  "category": null,

  // Automatically start on boot
  "autostart": false,

  // Only allow one instance of this application
  "singleton": false,

  // Hide from launch menus, etc.
  // Useful in combination with autostart and/or singleton
  "hidden": false,

  // A filename to icon
  "icon": null,

  // The server script to load (if any)
  "server": "server.js",

  // Lock down to users with given groups
  "groups": [],

  // User needs to belong to all groups defined (default)
  "strictGroups": true,

  // A map of localized titles
  "title": {
    "en_EN": "My Application"
  },

  // A map of localized descriptions
  "description": {
    "en_EN": "My Application"
  },

  // A list of supported MIME types
  // Either a regular expression or full-match string
  "mimes": [
    "^image\/(.*)",
    "^video\/(.*)"
  ],

  // Load these files when launching (usually generated with Webpack)
  "files": [
    "main.js",
    "main.css"
  ]
}
```

> Available categories by default are: development, science, games, graphics, network, multimedia, office, system, utilities and other

> Singleton applications will receive the `attention` event when another instance is dropped from launching.

### npm

Please note that your `package.json` file that your application is published with contains this section for the package discovery to work:

```json
{
  "osjs": {
    "type": "package"
  }
}
```

## Basic Example

Typically `index.js`:

```javascript
import {name as applicationName} from './metadata.json';

OSjs.make('osjs/packages').register(applicationName, (core, args, options, metadata) => {
  const proc = core.make('osjs/application', {args, options, metadata});

  // Create your windows etc here

  return proc;
});
```

And `server.js` for the server:

```javascript
module.exports = (core, proc) => ({
  init: async () => {
    // Register your routes etc here
  },
  start: () => {
    // Any arbitrary stuff here
  },
  destroy: () => {
    // Stop your stuff when server goes down
  }
});
```

## Windows

To create a new `Window` instance:

```javascript
const win = proc.createWindow({title: 'My Window'})
```

If you want to close your application when the window is destructed:

```javascript
win.on('destroy', () => proc.destroy());
```

## Events

You can listen on events with:

```javascript
proc.on('event-name', (...args) => console.log(...args));
```

* `destroy => ()` - When destroyed
* `create-window => (win, proc)` - When window is created
* `destroy-window => (win, proc)` - When window is destroyed
* `attention => (args, options)` - Signal when a new instance of a singleton application is launched

To broadcast events to your application use:

```javascript
core.broadcast('ApplicationName', 'event-name', 1, 2, 3)
proc.on('event-name', (...args) => console.log(...args)); // => 1, 2, 3
```

## Resources

You can get an URL to any resource bundled with your application using the resource method:

> Application resources are resolved as `/apps/{name}/{resource}`

```javascript
const url = proc.resource('/image.png');
```

## HTTP Requests

You can set up your own HTTP routes using the internal APIs:

> Application endpoints are resolved as `/apps/{name}/{endpoint}`

### Client

Create the endpoint URL, then use the `request()` method (a wrapper around `fetch()`):

```javascript
const response = await proc.request('/hello-world', {method: 'post'});
console.log(response);
```

### Server

In your server script, create a matching endpoint with Express:

```javascript
const endpoint = proc.resource('/hello-world');
core.app.post(endpoint, (req, res) => {
  res.json({result: 'Hello World'});
});
```

## WebSockets

You can use WebSockets in a couple of different ways.

### Core Socket Connection

The easiest way to use websockets is to use the core websocket connection.

This will not create a new connection, but rather use the main client websocket connection as a proxy, which comes with some limitations, but is great for adding basic interactions.

#### Client

In your application script:

```javascript
proc.on('ws:message', params => console.log(params)); // => ['Pong']
proc.send('Ping');
```

#### Server

In your server script, use the `onmessage` method:

```javascript
module.exports = (core, proc) => ({
  onmessage: (ws, respond, params) => {
    if (params[0] === 'Ping') {
      respond('Pong');
    }
  }
});
```

### Custom Socket Connection

You can also create new WebSocket connections.

> Application endpoints are resolved as `/apps/{name}/{endpoint}`

#### Client

Create an instance of `Websocket` with `socket()`, which is just a wrapper around regular WebSocket instance with `on/off/emit` for handing events:

> Note that sockets automatically closes when application is destroyed.

```javascript
const ws = proc.socket(); // Defaults to '/socket' (first argument)

ws.on('message', ev => console.log('got data', ev.data));
ws.on('close', () => console.log('closed'));
ws.on('error', ev => console.log('error', err));
ws.send('data'); // Sends data
ws.close(); // Closes socket
```

#### Server

In your server script, create a matching endpoint with Express:

> You can get the core websocket server via `core.wss`. You can add properties to the `ws` object in the `app.ws()` method filter out the list of clients from `wss.clients`.

```javascript
const endpoint = proc.resource('/socket');
core.app.ws(endpoint, (ws, req) => {
  ws.on('message', msg => console.log(msg)); // Message
  ws.on('close', () => console.log('closed')); // Closed
  ws.send('data'); // Sends data
  ws.close(); // Cloese socket
});
```

## Settings

Applications also supports [settings](/tutorial/settings/README.md) storage:

```javascript
// Sets a setting
proc.settings.foo = 'Custom setting';

// Gets a setting
console.log(proc.settings.foo)

// Saves settings
proc.saveSettings() // Promise

// Set default settings
import {name as applicationName} from './metadata.json';

OSjs.make('osjs/packages').register(applicationName, (core, args, options, metadata) => {
  options.settings = {
    foo: 'Default setting'
  };

  // ...
});
```

## Launch Arguments

When an application is launched, it might contain arguments:

> NOTE: If your application was launched with a file associated to an assigned MIME, the `file` property will be added automatically to the `args` object.

```javascript
// Launch application with arguments
core.run('MyApplication', {
  foo: 'My custom argument'
})

// Retrieve arguments in application
import {name as applicationName} from './metadata.json';

OSjs.make('osjs/packages').register(applicationName, (core, args, options, metadata) => {
  const proc = core.make('osjs/application', {args, options, metadata});

  console.log(proc.args); // 'foo' will be set

  return proc;
});
```

## Session

The `args` property (see above) is stored in the session, so you can use this to save your application state whenever the user logs out:

```javascript
import {name as applicationName} from './metadata.json';

OSjs.make('osjs/packages').register(applicationName, (core, args, options, metadata) => {
  const proc = core.make('osjs/application', {args, options, metadata});

  // Arguments launched with your application, including session:
  console.log(proc.args.session); // Only set if the application was saved and restored

  // Sets an argument that will be loaded on restore
  proc.args.session = 'hello session!';

  return proc;
});
```

### Session storage

Sessions are normally only saved when a user logs out, but you can force this action:

```javascript
core.make('osjs/session').save(); // Promise
```

> Sessions are stored via the `Settings` API.
