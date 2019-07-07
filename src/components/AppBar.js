import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Link from '@material-ui/core/Link';
//import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  // root: {
  //   flexGrow: 1,
  // },
  profileButton: {
    
  },
  hide : {
    display:'none',
  },
  menuButton: {
    marginRight: '15px',
    
  },
  title: {
    flexGrow: 1,
  }
}));

function AppBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const contactOpen = Boolean(anchorEl);
  const menuOpen = props.menuOpen || false;

  function handleMenuButtonClick(){
    //console.log("AppBar: onMenuButtonClick");
    props.onMenuButtonClick();
  }

  function handleContactMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleContactClose() {
    setAnchorEl(null);
  }

  return (

    <MuiAppBar
      position={props.position || 'fixed'}
      color={props.color || 'primary'}
      className={props.className || ''}
      classes={props.classes || {}}
    >
      <Toolbar>
        <IconButton 
          edge="start" 
          className={clsx(classes.menuButton, {
            [classes.hide]: menuOpen,
          })}
          color="inherit" 
          aria-label="Menu"
          onClick={ handleMenuButtonClick }
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Steven Lynagh | Resume
          </Typography>

        <div>
          <IconButton
            aria-owns={contactOpen ? 'menu-appbar' : undefined}
            aria-haspopup="true"
            onClick={handleContactMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={contactOpen}
            onClose={handleContactClose}
          >
            <MenuItem onClick={handleContactClose}><Link>email</Link></MenuItem>
            <MenuItem onClick={handleContactClose}>LinkedIn</MenuItem>
            <MenuItem onClick={handleContactClose}>GitHub</MenuItem>
            <MenuItem onClick={handleContactClose}>Website</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar;
