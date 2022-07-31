---
description: A guide on installing and using service providers
full_title: Service Provider Guide
---

# Service Provider Guide

Service Providers are the main way to provide features and extensions for OS.js.

## Installation

Service providers are usually provided as npm packages for easy installation:

```shell
npm install --save some-provider
```

If you're developing your own service provider you can use npm to install from a
physical path on your computer or skip this step entirely if you plan on bundling
it within the `src/` directory of your installation.

## Setup

> Please note, on `node` you should use `require/module.exports` instead of `import/export`.

<!-- -->

> [info] If you're adding client-side service provider, you need to rebuild your
> client with `npm run build`.

```javascript
import MyService from 'some-provider'

osjs.register(MyService)
```

### Configuring

You can pass on arguments to the constructor of the Service Provider.

> This is the *second* argument in the `constructor()`.

```javascript
osjs.register(MyService, {
  args: {
    foo: 'bar'
  }
});
```

### Load Order

Loading of services are preformed in two stages. One when the core is initialized
(aka "boot") and one when the core is started up (aka "start").

The default is the "start" stage, but if you want your service to load before
this stage, set the `before` parameter when you register a service:

> [info] The client performs the "start" step only after the user has logged in.
> The server runs "start" immediately after "boot".


```javascript
osjs.register(MyService, {
  before: true
})
```

Load order can also be set by creating a dependency chain. If your service provider
depends on other services, you must define this so that the core always loads
things in the correct order.

These can be either set in the service provider:

```javascript
class MyService {
  depends() {
    return ['osjs/core']
  }
}
```

Or you can defined them in your bootstrap:

```javascript
osjs.register(MyService, {
  depends: ['osjs/core']
})
```
