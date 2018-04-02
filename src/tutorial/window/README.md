# Window

Windows are floating containers that you can use to render any content. See [GUI](tutorial/gui/README.md) tutorial on how to design content using OS.js GUI libraries.

## Usage

To create a new `Window` instance:

```javascript
const options = {title: 'My Window'};

// Attach to the application
const win = proc.createWindow(options)

// Outside your application
const win = core.make('osjs/window', options)
```

## Options

* `id` A unique identifier
* `title` The title
* `parent` Parent window instance
* `position` An object with `top/left` for position
* `dimension` An object with `width/height` for dimension
* `attributes` A set of attributes
* `state` Default state

## Render window

Use the provided render method to put content into your Window:

```javascript
win.render($content => $content.appendChild(
  document.createTextNode('Hello World!')
));
```

## Events

You can listen on events with:

```javascript
win.on('event-name', (...args) => console.log(...args));
```

* `moved => (position, win)` - After movement completes
* `resized => (dimension, win)` - After resize completes
* `destroy => ()` - Destroyed
* `init => (win)` - On init
* `render => (win)` - On render
* `close => (win)` - On close
* `focus => (win)` - On focus
* `blur => (win)` - On blur
* `minimize => (win)` - On minimize
* `maximize => (win)` - On maximize
* `raise => (win)` - On "un-minimize"
* `restore => (win)` On "un-maximize"

If you want to close your application when the window is destructed:

```javascript
win.on('destroy', () => proc.destroy());
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
