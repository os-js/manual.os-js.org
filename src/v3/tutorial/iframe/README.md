---
description: A tutorial on how to create Iframe applications in OS.js v3
full_title: IFrame Tutorial
---

# IFrame Application Tutorial

This tutorial will show you how to create an [application](../application/README.md) with an iframe window.

## Creation

To create a new application package, run the following command inside your OS.js installation: `npm run make:iframe-application`.

> The created application will be placed in `src/packages` (by default) and is based on the [official example](https://github.com/os-js/osjs-example-iframe-application).

<!-- -->

> For general information about development see [development article](../../development/README.md).

## Bi-directional communication

This is an example on how to establish communication in your iframe:

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Hello World</h1>
    <script>
      // Global function to send a message to OS.js Application
      function sendMessage() {
        top.postMessage({
          name: 'osjs/iframe:message',
          params: [{
            pid: parseInt(window.location.search.match(/pid=([^&]*)/)[1], 10),
            wid: parseInt(window.location.search.match(/wid=([^&]*)/)[1], 10),
            args: Array.prototype.slice.call(arguments)
          }]
        }, '*');
      }

      // Listen from messages from OS.js Application
      window.addEventListener('message', function(ev) {
        console.warn('Message from OS.js', ev.data);
      });

      // Send an example message
      sendMessage('Ping');
    </script>
  </body>
</html>
```

## OS.js Application Source

On the OS.js-side you can use the following events:

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
    win.on('iframe:post', msg => iframe.contentWindow.postMessage(msg, window.location.href));

    // Listen for messages from iframe
    win.on('iframe:get', msg => {
      console.warn('Message from Iframe', msg);
      win.emit('iframe:post', 'Pong');
    });

    $content.appendChild(iframe);
  });
```
