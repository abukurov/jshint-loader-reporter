'use strict';

var chalk = require('chalk');

module.exports = function () {
  return function (errors) {
    if (!errors) {
      return null;
    }

    console.log(chalk.underline(this.resourcePath));

    errors.forEach(function(err) {
      if (!err) {
        return null;
      }

      var isError = err.code && err.code[0] === 'E';

      console.log('  ',
        chalk.gray('line ' + err.line),
        chalk.gray('col ' + err.character),
        chalk.gray(':: ' + err.evidence ? err.evidence.trim() : 'no evidence'));

      console.log('  ', chalk[isError ? 'red' : 'blue'](err.reason), '\n');
    });
  }
};