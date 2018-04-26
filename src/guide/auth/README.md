# Authentication Guide

OS.js provides options for customizing the authentication procedure.

> By default a "null" handler is user, which does not actually authenticate, but allows for OS.js to work.

## Changing

See [official resource list](/resource/official/README.md) for provided methods.

To use a handler, simply change the options passed on to the authentication provider:

> The README file of the module should provide more spesific exaples.

```javascript
// server
const instance = new Core(config, {
  registerDefault: {
    auth: {
      class: ClassReference
    }
  }
});
```
