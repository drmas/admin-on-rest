'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.List = undefined;

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _reactRouterRedux = require('react-router-redux');

var _Card = require('material-ui/Card');

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _refresh = require('material-ui/svg-icons/navigation/refresh');

var _refresh2 = _interopRequireDefault(_refresh);

var _inflection = require('inflection');

var _inflection2 = _interopRequireDefault(_inflection);

var _reduxForm = require('redux-form');

var _lodash = require('lodash.debounce');

var _lodash2 = _interopRequireDefault(_lodash);

var _queryReducer = require('../../reducer/resource/list/queryReducer');

var _queryReducer2 = _interopRequireDefault(_queryReducer);

var _Title = require('../layout/Title');

var _Title2 = _interopRequireDefault(_Title);

var _Pagination = require('./Pagination');

var _Pagination2 = _interopRequireDefault(_Pagination);

var _CreateButton = require('../button/CreateButton');

var _CreateButton2 = _interopRequireDefault(_CreateButton);

var _dataActions = require('../../actions/dataActions');

var _listActions = require('../../actions/listActions');

var _window = require('../../util/window');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var filterFormName = 'filterForm';

var List = exports.List = function (_Component) {
    (0, _inherits3.default)(List, _Component);

    function List(props) {
        (0, _classCallCheck3.default)(this, List);

        var _this = (0, _possibleConstructorReturn3.default)(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));

        _this.refresh = function (event) {
            event.stopPropagation();
            _this.updateData();
        };

        _this.setSort = function (sort) {
            return _this.changeParams({ type: _queryReducer.SET_SORT, payload: sort });
        };

        _this.setPage = function (page) {
            return _this.changeParams({ type: _queryReducer.SET_PAGE, payload: page });
        };

        _this.setFilters = function (filters) {
            return _this.changeParams({ type: _queryReducer.SET_FILTER, payload: filters });
        };

        _this.showFilter = function (filterName) {
            return _this.setState((0, _defineProperty3.default)({}, filterName, true));
        };

        _this.hideFilter = function (filterName) {
            _this.setState((0, _defineProperty3.default)({}, filterName, false));
            _this.props.changeFormValue(filterFormName, filterName, '');
            _this.setFilters((0, _extends4.default)({}, _this.props.filters, (0, _defineProperty3.default)({}, filterName, undefined)));
        };

        _this.debouncedSetFilters = (0, _lodash2.default)(_this.setFilters.bind(_this), 500);
        _this.state = {};
        return _this;
    }

    (0, _createClass3.default)(List, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.updateData();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this2 = this;

            if (nextProps.resource !== this.props.resource || nextProps.query.sort !== this.props.query.sort || nextProps.query.order !== this.props.query.order || nextProps.query.page !== this.props.query.page || nextProps.query.filter !== this.props.query.filter) {
                this.updateData(Object.keys(nextProps.query).length > 0 ? nextProps.query : nextProps.params);
            }
            if (Object.keys(nextProps.filters).length === 0 && Object.keys(this.props.filters).length === 0) {
                return;
            }
            if (nextProps.filters !== this.props.filters) {
                (function () {
                    var nextFilters = nextProps.filters;
                    Object.keys(nextFilters).forEach(function (filterName) {
                        if (nextFilters[filterName] === '') {
                            // remove empty filter from query
                            delete nextFilters[filterName];
                        }
                    });
                    _this2.debouncedSetFilters(nextFilters);
                })();
            }
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            if (nextProps.isLoading === this.props.isLoading && nextState === this.state) {
                return false;
            }
            return true;
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.debouncedSetFilters.cancel();
        }
    }, {
        key: 'getBasePath',
        value: function getBasePath() {
            return this.props.location.pathname;
        }
    }, {
        key: 'getQuery',
        value: function getQuery() {
            return Object.keys(this.props.query).length > 0 ? this.props.query : (0, _extends4.default)({}, this.props.params);
        }
    }, {
        key: 'updateData',
        value: function updateData(query) {
            var _ref = query || this.getQuery(),
                sort = _ref.sort,
                order = _ref.order,
                page = _ref.page,
                perPage = _ref.perPage,
                filter = _ref.filter;

            this.props.crudGetList(this.props.resource, { page: page, perPage: perPage }, { field: sort, order: order }, filter);
        }
    }, {
        key: 'changeParams',
        value: function changeParams(action) {
            var newParams = (0, _queryReducer2.default)(this.getQuery(), action);
            this.props.push((0, _extends4.default)({}, this.props.location, { query: (0, _extends4.default)({}, newParams, { filter: JSON.stringify(newParams.filter) }) }));
            this.props.changeListParams(this.props.resource, newParams);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                filter = _props.filter,
                resource = _props.resource,
                hasCreate = _props.hasCreate,
                title = _props.title,
                data = _props.data,
                ids = _props.ids,
                total = _props.total,
                children = _props.children,
                isLoading = _props.isLoading,
                lang = _props.lang;

            var query = this.getQuery();
            var filterValues = query.filter;
            var basePath = this.getBasePath();
            return _react2.default.createElement(
                _Card.Card,
                { style: { margin: (0, _window.isSmallScreen)() ? '0.5em' : '2em', opacity: isLoading ? 0.8 : 1 } },
                _react2.default.createElement(
                    _Card.CardActions,
                    { style: { zIndex: 2, display: 'flex', flexWrap: 'wrap', float: 'right' } },
                    filter && _react2.default.createElement(filter, {
                        resource: resource,
                        showFilter: this.showFilter,
                        displayedFilters: this.state,
                        filterValues: filterValues,
                        context: 'button'
                    }),
                    hasCreate && _react2.default.createElement(_CreateButton2.default, { basePath: basePath }),
                    _react2.default.createElement(_FlatButton2.default, { primary: true, label: lang && lang == "ar" ? "تحديث" : "Refresh", onClick: this.refresh, icon: _react2.default.createElement(_refresh2.default, null) })
                ),
                _react2.default.createElement(_Card.CardTitle, { title: _react2.default.createElement(_Title2.default, { title: title, defaultTitle: _inflection2.default.humanize(_inflection2.default.pluralize(resource)) + ' ' + (lang && lang == "ar" ? "قائمة" : "List") }) }),
                filter && _react2.default.createElement(filter, {
                    resource: resource,
                    hideFilter: this.hideFilter,
                    filterValues: filterValues,
                    displayedFilters: this.state,
                    context: 'form'
                }),
                _react2.default.cloneElement(children, {
                    resource: resource,
                    ids: ids,
                    data: data,
                    currentSort: query,
                    basePath: basePath,
                    setSort: this.setSort
                }),
                _react2.default.createElement(_Pagination2.default, { resource: resource, page: parseInt(query.page, 10), perPage: parseInt(query.perPage, 10), total: total, setPage: this.setPage })
            );
        }
    }]);
    return List;
}(_react.Component);

List.propTypes = {
    title: _react.PropTypes.any,
    filter: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]),
    filters: _react.PropTypes.object,
    resource: _react.PropTypes.string.isRequired,
    hasCreate: _react.PropTypes.bool.isRequired,
    hasEdit: _react.PropTypes.bool.isRequired,
    location: _react.PropTypes.object.isRequired,
    path: _react.PropTypes.string,
    params: _react.PropTypes.object.isRequired,
    query: _react.PropTypes.object.isRequired,
    ids: _react.PropTypes.array,
    total: _react.PropTypes.number.isRequired,
    data: _react.PropTypes.object,
    isLoading: _react.PropTypes.bool.isRequired,
    crudGetList: _react.PropTypes.func.isRequired,
    changeFormValue: _react.PropTypes.func.isRequired,
    changeListParams: _react.PropTypes.func.isRequired,
    children: _react.PropTypes.element.isRequired,
    push: _react.PropTypes.func.isRequired
};

List.defaultProps = {
    filters: {}
};

function mapStateToProps(state, props) {
    var resourceState = state.admin[props.resource];
    var query = props.location.query;
    if (query.filter && typeof query.filter === 'string') {
        // if the List has no filter component, the filter is always "{}"
        // avoid deserialization and keep identity by using a constant
        query.filter = props.filter ? JSON.parse(query.filter) : resourceState.list.params.filter;
    }

    return {
        query: query,
        params: resourceState.list.params,
        ids: resourceState.list.ids,
        total: resourceState.list.total,
        data: resourceState.data,
        isLoading: state.admin.loading > 0,
        filters: props.filter ? (0, _reduxForm.getFormValues)(filterFormName)(state) : resourceState.list.params.filter
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, {
    crudGetList: _dataActions.crudGetList,
    changeFormValue: _reduxForm.change,
    changeListParams: _listActions.changeListParams,
    push: _reactRouterRedux.push
})(List);