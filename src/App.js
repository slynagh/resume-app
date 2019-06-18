import React, { useState } from 'react';

//Material Components
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';

//Custom Components
import AppBar from './components/AppBar';
//import Footer from './components/Footer';
import MainContentArea from './components/MainContentArea';
import Menu from './components/Menu';

//Content
//import Objective from './content/Objective';

//css
import './css/App.css';
import './css/fonts.css';

const drawerWidth = "240px";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

const structure = [
  {
    title : "Objective",
    componentName : "Objective",
    icon: "Flag"
  },
  {
    title : "Skills",
    componentName : "Skills",
    icon: "Extension"
  },
  {
    title : "Work History",
    componentName : "WorkHistory",
    icon: "Work"
  },
  {
    title : "Education",
    componentName : "Education",
    icon : "School"
  },
  {
    title : "Points of Interest",
    componentName : "PointsOfInterest",
    icon: "Info"
  },
  {
    title : "Links",
    componentName : "Links",
    icon : "Links"
  },
  {
    title : "References",
    componentName : "References",
    icon: "Contacts"
  }
]

function App(props) {
  const classes = useStyles();
  const { container } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentPageIndex, setCurrentPageIndex] = useState(3);

  function update(toPageIndex){
    setCurrentPageIndex(toPageIndex);
  }

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={ classes.root }>

        <AppBar position="fixed" className={ classes.appBar } />

        <nav className={classes.drawer} aria-label="Mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            
            <Drawer
              container={ container } variant="temporary" anchor='right' 
              open={mobileOpen} onClose={ handleDrawerToggle } 
              classes={ { paper:classes.drawerPaper } }
              ModalProps={ 
                { keepMounted: true // Better open performance on mobile.
              } } 
            >
              <Menu structure={ structure } currentPageIndex={ currentPageIndex } onPageChange={ update }/>
            </Drawer>
          </Hidden>

          <Hidden xsDown implementation="css">
            <Drawer
              classes={ {
                paper: classes.drawerPaper,
              } }
              variant="permanent"
              open
            >
              <div className={ classes.toolbar }/>

              <Menu structure={ structure } currentPageIndex={ currentPageIndex } onPageChange={ update }/>
            </Drawer>
          </Hidden>
        </nav>

            <MainContentArea 
              title={ structure[currentPageIndex].title } 
              icon={ structure[currentPageIndex].icon } 
              content={ structure[currentPageIndex].componentName } 
              currentPageIndex={ currentPageIndex }
              prevItem={ (currentPageIndex > 0) && structure[currentPageIndex-1].title }
              nextItem={ (currentPageIndex < structure.length - 1) && structure[currentPageIndex+1].title }
              onPageChange={ update }
              className={classes.content} 
            />

      </div>
    </React.Fragment>
  );
}

export default App;
