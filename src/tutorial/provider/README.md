# Service Provider

A Service Provider registers services that provide features for OS.js.

These are loaded on startup on both the client and server.

## Creation

This is the service provider interface:

```javascript
class ServiceProvider {
  constructor(core) { this.core = core;  }
  async init() {} // Register your services here
  start() {} // Anything you want to do after successfully booting
  destroy() {}
}
```

See [installing a service provider](install/README.md#service-provider).

### Register: Factory

To register a factory:

```javascript
core.instance('service-name', (...args) => new SomeClass(...args));
```

### Register: Singletons

To register a singleton:

```javascript
core.singleton('service-name', () => new SomeClass({foo: 'bar'}));
```

## Usage

To create an instance of a service provided:

```javascript
core.make('service-name', ...args);
```
