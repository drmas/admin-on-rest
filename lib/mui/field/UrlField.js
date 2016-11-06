'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash.get');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UrlField = function UrlField(_ref) {
    var source = _ref.source,
        _ref$record = _ref.record,
        record = _ref$record === undefined ? {} : _ref$record,
        style = _ref.style;
    return _react2.default.createElement(
        'a',
        { href: (0, _lodash2.default)(record, source), style: style },
        (0, _lodash2.default)(record, source)
    );
};

UrlField.propTypes = {
    record: _react.PropTypes.object,
    source: _react.PropTypes.string.isRequired,
    style: _react.PropTypes.object
};

exports.default = UrlField;
module.exports = exports['default'];