import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import ActionList from 'material-ui/svg-icons/action/list';

const ListButton = ({ basePath = '', lang = '' }) => <FlatButton primary label={lang && lang == "ar"? "القائمة الرئيسية" :"List"} icon={<ActionList />} containerElement={<Link to={basePath} />} />;

ListButton.propTypes = {
    basePath: PropTypes.string,
};

export default ListButton;
