---
description: OS.js v3 Panel Tutorial
full_title: Panel Tutorial
---

# Panel Item Tutorial

This tutorial shows you how to create and register your own panel items.

> Panel Items are containers placed inside a Panel.

OS.js uses [Hyperapp](https://hyperapp.js.org/) for its panel items by default.

## Custom Panel Item

The default Panel Service provider allows you to add (or override) panel items:

```javascript
import {PanelItem} from '@osjs/panels';

class MyPanelItem extends PanelItem {
  render(state, actions) {
    return super.render('my-panel-item', [
      h('span', {}, 'Hello World!')
    ]);
  }
}
```

### Registration

```javascript
// Static
osjs.register(PanelServiceProvider, {
  args: {
    registry: {
      'my-panel-item': MyPanelItem
    }
  }
});

// Runtime
osjs.make('osjs/panels').register('my-panel-item', MyPanelItem);
```
