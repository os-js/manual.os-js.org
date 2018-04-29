# VFS

The Virtual Filesystem (VFS) provides methods to use and manipulate local (or remote) filesystems.

## Usage

To use the Virtual Filesystem, make the provided service:

```javascript
const vfs = core.make('osjs/vfs');

const list = await vfs.readdir('osjs:/');
console.log(list);
```

## Methods

* `readdir` - Reads given directory
* `readfile` - Reads given file
* `writefile` - Writes to given file
* `copy` - Copy given file/directory
* `rename` - Rename or move given file/directory
* `mkdir` - Creates given directory
* `unlink` - Removes given file/directory
* `exists` - Checks if given path exists
* `stat` - Get the stat of given file/directory
* `url` - Create a URL to resource

## Custom Adapter

You can make your own Adapter for the methods above by creating a simple object:

### Client

```javascript
const adapter = (core) => ({
  readdir: (path, options) => Promise.resolve([])
});
```

### Server

```javascript
module.exports = (core) => ({
  readdir: vfs => (path) => Promise.resolve([])
});
```
