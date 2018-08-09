---
description: OS.js v3 Dialog Tutorial
---

# Dialog Tutorial

Dialogs are [Window](../window/README.md)s with pre-defined templates and actions.

![Example](example.png)

## Usage

To create a dialog use the provided service:

```javascript
// name: dialog name (alert, confirm, prompt, color, font, file, progress)
// args: an object with arguments for given dialog
core.make('osjs/dialog', name, args, (btn, value) => {
  // btn: which button was pressed (ex: ok, yes, no, cancel)
  // value: the value of the dialog
});
```

You can also provide custom window options:

```javascript
const options = {parent: <parent>, attributes: {modal: true}};
core.make('osjs/dialog', name, args, options, cb);
```

## Custom Dialogs

### Extension

The default Dialog Service provider allows you to add (or override) dialogs:

```javascript
import {Dialog} from '@osjs/dialogs';

class MyDialog extends Dialog {
  constructor(core, args, callback) {
    super(core, Object.assign({
      foo: 'My custom argument default'
    }, args), callback)
  }

  render(options) {
    super.render(options, ($content) => {
      const el = document.createTextNode(this.args.foo);
      $content.appendChild(el);
    });
  }
}
```

```javascript
// Static
osjs.register(DialogServiceProvider, {
  args: {
    registry: {
      'my-dialog': MyDialog
    }
  }
});

// Runtime
osjs.make('osjs/dialogs').register('my-dialog', MyDialog);
```

### Programatic

You can also use the `CustomDialog` instance to make your own programatically:

```javascript
// Options
const options = {
  buttons: ['ok', 'cancel'],
  window: {
    title: 'My Dialog',
    dimension: {width: 400, height: 400}
  }
};

// Get the value for button callback
const callbackValue = dialog => 'My value';

// Same as demonstrated in Usage
const callbackButton = (button, value) => {};

// The window.render() callback
const callbackRender = ($content, dialogWindow, dialog) => {};

core.make('osjs/dialogs')
  .create(options, callbackValue, callbackButton);
  .render(callbackRender);
```

## Dialog GUI

By default OS.js uses Hyperapp for the dialog GUI, but you can use whatever you want in the render callback.

The buttons will be created for you based on the options you provided:

```javascript
// Render method
$content => {
  app({
    // state
  }, {
    // actions
  }, (state, actions) => {
    // For programatic usage, replace 'this' with 'dialog'
    return this.createView([
      // your virtual dom here
    ]);
  }, $content);
}
```

Available buttons are:

* `ok`
* `cancel`
* `close`
* `yes`
* `no`

You can add your own by giving strings not found in the list above.
