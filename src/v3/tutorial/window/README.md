---
description: OS.js v3 Window Tutorial
full_title: Window Tutorial
---

# Window Tutorial

This tutorial shows you how to create and interact with Windows.

Windows are floating containers that you can use to render any content. See [GUI](../gui/README.md) tutorial on how to design content using OS.js GUI libraries.

![Example](example.png)

## Usage

To create a new `Window` instance:

```javascript
const options = {title: 'My Window'};

// Attach to the application
const win = proc.createWindow(options)

// Outside your application
const win = core.make('osjs/window', options)
```

## Render

Use the provided render method to put content into your Window:

```javascript
win.render($content => $content.appendChild(
  document.createTextNode('Hello World!')
));
```

## Options

* `id` A unique identifier
* `title` The title
* `parent` Parent window instance
* `position` An object with `top/left` for position or a string like `center` / `topleft`
* `dimension` An object with `width/height` for dimension
* `attributes` A set of attributes
* `state` Default state

## Attributes

* `gravity: string` - Where to place the window (ex: `center`)
* `modal: boolean` - If a parent is provided it will be disabled until this window  closes
* `ontop: boolean` - Place on-top of all other windows
* `resizable: boolean` - Set if window can be resized
* `focusable: boolean` - Set if window can be focused
* `maximizable: boolean` - Set if window can be minimized
* `minimizable: boolean` - Set if window can be maximized
* `sessionable: boolean` - Set if window can be saved in session
* `closeable: boolean` - Set if window can be closed
* `header: boolean` - Header visibility
* `controls: boolean` - Header controls visibility (min/max/close buttons)
* `position: object` - Default position object with `top/left`
* `minDimension: object` - Minimum dimension object with `width/height`
* `maxDimension: object` - Maximum dimension object with `width/height`

## Events

You can listen on events with:

```javascript
win.on('event-name', (...args) => console.log(...args));
```

* `moved => (position, win)` - After movement completes
* `resized => (dimension, win)` - After resize completes
* `destroy => (win)` - Destroyed
* `init => (win)` - On init
* `render => (win)` - On render
* `close => (win)` - On close
* `focus => (win)` - On focus
* `blur => (win)` - On blur
* `minimize => (win)` - On minimize
* `maximize => (win)` - On maximize
* `raise => (win)` - On "un-minimize"
* `restore => (win)` - On "un-maximize"
* `dragenter => (ev, win)` - On "drag enter"
* `dragover => (ev, win)` - On "drag over"
* `dragleave => (ev, win)` - On "drag leave"
* `drop => (ev, data, files, win)` - On "drop"
* `keypress => (ev, win)` - On "keypress"
* `keydown => (ev, win)` - On "keydown"
* `keyup => (ev, win)` - On "keyup"

## Methods

Common methods:

```javascript
win.close(); // Close
win.destroy(); // Destroy ("force close")
win.blur(); // Un-focus
win.focus(); // Focus
win.minimize(); // Minimize
win.maximize(); // Maximize
win.raise(); // Un-minimize
win.restore(); // Un-maximize
win.gravitate(string); // Gravitate toward direction
win.resizeFit(node); // Resize to fit given DOM container
win.setIcon(string); // Sets icon
win.setTitle(string); // Sets title
win.setPosition({top, left}); // Sets position
win.setDimension({width, height}); // Sets dimension
win.setZindex(number); // Sets z-index
win.setNextZindex(); // Sets next z-index (move to top)
```

## Media Queries

You can assign local media queries to a window using attributes. By default OS.js provides:

* `small:<=640px`
* `medium:<=1024px`
* `large:>=1024px`

```javascript
const options = {
  title: 'My Window',
  attributes: {
    mediaQueries: {
      custom: 'screen and (min-width: 1280px)'
    }
  }
};
```

The `mediaQueries` key will be assigned to a `data-media=""` attribute on your Window root DOM element so you can create responsive interfaces via CSS. You can also get the media state via `win.state.media`.
