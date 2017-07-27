---
title: Development
layout: layout.html
---

# Development

This guide will show you how to set up a development enviroment and to contribute changes.

## Environment

You don't have to make any changes to get a development environment up and running.

## Contributing

Follow normal Github workflow:

- Make a github account
- Fork OS.js on Github to your account
- Clone the newly created repository
- Create a new branch
- Do work, commit and push
- Then open a pull-request on Github

The patch will then be reviewed and finally merged when given the OK.

The submitted changes will be analyzed and tested with various automated soultions, so to prevent errors you should follow the eslint style rules provided.

You can run `node osjs test` to run unit tests and eslint (`node osjs mocha` and `node osjs eslint` respectively).

## Style Guide

Use two spaces for indentation, semicolons and spacing around brackets. A `.eslintrc` end `.editorconfig` is provided for you to plug into your editor or IDE of choice.
