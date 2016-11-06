'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _title = require('../../util/title');

var _title2 = _interopRequireDefault(_title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DisabledInput = function DisabledInput(_ref) {
    var input = _ref.input,
        label = _ref.label,
        source = _ref.source;
    return _react2.default.createElement(_TextField2.default, {
        value: input.value,
        floatingLabelText: (0, _title2.default)(label, source),
        disabled: true
    });
};

DisabledInput.propTypes = {
    includesLabel: _react.PropTypes.bool,
    input: _react.PropTypes.object,
    label: _react.PropTypes.string,
    source: _react.PropTypes.string.isRequired
};

DisabledInput.defaultProps = {
    includesLabel: true
};

exports.default = DisabledInput;
module.exports = exports['default'];