import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Dashboard, CameraOutdoor, Storage, Store } from "@mui/icons-material";

export default function appDrawer({ toggleDrawer, state }) {
  return (
    <div>
      <React.Fragment>
        <SwipeableDrawer
          anchor="left"
          open={state}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <Box
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              <ListItem button component={Link} to="/home">
                <ListItemIcon>
                  <Dashboard />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button component={Link} to="/history">
                <ListItemIcon>
                  <CameraOutdoor />
                </ListItemIcon>
                <ListItemText primary="History" />
              </ListItem>
            </List>
          </Box>
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
