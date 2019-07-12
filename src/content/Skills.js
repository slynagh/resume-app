import React, { Fragment, useState, useEffect } from 'react';

import { Grid, CircularProgress, List, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const skills = require('../data/skills');
const progressSize = 64;

const useStyles = makeStyles(theme => ({
    skillColumn: {
        flexGrow: 1
    },
    skillItem: {
        margin: theme.spacing(3, 0),
        width: '100%',
    },
    progress: {
        position: "relative",
        width: progressSize,
        height: progressSize,
        marginRight: theme.spacing(3)
    },
    progressBG: {
        position: "absolute",
        color: "#eee"
    },
    progressOL: {
        position: "absolute"
    }
}));

function Skills(props) {
    const classes = useStyles();
    const [skillValues, updateSkillValues] = useState(
        [
            skills["Web Technologies"].map(() => 0),
            skills["Software"].map(() => 0),
            skills["Other Skills"].map(() => 0)
        ]);

    // function setValue(el, value) {
    //     el.value = value;
    // }

    useEffect(function () {
        console.log("moo");
        setTimeout(function () {
            updateSkillValues(
                [
                    skills["Web Technologies"].map(item => item.value),
                    skills["Software"].map(item => item.value),
                    skills["Other Skills"].map(item => item.value)
                ]
            )
        }, 100)

    }, [])

    return (
        <Fragment>

            <Grid container spacing={3} alignItems="flex-start">
                <Grid item md={6} lg={4} className={classes.skillColumn}>
                    <List >
                        <h3>Web Technologies</h3>
                        {skills["Web Technologies"].map((item, index) => {
                            skillValues[0].push(0);
                            return (
                                <ListItem divider key={index}>
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
                                            value={skillValues[0][index]}
                                        // data-value={item.value}
                                        />
                                    </div>
                                    <ListItemText className="skillName">{item.name}</ListItemText>
                                </ListItem>
                            )
                        })}
                    </List>
                </Grid>
                <Grid item container md={6} lg={8} spacing={3}>
                    <Grid item md={12} lg={6} className={classes.skillColumn}>
                        <List>
                            <h3>Software</h3>
                            {skills["Software"].map((item, index) => {
                                skillValues[1].push(0);
                                return (
                                    <ListItem divider key={index}>
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
                                                value={skillValues[1][index]}
                                            // data-value={item.value}
                                            />
                                        </div>
                                        <ListItemText className="skillName">{item.name}</ListItemText>
                                    </ListItem>
                                )
                            })}</List>
                    </Grid>
                    <Grid item md={12} lg={6} className={classes.skillColumn}>
                        <List>
                            <h3>Other Skills</h3>
                            {skills["Other Skills"].map((item, index) => {
                                skillValues[2].push(0);
                                return (
                                    <ListItem divider key={index}>
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
                                                value={skillValues[2][index]}
                                            //data-value={item.value}
                                            />
                                        </div>
                                        <ListItemText className="skillName">{item.name}</ListItemText>
                                    </ListItem>
                                )
                            })}
                        </List>
                    </Grid>
                </Grid>

            </Grid>


        </Fragment>
    )
}

export default Skills;