'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Title = function Title(_ref) {
    var defaultTitle = _ref.defaultTitle,
        record = _ref.record,
        title = _ref.title;

    if (!title) {
        return _react2.default.createElement(
            'span',
            null,
            defaultTitle
        );
    }
    if (typeof title === 'string') {
        return _react2.default.createElement(
            'span',
            null,
            title
        );
    }
    return _react2.default.createElement(title, { record: record });
};

Title.propTypes = {
    defaultTitle: _react.PropTypes.string.isRequired,
    record: _react.PropTypes.object,
    title: _react.PropTypes.any
};

exports.default = Title;
module.exports = exports['default'];