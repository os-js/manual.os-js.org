# Panel Item

The default Panel Service provider allows you to add (or override) panel items:

```javascript
import {PanelItem} from '@osjs/panels';
class MyPanelItem extends PanelItem {}

osjs.register(PanelServiceProvider, {
  args: {
    registry: {
      'my-panel-item': MyPanelItem
    }
  }
});
```
