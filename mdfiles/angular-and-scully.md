---
title: Angular and Scully
description: 'How to build a blog with Angular and Scully'
published: true
---

# Angular and Scully

## Setup

1. Put "defaultProject": "app" into angular.json
1. Run ng add @scullyio/init
1. Make shure the scully.app.config.ts was generated
1. Run ng genetate @scullyio/init:markdown
1. Bind the generated component with your app

## Add posts

1. Run ng generate @scullyio/init:post --name="NAME"

## Run server

1. Run ng build
1. Run npx scully
1. Run npm scully serve
