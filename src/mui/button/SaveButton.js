import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ContentSave from 'material-ui/svg-icons/content/save';

const SaveButton = ({lang = ""}) => <RaisedButton
    type="submit"
    label={lang && lang == "ar"? "حفظ" :"Save"}
    icon={<ContentSave />}
    primary
    style={{
        margin: '10px 24px',
        position: 'relative',
    }}
/>;

export default SaveButton;
