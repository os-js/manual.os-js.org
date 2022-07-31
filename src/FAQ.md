# FAQ

This is a curated list of frequently asked questions.

## Q: What is this ?

OS.js is a free and open-source cloud/web desktop platform.

It serves web applications in an interface familiar to most desktop users.

## Q: How do I get support ?

Send an email to hello@os-js.org or check out the [following links](https://github.com/os-js/OS.js#links).

## Q: How do I report a bug or feature requests ?

The best way is to create an issue on Github. Read [this issue](https://github.com/os-js/OS.js/issues/705) for more information.

You can also contact me via methods listed above, but an issue is preferred.

## Q: How can I get started with development ?

Read this manual. It has chapters about [installation](install/README.md), [general overview](resource/overview/README.md), [development](development/README.md), Tutorials, Guides and other articles.

This project uses the following technologies: HTML, CSS (using Sass/SCSS), JavaScript (ES6 and Node), Webpack and npm.

Most of the articles assume you at least have basic understanding of these.

If you still have questions, head into the [chatroom](https://gitter.im/os-js/OS.js).

## Q: How do I contribute ?

See the following resources:

* [Contributing overview](https://gitter.im/os-js/OS.js)
* [Contributing guide](development/README.md#contributing)

## Q: How do I perform installation on windows ?

[Currently](https://github.com/os-js/OS.js/issues/710) there are no automated installers, so you either have to use [git shell](https://git-scm.com/), or PowerShell.

Using windows explorer, enter the OS.js installation directory and press `ALT+D`, then type `powershell` and press `ENTER`.

## Q: Can I make changes to your software ?

Yes. This project is open-source and [licensed](https://github.com/os-js/OS.js/blob/LICENSE) under BSD-2-clause which allows you to modify and distribute the software.

If you want to contribute changes back to the community, look at "How do I contribute" above.

## Q: How do I add login ?

By default OS.js is set up to automatically log in with a "demo" user and a dummy authentication adapter.

The adapter is what authenticates a user and you can [customize it](guide/auth/README.md). An example is the [database adapter](https://github.com/os-js/osjs-database-auth).

## Q: Can I add feature X or application Y ?

Since OS.js runs on JavaScript within a browser environment and Node on the backend, these are your limitations.

Anything that can use these technologies can technically run on this platform.

## Q: How do I add an existing web application ?

The easiest way to add an existing web application is to to [create a new application](tutorial/application/README.md#creation) and simply use an [iframe](tutorial/iframe/README.md).

This way you can leave your entire codebase intact and just load it as you would normally, but within a Window.

### Apps hosted outside OS.js

An example on how to display an already running separate application:

https://gist.github.com/andersevenrud/637ef06e47aa32a96a06789b36d9a623

> This file is a modified version of what `npm run make:application` creates.

### Hosted within OS.js

See the [IFrames tutorial](tutorial/iframe/README.md).

## Q: Can I upgrade from v2 ?

No. OS.js v3 is not compatible with the v2 APIs.

If you developed your v2 applications using IFrames or custom frameworks, *transitioning* to v3 is possible.

## Q: Is there a matrix channel ?

Gitter can now be used via Matrix officially:

https://matrix.to/#/#os-js_OS.js:gitter.im?utm_source=gitter
