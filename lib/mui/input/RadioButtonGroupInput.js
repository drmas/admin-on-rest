'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RadioButton = require('material-ui/RadioButton');

var _Labeled = require('./Labeled');

var _Labeled2 = _interopRequireDefault(_Labeled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * An Input component for a radio button group, using an array of objects for the options
 *
 * Pass possible options as an array of objects in the 'choices' attribute.
 *
 * By default, the options are built from:
 *  - the 'id' property as the option value,
 *  - the 'name' property an the option text
 *
 * @example
 * <RadioButtonGroupInput source="gender" choices={[
 *    { id: 'M', name: 'Male' },
 *    { id: 'F', label: 'Female' },
 * ]} />
 *
 * You can also customize the properties to use for the option name and value,
 * thanks to the 'optionText' and 'optionValue' attributes.
 *
 * @example
 * <RadioButtonGroupInput label="Author" source="author_id" optionText="full_name" optionValue="_id" choices={[
 *    { _id: 123, full_name: 'Leo Tolstoi', sex: 'M' },
 *    { _id: 456, full_name: 'Jane Austen', sex: 'F' },
 * ]} />
 */
var RadioButtonGroupInput = function (_Component) {
    (0, _inherits3.default)(RadioButtonGroupInput, _Component);

    function RadioButtonGroupInput() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RadioButtonGroupInput);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RadioButtonGroupInput.__proto__ || Object.getPrototypeOf(RadioButtonGroupInput)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (event, value) {
            _this.props.input.onChange(value);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RadioButtonGroupInput, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                label = _props.label,
                source = _props.source,
                record = _props.record,
                choices = _props.choices,
                optionText = _props.optionText,
                optionValue = _props.optionValue,
                options = _props.options,
                style = _props.style;

            return _react2.default.createElement(
                _Labeled2.default,
                { label: label, onChange: this.handleChange, source: source },
                _react2.default.createElement(
                    _RadioButton.RadioButtonGroup,
                    (0, _extends3.default)({
                        name: source,
                        defaultSelected: record[source],
                        style: style
                    }, options),
                    choices.map(function (choice) {
                        return _react2.default.createElement(_RadioButton.RadioButton, { key: choice[optionText], label: choice[optionText], value: choice[optionValue] });
                    })
                )
            );
        }
    }]);
    return RadioButtonGroupInput;
}(_react.Component);

RadioButtonGroupInput.propTypes = {
    choices: _react.PropTypes.arrayOf(_react.PropTypes.object),
    includesLabel: _react.PropTypes.bool.isRequired,
    label: _react.PropTypes.string,
    onChange: _react.PropTypes.func,
    options: _react.PropTypes.object,
    optionText: _react.PropTypes.string.isRequired,
    optionValue: _react.PropTypes.string.isRequired,
    record: _react.PropTypes.object,
    source: _react.PropTypes.string,
    style: _react.PropTypes.object
};

RadioButtonGroupInput.defaultProps = {
    record: {},
    options: {},
    optionText: 'name',
    optionValue: 'id',
    includesLabel: true
};

exports.default = RadioButtonGroupInput;
module.exports = exports['default'];