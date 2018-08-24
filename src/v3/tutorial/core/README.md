---
description: OS.js v3 Core Tutorial
---

# Core Tutorial

This tutorial shows you how to interact with the core.

## Usage

The `core` variable injected into API signatures contains a reference to the `Core` instance.

It is used to interact with service providers, read configuration(s) and other core functionality.

### Common

These methods are shared between the server and client:

```javascript
// Gets a configuration value
const value = core.config('resolve.by.key', 'optional default value');

// Retrieves an instance of a service
const service = core.make('namespace/service');

// Registers a new ServiceProvicer class
core.register(SomeServiceProvider, {/* registration options */});

// Registers a new singleton factory for serice
core.singleton('namespace/service', () => new SomeService());

// Registers a new instance factory for serice
core.instance('namespace/service', () => new SomeService());

// Checks if given service exists
const exists = core.has('namespace/service');

// Subscribe to an event
core.on('event-name', () => {});
```

### Client

The client has some extra methods for dealing with user data, requests, resources and applications:

```javascript
// Creates a URL based on the public path
const url = core.url('/foo/bar');

// Creates a new fetch() request
const promise = core.request('http://url', {/* options */}, 'type')

// Launches an application
core.run('Preview', {file: {path: 'home://image.png'}})

// Launches a new application based on a file
core.open({path: 'home://image.png', mime: 'image/png'});

// Gets user data
const user = core.getUser();
```

### Server

The server also has some extra methods:

```javascript
// Broadcast an event to all connected users (WebSocket)
core.broadcast('event-name', {foo: 'bar'})

// Broadcast an event to a set of users
core.broadcast('event-name', {foo: 'bar'}, ws => {
  //The original 'req' containing session etc
  //ws.upgradeReq

  return true;
});
```
