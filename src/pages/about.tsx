import { ArrowDownward } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
const About_Bg = require("../imgs/about_bg-removed.png");

const About = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "bisque",
        height: "fit-content",
        boxShadow: "10px 10px 79px -1px rgba(0,0,0,0.38) inset",
      }}
    >
      {/* <img
        src={About_Bg}
        alt="About Background"
        style={{ width: "50%", position: "absolute", left: "25%" }}
      /> */}
      <Box>
        <Typography
          variant="h3"
          component="div"
          sx={{
            padding: 1.5,
            fontWeight: 300,
            paddingTop: "4vh",
            textAlign: "center",
          }}
        >
          What is JAC?
        </Typography>
        <Typography
          variant="subtitle1"
          component="div"
          sx={{
            padding: 1.5,
            paddingTop: 0,
            textAlign: "center",
            fontWeight: 300,
          }}
        >
          Founded in 2023
        </Typography>

        <Typography
          variant="subtitle1"
          component="div"
          sx={{
            padding: 1.5,
            paddingTop: 0,
            lineHeight: 1.3,
            fontWeight: 300,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatibus, quibusdam, quas, voluptates doloribus quia voluptatum
          voluptate quod nemo accusantium autem. Quisquam voluptatibus,
          quibusdam, quas, voluptates doloribus quia voluptatum voluptate
        </Typography>
      </Box>
      <Button
        variant="contained"
        size="small"
        sx={{
          backgroundColor: " #50413c",
          opacity: 0.8,
          borderRadius: "10%",
          alignSelf: "flex-end",
          marginRight: "12px",
          marginBottom: "10px",
          border: "3px solid white",
          ":hover": {
            backgroundColor: "bisque",
            color: "darkslategray",
          },
        }}
      >
        <ArrowDownward />
      </Button>
    </Box>
  );
};

export default About;
