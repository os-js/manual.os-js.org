---
title: Storage
layout: layout.html
---

# Storage

The `Storage` module handles all user settings and sessions etc.

* [Demo](#demo)
* [System](#system)
* [Database](#database)
* [Make your own](#make-your-own)

## Demo

This module only saves the data in the *Browser* using `LocalStorage`.

```bash
$ node osjs config:set --name=storage --value=demo
$ node osjs build:config

```

## System

Stores the data in the filesystem (by default `/home/<username>`)

```bash
$ node osjs config:set --name=storage --value=system
$ node osjs build:config
```

## Database

Stores user data in a database.

**See the [Authenticators](/modules/authenticator/#database) documentation on how to set up the database and its users.**

### Sqlite

```bash
$ node osjs config:set --name=storage --value=database
$ node osjs config:set --name=server.modules.storage.database.driver --value=sqlite
$ node osjs build:config
```

### Mysql

```bash
$ node osjs config:set --name=storage --value=database
$ node osjs config:set --name=server.modules.storage.database.driver --value=mysql
$ node osjs config:set --name=server.modules.storage.database.mysql.host --value=localhost
$ node osjs config:set --name=server.modules.storage.database.mysql.user --value=osjsuser
$ node osjs config:set --name=server.modules.storage.database.mysql.password --value=osjspassword
$ node osjs config:set --name=server.modules.storage.database.mysql.database --value=osjs
$ node osjs build:config
```

You can also just use the database settings from the `Authentication Module`

```bash
$ node osjs config:set --name=storage --value=database
$ node osjs config:set --name=server.modules.storage.database --value="%server.modules.auth.database%"
$ node osjs build:config
```

## Make your own

These classes are written in ES6. Look at the API Documentation for methods, etc.

### Client

```javascript
class MyStorage extends Storage {
  saveSettings() {}
  saveSession() {}
}
```

### Server

```javascript
class MyStorage extends Storage {
  setSettings() {}
  getSettings() {}
}
```
