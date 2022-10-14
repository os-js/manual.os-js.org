---
description: This tutorial shows you how to create and register your own widgets.
full_title: Widget Tutorial
---

# Widget Tutorial

This tutorial shows you how to create and register your own widgets.

> Widgets floats on the bottom layer of the Desktop.

## Custom Widget

```javascript
import {Widget} from '@osjs/widgets';

export default class MyWidget extends Widget {

  constructor(core, options) {
    super(core, options, {
      // This widget uses a canvas
      canvas: true,
      fps: 1,

      // Our default dimension
      dimension: {
        width: 300,
        height: 50
      }
    }, {
      // Custom options that can be saved
      myText: 'Hello World'
    });

    // Other attributes are registered on your class:
    this.color = '#ffffff';
  }

  // When widget is destructed
  onDestroy() {}

  // When widget was resized
  onResize() {}

  // When widget was moved
  onMove() {}

  // Every rendering tick (or just once if no canvas)
  render({canvas, context, width, height}) {
    const text = this.options.myText;

    context.font = 'monospace';
    context.fillStyle = this.color;
    context.textAlign = 'center';
    context.textBaseline = 'middle';

    context.clearRect(0, 0, width, height);
    context.fillText(text, width / 2, height / 2);

    // The DOM elements is:
    //this.$element
  }

  // A custom set of menu entries
  getContextMenu() {
    return [{
      label: 'My Menu Item',
      onclick: () => console.log('Hello!')
    }];
  }

  static metadata(core) {
    return {
      title: 'A title for your widget'
    };
  }
}
```

### Attaching a dialog

```javascript
import {h, app} from 'hyperapp';
import {TextField} from '@osjs/gui';

export default class MyWidget extends Widget {

  someMethod() {
    // Renders dialog contents. By default OS.js uses Hyperapp,
    // but you're not restriced to use this.
    const render = ($content, dialogWindow, dialog) => {
      dialog.app = app({
        myText: this.options.myText
      }, {
        setText: myText => state => ({myText}),
        getValues: () => state => state
      }, (state, actions) => {
        return dialog.createView([
          h(TextField, {
            value: state.myText,
            oninput: (ev, value) => actions.setText(value)
          })
        ]);
      }, $content);
    };

    // Values are passed down to the 'options' object
    const value = dialog => dialog.app.getValues();

    // Use the internal dialog helper
    this._createDialog({
      title: 'Some Title'
    }, render, value);
  }

}
```

### Registration

To bootstrap with pre-defined widgets:

```javascript
import {WidgetServiceProvider} from '@osjs/widgets';
import MyWidget from 'path/to/MyWidget';

osjs.register(WidgetServiceProvider, {
  args: {
    registry: {
      'my-widget': MyWidget
    }
  }
});
```

Or alternatively on runtime:

```javascript
import MyWidget from 'path/to/MyWidget';
core.make('osjs/widgets').register('my-widget', MyWidget);
```
