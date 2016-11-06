'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inflection = require('inflection');

var _inflection2 = _interopRequireDefault(_inflection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (label, source) {
  return typeof label !== 'undefined' ? label : _inflection2.default.humanize(source);
}; // eslint-disable-line no-confusing-arrow


module.exports = exports['default'];