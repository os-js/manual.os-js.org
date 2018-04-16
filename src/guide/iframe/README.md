# IFrame Application

You can use the [official example iframe package](https://github.com/os-js/osjs-example-iframe-application) as a bolilerplate for your project.

This example includes bi-directional communication and is what will be used in this example.

> If you don't need bi-directional communication, you can skip everything except for the iframe creation in the `render()` method and webpack configuration (assuming you're providing source locally).

## Overview

To communicate between an OS.js application and external iframe source, the global `message` event is handled in the core and expects data in this format:

```json
{
  "pid": 0,
  "data": "OS.js"
}
```

When this format is detected, the recipient process with `pid` will be discovered and message forwarded to the internal bus that you can attach to with:

```javascript
// Assuming proc has pid of 0
proc.on('message', args => console.log(args)); // 'OS.js'
```

## Usage

Works like a [regular application](tutorial/application/README.md), except you need to add some custom message handling.

You can use an external source, but in this example it is assumed that you use the provided `data/index.html` file.

### Embedding

In the `index.js` file:

```javascript
win.render(($content, win) => {
  // Creates a new iframe dom element
  const iframe = document.createElement('iframe');
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.setAttribute('border', '0');
  iframe.addEventListener('load', () => {
    const ref = iframe.contentWindow;

    // This will proxy the window focus events to iframe
    win.on('focus', () => ref.focus());
    win.on('blur', () => ref.blur());

    const sendMessage = msg => ref.postMessage(msg, window.location.href);

    // After connection is established, this handler will process
    // all events coming from iframe.
    proc.on('message', (args) => {
      console.warn('[Application', 'Iframe sent', args);
    });

    // Send the process ID to our iframe to establish communication
    sendMessage({
      method: 'init',
      args: [proc.pid]
    });
  });

  // Finally set the source and attach
  iframe.src = proc.resource('/data/index.html');

  $content.appendChild(iframe);
});
```

Which has to be added to  `webpack.js`:

```javascript
  copy: [
    {from: path.resolve(__dirname, 'data'), to: 'data'}
  ],
```

And finally your `data/index.html` file:

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Only resources and scaling definitions will be relevant here -->
  </head>
  <body>
    <!-- Initial content -->
    <h1>Hello World</h1>

    <!-- Our dynamic output -->
    <div id="output"></div>

    <!-- Add scripts lastly -->
    <script>
(function() {
  // Cache our process id from initial handshake
  var processId;

  /**
   * OS.js expects you to send a message with the format:
   * {pid, data}
   */
  function postMessage() {
    top.postMessage({
      pid: processId,
      data: Array.prototype.slice.call(arguments)
    }, '*');
  }

  /**
   * Handle messages
   */
  window.addEventListener('message', function(ev) {
    var message = ev.data || {};
    var output = document.getElementById('output');

    switch (message.method) {
      // When we get handshake from the OS.js process,
      // answer with something
      case 'init':
        processId = message.args[0];

        output.appendChild(document.createTextNode('OS.js said hello!'));
        console.warn('[Iframe] OS.js sent init method from application', message.args, processId);
        postMessage('Yo!');
        break;

      // Anything else will just be logged to console
      default:
        console.warn('[Iframe] OS.js sent', message);
        break;
    }
  });
})();
    </script>
  </body>
</html>
```
