import React, { useState, Fragment } from "react";
import clsx from "clsx";

import { CssBaseline, Divider, IconButton, Drawer } from "@material-ui/core";

//Custom Components
import Icon from "./components/Icon";
import AppBar from "./components/AppBar";
//import Footer from './components/Footer';
import Main from "./components/Main";
import Menu from "./components/Menu";

// Hooks
import useAppStyles from "./hooks/useAppStyles";

//css
import "./css/fonts.css";
import "./css/App.css";

const structure = require("./data/structure");

const initialWidth = window.innerWidth;

function App() {
  const classes = useAppStyles();

  const [menuOpen, setMenuOpen] = useState(initialWidth > 640);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  function handleDrawerToggle() {
    setMenuOpen(!menuOpen);
  }

  return (
    <Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: menuOpen,
          })}
          menuOpen={menuOpen}
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
            <IconButton onClick={handleDrawerToggle}>
              <Icon name="ChevronLeft" />
            </IconButton>
          </div>

          <Divider />

          <Menu
            structure={structure}
            currentPageIndex={currentPageIndex}
            updateApp={(toPageIndex) => {
              setCurrentPageIndex(toPageIndex);
            }}
          />
        </Drawer>

        <Main
          title={structure[currentPageIndex].title}
          icon={structure[currentPageIndex].icon}
          prevItem={
            currentPageIndex > 0 && structure[currentPageIndex - 1].title
          }
          nextItem={
            currentPageIndex < structure.length - 1 &&
            structure[currentPageIndex + 1].title
          }
          onPrevClick={() => {
            setCurrentPageIndex(currentPageIndex - 1);
          }}
          onNextClick={() => {
            setCurrentPageIndex(currentPageIndex + 1);
          }}
          className={classes.content}
        />
      </div>
    </Fragment>
  );
}

export default App;
