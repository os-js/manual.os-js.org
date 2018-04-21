# Filesystem Guide

OS.js uses an URI for filesystem paths.

> ` name:/path#fragment`

## Transports

A *Transport* is a module that makes the acual requests on behalf of OS.js APIs.

An example is the included `system` which uses the APIs provided by the server, which uses the underlying node `fs` module to provide a filesystem via the underlying OS.

## Mountpoints

A mountpoint is an object that defines a name, label and which transport to use. You can have several mountpoints using the same transport, but resolves to different locations.

An example would be the provided `osjs` mountpoint that resolves to `{root}/dist` (where "root" is the OS.js path) via the `system` transport.

### Adding Mountpoints

You can add mountpoints by updating your configuration files:

> Note that the `name` must match in both configurations

```javascript
// server
{
  vfs: {
    mountpoints: [{
      name: 'temp',
      transport: 'system', // You can leave this out as 'system' is default
      attributes: {
        root: '/tmp'
      }
    }]
  }
}

// client
{
  vfs: {
    mountpoints: [{
      name: 'temp',
      label: 'Temporary Files',
      transport: 'system' // You can leave this out as 'system' is default
     }]
   }
}
```

*Note you'll have to rebuild and reload server afterwards*
