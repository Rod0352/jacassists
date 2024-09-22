import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableTemporaryDrawer from "./Drawer";
const TopBarLogo = require("../imgs/topbar_logo.png");

function TopBar() {
  const scroll = () => {
    window.scrollTo({
      top: window.innerHeight * 0.9,
      behavior: "smooth",
    });
  };
  const scroll_to_About = () => {
    window.scrollTo({
      //   top: window.innerHeight * 1.3,
      top:
        window.innerWidth > 600
          ? window.innerHeight * 1.3
          : window.innerHeight * 1.62,
      behavior: "smooth",
    });
  };

  const scroll_all_the_way_down = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <Box
      sx={{
        // flexGrow: 1,
        backgroundColor: "white",
        p: 1,
        position: "fixed",
        zIndex: 100,
        opacity: 0.9,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "10px 10px 79px -1px rgba(0,0,0,0.38) inset",
      }}
    >
      <img
        src={TopBarLogo}
        alt="JAC Logo"
        style={{ height: "30px", color: " white ", marginLeft: 1.5 }}
      />
      <Box
        sx={{
          fontWeight: 300,
          display: "flex",
          // width: "40%",
          justifyContent: "space-around",
        }}
      >
        <SwipeableTemporaryDrawer />
      </Box>
    </Box>
  );
}
export default TopBar;
