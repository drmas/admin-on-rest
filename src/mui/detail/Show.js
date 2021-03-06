import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardActions } from 'material-ui/Card';
import inflection from 'inflection';
import Title from '../layout/Title';
import { DeleteButton, EditButton, ListButton } from '../button';
import { crudGetOne as crudGetOneAction } from '../../actions/dataActions';
import Labeled from '../input/Labeled';

/**
 * Turns a children data structure (either single child or array of children) into an array.
 * We can't use React.Children.toArray as it loses references.
 */
const arrayizeChildren = children => (Array.isArray(children) ? children : [children]);

export class Show extends Component {
    componentDidMount() {
        this.props.crudGetOne(this.props.resource, this.props.id, this.getBasePath());
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.id !== nextProps.id) {
            this.props.crudGetOne(nextProps.resource, nextProps.id, this.getBasePath());
        }
    }

    // FIXME Seems that the cloneElement in CrudRoute slices the children array, which makes this necessary to avoid rerenders
    shouldComponentUpdate(nextProps) {
        if (nextProps.isLoading !== this.props.isLoading) {
            return true;
        }

        const currentChildren = arrayizeChildren(this.props.children);
        const newChildren = arrayizeChildren(nextProps.children);

        return newChildren.every((child, index) => child === currentChildren[index]);
    }

    getBasePath() {
        const { location } = this.props;
        return location.pathname.split('/').slice(0, -2).join('/');
    }

    render() {
        const { title, children, id, data, isLoading, resource, hasDelete, hasEdit, lang } = this.props;
        const basePath = this.getBasePath();

        return (
            <Card style={{ margin: '2em', opacity: isLoading ? 0.8 : 1 }}>
                <CardActions style={{ zIndex: 2, display: 'inline-block', float: 'right' }}>
                    {hasEdit && <EditButton lang={lang} basePath={basePath} record={data} />}
                    <ListButton lang={lang} basePath={basePath} />
                    {hasDelete && <DeleteButton lang={lang} basePath={basePath} record={data} />}
                </CardActions>
                <CardTitle title={<Title title={title} record={data} defaultTitle={`${inflection.humanize(inflection.singularize(resource))} #${id}`} />} />
                {data &&
                    <div style={{ padding: '0 1em 1em 1em' }}>
                        {React.Children.map(children, field => (
                            <Labeled label={field.props.label} source={field.props.source} disabled={false} record={data} basePath={basePath} resource={resource} >
                                <field.type {...field.props} />
                            </Labeled>
                        ))}
                    </div>
                }
            </Card>
        );
    }
}

Show.propTypes = {
    children: PropTypes.node,
    crudGetOne: PropTypes.func.isRequired,
    data: PropTypes.object,
    hasDelete: PropTypes.bool,
    hasEdit: PropTypes.bool,
    id: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired,
    resource: PropTypes.string.isRequired,
    title: PropTypes.any,
};

function mapStateToProps(state, props) {
    return {
        id: props.params.id,
        data: state.admin[props.resource].data[props.params.id],
        isLoading: state.admin.loading > 0,
    };
}

export default connect(
    mapStateToProps,
    { crudGetOne: crudGetOneAction },
)(Show);
