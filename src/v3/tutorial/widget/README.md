# Widget

Widgets floats on the bottom layer of the Desktop.

## Custom Widget

```
import {Panel} from '@osjs/panels';

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
}
```

## Registration

```javascript
import {WidgetServiceProvider} from '@osjs/widgets';

osjs.register(WidgetServiceProvider, {
  args: {
    registry: {
      'my-widget': MyWidget
    }
  }
});
```
