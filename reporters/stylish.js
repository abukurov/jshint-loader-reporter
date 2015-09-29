'use strict';

var chalk = require('chalk');
var table = require('text-table');

module.exports = function () {
  return function (errors) {
    if (!errors) {
      return null;
    }

    var rows = [];

    console.log(chalk.underline(this.resourcePath));

    errors.forEach(function (err) {
      if (!err) {
        return null;
      }

      rows.push([
        '  ',
        chalk.gray('line ' + err.line),
        chalk.gray('col ' + err.character),
        chalk[(err.code[0] === 'E') ? 'red' : 'blue'](err.reason)
      ]);
    });

    console.log(table(rows));
  };
};