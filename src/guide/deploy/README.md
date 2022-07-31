---
description: A guide for deploying OS.js
full_title: Deployment Guide
---

# Deployment Guide

Follow the regular installation guide to set up your OS.js installation.

This article contains instructions and recommendations for deploying your OS.js instance in a production environment.

## Checklist

This is the general checklist for setting up OS.js in a production environment:

1. Set a [session secret](#session).
2. Disable [development mode](#configuration).
3. Make an [optimized](#building) build.
4. Set up a [reverse-proxy](#reverse-proxy).
5. Set [process management](#process-management).

## Building

To optimize builds and remove debugging (logging and functionality), make sure to use the node environmental variable:

```bash
NODE_ENV=production npm run build

NODE_ENV=production npm run serve
```

## Legacy Browsers

To support browsers like IE11 and upward, you have to install the following dependencies:

```bash
npm install --save-dev core-js regenerator-runtime element-remove whatwg-fetch
```

Then modify your `src/client/index.js` file and add this to the top:

```javascript
import 'core-js/stable';
import 'element-remove';
import 'whatwg-fetch';
import 'regenerator-runtime/runtime';
```

## Reverse Proxy

To make OS.js available via port `80/http` (or for SSL `443/https`) it is advised to configure a webserver as a reverse-proxy
instead of exposing the OS.js node server directly to the internet (or intranet).

Before proceeding note the following:

1. It is *not* recommended to reconfigure the OS.js server to run on either of these ports as this will impede performance and stability.
2. This guide assumes you have `osjs.test` set up as your hostname. Make sure this resolves in your DNS and/or hosts file.
3. You can create your own [self-signed certificates](https://github.com/FiloSottile/mkcert) if you want to use SSL/HTTPS.
4. In production you should terminate SSL (HTTPS) on your reverse-proxy (ex. nginx), not the node server!

### nginx

Create a new virtual host file or replace the default one provided by your OS:

```nginx
server {
    listen 80;
    server_name osjs.test;

    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_pass http://localhost:8000/;
        proxy_redirect off;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### apache

Create a new virtual host file or replace the default one provided by your OS:

> [info] Requires the modules `rewrite` `proxy` and `proxy_http`

```apache
<VirtualHost *:80>
  ServerName osjs.test

  ProxyPass / http://localhost:8000/
  ProxyPassReverse / http://localhost:8000/
  ProxyPreserveHost On

  RewriteEngine on
  RewriteCond %{HTTP:UPGRADE} ^WebSocket$ [NC]
  RewriteCond %{HTTP:CONNECTION} Upgrade$ [NC]
  RewriteRule .* ws://localhost:8000%{REQUEST_URI} [P]
</VirtualHost>
```

*Please note that on some apache versions HTTP connection upgrades do not work for Websockets* (connection issues like dropouts, etc.), and you might have to reconfigure your client to use a dedicated connection path:

> [info] Requires the modules `proxy`, `proxy_wstunnel` and `proxy_http`

```apache
<VirtualHost *:80>
  ServerName osjs.test
  ProxyPass /ws ws://localhost:8000/
  ProxyPassReverse /ws ws://localhost:8000/

  ProxyPass / http://localhost:8000/
  ProxyPassReverse / http://localhost:8000/
</VirtualHost>
```

Then set your Websocket path to `/ws` in `src/client/config.js`:

> [info] Remember to rebuild your client afterwards with `npm run build`

```javascript
module.exports = {
  ws: {
    uri: '/ws'
  }
};
```

## Process Management

You can use a process manager like [PM2](http://pm2.keymetrics.io/) to keep your server alive.

### systemd

You can also use systemd to keep a single instance of the node server alive. It will start on boot and restart on crashes etc.

> [info] This assumes that you are running OS.js as a dedicated `osjs` host user and it is installed in `/opt/osjs`. You can change this as you see fit.

```
[Unit]
Description=OS.js Node Server
Documentation=https://manual.os-js.org
After=network.target

[Service]
Environment=NODE_ENV=production
Type=simple
User=osjs
ExecStart=node /opt/osjs/src/server/index.js
Restart=on-failure
WorkingDirectory=/opt/osjs

[Install]
WantedBy=multi-user.target
```

## Session

You can reconfigure the server to use any session store compatible with [express-session](https://github.com/expressjs/session).

To set the session store, update your configuration:

```javascript
{
  session: {
    /* Set a custom session storage */
    store: {
      module: require.resolve('connect-redis'),
      options: {
        /* See session store options */
      }
    },

    /* Set session secret */
    options: {
      secret: 'yoursupersecret'
    }
  }
}
```

## Scaling

By default the server uses server-side session storage and can be [shared across instances](#session).
Stateless is supported, but requires custom middleware and authentication adapters.

This can be achieved using Redis or any non-local session storage module (default is local filesystem).

## Running separately

You can also run the client and server separately (even physically), with some extra configuration.

> Note that if you're hosting on different hostnames, you have to set up CORS. [Example for nginx](https://enable-cors.org/server_nginx.html).

Serve the `dist/` directory where your client is, and on the server, just run with the normal `npm run serve` command or with the methods described above.

In this example we configure:

* **Client** http://my-awesome-most.com/osjs
* **Server** http://some-other-host.com/osjs/server

```javascript
// src/client/config.js
// By default all of these settings are detected with the URL you're using to visit OS.js

{
  // HTTP Requests
  http: {
    hostname: 'some-other-host.com',
    port: null,
    path: '/osjs/server'
  },

  // WebSocket requests
  ws: {
    hostname: 'some-other-host.com',
    port: null,
    path: '/osjs/server'
  },
}
```

By default the HTTP protocol of the client is used, but it can be overridden with ex. `protocol: 'https:'`.
