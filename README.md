#JSHint-Loader Reporter 
 
## Usage

`npm install --save-dev jshint-loader-reporter`

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
    reporter : require('jshint-loader-reporter')()
  }
};
``` 

Based on [jshint-stylish](https://github.com/sindresorhus/jshint-stylish) by [sindresorhus](https://github.com/sindresorhus).
