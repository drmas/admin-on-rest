'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _create = require('material-ui/svg-icons/content/create');

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditButton = function EditButton(_ref) {
    var _ref$basePath = _ref.basePath,
        basePath = _ref$basePath === undefined ? '' : _ref$basePath,
        _ref$record = _ref.record,
        record = _ref$record === undefined ? {} : _ref$record,
        _ref$lang = _ref.lang,
        lang = _ref$lang === undefined ? "" : _ref$lang;
    return _react2.default.createElement(_FlatButton2.default, { primary: true, label: lang && lang == "ar" ? "تعديل" : "Edit", containerElement: _react2.default.createElement(_reactRouter.Link, { to: basePath + '/' + record.id }), icon: _react2.default.createElement(_create2.default, null) });
};

EditButton.propTypes = {
    basePath: _react.PropTypes.string,
    record: _react.PropTypes.object
};

exports.default = EditButton;
module.exports = exports['default'];