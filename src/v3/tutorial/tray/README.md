# Tray

You can place entries into the Tray which appears in the panel.

![Example](example.png)

## Usage

You can spawn a tray entry using:

```javascript
const entry = core.make('osjs/tray').create({
  title: 'My Tray Icon',
  icon: 'icon.src'
}, ev => console.log('clicked'))
```

If you're using this in a application, you probably want to destroy it when the user quits the application:

```javascript
proc.on('destroy', () => entry.destroy());
```
