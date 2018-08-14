const _fs = require('node-fs-extra');
const _path = require('path');

const Metalsmith = require('metalsmith');
const layouts = require('metalsmith-layouts');
const markdown = require('metalsmith-markdown');
const permalinks = require('metalsmith-permalinks');
const less = require('metalsmith-less')
const ignore = require('metalsmith-ignore');
const watch = require('metalsmith-watch');
const metalsmithPrism = require('metalsmith-prism');
const sitemap = require('metalsmith-sitemap');
const mdinclude = require('metalsmith-mdinclude');

const handlebars = require('handlebars');
handlebars.registerHelper('startsWith', function(prefix, str, options) {
  if ( str.substr(0, prefix.length) === prefix ) {
    return options.fn(this);
  }
  return options.inverse(this);
});
handlebars.registerHelper('pathClass', function(str) {
  return str.replace(/[^A-z0-9]/g, '_');
});

var i = Metalsmith(_path.resolve(__dirname, 'src/v2'))
  .metadata({
    sitename: "OS.js",
    siteurl: "https://manual.os-js.org/",
    description: "OS.js"
  })
  .source(_path.resolve(__dirname, 'src/v2/metalsmith'))
  .destination(_path.resolve(__dirname, '_metalsmith'))
  .clean(true)
  .use(mdinclude())
  .use(less())
  .use(markdown({langPrefix: 'language-'}))
  .use(metalsmithPrism())
  .use(permalinks({
    relative: false
  }))
  .use(ignore([
    'less/**',
    'less/.*'
  ]))
  .use(layouts({
    engine: 'handlebars'
  }))
  .use(sitemap({
    hostname: "https://manual.os-js.org/v2",
    omitIndex: true
  }));

i.build(function(err) {
  console.log(err || 'done');
  if (err) throw err;
});

