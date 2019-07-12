import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconUser from '@material-ui/icons/AccountCircle';
import Icon from '../components/Icon';
//import Link from '@material-ui/core/Link';

function Menu(props) {
    const currentPageIndex = props.currentPageIndex;

    function update(e) {
        var key = parseInt(e.currentTarget.dataset.key);
        if (key !== currentPageIndex && key !== null && key !== undefined){
            props.updateApp(key);
        }
    }

    function onContactClick(){
        window.open("mailto:stevelynagh@hotmail.com?subject=Let's work together!", "_blank");
    }

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
                <ListItem component="li" key={props.structure.length} button onClick={onContactClick}>
                    {/* <Link element="a" href="mailto:stevelynagh@hotmail.com?subject=Let's work together!" rel="noopener noreferrer" target="_blank"> */}
                    <ListItemIcon><IconUser /></ListItemIcon>
                    <ListItemText>
                        Contact
                    </ListItemText>
                    </ListItem>
            </List>
        </nav>
    )
}

export default Menu;