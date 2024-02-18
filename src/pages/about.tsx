import { ArrowDownward } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
const About_Bg = require("../imgs/about_bg.jpeg");

const About = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundImage: `url(${About_Bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderBottom: "10px solid #9fc4c8",
      }}
    >
      <Box
        sx={{
          width: screen.width > 600 ? "60%" : "90%",
          margin: "auto",
          opacity: 0.94,
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#9fc4c8",
          height: "fit-content",
          boxShadow: "10px 10px 79px -1px rgba(0,0,0,0.38) inset",
          pb: 4,
        }}
      >
        <Box>
          <Typography
            variant="h3"
            component="div"
            sx={{
              padding: 1.5,
              fontWeight: 300,
              paddingTop: "4vh",
              textAlign: "center",
              fontFamily: "Lora",
            }}
          >
            ABOUT US
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
            ~ In A Nutshell ~
          </Typography>

          <Typography
            variant="subtitle1"
            component="div"
            sx={{
              padding: 1.5,
              paddingTop: 0,
              paddingLeft: "10%",
              paddingRight: "10%",
              lineHeight: 1.3,
              fontWeight: 300,
              fontFamily: "Lora",
            }}
          >
            <span
              style={{
                color: "white",
              }}
            >
              JAC Virtual Assistants LLC{" "}
            </span>
            was founded in 2023 by Jess Coleman, who wanted to utilize her
            strengths to provide exceptional virtual assistance to medical and
            mental health providers. We specialize in calendar management, task
            delegation, email responses, and all other administrative duties so
            that you don't have to worry about them. Our team takes pride in
            handling every detail, freeing you up to focus on what you do best.
            We are confident in our ability to coordinate, organize, and solve
            any task that comes our way.
            <br></br>
            <br></br>
            As a clinician, your top priority is providing quality care to your
            patients. However, finding reliable assistance can be a challenge.
            We understand this and are here to help. Our team is composed of
            experienced professionals with clean backgrounds and HIPAA
            certifications. Let us assist you in providing the best possible
            care to your clients.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
