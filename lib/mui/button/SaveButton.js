'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _save = require('material-ui/svg-icons/content/save');

var _save2 = _interopRequireDefault(_save);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SaveButton = function SaveButton(_ref) {
    var _ref$lang = _ref.lang,
        lang = _ref$lang === undefined ? "" : _ref$lang;
    return _react2.default.createElement(_RaisedButton2.default, {
        type: 'submit',
        label: lang && lang == "ar" ? "حفظ" : "Save",
        icon: _react2.default.createElement(_save2.default, null),
        primary: true,
        style: {
            margin: '10px 24px',
            position: 'relative'
        }
    });
};

exports.default = SaveButton;
module.exports = exports['default'];