---
description: A guide on how to customize the virtual filesystem
full_title: Filesystem Guide
---

# Filesystem Guide

OS.js uses an URI for filesystem paths.

> ` name:/path#fragment`

## Adapters

A *Adapter* is a module that makes the actual requests on behalf of OS.js APIs.

An example is the included `system` which uses the APIs provided by the server, which uses the underlying node `fs` module to provide a filesystem via the underlying OS.

### Adding Adapters

You can add custom adapters via the VFS service provider:

#### Client

```javascript
import customAdapter from 'custom-adapter';

osjs.register(VFSServiceProvider, {
  args: {
    adapters: {
      custom: customAdapter
    }
  }
});
```

#### Server

```javascript
const customAdapter = require('custom-adapter');

osjs.register(VFSServiceProvider, {
  args: {
    adapters: {
      webdav: customAdapter
    }
  }
});
```

## Mountpoints

A mountpoint is an object that defines a name, label and which adapter to use. You can have several mountpoints using the same adapter, but resolves to different locations.

An example would be the provided `osjs` mountpoint that resolves to `{root}/dist` (where "root" is the OS.js path) via the `system` adapter.

### Adding Mountpoints

You can add mountpoints by updating your configuration files:

> Note that the `name` must match in both configurations

*Note you'll have to rebuild and reload server afterwards*

#### Client

```javascript
{
  vfs: {
    mountpoints: [{
      name: 'temp',
      label: 'Temporary Files',
      adapter: 'system' // You can leave this out as 'system' is default
     }]
   }
}
```

#### Server

```javascript
{
  vfs: {
    mountpoints: [{
      name: 'temp',
      adapter: 'system', // You can leave this out as 'system' is default
      attributes: {
        root: '/tmp'
      }
    }]
  }
}
```

### Assigning Groups

You can lock down mountpoints and VFS methods with groups.

Example configuration (server):

```json
{
  vfs: {
    mountpoints: [{
      name: 'osjs',
      attributes: {
        root: '{root}/dist',
        groups: [
          // Only allow users with the 'admin' group
          'admin',

          // Or, alternativelly do the same, but only for the 'readdir'
          // endpoint
          {
            readdir: ['admin']
          }
        ]
      }
    }]
  }
}
```
