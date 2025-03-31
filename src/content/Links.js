import { makeStyles, Button } from "@material-ui/core";
import FontIcon from "@material-ui/core/Icon";
import Icon from "../components/Icon";

const useStyles = makeStyles((theme) => ({
  root: {
    listStyleType: "none",
    paddingLeft: 0,
  },
  button: {
    margin: theme.spacing(3, 0),
  },
}));

const Links = () => {
  const classes = useStyles();

  return (
    <ul className={classes.root}>
      <li>
        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          size="large"
          component="a"
          href="http://stevenlynagh.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="Web" />
          &nbsp;&nbsp; Personal Website
        </Button>
      </li>
      <li>
        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          size="large"
          component="a"
          href="https://www.linkedin.com/in/stevenlynagh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontIcon className="icon-linkedin" />
          &nbsp;&nbsp; LinkedIn
        </Button>
      </li>
      <li>
        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          size="large"
          component="a"
          href="https://stackoverflow.com/users/2790882/slynagh?tab=profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontIcon className="icon-stackoverflow" />
          &nbsp;&nbsp; Stack Overflow
        </Button>
      </li>
      <li>
        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          size="large"
          component="a"
          href="https://github.com/slynagh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontIcon className="icon-github" />
          &nbsp;&nbsp; GitHub
        </Button>
      </li>
      <li>
        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          size="large"
          component="a"
          href="https://www.freecodecamp.org/stevelynagh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontIcon className="icon-free-code-camp overflow-visible" />{" "}
          &nbsp;&nbsp; FreeCodeCamp
        </Button>
      </li>
    </ul>
  );
};

export default Links;
