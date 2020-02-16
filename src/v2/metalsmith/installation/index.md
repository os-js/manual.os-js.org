---
title: Installation
layout: layout.html
---

# Installation

To install **OS.js** you need these dependencies installed:

* Node v6 or newer
* Git

*Debian and Ubuntu users, you'll need the `nodejs-legacy` package*.

## Installation

```bash
$ git clone -b v2 --single-branch https://github.com/os-js/OS.js.git
$ cd OS.js

$ npm install
$ node osjs build
$ node osjs run
```

**That's it!** You should now have a running server. Simply open `http://localhost:8000` to give it a go.

*Optionally change host and or port*.
```bash
# If you have multiple interfaces you can choose which one to bind.
# 0.0.0.0 may be changed to your IP address of choice.
$ node osjs run --hostname=0.0.0.0 --port=8080
```

## Upgrading

```bash
$ git pull
$ npm install
$ node osjs build
```

*Remember to restart the server afterwards*.

## Reverse-Proxy

For best performance and reliability, you should run a reverse-proxy in front of the node server:

### nginx

```bash
server {
    listen 80;

    server_name osjs.local;

    location / { # Leading slash!
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_pass http://localhost:8000/; # The leading slash!
        proxy_redirect off; # Also note this
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

```

### apache

```bash
$ sudo a2enmod proxy
$ sudo a2enmod proxy_http
```

```bash
<VirtualHost *:80>
  ServerName osjs.domain.no
  ProxyPass / http://localhost:8000/
</VirtualHost>
```

## Using a Webserver

If you want to use the PHP server you'll need to configure your webserver. To generate a sample configuration, run:

```bash
# Apache htaccess (Required if you want to use apache)
$ node osjs generate:config --type=htaccess --env=prod

# Apache vhost
$ node osjs generate:config --type=apache --env=prod

# Lighttpd
$ node osjs generate:config --type=lighttpd --env=prod

# Nginx
$ node osjs generate:config --type=nginx --env=prod
```


## Standalone builds

If you want to build OS.js completely standalone (to run from ex `file://`), simply use the `--standalone` flag when building and the `dist` directory is directly ready for usage.

## Webhosts

If you own a c-panel instance (or similar with PHP) and don't have direct access to the filesystem or shell (or simply no Node support), you can copy the installation over to your public root and run via `/OS.js/dist`.

If you want to serve the installation within a custom path, like ex. `/osjs/` you'll have to manually do some operations before copying:

```bash
$ node osjs config:set --name=server.vfs.mounts.home --value="%SROOT%/vfs/home/%USERNAME%"
$ node osjs build:config
$ cp -r src/server/php dist/server
$ edit dist/api.php
```
