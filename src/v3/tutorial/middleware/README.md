---
description: This tutorial will show you how to use middleware.
full_title: Middleware Tutorial
---

# Middleware Tutorial

This tutorial will show you how to use middleware.

Applications can register middleware to provide features and change the behavior of other applications.

## Usage

Register a callback to middleware defined by a group name:

```javascript
const middlewareFunction = () => {};
core.make('osjs/middleware')
  .add('middleware-group-name', middlewareCallback);
```

Alternatively you can the global registration function:

```javascript
import osjs from 'osjs';

const middlewareFunction = () => {};
osjs.middleware('middleware-group-name', middlewareCallback);
```

To get the list of registered middleware from a group:

```javascript
const middlewareCallbacks = core.make('osjs/middleware')
  .get('middleware-group-name'); // => [middlewareFunction]
```

## Example

The [File Manager application](https://github.com/os-js/osjs-filemanager-application) uses middleware to construct the edit (context) menu.

You can add your own callbacks to this middleware if you need to for example launch your own application from this menu with the selected file as an argument. The middleware group name the File Manager exposes for this is `osjs/filemanager:menu:edit`.

To add your own menu entries with this middleware, you first have to change your package metadata:

```json
// metadata.json in our application
{
  "files": [
    "main.js",
    "main.css",
    // Add this line
    {"filename": "middleware.js", "type": "background"}
  ]
}
```

Then change the webpack config and add `middleware.js` as a new entry:

```javascript
entry: {
  main: path.resolve(__dirname, 'index.js'),
  middleware: path.resolve(__dirname, 'middleware.js')
}
```

Now the middleware can be added in the `middleware.js` file. In this example a callback is added to provide extra menu options based on options from the other application:

```javascript
import osjs from 'osjs';

osjs.middleware('osjs/filemanager:menu:edit', async (({file, isContextMenu}) => {
  // It should return an array of objects with `label`, `disabled` and `onclick`

  if (isContextMenu) {
    // Add this item only in context menu
    return [{
      label: 'Open in my application',
      disabled: !file || !file.isFile,
      onclick: () => osjs.run('my-app-name', {file})
    }];
  }

  // Don't add any item to the file manager's edit menu
  return [];
}));
```
