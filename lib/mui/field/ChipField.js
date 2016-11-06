'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Chip = require('material-ui/Chip');

var _Chip2 = _interopRequireDefault(_Chip);

var _lodash = require('lodash.get');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChipField = function ChipField(_ref) {
    var source = _ref.source,
        _ref$record = _ref.record,
        record = _ref$record === undefined ? {} : _ref$record,
        _ref$style = _ref.style,
        style = _ref$style === undefined ? { margin: 4 } : _ref$style;
    return _react2.default.createElement(
        _Chip2.default,
        { style: style },
        (0, _lodash2.default)(record, source)
    );
};

ChipField.propTypes = {
    label: _react.PropTypes.string,
    source: _react.PropTypes.string.isRequired,
    record: _react.PropTypes.object,
    style: _react.PropTypes.object
};

exports.default = ChipField;
module.exports = exports['default'];