'use strict';

var reporters = {
  compared: require('./reporters/compared'),
  default: require('./reporters/default'),
  stylish: require('./reporters/stylish')
};

module.exports = function (name) {
  var reporter = reporters[name || 'default'];

  if (!reporter) {
    throw new Error('Unknown reporter:' + reporter);
  }

  return reporter();
};
