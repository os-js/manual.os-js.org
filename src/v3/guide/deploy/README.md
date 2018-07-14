# Deployment guide

Follow the regular installation guide to set up your OS.js installation.

This article contains instructions and recommendations for deploying your OS.js instance on a production environment.

## Checklist

This is the general checklist for setting up OS.js in a production environment:

1. Set a [session secret](#session).
2. Disable [development mode](#configuration).
3. Make an [optimized](#optimization) build.
4. Set up a [reverse-proxy](#reverse-proxy).
5. Use a process manager like [PM2](http://pm2.keymetrics.io/) to manage your server processes.

## Configuration

In your client and server configurations, make sure to disable development mode:

```json
{
  "development": false
}
```

## Optimization

To optimize for production, use the node environmental variable:

```bash
NODE_ENV=production npm run build:dist
```

## Reverse Proxy

To make OS.js available via port `80/http` (or for SSL `443/https`) you have to configure a webserver as a reverse-proxy.

> Notes:
> 1. It is *not* recommended to reconfigure the OS.js server to run on either of these ports as this will impede performance and stability.
> 2. This guide assumes you have `osjs.test` set up as your hostname. Make sure this resolves in your DNS and/or hosts file.
> 3. You can create your own [self-signed certificates](https://github.com/FiloSottile/mkcert) if you want to use SSL/HTTPS.
> 4. The node server cannot be reconfigured to run on HTTPS or HTTP2. You can however configure your reverse-proxy to handle this.

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

> Requires the modules `rewrite` `proxy` and `http_proxy`

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

The OS.js server is *stateless*, so you can scale this over many instances as long as you share the [session](#session) data.

This can be achieved using Redis or any non-local session storage module (default is local filesystem).
