import {
  ArrowDownward,
  JoinRight,
  NavigateNext,
  Person2,
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
import { Box, Button, IconButton, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
const Service_Bg = require("../imgs/service_bg.jpeg");

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Navigation,
  EffectFade,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const randomColor = () => {
  const colors = ["#ffed25", "#f089ff", "#25cdff", "#ff8989", "#9fff89"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const ServiceItem = ({
  title,
  services,
  index,
  sx,
}: {
  title: string;
  services: string[];
  index: number;
  sx: any;
}) => {
  const icon = (index: number) => {
    switch (index) {
      case 0:
        return (
          <IconButton
            disableFocusRipple
            disableRipple
            sx={{
              color: randomColor(),
              // backgroundColor: "green",
              borderRadius: "50%",
              border: "2.8px solid white",
              padding: 2,
              alignSelf: "center",
            }}
          >
            <ContactMailIcon />
          </IconButton>
        );
      case 1:
        return (
          <IconButton
            sx={{
              color: randomColor(),
              // backgroundColor: "green",
              borderRadius: "50%",
              border: "2.8px solid white",
              padding: 2,
              alignSelf: "center",
            }}
          >
            <Person2 />
          </IconButton>
        );
      case 2:
        return (
          <IconButton
            sx={{
              color: randomColor(),
              // backgroundColor: "green",
              borderRadius: "50%",
              border: "2.8px solid white",
              padding: 2,
              alignSelf: "center",
            }}
          >
            <UpdateIcon />
          </IconButton>
        );
      case 3:
        return (
          <IconButton
            sx={{
              color: randomColor(),
              backgroundColor: "green",
              borderRadius: "50%",
              border: "2.8px solid white",
              padding: 2,
              alignSelf: "center",
            }}
          >
            <AddchartIcon />
          </IconButton>
        );
      case 4:
        return (
          <IconButton
            sx={{
              color: randomColor(),
              backgroundColor: "green",
              borderRadius: "50%",
              border: "2.8px solid white",
              padding: 2,
              alignSelf: "center",
            }}
          >
            <RadioButtonCheckedOutlined />
          </IconButton>
        );

      default:
        return (
          <IconButton
            sx={{
              color: "#ffed25",
              // backgroundColor: "green",
              borderRadius: "50%",
              border: "2.8px solid white",
              padding: 2,
              alignSelf: "center",
            }}
          >
            <FolderIcon />
          </IconButton>
        );
    }
  };

  return (
    <Box
      sx={{
        ...sx,
        width: 210,
        height: 290,
        border: "2.8px solid white",
        backgroundColor: "rgba(0,0,0,0.5)",
        padding: 2,
        borderRadius: "0px",
        // margin: 2,
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "column",
        boxShadow: "11px 9px #b5b5b5c7",
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          display: "none",
          
        },
      }}
      key={index}
    >
      {icon(index)}
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          color: "white",
          fontFamily: "lora",
          mb: 2,
          position: "sticky",
          textAlign: "center",
        }}
      >
        {title}
      </Typography>
      {services.map((service, index) => (
        <Typography
          variant="subtitle1"
          sx={{
            // fontFamily: "lora",
            lineHeight: 1.2,
            color: "white",
          }}
          key={index}
        >
          - {service}
        </Typography>
      ))}
    </Box>
  );
};

const Services = () => {
  const BuisnessServices = {
    "Administrative Support": [
      "Managing emails, texts & voicemails",
      "Responding to and tracking new client inquiries/referrals",
      "Office management (paying bills, payroll, etc.)",
      "Onboarding/Offboarding",
    ],
    "Client Management": [
      "Updating client EHRs",
      "Processing client payments, generating Superbills",
      "Clinician and practice schedule management",
    ],
    "Organization and Data Management": [
      "Organizing current systems, spreadsheets, tracking",
      "Transcribing audio notes",
    ],
    "Communication and Marketing": [
      "Creating, scheduling and managing social media posts",
      "Canva projects",
    ],
    "Research and Assistance": [
      "Assisting with research",
      "Researching new tools",
    ],
  };

  const PersonalServices = {
    "Travel and Accommodation": ["Booking flights, hotels, etc."],
    "Personal Assistance": ["Online shopping/gift ordering"],
    "Communication Management": ["Email management"],
    "Financial Management": ["Bill payment", "Insurance claims"],
    Scheduling: ["Schedule management"],
  };

  const screen_size = window.innerWidth;
  console.log(screen_size);

  return (
    <Box
      sx={{
        // flexGrow: 1,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage: `url(${Service_Bg})`,
        backgroundSize: "cover",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        // margin: 1,
        // height: "100vh",/
      }}
    >
      <Typography
        variant="h3"
        component="div"
        sx={{
          // padding: 1.5,
          paddingTop: 11,
          paddingBottom: 8,
          // pb: screen_size > 600 ? 8 : 4,
          fontStyle: "italic",
          fontFamily: "Lora",
          fontWeight: 400,
          textAlign: "center",
          color: "white",
        }}
      >
        Our Services
      </Typography>

      <Swiper
        style={{
          width: "90%",
          display: "flex",
          flexFlow: "column-reverse",
          paddingBottom: "30px",
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
          },
        }}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <Typography
          variant="h4"
          sx={{
            color: "white",
            width: "100%",
            fontFamily: "lora",
            textAlign: "left",
            ml: 3,
            mb: 3,
          }}
        >
          For Your Business ...
        </Typography>
        {Object.keys(BuisnessServices).map((service, index) => (
          <SwiperSlide
            key={index}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <ServiceItem
              title={service}
              services={BuisnessServices[service]}
              index={index}
              sx={{}}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        style={{
          width: "90%",
          display: "flex",
          flexFlow: "column-reverse",
          paddingBottom: "30px",
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
        }}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <Typography
          variant="h4"
          sx={{
            color: "white",
            fontFamily: "lora",
            textAlign: "right",
            mt: 3,
            mr: 3,
            mb: 3,
            width: "100%",
          }}
        >
          ... Or Personal Needs
        </Typography>
        {Object.keys(PersonalServices).map((service, index) => (
          <SwiperSlide
            key={index}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <ServiceItem
              title={service}
              services={PersonalServices[service]}
              index={index}
              sx={{}}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Typography
        variant="h4"
        component="div"
        sx={{
          color: "white",
          fontFamily: "lora",
          textAlign: "center",
          mt: 3,
          mb: 1,
        }}
      >
        Coming Soon ...
      </Typography>
      <Typography
        variant="h6"
        component="div"
        sx={{
          color: "white",
          fontFamily: "lora",
          textAlign: "center",
          m: 6,
        }}
      >
        Insurance Credentialing ( this will be a separate, project based service
        with its own separate cost! )
      </Typography>
      <Typography
        variant="h5"
        component="div"
        sx={{
          color: "white",
          fontFamily: "lora",
          textDecoration: "underline",
          textUnderlineOffset: "5px",
        }}
        mt={4}
      >
        Pricing
      </Typography>
      <Typography
        variant="subtitle1"
        component="div"
        mt={2}
        sx={{
          color: "white",
          textAlign: "center",
          fontFamily: "lora",
          textWrap: "balance",
        }}
      >
        All services are billed $36 hourly at your choice of weekly, bi-weekly,
        or monthly intervals
      </Typography>

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
