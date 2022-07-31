---
description: A guide for (client-side) remote debugging
full_title: Remote Debuggin Guide
---

# Remote Debugging Guide

You can use software like [weinre](http://people.apache.org/~pmuellr/weinre/docs/latest/) to get access to a web developer console on remote devices, which this guide will walk you through setting up:

> Please note that this will not solve all your problems, but at least be able to inspect basic DOM and read the console.

## Install weinre

```bash
# Install
npm -g install weinre

# Run
weinre --boundHost -all- --httpPort 8001
```

You can now access http://localhost:8001

## Update your dist

In your `src/client/index.ejs` file:

```html
  <body>
    <script src="http://1.2.3.4:8001/target/target-script-min.js#osjs"></script>
  </body>
```

Replace `1.2.3.4` with the IP address of your OS.js server and `8001` with the port we specified above.

## Test

After you rebuild your dist you can run OS.js like normal and get some kind of response in your weinre interface at ex `http://localhost:8001/client/#osjs`.
