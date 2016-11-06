'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ReferenceInput = undefined;

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

var _Labeled = require('./Labeled');

var _Labeled2 = _interopRequireDefault(_Labeled);

var _dataActions = require('../../actions/dataActions');

var _possibleValues = require('../../reducer/references/possibleValues');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var referenceSource = function referenceSource(resource, source) {
    return resource + '@' + source;
};

var ReferenceInput = exports.ReferenceInput = function (_Component) {
    (0, _inherits3.default)(ReferenceInput, _Component);

    function ReferenceInput() {
        (0, _classCallCheck3.default)(this, ReferenceInput);
        return (0, _possibleConstructorReturn3.default)(this, (ReferenceInput.__proto__ || Object.getPrototypeOf(ReferenceInput)).apply(this, arguments));
    }

    (0, _createClass3.default)(ReferenceInput, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _props = this.props,
                reference = _props.reference,
                record = _props.record,
                source = _props.source,
                resource = _props.resource;

            this.fetchReferenceAndOptions(reference, record[source], referenceSource(resource, source));
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.record.id !== nextProps.record.id) {
                var reference = nextProps.reference,
                    record = nextProps.record,
                    source = nextProps.source,
                    resource = nextProps.resource;

                this.fetchReferenceAndOptions(reference, record[source], referenceSource(resource, source));
            }
        }
    }, {
        key: 'fetchReferenceAndOptions',
        value: function fetchReferenceAndOptions(reference, id, relatedTo) {
            if (id) {
                this.props.crudGetOne(reference, id, null, false);
            }
            this.props.crudGetMatching(reference, relatedTo, {});
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                input = _props2.input,
                resource = _props2.resource,
                label = _props2.label,
                source = _props2.source,
                record = _props2.record,
                referenceRecord = _props2.referenceRecord,
                allowEmpty = _props2.allowEmpty,
                matchingReferences = _props2.matchingReferences,
                basePath = _props2.basePath,
                onChange = _props2.onChange,
                children = _props2.children;

            if (!referenceRecord && !allowEmpty) {
                return _react2.default.createElement(_Labeled2.default, { label: label, source: source });
            }

            return _react2.default.cloneElement(children, {
                input: input,
                label: label,
                resource: resource,
                source: source,
                record: record,
                choices: matchingReferences,
                basePath: basePath,
                onChange: onChange
            });
        }
    }]);
    return ReferenceInput;
}(_react.Component);

ReferenceInput.propTypes = {
    allowEmpty: _react.PropTypes.bool.isRequired,
    basePath: _react.PropTypes.string,
    children: _react.PropTypes.element.isRequired,
    crudGetMatching: _react.PropTypes.func.isRequired,
    crudGetOne: _react.PropTypes.func.isRequired,
    includesLabel: _react.PropTypes.bool.isRequired,
    input: _react.PropTypes.object.isRequired,
    label: _react.PropTypes.string,
    matchingReferences: _react.PropTypes.array,
    onChange: _react.PropTypes.func,
    record: _react.PropTypes.object,
    reference: _react.PropTypes.string.isRequired,
    referenceRecord: _react.PropTypes.object,
    resource: _react.PropTypes.string.isRequired,
    source: _react.PropTypes.string.isRequired
};

ReferenceInput.defaultProps = {
    referenceRecord: null,
    record: {},
    allowEmpty: false,
    matchingReferences: []
};

function mapStateToProps(state, props) {
    var referenceId = props.record[props.source];
    return {
        referenceRecord: state.admin[props.reference].data[referenceId],
        matchingReferences: (0, _possibleValues.getPossibleReferences)(state, referenceSource(props.resource, props.source), props.reference, referenceId)
    };
}

var ConnectedReferenceInput = (0, _reactRedux.connect)(mapStateToProps, {
    crudGetOne: _dataActions.crudGetOne,
    crudGetMatching: _dataActions.crudGetMatching
})(ReferenceInput);

ConnectedReferenceInput.defaultProps = {
    includesLabel: true
};

exports.default = ConnectedReferenceInput;