import {
  ArrowDownward,
  JoinRight,
  NavigateNext,
  PointOfSale,
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
        backgroundPosition: "right",
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
            paddingTop: 11,
            // paddingBottom: 8,
            pb: screen_size > 600 ? 8 : 4,
            fontFamily: "Lora",
            fontWeight: 400,
            textAlign: "center",
            color: "white",
            textDecorationLine: "underline",
            textUnderlineOffset: "5px",
          }}
        >
          Services
        </Typography>
      </Box>
      <Paper
        sx={{
          borderRadius: "10px",
          // paddingTop: "4vh",
          minWidth: "80%",
          minHeight: "70%",
          margin: screen_size > 600 ? "auto" : "10px",
          backgroundImage: screen_size > 600 ? "" : `url(${Service_Secondary})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: screen_size < 600 ? "" : "rgba(40,30,32,0.5)",
          display: "flex",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            height: "100%",
            alignItems: "center",
            overflow: "auto",
          }}
        >
          {serviveList.map((service, index) => (
            <Typography
              key={index}
              variant={screen_size > 600 ? "h6" : "subtitle1"}
              component="div"
              sx={{
                padding: 1,
                display: "flex",
                fontWeight: 300,
                color: "white",
                backgroundColor: screen_size > 600 ? "" : "rgba(0,0,0,0.3)",
              }}
            >
              <NavigateNext /> {service}
            </Typography>
          ))}
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            flexShrink: 1,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundImage: `url(${Service_Secondary})`,
            boxShadow: "10px 10px 79px -1px rgba(0,0,0,0.38) inset",
            backgroundSize: "cover",
            overflow: "visible",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100vh",
          }}
        ></Box>
      </Paper>
      <Button
        variant="contained"
        size="small"
        disabled
        sx={{
          backgroundColor: " #50413c",
          opacity: 0,
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
