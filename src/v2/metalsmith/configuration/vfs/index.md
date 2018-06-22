---
title: VFS
layout: layout.html
---

# VFS

This VFS is configured via `src/conf`. Below are some guides on how to set up different mountpoints:

**Note that third party services using OAuth creates popup windows (new tabs), so the client has to allow these**

## Adding a mountpoint

To add the mountpoint `data:///` pointing to `/tmp`.

```bash
$ node osjs config:mount --name=data --description="My Data" --path=/data
```

## Enabling GoogleDrive

First you have to create [API Credentials](https://console.developers.google.com/iam-admin/projects?pli=1) for OS.js to allow OS.js access.

Create a new project, then find the "Credentials" menu and make a new OAuth Client ID. Make sure to enable the "Drive API" and "Google+" permission.

**Only works over HTTPS**

```bash
$ node osjs config:set --name=client.GoogleAPI.ClientId --value=YOUR_CLIENT_ID
$ node osjs config:set --name=client.VFS.Mountpoints.google-drive.enabled --value=true
$ node osjs build:config
```

## Enabling OneDrive

First you have to create [API Credentials](https://msdn.microsoft.com/en-us/library/ff751474.aspx) to allow OS.js access.

Set your redirect URL to `http://your-host/windows-live-oauth.html`.

```bash
$ node osjs config:set --name=client.WindowsLiveAPI.ClientId --value=YOUR_CLIENT_ID
$ node osjs config:set --name=client.VFS.Mountpoints.onedrive.enabled --value=true
$ node osjs build:config
```

## Enabling DropBox

First you have to create [API Credentials](https://www.dropbox.com/login?cont=https%3A%2F%2Fwww.dropbox.com%2Fdevelopers%2Fapps) to allow OS.js access.

Set your redirect URL to `http://your-host/dropbox-oauth.html`.

```bash
$ node osjs config:set --name=client.DropboxAPI.ClientId --value=YOUR_CLIENT_ID
$ node osjs config:set --name=client.VFS.Mountpoints.dropbox.enabled --value=true
$ node osjs build:config
```
