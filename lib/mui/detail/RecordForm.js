'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RecordForm = exports.validateForm = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _Toolbar = require('material-ui/Toolbar');

var _validate = require('../../util/validate');

var _button = require('../button');

var _Labeled = require('../input/Labeled');

var _Labeled2 = _interopRequireDefault(_Labeled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @example
 * from the following fields:
 *     <TextField source="title" validation={{ minLength: 5 }} />
 *     <TextField source="age" validation={{ required: true, min: 18 }} />
 * produces the following output
 * {
 *    title: (value) => value.length < 5 ? ['title is too short'] : [],
 *    age:   (value) => {
 *       const errors = [];
 *       if (value) errors.push('age is required');
 *       if (value < 18) errors.push('age is under 18');
 *       return errors;
 *    }
 * }
 */
var getFieldConstraints = function getFieldConstraints(children) {
    return _react2.default.Children.toArray(children).map(function (_ref) {
        var _ref$props = _ref.props,
            fieldName = _ref$props.source,
            validation = _ref$props.validation;
        return { fieldName: fieldName, validation: validation };
    }).filter(function (_ref2) {
        var validation = _ref2.validation;
        return !!validation;
    }).reduce(function (constraints, _ref3) {
        var fieldName = _ref3.fieldName,
            validation = _ref3.validation;

        constraints[fieldName] = (0, _validate.getConstraintsFunctionFromFunctionOrObject)(validation);
        return constraints;
    }, {});
};

var validateForm = exports.validateForm = function validateForm(values, _ref4) {
    var children = _ref4.children,
        validation = _ref4.validation;

    var errors = typeof validation === 'function' ? validation(values) : {};

    // warn user we expect an object here, in case of validation just returned an error message
    if (errors === null || (typeof errors === 'undefined' ? 'undefined' : (0, _typeof3.default)(errors)) !== 'object') {
        throw new Error('Validation function given to form components should return an object.');
    }

    var fieldConstraints = getFieldConstraints(children);
    Object.keys(fieldConstraints).forEach(function (fieldName) {
        var error = fieldConstraints[fieldName](values[fieldName], values);
        if (error.length > 0) {
            if (!errors[fieldName]) {
                errors[fieldName] = [];
            }
            errors[fieldName] = [].concat((0, _toConsumableArray3.default)(errors[fieldName]), (0, _toConsumableArray3.default)(error));
        }
    });
    return errors;
};

var RecordForm = exports.RecordForm = function RecordForm(_ref5) {
    var children = _ref5.children,
        handleSubmit = _ref5.handleSubmit,
        record = _ref5.record,
        resource = _ref5.resource,
        basePath = _ref5.basePath,
        lang = _ref5.lang;
    return _react2.default.createElement(
        'form',
        { onSubmit: handleSubmit },
        _react2.default.createElement(
            'div',
            { style: { padding: '0 1em 1em 1em' } },
            _react2.default.Children.map(children, function (input) {
                return _react2.default.createElement(
                    'div',
                    { style: input.props.containerStyle, key: input.props.source },
                    input.props.includesLabel ? _react2.default.createElement(_reduxForm.Field, (0, _extends3.default)({}, input.props, {
                        name: input.props.source,
                        component: input.type,
                        resource: resource,
                        record: record,
                        basePath: basePath
                    })) : _react2.default.createElement(
                        _reduxForm.Field,
                        (0, _extends3.default)({}, input.props, {
                            name: input.props.source,
                            component: _Labeled2.default,
                            label: input.props.label,
                            resource: resource,
                            record: record,
                            basePath: basePath
                        }),
                        input
                    )
                );
            })
        ),
        _react2.default.createElement(
            _Toolbar.Toolbar,
            null,
            _react2.default.createElement(
                _Toolbar.ToolbarGroup,
                null,
                _react2.default.createElement(_button.SaveButton, { lang: lang })
            )
        )
    );
};

RecordForm.propTypes = {
    children: _react.PropTypes.node,
    handleSubmit: _react.PropTypes.func,
    record: _react.PropTypes.object,
    resource: _react.PropTypes.string,
    basePath: _react.PropTypes.string
};

exports.default = (0, _reduxForm.reduxForm)({
    form: 'record-form',
    validate: validateForm
})(RecordForm);