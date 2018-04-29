# Authentication Guide

OS.js provides options for customizing the authentication procedure.

> By default a "null" handler is user, which does not actually authenticate, but allows for OS.js to work.

## Configuring adapter

See [official resource list](/resource/official/README.md) for provided adapters.

> The README file of the module should provide more spesific exaples.

### Server

```javascript
const instance = new Core(config, {
  registerDefault: {
    auth: {
      adapter: fn
    }
  }
});
```
