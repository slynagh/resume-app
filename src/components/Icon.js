import React from 'react';

import IconFlag from '@material-ui/icons/Flag';
import IconWork from '@material-ui/icons/Work';
import IconExtension from '@material-ui/icons/Extension';
import IconSchool from '@material-ui/icons/School';
import IconInfo from '@material-ui/icons/Info';
import IconLinks from '@material-ui/icons/FormatListBulleted';
import IconContacts from '@material-ui/icons/Contacts';
import IconUser from '@material-ui/icons/AccountCircle';
import IconChevronLeft from '@material-ui/icons/ChevronLeft';
import IconChevronRight from '@material-ui/icons/ChevronRight';

function Icon(props) {
    const MuiIcon = ((name) => {
        switch (name){
            case "Flag" : return IconFlag;
            case "Work" : return IconWork;
            case "Extension" : return IconExtension;
            case "School" : return IconSchool;
            case "Info" : return IconInfo;
            case "Links" : return IconLinks;
            case "Contacts" : return IconContacts;
            case "User" : return IconUser;
            case "ChevronLeft" : return IconChevronLeft;
            case "ChevronRight" : return IconChevronRight;
            default : return IconFlag;
        }
    })(props.name);

    return(
        <MuiIcon {...props} />
    );
}

export default Icon;