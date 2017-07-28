---
title: Connection
layout: layout.html
---

# Connection

There are several ways of connecting to your OS.js instance.

Please note that these are only applicable to the Node server.

## HTTP

```bash
$ node osjs config:set --name=connection --value=http
$ node osjs build:config
```

## HTTP2 (spdy)

Create your certificates and place them in `src/server/` (as ex "server.key" and "server.crt").

*If you run behind a proxy you should manage this there instead.*

```bash
$ npm install spdy
$ node osjs config:set --name=connection --value=http2
$ node osjs config:set --name=server.http.cert.name --value=server
$ node osjs build:config
```

## Websocket

```bash
$ node osjs config:set --name=connection --value=ws
$ node osjs build:config
```
