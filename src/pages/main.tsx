import { Box, Button, Typography } from "@mui/material";
import React from "react";
const Main_Bg = require("../imgs/main_bg.jpeg");

const Main = () => {
  const scroll = () => {
    window.scrollTo({
      top: window.innerHeight - 60,
      behavior: "smooth",
    });
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage: `url(${Main_Bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "99vh",
        borderBottom: "10px solid #9fc4c8",
      }}
    >
      <Box>
        <Typography
          variant="h2"
          component="div"
          sx={{
            padding: 1.5,
            color: "white",
            fontWeight: 300,
            paddingTop: "17vh",
            fontFamily: "Lora",
          }}
        >
          JAC, Virtual Assistants LLC
        </Typography>
        {/* <Typography
          variant="subtitle1"
          component="div"
          sx={{
            padding: 1.5,
            paddingTop: 0,
            color: "white",
            fontWeight: 400,
            textAlign: "end",
          }}
        >
          HIPAA certified and background checked virtual assistants
        </Typography> */}
        <Typography
          variant="h6"
          component="div"
          sx={{
            padding: 1.5,
            paddingTop: 0,
            color: "white",
            textAlign: "end",
            fontWeight: 300,
            fontFamily: "Lora",
          }}
        >
          Founded in 2023
        </Typography>
      </Box>
      <Button
        onClick={scroll}
        variant="contained"
        sx={{
          marginTop: 5,
          backgroundColor: " #50413c",
          opacity: 0.8,
          border: "3px solid white",
          ":hover": {
            backgroundColor: "bisque",
            color: "darkslategray",
          },
        }}
      >
        Get Started
      </Button>
    </Box>
  );
};

export default Main;
