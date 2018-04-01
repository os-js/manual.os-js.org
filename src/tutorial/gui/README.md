# GUI

OS.js uses [Hyperapp](https://hyperapp.js.org/) for its GUI components by default.

*This does not mean that you are restricted to usage of Hyperapp. You can use React, Vue or anything you like.*


## Basic Example

```javascript
import {h, app} from 'hyperapp';

const createView = (state, actions) => h('div', {}, [
  h('div', {}, String(state.counter)),
  h('button', {type: 'button', onclick: () => actions.increment()}, 'Increment counter'})
]);

const createApp = (proc, win, $content) => {
  app({
    counter: 0
  }, {
    increment: () => state => {counter: state.counter + 1}
  }, createView, $content);
};

// ...
win.render($content => createApp(proc, win, $content));
// ...
```

## Using Components

Use the provided GUI module:

```javascript
import {Button} from '@osjs/gui';

const createView = (state, actions) => h('div', {}, [
  h('div', {}, String(state.counter)),
  h(Button, {onclick: () => actions.increment(), label: 'Increment counter'})
]);
```

