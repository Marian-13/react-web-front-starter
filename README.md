# Front of Logistics App.

Front of Logistics App.

## Building and running on localhost

First install dependencies:

```sh
yarn install
```

To run in hot module reloading mode:

```sh
yarn start
```

To check ESLint rules

```sh
yarn run eslint
```

To create a production build:

```sh
yarn run build-prod
```

To create a development build:

```sh
yarn run build-dev
```

## Running

Open the file `dist/index.html` in your browser

## Credits

Initially made with [createapp.dev](https://createapp.dev/):  

| Option | Value |
| - | - |
| main library | React|
| transpiler | Babel|
| styling | CSS Modules, Sass|
| image | SVG, PNG|
| utilities | moment, lodash|
| linting | ESLint, Prettier|
| react | React hot loader|

[Testing a React app with Jasmine npm](https://jasmine.github.io/tutorials/react_with_npm)

[Code from Dan Abramov's tutorial published on egghead.io](https://github.com/Alendorff/Redux-tutorial-todo-app)

[Using Redux DevTools in production](https://medium.com/@zalmoxis/using-redux-devtools-in-production-4c5b56c5600f)

## TODO

1. Webpack production config for [redux-dev-tools](https://twitter.com/addyosmani/status/823554600951156737?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed&ref_url=https%3A%2F%2Fcdn.embedly.com%2Fwidgets%2Fmedia.html%3Ftype%3Dtext%252Fhtml%26key%3Dd04bfffea46d4aeda930ec88cc64b87c%26schema%3Dtwitter%26url%3Dhttps%253A%2F%2Ftwitter.com%2Faddyosmani%2Fstatus%2F823554600951156737%26image%3Dhttps%253A%2F%2Fi.embed.ly%2F1%2Fimage%253Furl%253Dhttps%25253A%25252F%25252Fpbs.twimg.com%25252Fmedia%25252FC23YbsWVQAAsel7.jpg%25253Alarge%2526key%253D4fce0568f2ce49e8b54624ef71a8a5bd), [source maps](https://webpack.js.org/configuration/devtool/).
