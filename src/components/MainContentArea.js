import React from 'react';

import Paper from '@material-ui/core/Paper';
//import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

import Content from '../components/Content';
import Icon from '../components/Icon';

const useStyles = makeStyles(theme => ({
    content : {
        fontWeight: 300,
        fontSize : '1rem',
    },
    padded: {
        padding: theme.spacing(3),
    },
    contentHeader : { 
        display: 'flex',
        fontSize: '2.5rem',
 },
    contentHeaderIcon : { fontSize: 'inherit',
        marginRight : theme.spacing(3),
   },
    contentHeaderText : { fontSize: 'inherit'   },
    buttonBlock: {
        margin: theme.spacing(3, 0, 0),
        display: 'flex',
    },
    leftButton: {    },
    rightButton: {    },
    spacer: {
        flexGrow: 1,
    },
    toolbar: theme.mixins.toolbar,
}));

function MainContentArea(props) {
    const classes = useStyles();
    const iconName = props.icon;
    const contentName = props.content;
    const title = props.title || "Title Goes Here!!";
    const className = props.className || "";
    const currentPageIndex = props.currentPageIndex || 0;
    const prevItem = props.prevItem ;
    const nextItem = props.nextItem ;

    function prev(){
        props.onPageChange(currentPageIndex - 1);
    }

    function next(){
        props.onPageChange(currentPageIndex + 1);
    }

    return (
        <div className={className} >
            <div className={classes.toolbar} />

            <Paper className={classes.padded}>
                <div className={classes.contentHeader}>
                    <Icon className={ classes.contentHeaderIcon } name={ iconName }/>
                    <Typography className={ classes.contentHeaderText } variant="h2" component="h2" gutterBottom>{title}</Typography>
                </div>
                <Divider />
                <Content name={ contentName } className = {classes.content}/>
                <Divider />

                <div className={ classes.buttonBlock }>
                    { prevItem && 
                        <Button className={classes.leftButton} onClick={ prev }><Icon name="ChevronLeft" />{prevItem}</Button>
                    }
                    <div className={classes.spacer} />
                    { nextItem &&
                        <Button className={classes.rightButton} onClick={ next }>{nextItem}<Icon name="ChevronRight" /></Button>
                    }
                </div>
            </Paper>

        </div>
    );
}

export default MainContentArea;