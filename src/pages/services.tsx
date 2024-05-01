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
            sx={{
              color: "white",
              backgroundColor: "green",
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
              color: "gray",
              backgroundColor: "bisque",
              alignSelf: "center",
            }}
          >
            <AddCardIcon />
          </IconButton>
        );
      case 2:
        return (
          <IconButton
            sx={{
              color: "white",
              backgroundColor: "green",
              alignSelf: "  center",
            }}
          >
            <UpdateIcon />
          </IconButton>
        );
      case 3:
        return (
          <IconButton
            sx={{
              color: "gray",
              backgroundColor: "bisque",
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
              color: "white",
              backgroundColor: "green",
              alignSelf: "  center",
            }}
          >
            <RadioButtonCheckedOutlined />
          </IconButton>
        );

      default:
        return (
          <IconButton
            sx={{
              color: "gray",
              backgroundColor: "bisque",
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
        border: "1px solid white",
        backgroundColor: "white",
        padding: 2,
        // margin: 2,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        boxShadow: "11px 9px #b5b5b5c7",
      }}
      key={index}
    >
      {icon(index)}
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 600,
          fontFamily: "lora",
          mb: 2,
        }}
      >
        {title}
      </Typography>
      {services.map((service, index) => (
        <Typography
          variant="subtitle2"
          sx={{
            fontFamily: "lora",
          }}
          key={index}
        >
          {service}
        </Typography>
      ))}
    </Box>
  );
};

const Services = () => {
  const BuisnessServices = {
    "Client Communication & Management": [
      "Managing emails, texts & voicemails",
      "Responding to and tracking new client inquiries/referrals",
      "Updating client EHRs",
      "Processing client payments, generating superbills",
    ],
    "Practice Operations": [
      "Clinician and practice schedule management",
      "Office management (paying bills, payroll, etc.)",
      "Onboarding/Offboarding",
    ],
    "System And Data Organization": [
      "Organizing current systems, spreadsheets, tracking",
      "Transcribing audio notes",
      "Assisting with research",
    ],
    "Marketing and Outreach": [
      "Creating, scheduling and managing social media posts",
      "Canva projects",
    ],
    "Administrative Support": [
      "Managing emails, texts & voicemails",
      "Office management (paying bills, payroll, etc.)",
      "Organizing current systems, spreadsheets, tracking",
      "Transcribing audio notes",
      "Assisting with research",
      "Onboarding/Offboarding",
    ],
  };

  const PersonalServices = {
    "Travel and Accommodation Management": ["Booking flights, hotels, etc."],
    "Financial and Administrative Tasks": ["Bill payment", "Insurance claims"],
    "Communication and Organization": [
      "Email management",
      "Schedule management",
    ],
    "Personal and Miscellaneous Errands": ["Online shopping/gift ordering"],
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

      <Swiper
        style={{
          width: "90%",
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={screen_size > 600 ? 3 : 1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
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
      <Swiper
        style={{
          width: "90%",
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={screen_size > 600 ? 3 : 1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
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
        variant="h6"
        component="div"
        sx={{ color: "white", fontFamily: "lora" }}
        mt={3}
      >
        Pricing
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          maxWidth: "650px",
          mt: 4,
        }}
      >
        <Box
          sx={{
            border: "1.2px solid white",
            borderRadius: "6px",
            // flex: 1,
            maxWidth: "20%",
            width: "100%",
            minWidth: "20%",
            padding: "5px",

            mr: 1,
            ml: 1,
            transition: "all 0.2s ease",
            ":hover": {
              boxShadow: "10px 10px 79px -1px rgba(0,0,0,0.38) inset",
              border: "1.9px solid bisque ",
            },
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{
              color: "white",
              textAlign: "center",
              fontFamily: "Lora",
              textDecorationLine: "underline",
              textUnderlineOffset: "5px",
              paddingBottom: "36px",
            }}
          >
            Hourly
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: "white", textAlign: "center", fontStyle: "italic" }}
          >
            as needed
          </Typography>
          <Typography
            variant="subtitle2"
            component="div"
            sx={{ color: "white", textAlign: "center" }}
          >
            -
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: "white", textAlign: "center" }}
          >
            $36/hr
          </Typography>
        </Box>
        <Box
          sx={{
            border: "1.2px solid white",
            borderRadius: "6px",
            // flex: 1,
            maxWidth: "20%",
            width: "100%",
            minWidth: "fit-content",

            padding: "5px",

            mr: 1,
            ml: 1,
            transition: "all 0.2s ease",
            ":hover": {
              boxShadow: "10px 10px 79px -1px rgba(0,0,0,0.38) inset",
              border: "1.9px solid bisque ",
            },
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{
              color: "white",
              textAlign: "center",
              fontFamily: "Lora",
              textDecorationLine: "underline",
              textUnderlineOffset: "5px",
              paddingBottom: "36px",
            }}
          >
            Package 1
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: "white", textAlign: "center" }}
          >
            20/hr per month
          </Typography>
          <Typography
            variant="subtitle2"
            component="div"
            sx={{ color: "white", textAlign: "center" }}
          >
            (5 hours per week)
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: "white", textAlign: "center" }}
          >
            $700
          </Typography>
        </Box>
        <Box
          sx={{
            border: "1.2px solid white",
            borderRadius: "6px",
            // flex: 1,
            // width: "fit-content",
            maxWidth: "20%",
            width: "100%",
            minWidth: "fit-content",
            padding: "5px",
            mr: 1,
            ml: 1,
            transition: "all 0.2s ease",
            ":hover": {
              boxShadow: "10px 10px 79px -1px rgba(0,0,0,0.38) inset",
              border: "1.9px solid bisque ",
            },
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{
              color: "white",
              textAlign: "center",
              fontFamily: "Lora",
              textDecorationLine: "underline",
              textUnderlineOffset: "5px",
              paddingBottom: "36px",
            }}
          >
            Package 2
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: "white", textAlign: "center" }}
          >
            40/hr per month
          </Typography>
          <Typography
            variant="subtitle2"
            component="div"
            sx={{ color: "white", textAlign: "center" }}
          >
            (10 hours per week)
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: "white", textAlign: "center" }}
          >
            $1320
          </Typography>
        </Box>
      </Box>
      <Typography
        variant="subtitle2"
        component="div"
        sx={{ color: "white", textAlign: "center", mt: 2 }}
      >
        * Over 40 hours per month can be negotiated as well
      </Typography>
      <Typography
        variant="subtitle2"
        component="div"
        sx={{
          color: "white",
          textAlign: "center",
          mt: 2,
          pl: "32px",
          pr: "32px",
        }}
      >
        * Packages can be paid on the first of the month or broken up into two
        monthly payments
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
