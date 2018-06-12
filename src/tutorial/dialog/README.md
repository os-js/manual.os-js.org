# Dialog

Dialogs are [Window](tutorial/window/README.md)s with pre-defined templates and actions.

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
