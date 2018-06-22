---
title: Misc Modules Guide
layout: layout.html
---

# Misc Modules Guide

This page documents other modules in OS.js.

## Dialogs

Just extend the `core/dialog` class and put it into `window.OSjs.Dialogs`. You can do this in your package or using a preload (see [configuration](/configuration/#adding-preloads).

```javascript
class SomeCoolDialog extends Dialog {}

OSjs.Dialogs.DialogName = SomeCoolDialog;
```

To create a new dialog:
```javascript
import Dialog from 'core/dialog';

Dialog.create('DialogName', {foo: 'bar'}, (ev, btn, result) => {
  // ev = Browser event
  // btn = Button used to close dialog
  // result =  Any result the dialog generated
});
```

## Menu

To create a menu:

```javascript
import * as Menu from 'gui/menu';

Menu.create([{
  title: 'Some title',
  onClick: () => console.log('clicked')
}, {
  title: 'Submenu',
  menu: [{
    title: 'Submenu item'
  }]
}], ev); // Or {x, y}
```

## Process

```javascript
import Process from 'core/process';

// Launch with name
Process.create('PackageClassName', {foo: 'bar'}); // Promise

// Launch with array
Process.createFromArray(['PackageClassName']); // Promise

// Launch from file (guesses what application will be used)
Process.createFromFile(new FileMetadata('home:///my-file.txt', 'text/plain'));

// Broadcast a message
Process.message('foo', {bar: 'baz'})
Process.message('foo', {bar: 'baz'}, {source: app}); // To prevent signaling a certain process
```

```javascript
// Get a launch argument from `.create()`
proc._getArgument('foo') // => 'bar'

// Listen to a given broadcast message
proc._on('foo', (obj) => {}) // => obj = {bar: 'baz'}

// Get an URL to a resource in package
proc._getResource('something.txt') // => /packages/repo/PackageName/something.txt
```

## Applications

To subscribe to events (and also broadcast messages):

```javascript
application._on('event', () => ...);
application._off('event');
application._emit('event', [arg, ...]);
```

### Events

```bash
message       All events                               => (msg, object, options)
attention     When application gets attention signal   => (args)
hashchange    When URL hash has changed                => (args)
api           API event                                => (method)
destroy       Destruction event                        => (killed)
destroyWindow Attached window destruction event        => (win)
vfs           For all VFS events                       => (msg, object, options)
vfs:mount     VFS mount event                          => (module, options, msg)
vfs:unmount   VFS unmount event                        => (module, options, msg)
vfs:write     VFS write event                          => (dest, options, msg)
vfs:mkdir     VFS mkdir event                          => (dest, options, msg)
vfs:move      VFS move event                           => ({src,dest}, options, msg)
vfs:delete    VFS delete event                         => (dest, options, msg)
vfs:upload    VFS upload event                         => (file, options, msg)
vfs:update    VFS update event                         => (dir, options, msg)
```

## Windows

```javascript
import Window from 'core/window';
import WindowManager from 'core/windowmanager';

// Create a window
const win = new Window('WindowName', {});

// And add it via one of three ways:
application._addWindow(win);
window._addChild(win);
WindowManager.instance.addWindow(win);

// To get a window from your application
application._getWindowByName('WindowName');
application._getMainWindow();
application._getWindowByTag('optional');
application._getWindows();
application._getWindow('value', 'key');

// Common methods
win._close(); // Closes the window
win._minimize(); // Minimize window state
win._maximize(); // Maximize window state
win._restore(); // Restore window state
win._focus(); // Focuses the window
win._blur(); // Unfocuses the window
win._move(x, y); // Move to given position
win._resize(w, h); // Resize to given size
win._find('id'); // Finds GUI Element with given "data-id="
win._findByQuery('query'); // Finds GUI Element by query
win._findByQuery('query', true); // Finds all GUI Elements matching this query
win._findDOM('id'); // Same as `find()` except it returns a Node instance instead of GUI.Element
win._create('element', {}, parentNode); // Create a new GUI element with given parameters and parent
win._getRoot(); // Gets the window content container Node
win._toggleLoading(boolean); // Toggle loading overlay
win._toggleDisabled(boolean); // Toggle disabled overlay
```

To subscribe to events:

```javascript
win._on('event', () => ...);
win._off('event');
win._emit('event', [arg, ...]);
```

### Events

```bash
inited        When has been inited and rendered         => ()
focus         When window gets focus                    => ()
blur          When window loses focus                   => ()
destroy       When window is closed                     => ()
maximize      When window is maxmimized                 => ()
minimize      When window is minimized                  => ()
restore       When window is restored                   => ()
resize        When window is resized                    => (w, h)
resized       Triggers after window is resized          => (w, h)
move          When window is moved                      => (x, y)
moved         Triggers after window is moved            => (x, y)
keydown       When keydown                              => (ev, keyCode, shiftKey, ctrlKey, altKey)
keyup         When keyup                                => (ev, keyCode, shiftKey, ctrlKey, altKey)
keypress      When keypress                             => (ev, keyCode, shiftKey, ctrlKey, altKey)
drop          When a drop event occurs                  => (ev, type, item, args)
drop:upload   When a upload file was dropped            => (ev, <File>, args)
drop:file     When a internal file object was dropped   => (ev, VFS.File, args)
```

## Error Handler

```javascript
OSjs.error('title', 'description', 'message', new Error('exception here if available'));
```

## GUI Element

```javascript

// DOM Manipulation and events
guiElement.show()
guiElement.hide()
guiElement.empty()
guiElement.remove()
guiElement.append()
guiElement.appendHTML()
guiElement.querySelector()
guiElement.querySelectorAll()
guiElement.css('key' /*[, 'value'*/)
guiElement.on('name', function() {} /*, useCapture*/)

// Attributes and values
guiElement.get('key');
guiElement.set('key', 'value');

// Inputs and views
guiElement.focus()
guiElement.blur()

// Data (like dropdowns and views)
guiElement.clear();
guiElement.add('entry');
guiElement.add(['entry', 'entry']);
guiElement.remove('id' /*, 'key'*/);
guiElement.patch(['entry', 'entry'])

// Create a GUI element programatically
const guiElement = GUIElement.create('gui-element-name', {
  parameter: 'value'
});
parentElement.append(guiElement);

// ... from DOM element
const guiElement = GUIElement.createFromNode(el);

// .. with HTML
parentElement.appendHTML('<gui-element-name></gui-element-name>', optionalWinReference);
```
