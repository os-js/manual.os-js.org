---
title: Storage
layout: layout.html
---

# Storage

The `Storage` module handles all user settings and sessions etc.

* [Demo](#demo)
* [System](#system)
* [Database](#database)

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

**See the [Database Authenticator](/configuration/authenticator/database/) documentation on how to set up the database and its users.**

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
