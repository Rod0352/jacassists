import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InfoIcon from "@mui/icons-material/Info";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import MenuIcon from "@mui/icons-material/Menu";
type Anchor = "right";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["About", "Services", "Contact"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{
                paddingBottom: 6.5,
              }}
              onClick={
                index === 0
                  ? () =>
                      window.scrollTo({
                        top: window.innerHeight * 0.9,
                        behavior: "smooth",
                      })
                  : index === 1
                  ? () =>
                      window.scrollTo({
                        top:
                          window.innerWidth > 600
                            ? window.innerHeight * 1.3
                            : window.innerHeight * 1.62,
                        behavior: "smooth",
                      })
                  : () =>
                      window.scrollTo({
                        // bototm of page
                        top: document.body.scrollHeight,
                        behavior: "smooth",
                      })
              }
            >
              <ListItemIcon
                sx={{
                  color: "white",
                }}
              >
                {index === 0 ? (
                  <InfoIcon />
                ) : index === 1 ? (
                  <DesignServicesIcon />
                ) : (
                  <ContactPhoneIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            sx={{
              color: "white",
            }}
            onClick={toggleDrawer("right", true)}
          >
            {" "}
            <MenuIcon />{" "}
          </Button>
          <SwipeableDrawer
            sx={{
              "& .MuiDrawer-paper": {
                // boxSizing: "border-box",
                // width: "40vw",
                backgroundColor: "#5d5353b5",
                color: "white",
              },
            }}
            anchor={anchor}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
            onOpen={toggleDrawer("right", true)}
          >
            {list("right")}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
