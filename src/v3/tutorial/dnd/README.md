---
description: This tutorial explains how to use the Drag-and-Drop (DnD) APIs.
full_title: Drag-and-Drop Tutorial
---

# Drag-and-Drop Tutorial

This tutorial explains how to use the Drag-and-Drop (DnD) APIs.

## Usage

### Draggable

```javascript
const {draggable} = core.make('osjs/dnd');

draggable(element, {
  data: {hello: 'World!'}
});
```

### Droppable

```javascript
const {droppable} = core.make('osjs/dnd');

droppable(element, {
  ondrop: (ev, data) => console.log(data) // => {hello: 'World!'}
});
```

## Usage in Hyperapp

A very basic example:

```javascript
h(Component, {oncreate: element => draggable(element, {data: {hello: 'World!'}})});
```
