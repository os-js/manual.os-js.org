---
description: This tutorial shows you how to interact with and extend the virtual filesystems.
full_title: VFS Tutorial
---

# VFS Tutorial

This tutorial shows you how to interact with and extend the virtual filesystems.

The Virtual Filesystem (VFS) provides methods to use and manipulate local (or remote) filesystems.

## Usage

To use the Virtual Filesystem, make the provided service:

```javascript
const vfs = core.make('osjs/vfs');

const list = await vfs.readdir('osjs:/');
console.log(list);
```

## Methods

* `readdir(file) => stat[]` - Reads given directory (see [stat](#stat))
* `search(root, pattern) => stat[]` - Reads given root directory and searches for a pattern (regexp or wildchar)
* `readfile(file, type) => *type` - Reads given file (see [encoding](#encoding))
* `writefile(file, data) => number` - Writes to given file (returns file size if possible)
* `copy(src, dst) => boolean` - Copy given file/directory
* `rename(src, dst) => boolean` - Rename or move given file/directory
* `mkdir(file) => boolean` - Creates given directory
* `unlink(file) => boolean` - Removes given file/directory
* `exists(file) => boolean` - Checks if given path exists
* `stat(file) => stat` - Get the stat of given file/directory (see [stat](#stat))
* `url(file) => string` - Create a URL to resource

### File argument

All VFS methods accepts either a `string` or a **[Stat](#stat)** `Object`.
The internal API will always try to convert a `string` to a `Stat` (via resolution),
but on filesystems that does not have a traditional file structure (ex. Google Drive);
this *might* not work, so it is recommended that you use the `Object` signature whenever possible.

> NOTE: All official applications and libraries use the object approach and is compatible with all filesystems.
> If you're an application developer you should take this into consideration.

```javascript
// Ex
.readdir('osjs:/')

// Vs
.readdir({path: 'osjs:/'})
```

On a non-traditional filesystem, this might look like:

```javascript
.readdir({path: 'custom-mountpoint:/', id: 'some-unique-resource-id'})
```

A File `Object` consists of the [Stat](#stat) described below.

## Stat

The VFS responds with file statistics in some cases, containing:

```json
{
  "isDirectory": boolean,
  "isFile": boolean,
  "mime": string,
  "size": integer,
  "path": string,
  "filename": string,
  "id": string?,
  "parent_id": string?,
  "stat": object? {
    /* See https://nodejs.org/api/fs.html#fs_class_fs_stats */
  }
}
```

## Encoding

By default, files are read as `string`, but you can specify any of these types:

* `string` - A `UTF-8` encoded string
* `uri` - A `base64` encoded resource link
* `blob` - A `Blob`,
* `arraybuffer` - An `ArrayBuffer`

## Custom VFS Adapter

You can make your own Adapter for the methods above by creating a simple object:

To set up your adapter see the [VFS guide](/guide/filesystem/README.md).

To generate a new adapter using the example via CLI run `npm run make:vfs`.

> For general information about development see [development article](../../development/README.md).

### Client

```javascript
const adapter = (core) => ({
  readdir: async (path, options) => ([])
});

export default adapter;
```

### Server

```javascript
module.exports = (core) => ({
  readdir: vfs => async (path) => ([])
});
```

## Server API

You can interact with the VFS on the server-side as well, but it works slightly different.

> [info] API with interface that resembles the client is in progress.

```javascript
core vfs = core.make('osjs/vfs');

// Gets the real filesystem path of a file in the VFS
// NOTE: This does not work for filesystems that is not a mountpoint or physical drive
const realPath = vfs.realpath('home:/filename', {username: 'osjs'});

// Gets the mime type of a real filesystem file path
const mimeType = vfs.mime(realPath);

// Performs a VFS operation based on a HTTP action
vfs.request('readdir', req, res)
  .then(result => {})

// Performs a VFS operation directly
vfs.call({method: 'readdir', user: {username: 'demo'}}, 'home:/')
  .then(result => {})
```
