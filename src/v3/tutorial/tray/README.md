---
description: OS.js v3 Tray Tutorial
full_title: Tray Tutorial
---

# Tray Tutorial

This tutorial demonstrates how to create and manage tray icons.

![Example](example.png)

## Usage

You can spawn a tray entry using:

```javascript
const entry = core.make('osjs/tray', {
  title: 'My Tray Icon',
  icon: 'icon.src',
  onclick: ev => console.log('clicked'),
  oncontextmenu: ev => console.log('contextmenu')
});
```

If you're using this in a application, you probably want to destroy it when the user quits the application:

```javascript
proc.on('destroy', () => entry.destroy());
```
