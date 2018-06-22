
## Setup

```bash
# Set up groups
$ mkdir /etc/osjs
$ edit /etc/osjs/groups.json

# Set up package blacklist (optional)
$ edit /etc/osjs/blacklist.json

# Change the configured authenticator (or use "shadow" here)
$ node osjs config:set --name=authenticator --value=pam

# Make OS.js reload after you log out
$ node osjs config:set --name=client.ReloadOnShutdown --value=true

# Update configuration and template files
$ node osjs build:config
```

By default, this module expects you to store the data in `/etc/osjs`, but you can modify this (see `server.modules.*` tree for settings).

To set up a user, use the `useradd` system command.

### groups.json

This is an example file for `groups.json`

```json
{
  "anders": ["admin"],
  "guest": ["api", "application", "upload", "fs"],
  "marcello": ["api", "application", "curl", "upload", "fs"]
}
```

### blacklist.json

This is an example file for `blacklist.json`

```json
{
  "anders": ["default/ApplicationDraw"]
}
```
