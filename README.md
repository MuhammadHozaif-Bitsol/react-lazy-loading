# LazyLoading

A minimal React demo of lazy-loading an image with `react-lazy-load-image-component`. The page renders a tall spacer block followed by an image, so the image is only loaded once you scroll down to it.

## Tech stack

- React 19
- Vite 8
- react-lazy-load-image-component
- ESLint

## Features

- `LazyLoadImage` renders `src/assets/bear.jpg` (600x400) below a 120vh spacer; open the browser Network tab and scroll to see the image request fire only when it comes into view

## Getting started

```bash
npm install
npm run dev       # start the Vite dev server
npm run build     # production build to dist/
npm run preview   # preview the production build
npm run lint      # run ESLint
```

No environment variables are required.

## Project structure

```
src/
  App.jsx       Spacer + LazyLoadImage demo
  main.jsx      React entry point
  assets/       Demo image
index.html
vite.config.js
```
