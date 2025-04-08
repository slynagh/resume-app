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

const data = [
  // {
  //   link: "http://stevenlynagh.com",
  //   icon: "Web",
  //   fontIcon: null,
  //   text: "Personal Website",
  // },
  {
    link: "https://www.linkedin.com/in/stevenlynagh/",
    fontIcon: "icon-linkedin",
    text: "LinkedIn profile",
  },
  {
    link: "https://github.com/slynagh",
    fontIcon: "icon-github",
    text: "GitHub profile",
  },
  {
    link: "https://stackoverflow.com/users/2790882/slynagh?tab=profile",
    fontIcon: "icon-stackoverflow",
    text: "Stack Overflow profile",
  },

  // {
  //   link: "https://www.freecodecamp.org/stevelynagh",
  //   fontIcon: "icon-free-code-camp",
  //   text: "FreeCodeCamp profile",
  // },
  // {
  //   link: "https://app.pluralsight.com/profile/steven-lynagh",
  //   fontIcon: "icon-pluralsight",
  //   text: "Pluralsight SkillsIQ",
  // },
];

const Links = () => {
  const classes = useStyles();

  return (
    <ul className={classes.root}>
      {data.map((item, index) => (
        <li key={index}>
          <Button
            className={classes.button}
            color="primary"
            variant="contained"
            size="large"
            component="a"
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.fontIcon ? (
              <FontIcon className={`${item.fontIcon} overflow-visible`} />
            ) : (
              <Icon name={item.icon} />
            )}
            &nbsp;&nbsp; {item.text}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default Links;
