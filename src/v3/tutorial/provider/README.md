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

See [service provider guide](../../guide/provider/README.md) for more info.

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

## Basic example

Register a singleton in form of an object with a method that opens `alert()`:

```javascript
// src/client/myprovider.js
import {ServiceProvider} from '@osjs/common';

export class MyApiServiceProvider extends ServiceProvider
{
  provides() {
    return ['namespace/api'];
  }

  async init() {
    this.core.singleton('namespace/api', () => ({
      greet: name => alert(`Hello ${name}!`)
    }));
  }
}

// src/client/index.js
import {MyApiServiceProvider} from './myprovider.js';

// ...
osjs.register(MyApiServiceProvider);
// ...
```

You can test this by entering the following in your browser developer console:

```javascript
OSjs.make('namespace/api').greet('World');
```

and you should see a browser alert box.
