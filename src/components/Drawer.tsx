import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import CopyrightIcon from "@mui/icons-material/Copyright";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";
const TopBarLogo = require("../imgs/topbar_logo.png");
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
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
      <List
        sx={{
          paddingTop: 0,
        }}
      >
        {["About", "Services", "Contact"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{
                paddingBottom: 6.5,
                display: "flex",
                justifyContent: "space-between",
                borderTop: "1px solid white",
                // ":hover": {
                boxShadow: "-5px 3px 23px -2px rgba(0,0,0,0.12) inset",
                //   border: "1.9px solid bisque ",
                // },
                "&:active": {
                  boxShadow: "10px 10px 79px -1px rgba(0,0,0,0.38) inset",
                  // border: "1.9px solid bisque ",
                  // color: "darkslategray",
                },
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
              {/* <ListItemIcon
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
              </ListItemIcon> */}
              <Typography
                // primary={text}
                variant="h4"
                sx={{
                  fontFamily: "'lora', serif", // on hover underline
                  "&:hover": {
                    // textDecoration: "underline",
                  },
                }}
              >
                {text}
              </Typography>
              <KeyboardDoubleArrowDownIcon />
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
                overflowX: "hidden",
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
            <Box
              sx={{
                // border: "1px solid red",
                width: "99.8%",
                height: "99.8%",
                display: "flex",
                flexDirection: "column",
                // alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "30%",
                  // borderRadius: "50%",
                  // backgroundColor: "white",
                  opacity: 1,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  // boxShadow: "10px 10px 79px -1px rgba(0,0,0,0.38) inset",
                }}
              >
                <img
                  src={TopBarLogo}
                  alt="JAC Logo"
                  style={{
                    height: "50%",
                    color: " white ",
                    marginLeft: 1.5,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    marginBottom: 2,
                    color: "white",
                    fontWeight: 300,
                    fontFamily: "sans-serif",
                  }}
                >
                  Copyright ©2024 Jacassists
                </Typography>
              </Box>
            </Box>
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
