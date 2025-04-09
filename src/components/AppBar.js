import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  profileButton: {},
  hide: {
    display: "none",
  },
  menuButton: {
    marginRight: "15px",
  },
  title: {
    flexGrow: 1,
  },
}));

function AppBar(props) {
  const classes = useStyles();
  const menuOpen = props.menuOpen || false;

  function handleMenuButtonClick() {
    props.onMenuButtonClick();
  }

  return (
    <MuiAppBar
      position={props.position || "fixed"}
      color={props.color || "primary"}
      className={props.className || ""}
      classes={props.classes || {}}
    >
      <Toolbar>
        <IconButton
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: menuOpen,
          })}
          color="inherit"
          aria-label="Menu"
          onClick={handleMenuButtonClick}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Steven Lynagh | Resume
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar;
