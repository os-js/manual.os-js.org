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

#### Global 'OSjs' namespace

The window global `OSjs` also lets you reach some of the core functionality.

```javascript
OSjs.getApplications(); // Get a list of running applications (session data)
OSjs.getWindows(); // Gets a list of all windows (session data)
OSjs.make(); // Same as above (but some services are restricted)

// These are the same as above
OSjs.open();
OSjs.request();
OSjs.run();
OSjs.url();
```

#### Client Events

* `init => ()` - Main init
* `osjs/core:start => ()` - Core start
* `osjs/core:started => ()` - Core started
* `osjs/core:connect => ()` - Connection established
* `osjs/core:disconnect => ()` - Connection lost
* `osjs/core:destroy => ()` - Core destroy
* `osjs/application:launch => (name, args, options)` - Application pre-launch
* `osjs/application:launched => (name, app)` - Application launched
* `osjs/application:create => (app)` - Application create
* `osjs/application:destroy => (app)` - Application destroy
* `osjs/window:create => (win)` - Window create
* `osjs/window:render => (win)` - Window render
* `osjs/window:change => (win, key, value)` - Window changed
* `osjs/window:transitionend => (ev, win)` - Window transition ended
* `osjs/desktop:transform => (rect)` - Desktop transformed
* `osjs/locale:change => (name)` - Locale changed
* `osjs/fs:mount => ()` - Filesystem mounted
* `osjs/fs:unmount => ()` - Filesystem unmounted
* `osjs/settings:save => ()` - Settings saved
* `osjs/settings:load => ()` - Settings loaded
* `osjs/vfs:* => (...args)` - VFS Method call
* `osjs/tray:create => (entry)` - Tray entry created
* `osjs/tray:remove => (entry)` - Tray entry removed
* `osjs/tray:update => (entries)` - Tray entry updated
* `osjs/notification:create => (notif)` - Notification created
* `osjs/notification:destroy => (notif)` - Notification destroyed

#### Client Services

These are the default provided services and their signatures:

* `osjs/application => (data)` - Creates a new [Application](../application/README.md) [instance](https://manual.os-js.org/v3/api/osjs-client/class/src/application.js~Application.html)
* `osjs/window => (options)` - Creates a new [Window](../window/README.md) [instance](https://manual.os-js.org/v3/api/osjs-client/class/src/window.js~Window.html)
* `osjs/event-handler => (name)` - Creates a new [EventHandler](../bus/README.md) [instance](https://manual.os-js.org/v3/api/osjs-common/class/src/event-handler.js~EventHandler.html)
* `osjs/websocket => (...args)` - Creates a new [WebSocket](../application/README.md#websockets) [instance](https://manual.os-js.org/v3/api/osjs-client/class/src/websocket.js~Websocket.html)
* `osjs/notification => (options?)` - Creates a new [Notification](../notification/README.md) entry
* `osjs/tray => (options?)` - Creates a new [Tray](../tray/README.md) entry
* `osjs/clipboard => ()` - APIs for performing [Clipboard](../clipboard/README.md)
* `osjs/settings => ()` - APIs for [Settings](../settings/README.md)
* `osjs/vfs => ()` - APIs for [VFS](../vfs/README.md)
* `osjs/locale => ()` - APIs for handling [Localization](../locale/README.md)
* `osjs/auth => ()` - APIs for [Authentication](../auth/README.md)
* `osjs/contextmenu => (options?)` - APIs for [Context Menus](../gui/README.md#contextmenu)
* `osjs/dialog => (name, ...args)` - APIs for [Dialogs](../dialog/README.md#usage)
* `osjs/dialogs => ()` - APIs for [Custom Dialogs](../dialog/README.md#custom-dialog)
* `osjs/dnd => ()` - APIs for performing [Drag-and-Drop](../tutorial/dnd/README.md) operations
* `osjs/theme => ()` - APIs for [Themes](../tutorial/theme/README.md#usage)
* `osjs/packages => ()` - APIs for [Package Management](https://manual.os-js.org/v3/api/osjs-client/class/src/packages.js~Packages.html)
* `osjs/session => ()` - APIs for [Session](https://manual.os-js.org/v3/api/osjs-client/class/src/session.js~Session.html)
* `osjs/desktop => ()` - APIs for desktop
* `osjs/panels => ()`- APIs for panels

Example:

```javascript
core.make('osjs/settings').save();
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

// Express server
const app = core.app;

// WebSocket server
const ws = core.ws;

// Session server
const session = core.session;
```
#### Events

* `init => ()` - Main init
* `osjs/core:start => ()` - Core start
* `osjs/core:started => ()` - Core started
