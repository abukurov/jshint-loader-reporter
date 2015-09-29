#JSHint-Loader Reporter 

Based on [jshint-stylish](https://github.com/sindresorhus/jshint-stylish) by [sindresorhus](https://github.com/sindresorhus). 
 
## Reporters

#### Default
![default reporter](docs/default.png)

#### Stylish
![stylish reporter](docs/stylish.png)

#### Compared
![compared reporter](docs/compared.png)

## Install
`$ npm install --save-dev jshint-loader-reporter`

## Usage

#### [Webpack](https://webpack.github.io/)

```js
// webpack.config.js 

module.exports = exports = {
  module : {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'jshint'
    }],
  },
  jshint : {
    reporter : require('jshint-loader-reporter')(reporterName)
  }
};
``` 
Where:
  * `reporterName` - (optional) name of reporter (default, stylish or compared)