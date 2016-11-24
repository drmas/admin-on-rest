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

var _title = require('../../util/title');

var _title2 = _interopRequireDefault(_title);

var _SelectField = require('material-ui/SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * An Input component for a select box, using an array of objects for the options
 *
 * Pass possible options as an array of objects in the 'choices' attribute.
 *
 * By default, the options are built from:
 *  - the 'id' property as the option value,
 *  - the 'name' property an the option text
 *
 * @example
 * <SelectInput source="gender" choices={[
 *    { id: 'M', name: 'Male' },
 *    { id: 'F', name: 'Female' },
 * ]} />
 *
 * You can also customize the properties to use for the option name and value,
 * thanks to the 'optionText' and 'optionValue' attributes.
 *
 * @example
 * <SelectInput label="Author" source="author_id" optionText="full_name" optionValue="_id" choices={[
 *    { _id: 123, full_name: 'Leo Tolstoi', sex: 'M' },
 *    { _id: 456, full_name: 'Jane Austen', sex: 'F' },
 * ]} />
 */
var SelectInput = function (_Component) {
    (0, _inherits3.default)(SelectInput, _Component);

    function SelectInput() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, SelectInput);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SelectInput.__proto__ || Object.getPrototypeOf(SelectInput)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (e, _, value) {
            return _this.props.input.onChange(value);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(SelectInput, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                allowEmpty = _props.allowEmpty,
                input = _props.input,
                label = _props.label,
                choices = _props.choices,
                optionText = _props.optionText,
                optionValue = _props.optionValue,
                options = _props.options,
                source = _props.source,
                style = _props.style;

            return _react2.default.createElement(
                _SelectField2.default,
                (0, _extends3.default)({
                    menuStyle: { maxHeight: '41px', overflowY: 'hidden' },
                    floatingLabelText: (0, _title2.default)(label, source),
                    value: input.value,
                    onChange: this.onChange,
                    autoWidth: true,
                    style: style
                }, options),
                allowEmpty && _react2.default.createElement(_MenuItem2.default, { value: null, primaryText: '' }),
                choices.map(function (choice) {
                    return _react2.default.createElement(_MenuItem2.default, { key: choice[optionValue], primaryText: choice[optionText], value: choice[optionValue] });
                })
            );
        }
    }]);
    return SelectInput;
}(_react.Component);

SelectInput.propTypes = {
    allowEmpty: _react.PropTypes.bool.isRequired,
    choices: _react.PropTypes.arrayOf(_react.PropTypes.object),
    includesLabel: _react.PropTypes.bool.isRequired,
    input: _react.PropTypes.object,
    label: _react.PropTypes.string,
    options: _react.PropTypes.object,
    optionText: _react.PropTypes.string.isRequired,
    optionValue: _react.PropTypes.string.isRequired,
    source: _react.PropTypes.string,
    style: _react.PropTypes.object
};

SelectInput.defaultProps = {
    allowEmpty: false,
    choices: [],
    options: {},
    optionText: 'name',
    optionValue: 'id',
    includesLabel: true
};

exports.default = SelectInput;
module.exports = exports['default'];