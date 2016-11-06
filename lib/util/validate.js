'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getConstraintsFunctionFromFunctionOrObject = exports.coreConstraints = undefined;

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-underscore-dangle */
/* @link http://stackoverflow.com/questions/46155/validate-email-address-in-javascript */
var EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var isEmpty = function isEmpty(value) {
    return typeof value === 'undefined' || value === null || value === '';
};

/* eslint-disable no-confusing-arrow */
var coreConstraints = {
    required: function required(value) {
        return isEmpty(value) ? 'Required field' : null;
    },
    min: function min(value, _, _min) {
        return !isEmpty(value) && (isNaN(parseInt(value, 10)) || parseInt(value, 10) < _min) ? 'Minimum value: ' + _min : null;
    },
    max: function max(value, _, _max) {
        return !isEmpty(value) && (isNaN(parseInt(value, 10)) || parseInt(value, 10) > _max) ? 'Maximum value: ' + _max : null;
    },
    minLength: function minLength(value, _, min) {
        return isEmpty(value) || ('' + value).length < min ? 'Minimum length: ' + min : null;
    },
    maxLength: function maxLength(value, _, max) {
        return !isEmpty(value) && ('' + value).length > max ? 'Maximum length: ' + max : null;
    },
    email: function email(value) {
        return !isEmpty(value) && !EMAIL_REGEX.test(value) ? 'Must be a valid email' : null;
    },
    regex: function regex(value, _, _ref) {
        var pattern = _ref.pattern,
            message = _ref.message;
        return !isEmpty(value) && !pattern.test(value) ? message : null;
    },
    choices: function choices(value, _, _ref2) {
        var list = _ref2.list,
            message = _ref2.message;
        return !isEmpty(value) && list.indexOf(value) === -1 ? message : null;
    },
    custom: function custom(value, values, func) {
        return func(value, values);
    }
};

/**
 * Combine multiple constraints into a single function
 *
 * @param {Object} constraints Constraints object; e.g. { required: true, min: 3 }
 *
 * @return {function} A function (value, values) => [errors]
 */
exports.coreConstraints = coreConstraints;
var getConstraintsFunction = function getConstraintsFunction(constraints) {
    return function (value, values) {
        return Object.keys(constraints).filter(function (constraintName) {
            return coreConstraints[constraintName];
        }).map(function (constraintName) {
            var constraint = coreConstraints[constraintName];
            constraint._name = constraintName; // .name does not exist on IE
            return constraint;
        }).reduce(function (errors, constraint) {
            return [].concat((0, _toConsumableArray3.default)(errors), [constraint(value, values, constraints[constraint.name])]);
        }, []).filter(function (error) {
            return error !== null;
        });
    };
};

var getConstraintsFunctionFromFunctionOrObject = exports.getConstraintsFunctionFromFunctionOrObject = function getConstraintsFunctionFromFunctionOrObject(constraints) {
    if (typeof constraints === 'function') return constraints;
    if (!Array.isArray(constraints) && (typeof constraints === 'undefined' ? 'undefined' : (0, _typeof3.default)(constraints)) === 'object') return getConstraintsFunction(constraints);
    throw new Error('Unsupported validation type');
};