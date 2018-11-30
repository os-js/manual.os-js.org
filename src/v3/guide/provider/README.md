---
description: A guide on installing and using service providers
full_title: Service Provider Guide
---

# Service Provider Guide

OS.js provides options for customizing the settings storage.

## Installation

```
npm install --save some-provider
```

## Setup

> Please note, on `node` you should use `require` instead of `import/export`.

<!-- -->

> [info] If you're adding client-side service provider, you need to rebuild your distro with `npm run build`.

```javascript
import provider from 'some-provider';

core.register(provider);
```

### Configuring

You can pass on arguments to the constructor of the Service Provider.

> This is the *second* argument in the `constructor()`.

```javascript
core.register(provider, {
  args: {
    foo: 'bar'
  }
});
```

### Load Order

By default any provider without any load order defined will be loaded at random (`Promise.all()`).

To set a specific order, you can either set dependencies or the `before` attribute:

```javascript
core.register(provider, {
  // Makes sure these provider services has been loaded first
  depends: ['osjs/code'],

  // Load this provider before the user has logged in
  before: true
});
```
