import React, { useState, useEffect } from "react";
// import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress, Card, CardContent } from "@material-ui/core";

const progressSize = 32;

const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    gap: theme.spacing(1.5),
    alignItems: "center",
    "&, &:last-child": { padding: theme.spacing(1.5) },
  },
  progress: {
    position: "relative",
    width: progressSize,
    height: progressSize,
    flexShrink: 0,
    alignSelf: "flex-start",
  },
  progressBG: {
    position: "absolute",
    color: "#eee",
  },
  progressOL: {
    position: "absolute",
  },
}));

const SkillCard = ({
  value,
  delay = 0,
  children = null,
  component = "div",
  ...props
}) => {
  const [internalValue, setInternalValue] = useState(0);

  const classes = useStyles();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setInternalValue(value);
    }, delay);

    return function () {
      clearTimeout(timeout);
    };
  }, [value, delay]);

  return (
    <Card variant="outlined" elevation={4} component={component} {...props}>
      <CardContent className={classes.content}>
        <div className={classes.progress}>
          <CircularProgress
            className={classes.progressBG}
            variant="static"
            size={progressSize}
            thickness={6}
            value={100}
          />
          <CircularProgress
            className={classes.progressOL}
            variant="static"
            size={progressSize}
            thickness={6}
            value={internalValue}
            data-value={value}
          />
        </div>
        {children}
      </CardContent>
    </Card>
  );
};

export default SkillCard;
