---
title: FAQ
layout: layout.html
---

# FAQ

This is a compiled list of the most frequently asked questions.

## Q: I can't connect to my server. What's wrong ?

When the server starts you should see something like this in the log output:

```
Creating http server on ::@8000 with
```

If it does not bind to what you expect, you can launch the server with `--hostname=0.0.0.0` (the same applies for the port) to specify where to bind the server.

### Q: How do I add login for users ?

You need to set up [Authentication](/configuration/authenticator/).

### Q: How do I install a package ?

To install a package you have to download it and place it inside a "repository" (aka group) in `src/packages`.

After it has been placed into one of these repositories, it has to be added to the global manifest and then built.

You can read more about it [in this article](/packages/).

### Q: Why aren't my packages showing up in the client ?

Did you run `node osjs build:manifest` ?

### Q: Why am I getting 'preloading failed' on my package ?

This usually means that the server responded with a 404 (file not found) or some syntax error in the file prevented it from loading.

You can see the response in the server log output, or if you're familiar with browser developer tools, in the "Network" tab.

Look at the output in `node osjs build` tasks for errors and warnings.

### Q: What browsers does this run on ?

Any "modern" browser. In this case IE11 (IE10 might work) or later or any other browser.

### Q: Can I use this in commercial projects ?

Absolutely! Just make sure to include the license and copyright in your releases and source-code.

You can read the clauses in the LICENCE file that comes with the source code repository.

### Q: Where do I get support ?

Send me an [email](mailto:hello@os-js.org), come into the [chat](https://gitter.im/os-js/OS.js) (where you can do private messaging), or join the [forums](http://community.os.js.org/).

### Q: How do I help out ?

Look at the [contribution document](https://github.com/os-js/OS.js/blob/master/CONTRIBUTING.md).
