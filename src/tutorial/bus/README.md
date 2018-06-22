# Bus

A bus (event handler/event dispatcher) provides methods to assign and emit events.


## Usage

To create your own bus use the provided service:

```javascript
const bus = core.make('osjs/event-handler');
bus.on('greet', (who) => console.log(`Hello ${who}!`));
bus.emit('greeet', 'world');
```

## Example

Here's an example using a factory-style approach for creating windows that share a Bus.

You can use this for inter-window-commication or just a sentralized event handler:

![Example](example.png)

```javascript
// A simple helper function for creating a DOM Element in the form
// of a button. Attaches an click event via the callback.
const createButton = (label, callback) => {
  const button = document.createElement('button');
  button.appendChild(document.createTextNode(label))
  button.addEventListener('click', callback);
  return button;
};

// Renders window with a button to spawn another window.
// Listens for the 'greet' event on the window that is proxied via our bus
const mainWindow = bus => ($content, win) => {
  const button = createButton('Create a new Window', () => {
    bus.emit('create-window', 'other', {
      title: 'New Window'
    });
  });

  win.on('custom/greet', () => {
    $content.appendChild(document.createTextNode('Other window said hello'));
  });

  $content.appendChild(button);
};

// Renders another window with a button to signal 'kill-application'
// and another for 'greet-main-window'.
const otherWindow = bus => ($content, win) => {
  const button1 = createButton('Kill application', () => {
    bus.emit('kill-application');
  });

  const button2 = createButton('Greet Main Window', () => {
    bus.emit('greet-main-window');
  });

  $content.appendChild(button1);
  $content.appendChild(button2);
};

// A window factory that takes a name and spawns
// the corresponding window in a map.
const windowFactory = (proc, bus) => {
  const windows = {
    main: mainWindow(bus),
    other: otherWindow(bus)
  };

  return (name, options) => {
    const renderer = windows[name];

    proc.createWindow(options)
      .render(renderer);
  };
};

// Your application code.
// This is where we set up a bus for sentralized event handling.
const register = (core, args, options, metadata) => {
  const proc = core.make('osjs/application', {args, options, metadata});
  const bus = core.make('osjs/event-handler', 'SomeOptionalBusName');
  const factory = windowFactory(proc, bus);

  // Proxy the 'greet' event onto the main window if found.
  // Notice a namespace is used, as not to conflict with internal events.
  bus.on('greet-main-window', (...args) => {
    const mainWindow = proc.windows
      .find(win => win.id === 'MainWindow');

    if (mainWindow) {
      mainWindow.emit('custom/greet', ...args);
    }
  });

  // Signal to kill our application
  bus.on('kill-application', () => {
    proc.destroy();
  });

  // Signal for creating another window by name
  bus.on('create-window', (name, options) => {
    factory(name, options);
  });

  // Immediately emit a create window event to spawn main window
  bus.emit('create-window', 'main', {
    id: 'MainWindow',
    title: 'Main Window'
  });

  // We want to remove our bus when application is destroyed
  proc.on('destroy', () => bus.destroy());

  return proc;
};

// The package manager registration call
OSjs.make('osjs/packages')
  .register('MyApplication', register);
```
