---
description: This tutorial will explain how to create and use a service provider.
full_title: Service Provider Tutorial
---

# Service Provider Tutorial

This tutorial will explain how to create and use a service provider.

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
class ServiceProvider
{
  constructor(core, options = {}) {
    this.core = core;
    this.options = options;
  }

  /* The list of registered services */
  provides() {
    return [];
  }

  /* An optional list of dependant services */
  depends() {
    return [];
  }

  /* Initialize your services */
  async init() {}

  /* Start your services. Runs after all services has been init-ed */
  start() {}

  /* Clean up */
  destroy() {}
}
```

See [service provider guide](../../guide/provider/README.md) for more info.

To generate a new provider using the example via CLI run `npm run make:provider`.

> For general information about development see [development article](../../development/README.md).

### Instance factory

To register a factory:

```javascript
core.instance('service-name', (...args) => new SomeClass(...args));
```

### Singleton factory

To register a singleton:

```javascript
core.singleton('service-name', () => new SomeClass({foo: 'bar'}));
```

## Basic example

Register a singleton in form of an object with a method that opens `alert()`:

```javascript
// src/client/myprovider.js
export class MyApiServiceProvider
{
  constructor(core, options = {}) {
    this.core = core;
    this.options = options;
  }

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
