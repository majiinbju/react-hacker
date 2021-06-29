# React Hacker

A simple React starter that's perfect for messing around.

## Overview

This package includes the following:

- [Babel](https://babeljs.io/docs/en/)
- [Webpack](https://webpack.js.org/concepts/)
- [Emotion CSS in JS](https://emotion.sh/docs/introduction)
- [React Bootstrap](https://react-bootstrap.github.io/components/alerts/)
- [Font Awesome 4.7](https://fontawesome.com/v4.7/icons/)
- [React Router](https://reactrouter.com/web/guides/quick-start)
- [Lodash](https://lodash.com/docs/4.17.15)
- [Axios](https://axios-http.com/docs/intro)
- [ESint](https://www.npmjs.com/package/eslint-config-airbnb)
- [Airbnb ESlint Config](https://www.npmjs.com/package/eslint-config-airbnb)
- [Prettier](https://prettier.io/docs/en/index.html)

## Usage

The starter consists of a simple two page template to demonstrate that everything is hooked up and working properly. There are examples of how to use Emotion CSS in various ways in the code, and an example of how to use the file loader to import an image on the Home page.

- `git clone https://github.com/DZuz14/react-hacker.git`
- `cd react-hacker`
- `npm i` or `yarn`
- `npm start` or `yarn start`

If your browser does not automatically open, visit `http://localhost:8080`.

## Notes

You don't need to import React anymore like this:

- `import React from 'react'`

Reason being is that this uses JSX pragma, which handles that for us. The top of any new React related file that you create should look like this:

```
/** @jsx jsx */
import { useState } from 'react'
import { css, jsx } from '@emotion/react'
```
