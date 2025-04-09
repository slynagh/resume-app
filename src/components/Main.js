import React from "react";

import {
  Paper,
  Typography,
  makeStyles,
  Divider,
  Button,
  Container,
} from "@material-ui/core";

import {
  ProfessionalAchievements,
  References,
  Links,
  PointsOfInterest,
  Education,
  Skills,
  Objective,
  Experience,
  About,
} from "../content";

import Icon from "./Icon";

const useStyles = makeStyles((theme) => ({
  content: {
    fontSize: "1rem",
  },
  padded: {
    padding: theme.spacing(3),
  },
  mb2: {
    marginBottom: theme.spacing(2),
  },
  pageTitle: {
    display: "flex",
    gap: theme.spacing(2),
  },
  contentHeaderIcon: {
    fontSize: "inherit",
    top: "0.09em",
    position: "relative",
  },
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
  switch (title) {
    case "Objective":
      return <Objective />;
    case "Professional Achievements":
      return <ProfessionalAchievements />;
    case "Experience":
      return <Experience />;
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
    case "About this app":
      return <About />;
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

      <Container>
        <Paper className={classes.padded}>
          <Typography
            className={classes.pageTitle}
            variant="h2"
            component="h2"
            gutterBottom
          >
            <Icon className={classes.contentHeaderIcon} name={icon} />
            {title}
          </Typography>

          <Divider className={classes.mb2} />
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
      </Container>
    </div>
  );
}

export default Main;
