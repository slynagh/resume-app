import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
//import IconUser from '@material-ui/icons/AccountCircle';
import Icon from '../components/Icon';
import MuiIcon from '@material-ui/core/Icon';
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

    function onSourceCodeClick(){
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
                    <ListItemIcon><Icon name="Email" /></ListItemIcon>
                    <ListItemText>
                        Email me!
                    </ListItemText>
                    </ListItem>
                    <ListItem component="li" key={props.structure.length+1} button onClick={
                        onSourceCodeClick }>
                            <ListItemIcon><MuiIcon className="icon-embed2 overflow-visible" /></ListItemIcon>
                            <ListItemText>View source on GitHub</ListItemText>
                        </ListItem>
            </List>
        </nav>
    )
}

export default Menu;