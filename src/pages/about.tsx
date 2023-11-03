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
          //   flexGrow: 1,
          width: screen.width > 600 ? "60%" : "90%",
          margin: "auto",
          //   borderRadius: "10px",
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
              fontFamily: "Lora",
            }}
          >
            What is
            <span
              style={{
                color: "white",
                marginLeft: "12px",
                fontFamily: "Lora",
              }}
            >
              JAC?
            </span>
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
              style={
                {
                  // color: "white",
                }
              }
            >
              JAC
            </span>{" "}
            assists came to fruition in the midst of 2023 when our founder,
            Jess, decided it was time to put her strengths to the test.{" "}
            <span
              style={{
                color: "white",
                fontStyle: "italic",
                // textDecorationLine: "underline",
                textDecorationStyle: "solid",
                textDecorationColor: "white",
                // textDecorationThickness: "1.7px",
                textUnderlineOffset: "3px",
              }}
            >
              Calendar Control
            </span>
            ,{" "}
            <span
              style={{
                color: "white",
                // textDecorationLine: "underline",
                fontStyle: "italic",
                textDecorationStyle: "solid",
                textDecorationColor: "white",
                // textDecorationThickness: "1.7px",
                textUnderlineOffset: "3px",
              }}
            >
              {" "}
              Task Management
            </span>
            ,{" "}
            <span
              style={{
                color: "white",
                // textDecorationLine: "underline",
                fontStyle: "italic",
                textDecorationStyle: "solid",
                textDecorationColor: "white",
                // textDecorationThickness: "1.7px",
                textUnderlineOffset: "3px",
              }}
            >
              {" "}
              Email Responses
            </span>
            , and more is what WE tackle so YOU don't have to. We enjoy taking
            care of the details so you can feel less of the weight and more of
            the freedom. At{" "}
            <span
              style={
                {
                  // color: "white",
                }
              }
            >
              JAC
            </span>{" "}
            assists we're confident in our ability to coordinate, organize, and
            resolve any task sent our way.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
