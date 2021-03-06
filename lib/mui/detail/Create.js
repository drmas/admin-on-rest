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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _Card = require('material-ui/Card');

var _inflection = require('inflection');

var _inflection2 = _interopRequireDefault(_inflection);

var _Title = require('../layout/Title');

var _Title2 = _interopRequireDefault(_Title);

var _ListButton = require('../button/ListButton');

var _ListButton2 = _interopRequireDefault(_ListButton);

var _dataActions = require('../../actions/dataActions');

var _RecordForm = require('./RecordForm');

var _RecordForm2 = _interopRequireDefault(_RecordForm);

var _window = require('../../util/window');

var _reactRouterRedux = require('react-router-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line import/no-named-as-default
var Create = function (_Component) {
    (0, _inherits3.default)(Create, _Component);

    function Create() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Create);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Create.__proto__ || Object.getPrototypeOf(Create)).call.apply(_ref, [this].concat(args))), _this), _this.handleSubmit = function (record) {
            var basePath = !!_this.props.subPath ? _this.getBasePath() + _this.props.subPath : _this.getBasePath();
            _this.props.crudCreate(_this.props.resource, record, basePath);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Create, [{
        key: 'getBasePath',
        value: function getBasePath() {
            var location = this.props.location;

            return location.pathname.split('/').slice(0, -1).join('/');
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                title = _props.title,
                children = _props.children,
                isLoading = _props.isLoading,
                resource = _props.resource,
                validation = _props.validation,
                lang = _props.lang,
                resourceName = _props.resourceName;

            var basePath = this.getBasePath();
            return _react2.default.createElement(
                _Card.Card,
                { style: { margin: (0, _window.isSmallScreen)() ? '0.5em' : '2em', opacity: isLoading ? 0.8 : 1 } },
                _react2.default.createElement(
                    _Card.CardActions,
                    { style: { zIndex: 2, display: 'inline-block', float: lang && lang == "ar" ? 'left' : 'right' } },
                    _react2.default.createElement(_ListButton2.default, { lang: lang, basePath: basePath })
                ),
                _react2.default.createElement(_Card.CardTitle, { title: _react2.default.createElement(_Title2.default, { title: title, defaultTitle: (lang && lang == "ar" ? "إنشاء" : "Create") + ' ' + (!!resourceName ? resourceName : _inflection2.default.humanize(_inflection2.default.singularize(resource))) }) }),
                _react2.default.createElement(
                    _RecordForm2.default,
                    {
                        lang: lang,
                        onSubmit: this.handleSubmit,
                        resource: resource,
                        basePath: basePath,
                        validation: validation,
                        record: {}
                    },
                    children
                )
            );
        }
    }]);
    return Create;
}(_react.Component);

Create.propTypes = {
    children: _react.PropTypes.node,
    crudCreate: _react.PropTypes.func.isRequired,
    isLoading: _react.PropTypes.bool.isRequired,
    location: _react.PropTypes.object.isRequired,
    params: _react.PropTypes.object.isRequired,
    resource: _react.PropTypes.string.isRequired,
    title: _react.PropTypes.any,
    validation: _react.PropTypes.func
};

Create.defaultProps = {
    data: {}
};

function mapStateToProps(state) {
    return {
        isLoading: state.admin.loading > 0
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { crudCreate: _dataActions.crudCreate, push: function push(url) {
        return (0, _reactRouterRedux.push)(url);
    } })(Create);
module.exports = exports['default'];