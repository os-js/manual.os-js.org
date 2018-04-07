# Configuration

You can find the configuration files (by default) in `src/conf/` directory.

## Client

| Key             | Default value | Description                                              |
| --------------- | ------------- | -------------------------------------------------------- |
| development     | `true`        | Enable development mode                                  |
| standalone      | `false`       | Enable standalone mode                                   |
| public          | `<auto>`      | Root public path for resolving urls                      |
| theme           | `Standard`    | Default theme metadata name                              |
| login.username  | `demo`        | Default login username                                   |
| login.password  | `demo`        | Default login password                                   |
| ws.protocol     | `<auto>`      | WebSocket protocol                                       |
| ws.port         | `<auto>`      | WebSocket port                                           |
| ws.hostname     | `<auto>`      | WebSocket hostname                                       |
| ws.path         | `<auto>`      | WebSocket path                                           |

## Server

| Key                         | Default value | Description                                             |
| --------------------------- | ------------- | ------------------------------------------------------- |
| logging                     | `true`        | Log HTTP requests                                       |
| index                       | `index.html`  | Index HTML file                                         |
| hostname                    | `localhost`   | Server hostname                                         |
| port                        | `8000`        | Server port                                             |
| public                      | `/dist`       | The dist directory                                      |
| morgan                      | `tiny`        | Morgan logging mode                                     |
| ws.port                     | `<auto>`      | WebSocket port (defaults to upgrade)                    |
| session.secret              | `osjs`        | HTTP Session secret                                     |
| session.resave              | `false`       | HTTP Session resave option                              |
| session.saveUninitialized   | `false`       | HTTP Save uninitialzed sessions                         |
| session.cookie.secure       | `<auto>`      | HTTP Secure cookie                                      |

## Webpack

The module `osjs-cli` builds a Webpack configuration for you.

It consists of a basic setup with:

* `sass-loader`
* `babel-loader`
* `file-loader`
* `copy-webpack-plugin`
* `html-webpack-plugin`

You can easily make your own or use your existing project configuration (if you want to embed OS.js).

This is the base template used for the core, themes and applications:

```javascript
{
  mode: 'development',
  devtool: 'source-map',
  context: '<auto>',
  entry: {/* ... */},
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new CopyWebpackPlugin(/* ... */)
  ],
  optimization: {
    minimize: false,
    splitChunks: false
    runtimeChunk: false
  },
  output: {
    path: '<auto>',
    sourceMapFilename: '[file].map',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        use: [
          {
            loader: require.resolve('file-loader'),
            options: {}
          }
        ]
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: {
            loader: require.resolve('style-loader')
          },
          use: [
            {
              loader: require.resolve('css-loader'),
              options: {
                minimize: false,
                sourceMap: true,
              }
            },
            {
              loader: require.resolve('sass-loader'),
              options: {
                minimize: false,
                sourceMap: true,
                includePaths: ['<auto>']
              }
            }
          ]
        })
      },
      {
        test: /\.js$/,
        exclude: ['<auto>']
        include: ['<auto>']
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            cacheDirectory: true,
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/transform-runtime'
            ]
          }
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        include: /typeface/,
        use: {
          loader: require.resolve('file-loader'),
          options: {
            name: 'fonts/[name].[ext]'
          }
        }
      },
      {
        test: /\.svg$/,
        exclude: /typeface/,
        use: {
          loader: require.resolve('file-loader')
        }
      }
    ]
  }
};
```
