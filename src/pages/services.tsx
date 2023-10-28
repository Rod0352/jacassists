import {
  ArrowDownward,
  RadioButtonCheckedOutlined,
  Star,
} from "@mui/icons-material";
import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
const Service_Bg = require("../imgs/service_bg.jpeg");
const Service_Secondary = require("../imgs/service_secondary.jpeg");

const Services = () => {
  const serviveList = [
    "Managing emails, texts & voicemails",
    "Responding to and tracking new client inquiries",
    "Updating client EHRs",
    "Processing client payments",
    "Generating superbills",
    "Schedule management",
    "Office management (paying bills, payroll tracking, etc.)",
    "Organizing current systems, spreadsheets, tracking",
    "Transcribing audio notes",
    "Social media posts",
  ];

  const screen_size = window.innerWidth;
  console.log(screen_size);

  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage: `url(${Service_Bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <Box>
        <Typography
          variant="h3"
          component="div"
          sx={{
            padding: 1.5,
            fontWeight: 400,
            paddingTop: "4vh",
            textAlign: "center",
            color: "white",
          }}
        >
          Services
        </Typography>
      </Box>
      <Paper
        sx={{
          borderRadius: "10px",
          minWidth: "80%",
          minHeight: "70%",
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            height: "100%",
            alignItems: "center",
          }}
        >
          {serviveList.map((service) => (
            <Typography
              variant={screen_size > 600 ? "h6" : "subtitle1"}
              component="div"
              sx={{
                padding: 1,
                fontWeight: 300,
                color: "white",
              }}
            >
              <RadioButtonCheckedOutlined /> {service}
            </Typography>
          ))}
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundImage: `url(${Service_Secondary})`,
            boxShadow: "10px 10px 79px -1px rgba(0,0,0,0.38) inset",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100vh",
          }}
        ></Box>
      </Paper>
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

export default Services;