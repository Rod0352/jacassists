import * as React from "react";
import Box from "@mui/material/Box";
import { green, yellow } from "@mui/material/colors";
import { Typography } from "@mui/material";
const TopBarLogo = require("../imgs/topbar_logo.png");

function TopBar() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "bisque",
        position: "sticky",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 1.5,
      }}
    >
      {/* <Typography
        variant="h5"
        component="div"
        sx={{ flexGrow: 1, color: "white", fontWeight: 300 }}
      >
        JAC
      </Typography> */}
      <img
        src={TopBarLogo}
        alt="JAC Logo"
        style={{ height: "30px", color: " white " }}
      />
      <Box
        sx={{
          //   color: yellow.A700,
          fontWeight: 300,
          display: "flex",
          width: "40%",
          justifyContent: "space-evenly",
        }}
      >
        <Typography
          sx={{
            color: "black",
            marginRight: 1.5,
            fontWeight: 300,
            transition: "all 0.2s ease",
            display: "flex",
            ":hover": {
              borderBottom: "1px solid white",
              //   color: yellow[500],
            },
          }}
        >
          About
        </Typography>
        <Typography
          sx={{
            color: "black",
            marginRight: 1.5,
            fontWeight: 300,
            transition: "all 0.2s ease",
            display: "flex",
            ":hover": {
              borderBottom: "1px solid white",
              //   color: yellow[500],
            },
          }}
        >
          Services
        </Typography>
        <Typography
          sx={{
            color: "black",
            fontWeight: 300,
            transition: "all 0.2s ease",
            display: "flex",
            ":hover": {
              borderBottom: "1px solid white",
              //   color: yellow[500],
            },
          }}
        >
          Contact
        </Typography>
      </Box>
    </Box>
  );
}
export default TopBar;
