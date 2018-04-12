# Tray

You can place entries into the Tray which appears in the panel.

## Usage

You can spawn a tray entry using:

```javascript
const entry = core.make('osjs/tray', {
  title: 'My Tray Icon',
  icon: 'icon.src',
  onclick: (ev) => console.log('Clicked!')
})
```

If you're using this in a application, you probably want to destroy it when the user quits the application:

```javascript
proc.on('destroy', () => tray.destroy());
```
