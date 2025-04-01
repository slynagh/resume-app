import React from "react";

import Paper from "@material-ui/core/Paper";
//import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

import Content from "../components/Content";
import Icon from "../components/Icon";

const useStyles = makeStyles((theme) => ({
  content: {
    fontSize: "1rem",
  },
  padded: {
    padding: theme.spacing(3),
  },
  contentHeader: {
    display: "flex",
    fontSize: "2.5rem",
  },
  contentHeaderIcon: { fontSize: "inherit", marginRight: theme.spacing(3) },
  contentHeaderText: { fontSize: "inherit" },
  buttonBlock: {
    margin: theme.spacing(3, 0, 0),
    display: "flex",
  },
  leftButton: {},
  rightButton: {},
  spacer: {
    flexGrow: 1,
  },
  toolbar: theme.mixins.toolbar,
}));

function MainContentArea({
  icon,
  content,
  title,
  prevItem,
  nextItem,
  className = "",
  currentPageIndex = 0,
  onPageChange,
}) {
  const classes = useStyles();

  function prev() {
    onPageChange(currentPageIndex - 1);
  }

  function next() {
    onPageChange(currentPageIndex + 1);
  }

  return (
    <div className={className}>
      <div className={classes.toolbar} />

      <Paper className={classes.padded}>
        <div className={classes.contentHeader}>
          <Icon className={classes.contentHeaderIcon} name={icon} />
          <Typography
            className={classes.contentHeaderText}
            variant="h2"
            component="h2"
            gutterBottom
          >
            {title}
          </Typography>
        </div>
        <Divider />
        <Content name={content} className={classes.content} />
        <Divider />

        <div className={classes.buttonBlock}>
          {prevItem && (
            <Button className={classes.leftButton} onClick={prev}>
              <Icon name="ChevronLeft" />
              {prevItem}
            </Button>
          )}
          <div className={classes.spacer} />
          {nextItem && (
            <Button className={classes.rightButton} onClick={next}>
              {nextItem}
              <Icon name="ChevronRight" />
            </Button>
          )}
        </div>
      </Paper>
    </div>
  );
}

export default MainContentArea;
