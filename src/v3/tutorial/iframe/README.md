---
description: A tutorial on how to create Iframe applications in OS.js
full_title: IFrame Tutorial
---

# IFrame Application Tutorial

This tutorial will show you how to create an [application](../application/README.md) with an iframe window.

> For general information about development see [development article](../../development/README.md).

## Creation

To create a new application package, run the following command inside your OS.js installation: `npm run make:iframe-application`.

The created application will be placed in `src/packages` (by default) and is based on the [official example](https://github.com/os-js/osjs-example-iframe-application).

> Remember to run `npm run package:discover` after you generate a package to make it available.

## Usage

This application simply opens up a Window and loads the content from `data/` via a IFrame.

If you want to load remote content, simply remove this directory (optional) and modify the `index.js` file to fit your needs.

> [warning] Note that if you don't host the remote content yourself or if it's not hosted by a server/provider that allows for embedding,
> loading of remote content may fail due to security measures.

## Bi-directional communication

OS.js has an internal event listener that can intercept iframe messages and forward them to the Window the content was loaded from.

This allows you to interact with the underlying OS.js APIs and services from an IFrame.

### IFrame implementation

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Hello World</h1>
    <script>
      // Store the application and window ID we added to the iframe source
      var pid = parseInt(window.location.search.match(/pid=([^&]*)/)[1], 10);
      var wid = parseInt(window.location.search.match(/wid=([^&]*)/)[1], 10);

      // Global function to send a message to OS.js Core that forwards it to the correct application/window.
      function sendMessage() {
        top.postMessage({
          name: 'osjs/iframe:message',
          params: [{
            pid: pid,
            wid: wid,
            args: Array.prototype.slice.call(arguments)
          }]
        }, '*');
      }

      // Listen from messages from OS.js Application
      window.addEventListener('message', function(ev) {
        // We should get "Pong" here
        console.warn('Message from OS.js', ev.data);
      });

      // Send an example message
      sendMessage('Ping');
    </script>
  </body>
</html>
```

### Application implementation

```javascript
proc.createWindow({dimension: {width: 400, height: 400}})
  .on('destroy', () => proc.destroy())
  .render(($content, win) => {
    // Add our process and window id to iframe URL
    const suffix = `?pid=${proc.pid}&wid=${win.wid}`;

    // Create an iframe
    const iframe = document.createElement('iframe');
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.src = proc.resource('/data/index.html') + suffix;
    iframe.setAttribute('border', '0');

    // Bind window events to iframe
    win.on('blur', () => iframe.contentWindow.blur());
    win.on('focus', () => iframe.contentWindow.focus());

    // Create an even for posting messages to an iframe (for easy reuse)
    win.on('iframe:post', msg => iframe.contentWindow.postMessage(msg, window.location.href));

    // Listen for messages from iframe
    win.on('iframe:get', msg => {
      // We should get "Ping" here
      console.warn('Message from Iframe', msg);

      // In this case we just send "Pong" back
      win.emit('iframe:post', 'Pong');
    });

    $content.appendChild(iframe);
  });
```
