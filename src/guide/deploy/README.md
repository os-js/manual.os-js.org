# Deployment guide

Follow the regular installation guide.

## Production

Make sure to disable the `development` configuration setting so detailed error messages are exposed to the end-user.

> Use a process manager like [PM2](http://pm2.keymetrics.io/) to manage your server processes.

### Optimization

To optimize for production, use the node environmental variable:

```
NODE_ENV=production npm run build:dist
```

### Reverse Proxy

To make OS.js available via port `80/http` (or `443/https`) you have to configure a webserver as a reverse-proxy.

> It is *not* recommended to reconfigure the OS.js server to run on either of these ports as this will impede performance and stability.

> This guide assumes you have `osjs.test` set up as your hostname. Make sure this resolves in your DNS and/or hosts file.

#### nginx

Create a new virtual host file or replace the default one provided by your OS:

```
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

#### apache

Create a new virtual host file or replace the default one provided by your OS:

> Requires the modules `rewrite` `proxy` and `http_proxy`

```
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
