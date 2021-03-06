import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardActions } from 'material-ui/Card';
import inflection from 'inflection';
import Title from '../layout/Title';
import ListButton from '../button/ListButton';
import { crudCreate as crudCreateAction } from '../../actions/dataActions';
import RecordForm from './RecordForm'; // eslint-disable-line import/no-named-as-default
import {isSmallScreen} from '../../util/window'
import {push} from 'react-router-redux'
 
class Create extends Component {
    getBasePath() {
        const { location } = this.props;
        return location.pathname.split('/').slice(0, -1).join('/');
    }

    handleSubmit = (record) => {
        let basePath = !!this.props.subPath ? this.getBasePath() + this.props.subPath : this.getBasePath();
        this.props.crudCreate(this.props.resource, record, basePath);
    } 

    render() {
        const { title, children, isLoading, resource, validation, lang, resourceName } = this.props;
        const basePath = this.getBasePath();
        return (
            <Card style={{ margin: isSmallScreen() ? '0.5em' : '2em', opacity: isLoading ? 0.8 : 1 }}>
                <CardActions style={{ zIndex: 2, display: 'inline-block', float: lang && lang == "ar" ? 'left' :'right'  }}>
                    <ListButton lang={lang} basePath={basePath} />
                </CardActions>
                <CardTitle title={<Title title={title} defaultTitle={`${lang && lang == "ar" ? "إنشاء" :"Create"} ${!!resourceName ? resourceName : inflection.humanize(inflection.singularize(resource))}`} />} />
                <RecordForm
                    lang={lang}
                    onSubmit={this.handleSubmit}
                    resource={resource}
                    basePath={basePath}
                    validation={validation}
                    record={{}}
                >
                    {children}
                </RecordForm>
            </Card>
        );
    }
}

Create.propTypes = {
    children: PropTypes.node,
    crudCreate: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired,
    resource: PropTypes.string.isRequired,
    title: PropTypes.any,
    validation: PropTypes.func,
};

Create.defaultProps = {
    data: {},
};

function mapStateToProps(state) {
    return {
        isLoading: state.admin.loading > 0,
    };
}

export default connect(
    mapStateToProps,
    { crudCreate: crudCreateAction, push: url => push(url) },
)(Create);
