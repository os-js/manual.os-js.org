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

class ServiceProvider extends ServiceProvider
{
  /*
  constructor(core, options = {}) {
    this.core = core;
    this.options = options;
  }
  */

  /* The list of registered services */
  provides() {
    return [];
  }

  /* Initialize your services */
  async init() {}

  /* Start your services */
  start() {}

  /* Clean up */
  destroy() {}
}
```

See [installing a service provider](../../install/README.md#service-providers).

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

