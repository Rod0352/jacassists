import {
  ArrowDownward,
  JoinRight,
  NavigateNext,
  PointOfSale,
  RadioButtonCheckedOutlined,
  Star,
} from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import UpdateIcon from "@mui/icons-material/Update";
import AddCardIcon from "@mui/icons-material/AddCard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AddchartIcon from "@mui/icons-material/Addchart";
import CreateIcon from "@mui/icons-material/Create";
import FolderIcon from "@mui/icons-material/Folder";
import RememberMeIcon from "@mui/icons-material/RememberMe";
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
            // padding: 1.5,
            paddingTop: 11,
            // paddingBottom: 8,
            // pb: screen_size > 600 ? 8 : 4,
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
          // minWidth: "60%",
          // minHeight: "70%",
          height: "fit-content",
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
            width: "100%",
            overflow: "auto",
            border: "4px solid bisque",
            // backgroundImage: `url(${Service_Secondary})`,
            // backgroundSize: "cover",
            // backgroundPosition: "center",
            // backgroundRepeat: "no-repeat",
            // boxShadow: "10px 10px 79px -1px rgba(0,0,0,0.38) inset",
          }}
        >
          {serviveList.map((service, index) => (
            <Typography
              key={index}
              variant={screen_size > 600 ? "h6" : "subtitle1"}
              // component="div"

              sx={{
                padding: 1,
                justifyContent: "space-between",
                alignItems: "center",
                display: "flex",
                fontWeight: 400,
                // fontFamily: "Lora",
                color: "white",
                borderBottom:
                  index === 9 ? "4px solid bisque" : "1px solid bisque",
                // index === 0 || index === 1 || index === 2 ? "black" : "white",
                backgroundColor: screen_size > 600 ? "" : "rgba(0,0,0,0.3)",
              }}
            >
              {/* <NavigateNext /> {service} */}
              {service}
              {index === 0 ? (
                <EmailIcon />
              ) : index === 1 ? (
                <ContactMailIcon />
              ) : index === 2 ? (
                <UpdateIcon />
              ) : index === 3 ? (
                <AddCardIcon />
              ) : index === 4 ? (
                <AttachMoneyIcon />
              ) : index === 5 ? (
                <CalendarMonthIcon />
              ) : index === 6 ? (
                <AddchartIcon />
              ) : index === 7 ? (
                <FolderIcon />
              ) : index === 8 ? (
                <CreateIcon />
              ) : index === 9 ? (
                <RememberMeIcon />
              ) : (
                <JoinRight />
              )}{" "}
            </Typography>
          ))}
        </Box>
        {/* <Box
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
        ></Box> */}
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
