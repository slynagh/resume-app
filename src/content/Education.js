import { Divider, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mb2: {
    marginBottom: theme.spacing(2),
  },
}));

const Education = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h5" component="h3" gutterBottom>
        Adv. Diploma Screen and Media
      </Typography>

      <Typography variant="h6" component="p" gutterBottom>
        Southbank Institute of Technology | 2013
      </Typography>

      <Typography
        variant="body1"
        component="p"
        gutterBottom
        className={classes.mb2}
      >
        After completing the course in Interactive Digital Media I accepted a
        scholarship position to complete an Advanced Diploma in Screen and
        Media.
      </Typography>
      <Divider className={classes.mb2} />

      <Typography variant="h5" component="h3" gutterBottom>
        Diploma Interactive Digital Media
      </Typography>

      <Typography
        variant="h6"
        component="p"
        gutterBottom
        className={classes.mb2}
      >
        Southbank Institute of Technology | 2012 - 2013
      </Typography>

      <Divider className={classes.mb2} />

      <Typography variant="h5" component="h3" gutterBottom>
        Bachelor of Animation
      </Typography>

      <Typography
        variant="h6"
        component="p"
        gutterBottom
        className={classes.mb2}
      >
        Griffith University | 1996-2001
      </Typography>
    </>
  );
};

export default Education;
