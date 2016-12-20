'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _removeRedEye = require('material-ui/svg-icons/image/remove-red-eye');

var _removeRedEye2 = _interopRequireDefault(_removeRedEye);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ShowButton = function ShowButton(_ref) {
    var _ref$basePath = _ref.basePath,
        basePath = _ref$basePath === undefined ? '' : _ref$basePath,
        _ref$record = _ref.record,
        record = _ref$record === undefined ? {} : _ref$record,
        _ref$lang = _ref.lang,
        lang = _ref$lang === undefined ? '' : _ref$lang;
    return _react2.default.createElement(_FlatButton2.default, { primary: true, label: lang && lang == "ar" ? "إظهار" : "Show", containerElement: _react2.default.createElement(_reactRouter.Link, { to: basePath + '/' + record.id + '/show' }), icon: _react2.default.createElement(_removeRedEye2.default, null) });
};

ShowButton.propTypes = {
    basePath: _react.PropTypes.string,
    record: _react.PropTypes.object
};

exports.default = ShowButton;
module.exports = exports['default'];