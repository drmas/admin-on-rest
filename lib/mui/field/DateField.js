'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash.get');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DateField = function DateField(_ref) {
    var source = _ref.source,
        record = _ref.record,
        _ref$showTime = _ref.showTime,
        showTime = _ref$showTime === undefined ? false : _ref$showTime,
        style = _ref.style;

    var value = (0, _lodash2.default)(record, source);
    var date = value instanceof Date ? value : new Date(value);
    return _react2.default.createElement(
        'span',
        { style: style },
        showTime ? date.toLocaleString() : date.toLocaleDateString()
    );
};

DateField.propTypes = {
    label: _react.PropTypes.string,
    record: _react.PropTypes.object,
    showTime: _react.PropTypes.bool,
    source: _react.PropTypes.string.isRequired,
    style: _react.PropTypes.object
};

exports.default = DateField;
module.exports = exports['default'];