# Bus

A bus (event handler/event dispatcher) provides methods to assign and emit events.


## Usage

To create your own bus use the provided service:

```javascript
const bus = core.make('osjs/event-handler');
bus.on('greet', (who) => console.log(`Hello ${who}!`));
bus.emit('greeet', 'world');
```
