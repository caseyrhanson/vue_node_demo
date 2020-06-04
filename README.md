# README

A simple vue.js/node.js demo of client (vue.js) and server (node.js) communication.

## Overview

In this, the server stores the state (location) of an object (rectangle).

The client sends up/down/left/right messages tied to button presses to server to update the location of rectangle.

The server sends the new rectangle position.

The client updates its GUI by redrawing the rectangle on the canvas element in the DOM.

## Project creation

Code below was used to create project.

```shell
mkdir -p vue_node_demo vue_node_demo/server && cd vue_node_demo/server;
npm init --y && npm install express socket.io --save && touch app.js;
cd ..;
vue create client && cd client && npm install socket.io --save;
```

## How to run

You need two terminals or to run these in background/screen/tmux.

### Server

To start server from repo directory: `cd server && npm run start`

### Client

To start server from repo directory: `cd client && npm run serve`

### Web browser

Navigate to the url returned from running the client code.

Another option is localhost:3000 (this didn't work for me).
