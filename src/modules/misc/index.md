---
title: Misc
layout: layout.html
---

# Misc

This page documents other modules in OS.js.

## Dialogs

Just extend the `core/dialog` class and put it into `window.OSjs.Dialogs`. You can do this in your package or using a preload (see [configuration](/configuration/#adding-preloads).

```javascript
class SomeCoolDialog extends Dialog {}

OSjs.Dialogs.DialogName = SomeCoolDialog;
```

To create a new dialog:
```javascript
import Dialog from 'core/dialog';

Dialog.create('DialogName', {foo: 'bar'}, (ev, btn, result) => {
  // ev = Browser event
  // btn = Button used to close dialog
  // result =  Any result the dialog generated
});
```

## Menu

To create a menu:

```javascript
import * as Menu from 'gui/menu';

Menu.create([{
  title: 'Some title',
  onClick: () => console.log('clicked')
}, {
  title: 'Submenu',
  menu: [{
    title: 'Submenu item'
  }]
}], ev); // Or {x, y}
```

## Process

```javascript
import Process from 'core/process';

// Launch with name
Process.create('PackageClassName', {foo: 'bar'}); // Promise

// Launch with array
Process.createFromArray(['PackageClassName']); // Promise

// Launch from file (guesses what application will be used)
Process.createFromFile(new FileMetadata('home://my-file.txt', 'text/plain'));
```

## Windows

```javascript
import Window from 'core/window';
import WindowManager from 'core/windowmanager';

// Create a window
const win = new Window();

// And add it via one of three ways:
application._addWindow(win);
window._addChild(win);
WindowManager.instance.addWindow(win);
```

## Error Handler

```javascript
OSjs.error('title', 'description', 'message', new Error('exception here if available'));
```

## GUI Element

```javascript

// DOM Manipulation and events
guiElement
  .show()
  .hide()
  .empty()
  .remove()
  .append()
  .appendHTML()
  .querySelector()
  .querySelectorAll()
  .css('key' /*[, 'value'*/)
  .on('name', function() {} /*, useCapture*/)

// Attributes and values
guiElement
  .get('key');
  .set('key', 'value');

// Inputs and views
guiElement
  .focus()
  .blur()

// Data (like dropdowns and views)
guiElement
  .clear();
  .add('entry');
  .add(['entry', 'entry']);
  .remove('id' /*, 'key'*/);
  .patch(['entry', 'entry'])

// Create a GUI element programatically
const guiElement = GUIElement.create('gui-element-name', {
  parameter: 'value'
});
parentElement.append(guiElement);

// ... from DOM element
const guiElement = GUIElement.createFromNode(el);

// .. with HTML
parentElement.appendHTML('<gui-element-name></gui-element-name>', optionalWinReference);
```
