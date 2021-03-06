'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _queryReducer = require('./queryReducer');

var _listActions = require('../../../actions/listActions');

var defaultState = {
    sort: 'id',
    order: _queryReducer.SORT_DESC,
    page: 1,
    perPage: 10,
    filter: {}
};

exports.default = function (resource) {
    return function () {
        var previousState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
        var _ref = arguments[1];
        var type = _ref.type,
            payload = _ref.payload,
            meta = _ref.meta;

        if (!meta || meta.resource !== resource) {
            return previousState;
        }
        switch (type) {
            case _listActions.CRUD_CHANGE_LIST_PARAMS:
                return payload;
            default:
                return previousState;
        }
    };
};

module.exports = exports['default'];