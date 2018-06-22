---
title: Database Authenticator
layout: layout.html
---

# Database Authenticator

This is just a simple database backend that allows you to store your users (and settings etc.).

**Also set up the [Database Storage](/configuration/storage/#database) module for this to work as intended.**

**NOTE:** Remember to restart the server to reload configuration changes.

To create a new user after you've set up:

```bash
$ node bin/add-user.js add anders admin
$ node bin/add-user.js pwd anders
$ mkdir vfs/home/anders
```

If you're using the PHP server, you need to install composer dependencies (and skip dependency steps below):

```bash
$ cd src/server/php
$ composer install
```

## Sqlite

### Dependencies

In your OS.js installation directory:

```bash
$ npm install --no-save sqlite3 bcrypt
```

### Setup

```bash
# Configure
$ node osjs config:set --name=authenticator --value=database
$ node osjs config:set --name=server.modules.auth.database.driver --value=sqlite

# Rebuild
$ node osjs build:config
```

#### Set up database

```bash
$ cp src/templates/misc/authstorage.sqlite src/server/
```

## Mysql

### Dependencies

In your OS.js installation directory:

```bash
$ npm install --no-save mysql bcrypt
```

### Setup

```bash
# Configure
$ node osjs config:set --name=authenticator --value=database
$ node osjs config:set --name=server.modules.auth.database.driver --value=mysql
$ node osjs config:set --name=server.modules.auth.database.mysql.host --value=localhost
$ node osjs config:set --name=server.modules.auth.database.mysql.user --value=osjsuser
$ node osjs config:set --name=server.modules.auth.database.mysql.password --value=osjspassword
$ node osjs config:set --name=server.modules.auth.database.mysql.database --value=osjs
$ node osjs config:set --name=client.ReloadOnShutdown --value=true

# Rebuild
$ node osjs build:config
```

#### Set up database
```bash
# Set up database
$ mysql -h localhost -u root -p

mysql> CREATE DATABASE osjs;
mysql> GRANT USAGE ON *.* TO osjsuser@localhost IDENTIFIED BY 'osjspassword';
mysql> GRANT ALL PRIVILEGES ON osjs.* TO osjsuser@localhost;

# Then set up database tables
$ mysql -h localhost -u root -p osjs < src/templates/misc/authstorage.sql
```
