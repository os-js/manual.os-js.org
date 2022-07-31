---
description: This tutorial shows you how to create and register your own panel items.
full_title: Panel Tutorial
---

# Panel Item Tutorial

This tutorial shows you how to create and register your own panel items.

> Panel Items are containers placed inside a Panel.

OS.js uses [Hyperapp v1](https://github.com/jorgebucaran/hyperapp/tree/V1) for its panel items by default.

## Custom Panel Item

To create your own panel item, extend the PanelItem class provided by the panels package.

```javascript
import {PanelItem} from '@osjs/panels';
import {h} from 'hyperapp';

export class MyPanelItem extends PanelItem {

  // You can set your own state and actions by overriding the init method
  init() {
    super.init({
      // State
    }, {
      // Actions
    })
  }

  // Renders the interface
  render(state, actions) {
    return super.render('my-panel-item', [
      h('span', {}, 'Hello World!')
    ]);
  }
}
```

### Registration

There are two methods available to register your panel item:

#### Static

In the client bootstrap file (`src/client/index.js`) you can give the Panel Service Provider a set of items.

```javascript
osjs.register(PanelServiceProvider, {
  args: {
    registry: {
      'my-panel-item': MyPanelItem
    }
  }
});
```

#### Runtime

It is also possible to register panel items on runtime.

```javascript
osjs.make('osjs/panels')
  .register('my-panel-item', MyPanelItem);
```

### Usage

To add the new item as a default entry, you have to modify your client settings.

> [info] You might have to clear your settings (by default localStorage) in order for this to take effect.

Update the configuration file (`src/client/config.js`) with new desktop panel settings:

```javascript
module.exports = {
  desktop: {
    settings: {
      panels: [{
        position: 'top',
        items: [
          {name: 'menu'},
          {name: 'windows'},
          {name: 'my-panel-item'}, // Your panel item name
          {name: 'tray'},
          {name: 'clock'}
        ]
      }]
    }
  }
}
```
