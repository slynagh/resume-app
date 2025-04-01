import { Fragment } from "react";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SkillCard from "../components/SkillCard";

const skills = require("../data/skills");

const useStyles = makeStyles((theme) => ({
  group: {
    paddingInlineStart: 0,
    listStyleType: "none",
    marginBottom: theme.spacing(2),
  },
}));

const Skills = () => {
  const classes = useStyles();

  let delay = 0;

  return (
    <Fragment>
      {skills.map((group, i) => {
        return (
          <Fragment key={i}>
            <h3>{group.name}</h3>
            <Grid
              container
              spacing={1}
              alignItems="flex-start"
              component="ul"
              className={classes.group}
            >
              {group.skills.map((item, j) => {
                delay += 100;
                return (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    xl={2}
                    component="li"
                    key={item.name}
                  >
                    <SkillCard value={item.value} delay={delay}>
                      {item.name}
                    </SkillCard>
                  </Grid>
                );
              })}
            </Grid>
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default Skills;
