# Application

You can use the [official example package](https://github.com/os-js/osjs-example-application) as a bolilerplate for your project.

## Creation

Typically `index.js`:

```javascript
// 'MyApplication' is the unique name of your application
// This is also defined in your metadata file
OSjs.make('osjs/packages').register('MyApplication', (core, args, options, metadata) => {
  const proc = core.make('osjs/application', {
    args: {}, // Launch arguments (argv)
    options: {}, // Launch options
    metadata: {} // Metadata JSON
  });

  // Create your windows etc here

  return proc;
});
```

And `server.js` for the server:

```javascript
module.exports = (core, proc) => {

  const init = async () => {
    // Register your routes etc here
  };

  const start = () => {
    // Any arbitrary stuff here
  };

  const destroy = () => {
    // Stop your stuff when server goes down
  };

  return {init, start, destroy};
};
```

## Metadata

The `metadata.json` file describes your application and contains a list of files that is required to load the application.

```json
{
  // The unique name
  "name": "MyApplication",

  // What category this application belongs to
  "category": null,

  // Only allow one instance of this application
  "singular": false,

  // A filename to icon
  "icon": null,

  // The server script to load (if any)
  "server": "server.js",

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
    "index.js",
    "index.css"
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

* `destroy => ()`
* `create-window => (win, proc)`
* `destroy-window => (win, proc)`
* `attention => (args, options)`

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
