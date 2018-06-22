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
$ npm install --no-save spdy
$ node osjs config:set --name=connection --value=http2
$ node osjs config:set --name=server.http.cert.name --value=server
$ node osjs build:config
```

## Websocket

```bash
$ node osjs config:set --name=connection --value=ws
$ node osjs build:config
```

**Note**: You can combine HTTP2 and WS: `node osjs config:set --name=connection=http2+ws`

## Sessions

You can use any session manager supported by [Express session](https://github.com/expressjs/session).

Simply install if via npm and reconfigure:

```bash
$ node osjs config:set --name=server.http.session.module --value=some-session-module
```

If your module requires custom settings, you can add this to the configuration tree:

```json
{
"server": {
  "http": {
    "session": {
      "options": {
        "some-session-module": {

            // Your settings here

        }
      }
    }
  }
}

```
