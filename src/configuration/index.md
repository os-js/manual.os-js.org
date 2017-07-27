---
title: Configuration
layout: layout.html
---

# Configuration

*Remember to regenerate configurations if you change anything with `node osjs build:config`, and restart your server (if applicable).*

This is a list of tasks to interact with the configuration files:

```bash
# Set a configuration entry
$ node osjs config:set --name=key --value=val

# Show a configuration entry
$ node osjs config:get --name=key

# Import from file
$ node osjs config:set --import=FILENAME

# Using a variable
$ node osjs config:set --name=foo --value=bar
$ node osjs config:set --name=foobar --value="%foo%baz" # Results in "barbaz"

# Customize output file (defaults to 900-custom.json)
$ node osjs config:set --name=foo --value=bar --out=src/config/910-something.json

# You can also add and remove from arrays
$ node osjs config:add --name=foo --value=jazz
$ node osjs config:add --name=foo --key=bar --value=jazz

# ...or objects (key)
$ node osjs config:remove --name=foo --value=jazz
$ node osjs config:remove --name=foo --key=bar
```

## General

### Adding overlays

```bash
$ node osjs config:add --name=overlays --value=overlays/foo
$ node osjs build
```

### Adding packages

This should give you an idea of how to add your own packages into a group:

```bash
$ mkdir src/packages/mypackages
$ git clone <repo> src/packages/mypackages/repo
$ node osjs config:add --name=repositories --value=mypackages
$ node osjs build:manifest
$ node osjs build:packages --repository=mypackages
```

### Toggling packages

You can also cherry-pick what packages to use:

```bash
$ node osjs config:add --name=packages.ForceEnable --value=repo/name
$ node osjs config:add --name=packages.ForceDisable --value=repo/name
```

### Adding preloads

You can add preload files instead of bundling them with Webpack:

```bash
$ node osjs config:add --name=client.Preloads --key=something --value=filename.js

```

### Changing base template

To change the base template, simply copy the default folder and change the configuration entry:

```bash
$ cp src/templates/dist/default src/templates/dist/mytemplate
$ node osjs config:set --name=build.template --value=mytemplate
```

### Setting session secret

Example:
```bash
$ node osjs config:set --name=server.http.session.secret --value=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)
```

### Add permission to API endpoint

```bash
$ ndoe osjs config:add --name=server.api.groups --key=methodname --value=groupname
```

### Add permission group to VFS mountpoint

```bash
$ ndoe osjs config:add --name=server.vfs.groups --key=mountname --value=groupname
```

## Mountpoints

To add the mountpoint `data:///` pointing to `/tmp`.

```json
{
  "client": {
    "VFS": {
      "Mountpoints": {
        "data": {
          "transport": "osjs",
          "description": "My data"
        }
      }
    }
  },
  "server": {
    "vfs": {
      "mounts": {
        "data": "/tmp"
      }
    }
  }
}
```

## Webpack

### Core builds

Look at `src/conf/500-build.json` for the base webpack configuration tree. This is loaded into `webpack.config.js` with some modifications.

### Package builds

Packages have their own `webpack.config.js`, but does not inherit any of the configuration mentioned above.

## Reverse-Proxy

You can use nginx to run behind a webserver to increase performance and security using a *reverse proxy*.

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

