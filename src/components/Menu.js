import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import Icon from "../components/Icon";
import MuiIcon from "@material-ui/core/Icon";

function Menu(props) {
  const currentPageIndex = props.currentPageIndex;

  function update(index) {
    if (index !== currentPageIndex && index !== null && index !== undefined) {
      props.updateApp(index);
    }
  }

  function onContactClick() {
    window.open(
      "mailto:stevelynagh@hotmail.com?subject=Let's work together!",
      "_blank"
    );
  }

  function onSourceCodeClick() {
    window.open("https://github.com/slynagh/resume-app", "_blank");
  }

  return (
    <nav>
      <List>
        {props.structure.map((item, index) => (
          <ListItem
            component="li"
            key={index}
            button
            selected={index === currentPageIndex}
            onClick={() => update(index)}
          >
            <ListItemIcon>
              <Icon name={item.icon} />
            </ListItemIcon>
            <ListItemText>{item.title}</ListItemText>
          </ListItem>
        ))}

        <ListItem divider />
        <ListItem
          component="li"
          key={props.structure.length}
          button
          onClick={onContactClick}
        >
          <ListItemIcon>
            <Icon name="Email" />
          </ListItemIcon>
          <ListItemText>Email me!</ListItemText>
        </ListItem>
        <ListItem
          component="li"
          key={props.structure.length + 1}
          button
          onClick={onSourceCodeClick}
        >
          <ListItemIcon>
            <MuiIcon className="icon-embed2 overflow-visible" />
          </ListItemIcon>
          <ListItemText>View source on GitHub</ListItemText>
        </ListItem>
      </List>
    </nav>
  );
}

export default Menu;
