'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _Table = require('material-ui/Table');

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _sort = require('material-ui/svg-icons/content/sort');

var _sort2 = _interopRequireDefault(_sort);

var _title = require('../../util/title');

var _title2 = _interopRequireDefault(_title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultStyles = {
    table: {
        backgroundColor: '#fff',
        padding: '0px 24px',
        width: '100%',
        borderCollapse: 'collapse',
        borderSpacing: 0
    },
    tbody: {
        height: 'inherit'
    },
    tr: {
        borderBottom: '1px solid rgb(224, 224, 224)',
        color: 'rgba(0, 0, 0, 0.870588)',
        height: 48
    },
    'th:first-child': {
        padding: '0 0 0 12px'
    },
    th: {
        padding: 0
    },
    sortButton: {
        minWidth: 40
    },
    'td:first-child': {
        padding: '0 12px 0 24px'
    },
    td: {
        padding: '0 12px'
    }
};

var Datagrid = function (_Component) {
    (0, _inherits3.default)(Datagrid, _Component);

    function Datagrid() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Datagrid);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Datagrid.__proto__ || Object.getPrototypeOf(Datagrid)).call.apply(_ref, [this].concat(args))), _this), _this.updateSort = function (event) {
            event.stopPropagation();
            _this.props.setSort(event.currentTarget.dataset.sort);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Datagrid, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                resource = _props.resource,
                children = _props.children,
                ids = _props.ids,
                data = _props.data,
                currentSort = _props.currentSort,
                basePath = _props.basePath,
                _props$styles = _props.styles,
                styles = _props$styles === undefined ? defaultStyles : _props$styles,
                updateSort = _props.updateSort;

            return _react2.default.createElement(
                'table',
                { style: styles.table },
                _react2.default.createElement(
                    'thead',
                    null,
                    _react2.default.createElement(
                        'tr',
                        { style: styles.tr },
                        _react2.default.Children.map(children, function (field, index) {
                            return _react2.default.createElement(
                                _Table.TableHeaderColumn,
                                { key: field.props.source || index, style: index ? styles.th : styles['th:first-child'] },
                                (field.props.label || field.props.source) && _react2.default.createElement(_FlatButton2.default, {
                                    labelPosition: 'before',
                                    onClick: _this2.updateSort,
                                    'data-sort': field.props.source,
                                    label: (0, _title2.default)(field.props.label, field.props.source),
                                    icon: field.props.source === currentSort.sort ? _react2.default.createElement(_sort2.default, { style: currentSort.order === 'ASC' ? { transform: 'rotate(180deg)' } : {} }) : false,
                                    style: styles.sortButton
                                })
                            );
                        })
                    )
                ),
                _react2.default.createElement(
                    'tbody',
                    { style: styles.tbody },
                    ids.map(function (id) {
                        return _react2.default.createElement(
                            'tr',
                            { style: styles.tr, key: id },
                            _react2.default.Children.toArray(children).map(function (field, index) {
                                return _react2.default.createElement(
                                    _Table.TableRowColumn,
                                    { key: id + '-' + (field.props.source || index), style: index ? styles.td : styles['td:first-child'] },
                                    _react2.default.createElement(field.type, (0, _extends3.default)({}, field.props, { record: data[id], basePath: basePath, resource: resource }))
                                );
                            })
                        );
                    })
                )
            );
        }
    }]);
    return Datagrid;
}(_react.Component);

Datagrid.propTypes = {
    ids: _react.PropTypes.arrayOf(_react.PropTypes.any).isRequired,
    resource: _react.PropTypes.string,
    data: _react.PropTypes.object.isRequired,
    currentSort: _react.PropTypes.shape({
        sort: _react.PropTypes.string,
        order: _react.PropTypes.string
    }),
    basePath: _react.PropTypes.string,
    setSort: _react.PropTypes.func,
    styles: _react.PropTypes.object
};

Datagrid.defaultProps = {
    data: {},
    ids: []
};

exports.default = Datagrid;
module.exports = exports['default'];