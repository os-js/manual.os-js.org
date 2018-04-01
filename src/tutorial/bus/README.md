# Bus

To create your own bus (event handler/event dispatcher) use the provided service:

```javascript
const bus = core.make('osjs/event-handler');
bus.on('greet', (who) => console.log(`Hello ${who}!`));
bus.emit('greeet', 'world');
```
