'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _title = require('../../util/title');

var _title2 = _interopRequireDefault(_title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextInput = function TextInput(_ref) {
    var input = _ref.input,
        label = _ref.label,
        _ref$meta = _ref.meta,
        touched = _ref$meta.touched,
        error = _ref$meta.error,
        options = _ref.options,
        type = _ref.type,
        source = _ref.source,
        style = _ref.style;
    return _react2.default.createElement(_TextField2.default, (0, _extends3.default)({
        value: input.value,
        onChange: input.onChange,
        type: type,
        floatingLabelText: (0, _title2.default)(label, source),
        errorText: touched && error,
        style: style
    }, options));
};

TextInput.propTypes = {
    includesLabel: _react.PropTypes.bool.isRequired,
    input: _react.PropTypes.object,
    label: _react.PropTypes.string,
    meta: _react.PropTypes.object,
    name: _react.PropTypes.string,
    onChange: _react.PropTypes.func,
    options: _react.PropTypes.object,
    source: _react.PropTypes.string.isRequired,
    style: _react.PropTypes.object,
    type: _react.PropTypes.string,
    validation: _react.PropTypes.object
};

TextInput.defaultProps = {
    includesLabel: true,
    options: {},
    type: 'text'
};

exports.default = TextInput;
module.exports = exports['default'];