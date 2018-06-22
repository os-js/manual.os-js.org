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

* `readdir(file)` - Reads given directory
* `readfile(file)` - Reads given file
* `writefile(file, data)` - Writes to given file
* `copy(src, dst)` - Copy given file/directory
* `rename(src, dst)` - Rename or move given file/directory
* `mkdir(file)` - Creates given directory
* `unlink(file)` - Removes given file/directory
* `exists(file)` - Checks if given path exists
* `stat(file)` - Get the stat of given file/directory
* `url(file)` - Create a URL to resource

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
