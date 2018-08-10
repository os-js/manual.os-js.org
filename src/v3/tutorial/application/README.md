---
description: OS.js v3 Application Tutorial
---

# Application Tutorial

You can use the [official example package](https://github.com/os-js/osjs-example-application) as a bolilerplate for your project.

To generate a new package using the example via CLI run `npm run package:create`.

> The created package will have a basic Babel, SASS and eslint/stylelint setup.

## Creation

Typically `index.js`:

```javascript
// 'MyApplication' is the unique name of your application
// This is also defined in your metadata file
OSjs.make('osjs/packages').register('MyApplication', (core, args, options, metadata) => {
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

## Metadata

The `metadata.json` file describes your application and contains a list of files that is required to load the application.

```json
{
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

## HTTP Requests

You can set up your own HTTP routes using the internal APIs:

> Application endpoints are resolved as `/apps/{name}/{endpoint}`

### Client

Create the endpoint URL, then use the `request()` method:

```javascript
const endpoint = proc.resource('/hello-world');
const response = await proc.request(endpoint);
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

You can also spawn websockets on the internal server and bind it to your application:

> Application endpoints are resolved as `/apps/{name}/{endpoint}`

### Client

Create an instance of `ApplicationSocket` with `socket()`, which is just a wrapper around regular WebSocket instance with `on/off/emit` for handing events:

```javascript
const ws = proc.socket(); // Defaults to '/socket'
```

### Server

In your server script, create a matching endpoint with Express:

```javascript
const endpoint = proc.resource('/socket');
core.app.ws(endpoint, (ws, req) => {
  // Spawned
});
```

## Launch Arguments

When an application is launched, it might contain arguments:

```javascript
// Launch application with arguments
core.run('MyApplication', {
  foo: 'My custom argument'
})

// Retrieve arguments in application
OSjs.make('osjs/packages').register('MyApplication', (core, args, options, metadata) => {
  const proc = core.make('osjs/application', {args, options, metadata});

  console.log(proc.args); // 'foo' will be set

  return proc;
});
```

### Session

The `args` property is stored in the session, so you can use this to save your application state whenever the user logs out:

```javascript
OSjs.make('osjs/packages').register('MyApplication', (core, args, options, metadata) => {
  const proc = core.make('osjs/application', {args, options, metadata});

  // Arguments launched with your application, including session:
  console.log(proc.session); // Only set if the application was saved and restored

  // Sets an argument that will be loaded on restore
  proc.args.session = 'hello session!';

  return proc;
});
```
