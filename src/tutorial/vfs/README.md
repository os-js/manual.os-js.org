# VFS

The Virtual Filesystem (VFS) provides methods to use and manipulate local (or remote) filesystems.

## Usage

To use the Virtual Filesystem, make the provided service:

```javascript
const vfs = core.make('osjs/vfs');

const list = vfs.readdir('/');
console.log(list);
```

## Methods

* `readdir` - Reads given directory
* `readfile` - Reads given file
* `writefile` - Writes to given file
* `rename` - Rename or move given file/directory
* `mkdir` - Creates given directory
* `unlink` - Removes given file/directory
* `exists` - Checks if given path exists
* `stat` - Get the stat of given file/directory
* `url` - Create a URL to resource

## Mountpoints

See [configuration](config/README.md) for how to set up default filesystem mountpoints.

You can also add and modify these on runtime:

```javascript
const fs = core.make('osjs/fs');

// Register
fs.register({
  name: 'custom'
});

// Mount
fs.mount('custom');

// Unmount
fs.unmount('custom');
```
