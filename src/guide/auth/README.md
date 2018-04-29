# Authentication Guide

OS.js provides options for customizing the authentication procedure.

Two adapters are provided by default:

* `server` (default)
* `localStorage`

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
