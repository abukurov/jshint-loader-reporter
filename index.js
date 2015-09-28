'use strict';

var chalk = require('chalk');

function log() {
  console.log.apply(console, Array.prototype.slice.apply(arguments));
}

module.exports = function () {
  return function (errors) {

    log(chalk.underline(this.resourcePath));

    errors.forEach(function(err) {
      if (!err) { return; }

      var isError = err.code && err.code[0] === 'E';

      log('  ',
        chalk.gray('line ' + err.line),
        chalk.gray('col ' + err.character),
        chalk.gray(':: ' + err.evidence ? err.evidence.trim() : 'no evidence'));

      log('  ', chalk[isError ? 'red' : 'blue'](err.reason), '\n');
    });
  }
};
