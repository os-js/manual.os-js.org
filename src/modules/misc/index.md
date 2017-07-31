---
title: Misc
layout: layout.html
---

# Misc

This page documents other modules in OS.js.

## Common Client Modules

```javascript
/*
 * Raise an error
 */
OSjs.error('title', 'description', 'message', new Error('exception here if available'));

/*
 * Creating dialogs
 */
import Dialog from 'core/dialog';

Dialog.create('DialogName', {foo: 'bar'}, (ev, btn, result) => {
  // ev = Browser event
  // btn = Button used to close dialog
  // result =  Any result the dialog generated
});

/*
 * Adding Windows
 */
application._addWindow(win);
window._addChild(win);

import WindowManager from 'core/windowmanager';
WindowManager.instance.addWindow(win);

/*
 * Creating menus
 */
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

/*
 * Launching processes
 */

import Process from 'core/process';

Process.create('PackageClassName', {foo: 'bar'}); // Promise

Process.createFromArray(['PackageClassName']); // Promise

Process.createFromFile(new FileMetadata('home://my-file.txt', 'text/plain'));

/*
 * GUIElement instance methods
 */

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
