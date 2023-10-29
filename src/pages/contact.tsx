import { Copyright, LockOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
const Portrait = require("../imgs/jess_main.jpeg");

const Contact = () => {
  const handle_email_click = () => {
    window.location.href = "mailto: jacoleman@jacassists.com";
  };
  const handle_phone_click = () => {
    window.location.href = "tel: 330-203-1505";
  };

  const handle_top_click = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        height: "100%",
        backgroundColor: "#c4feff",
        borderTop: "10px solid #183134",
      }}
    >
      <Typography
        sx={{
          color: "#183134",
          // padding: 1.5,
          width: "100%",
          textAlign: "center",
          textDecorationLine: "underline",
          mt: 2,
          mb: 3,
        }}
        variant="h3"
      >
        Let's Connect
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "80%",
          margin: "auto",
        }}
      >
        <Card sx={{ maxWidth: 405, background: "bisque", mb: 5 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={Portrait}
              alt="Jess Coleman"
            />
            <CardContent
              sx={{
                backgroundColor: "#9fc4c8",
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  color: "white",
                  fontWeight: 500,
                }}
              >
                Jess Coleman
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Owner
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                onClick={handle_phone_click}
              >
                330-203-1505
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                onClick={handle_email_click}
              >
                jacoleman@jacassists.com
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Button
          variant="contained"
          size="small"
          onClick={handle_top_click}
          sx={{
            backgroundColor: "#183134",
            opacity: 0.8,
            right: 0,
            position: "absolute",
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
          Top
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
