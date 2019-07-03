import React from 'react';
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
  menuButton: {
    marginRight: '15px',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  title: {
    flexGrow: 1,
  }
}));

function AppBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
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
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Steven Lynagh | Resume
          </Typography>

        <div>
          <IconButton
            aria-owns={open ? 'menu-appbar' : undefined}
            aria-haspopup="true"
            onClick={handleMenu}
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
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}><Link>email</Link></MenuItem>
            <MenuItem onClick={handleClose}>LinkedIn</MenuItem>
            <MenuItem onClick={handleClose}>GitHub</MenuItem>
            <MenuItem onClick={handleClose}>Website</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar;
