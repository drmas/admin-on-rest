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

/**
 * Use any component as read-only Input, labeled just like other Inputs.
 *
 * Useful to use a Field in the Edit or Create components.
 * The child component will receive the current record.
 *
 * @example
 * <Labeled label="Comments">
 *     <FooComponent source="title" />
 * </Labeled>
 */
var Labeled = function Labeled(_ref) {
    var input = _ref.input,
        label = _ref.label,
        resource = _ref.resource,
        record = _ref.record,
        onChange = _ref.onChange,
        basePath = _ref.basePath,
        children = _ref.children,
        source = _ref.source,
        _ref$disabled = _ref.disabled,
        disabled = _ref$disabled === undefined ? true : _ref$disabled,
        _ref$style = _ref.style,
        style = _ref$style === undefined ? { paddingTop: '2em', height: 'auto' } : _ref$style;
    return _react2.default.createElement(
        _TextField2.default,
        {
            floatingLabelText: (0, _title2.default)(label, source),
            floatingLabelFixed: true,
            disabled: disabled,
            fullWidth: true,
            underlineShow: false,
            style: style
        },
        children && _react2.default.cloneElement(children, { input: input, record: record, resource: resource, onChange: onChange, basePath: basePath })
    );
};

Labeled.propTypes = {
    basePath: _react.PropTypes.string,
    children: _react.PropTypes.element,
    disabled: _react.PropTypes.bool,
    input: _react.PropTypes.object,
    label: _react.PropTypes.string,
    onChange: _react.PropTypes.func,
    record: _react.PropTypes.object,
    resource: _react.PropTypes.string,
    source: _react.PropTypes.string.isRequired,
    style: _react.PropTypes.object
};

exports.default = Labeled;
module.exports = exports['default'];