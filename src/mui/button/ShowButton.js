import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import ImageEye from 'material-ui/svg-icons/image/remove-red-eye';

const ShowButton = ({ basePath = '', record = {}, lang = '' }) => <FlatButton primary label={lang && lang == "ar"? "إظهار" :"Show"} containerElement={<Link to={`${basePath}/${record.id}/show`} />} icon={<ImageEye />} />;

ShowButton.propTypes = {
    basePath: PropTypes.string,
    record: PropTypes.object,
};

export default ShowButton;
