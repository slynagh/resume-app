import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconUser from '@material-ui/icons/AccountCircle';
import Icon from '../components/Icon';

function Menu(props) {
    const currentPageIndex = props.currentPageIndex;

    function update(e) {
        var key = parseInt(e.currentTarget.dataset.key);
        if (key !== currentPageIndex && key !== null && key !== undefined){
            props.updateApp(key);
        }
    }

    //selected={ (currentPageIndex === index) ? "true" : "false"}
    return (
        <nav>
            <List>
                {props.structure.map((item, index) => (
                    <ListItem component="li" key={index} data-key={index} button selected={index === currentPageIndex} onClick={ update }>
                        <ListItemIcon><Icon name={item.icon} /></ListItemIcon>
                        <ListItemText>{item.title}</ListItemText>
                    </ListItem>
                ))
        }

                <ListItem divider />
                <ListItem>
                    <ListItemIcon><IconUser /></ListItemIcon>
                    <ListItemText>
                        Contact
                    </ListItemText></ListItem>
            </List>
        </nav>
    )
}

export default Menu;