import React, { useState, Fragment } from 'react';
import clsx from 'clsx';

//Material Components
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
//import Hidden from '@material-ui/core/Hidden';

//Custom Components
import Icon from './components/Icon';
import AppBar from './components/AppBar';
//import Footer from './components/Footer';
import MainContentArea from './components/MainContentArea';
import Menu from './components/Menu';

//css
import './css/App.css';
import './css/fonts.css';
import { Divider } from '@material-ui/core';

const drawerWidth = "240px";
const structure = require("./data/structure");

const initialWidth = window.innerWidth;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth})`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    whiteSpace: 'nowrap',
    // [theme.breakpoints.up('sm')]: {
    //   width: theme.spacing(9) + 1,
    // },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: { 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  }
}));

function App(props) {
  const classes = useStyles();
  //const { container } = props;

  const [menuOpen, setMenuOpen] = useState(initialWidth > 640);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  function update(toPageIndex) {
    setCurrentPageIndex(toPageIndex);
  }

  function handleDrawerToggle() {
   // console.log("App: handleDrawerToggle()")
    setMenuOpen(!menuOpen);
  }

  return (
    <Fragment>
      <CssBaseline />
      <div className={classes.root}>

        <AppBar
          position="fixed"
          className={clsx(
            classes.appBar, {
              [classes.appBarShift]: menuOpen,
            }
          )}
          menuOpen={ menuOpen }
          onMenuButtonClick={handleDrawerToggle}
        />

        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: menuOpen,
            [classes.drawerClose]: !menuOpen,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: menuOpen,
              [classes.drawerClose]: !menuOpen,
            }),
          }}
          open={menuOpen}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerToggle} >
              <Icon name="ChevronLeft" />
            </IconButton>
          </div>

          <Divider />

          <Menu structure={structure} currentPageIndex={currentPageIndex} updateApp={update} />
        </Drawer>

        <MainContentArea
          title={structure[currentPageIndex].title}
          icon={structure[currentPageIndex].icon}
          content={structure[currentPageIndex].componentName}
          currentPageIndex={currentPageIndex}
          prevItem={(currentPageIndex > 0) && structure[currentPageIndex - 1].title}
          nextItem={(currentPageIndex < structure.length - 1) && structure[currentPageIndex + 1].title}
          onPageChange={update}
          className={classes.content}
        />

      </div>
    </Fragment>
  );
}

export default App;
