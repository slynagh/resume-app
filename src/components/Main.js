import React from "react";

import {
  Paper,
  Typography,
  makeStyles,
  Divider,
  Button,
} from "@material-ui/core";

import {
  ProfessionalAchievements,
  References,
  Links,
  PointsOfInterest,
  Education,
  Skills,
  Objective,
  WorkHistory,
} from "../content";

import Icon from "./Icon";

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

const Content = ({ title }) => {
  console.log("getContentComponent", title);
  switch (title) {
    case "Objective":
      return <Objective />;
    case "Professional Achievements":
      return <ProfessionalAchievements />;
    case "Experience":
      return <WorkHistory />;
    case "Skills":
      return <Skills />;
    case "Education":
      return <Education />;
    case "Points of Interest":
      return <PointsOfInterest />;
    case "Links":
      return <Links />;
    case "References":
      return <References />;
    default:
      return <Objective />;
  }
};

function Main({
  icon,
  title,
  prevItem,
  nextItem,
  className = "",
  onPrevClick,
  onNextClick,
}) {
  const classes = useStyles();

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
        <div className={classes.content}>
          <Content title={title} />
        </div>
        <Divider />

        <div className={classes.buttonBlock}>
          {prevItem && (
            <Button className={classes.leftButton} onClick={onPrevClick}>
              <Icon name="ChevronLeft" />
              {prevItem}
            </Button>
          )}
          <div className={classes.spacer} />
          {nextItem && (
            <Button className={classes.rightButton} onClick={onNextClick}>
              {nextItem}
              <Icon name="ChevronRight" />
            </Button>
          )}
        </div>
      </Paper>
    </div>
  );
}

export default Main;
