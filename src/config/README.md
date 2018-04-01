# Configuration

You can find the configuration files (by default) in `src/conf/` directory.

## Client

TODO. See defaults: https://github.com/os-js/osjs-core/blob/master/src/core.js#L34

## Server

TODO. See defaults: https://github.com/os-js/osjs-server/blob/master/src/server.js#L41

## Webpack

The module `osjs-cli` builds a Webpack configuration for you.

It consists of a basic setup with:

* `sass-loader`
* `babel-loader`
* `file-loader`
* `copy-webpack-plugin`
* `html-webpack-plugin`

You can easily make your own or use your existing project configuration (if you want to embed OS.js).
