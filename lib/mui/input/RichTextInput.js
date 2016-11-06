'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _lodash = require('lodash.debounce');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _quill = require('quill');

var _quill2 = _interopRequireDefault(_quill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('./RichTextInput.css');

var RichTextInput = function (_Component) {
    (0, _inherits3.default)(RichTextInput, _Component);

    function RichTextInput() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RichTextInput);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RichTextInput.__proto__ || Object.getPrototypeOf(RichTextInput)).call.apply(_ref, [this].concat(args))), _this), _this.onTextChange = function () {
            _this.props.input.onChange(_this.editor.innerHTML);
        }, _this.updateDivRef = function (ref) {
            _this.divRef = ref;
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RichTextInput, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _props = this.props,
                value = _props.input.value,
                toolbar = _props.toolbar;


            this.quill = new _quill2.default(this.divRef, {
                modules: { toolbar: toolbar },
                theme: 'snow'
            });

            this.quill.pasteHTML(value);

            this.editor = this.divRef.querySelector('.ql-editor');
            this.quill.on('text-change', (0, _lodash2.default)(this.onTextChange, 500));
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.quill.off('text-change', this.onTextChange);
            this.quill = null;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { ref: this.updateDivRef });
        }
    }]);
    return RichTextInput;
}(_react.Component);

RichTextInput.propTypes = {
    input: _react.PropTypes.object,
    label: _react.PropTypes.string,
    options: _react.PropTypes.object,
    includesLabel: _react.PropTypes.bool.isRequired,
    toolbar: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.bool])
};

RichTextInput.defaultProps = {
    record: {},
    options: {},
    includesLabel: false,
    toolbar: true
};

exports.default = RichTextInput;
module.exports = exports['default'];