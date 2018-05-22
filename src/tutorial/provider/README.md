# Service Provider

A Service Provider registers services that provide features for OS.js.

> Service Providers have the same interface and initialization/startup procedure in both client and server.

## Usage

To create an instance of a service provided:

```javascript
core.make('service-name', ...args);
```

## Custom Service Provider

This is the service provider interface:

```javascript
import {ServiceProvider} from '@osjs/common';

class ServiceProvider extends ServiceProvider {
  /*
  constructor(core, options = {}) {
    this.core = core;
    this.options = options;
  }
  */

  async init() {} // Register your services here
  start() {} // Anything you want to do after successfully booting
  destroy() {}
}
```

See [installing a service provider](/install/README.md#service-providers).

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

