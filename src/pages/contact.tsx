import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  IconButton,
  IconButtonProps,
  Typography,
  styled,
} from "@mui/material";
import React, { useEffect } from "react";
const Portrait = require("../imgs/jess_main.jpeg");
const Portrait2 = require("../imgs/kirsten_new.jpeg");
const bg = require("../imgs/contact_bg.jpeg");
const BG_GRAY = "#9e9e9ebf";
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

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

  const [expanded, setExpanded] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };

  // listen for click outside of card to close
  const handleClickOutside = (event: any) => {
    if (event.target.id !== "card") {
      setExpanded(false);
      setExpanded2(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",

        height: "100%",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        borderTop: "10px solid #183134",
        pb: 5,
      }}
    >
      <Typography
        sx={{
          color: "white",
          fontFamily: "Lora",
          width: "100%",
          textAlign: "center",
          // textDecorationLine: "underline",
          textUnderlineOffset: "5px",
          mt: 5,
          mb: 2,
        }}
        variant="h3"
      >
        Let's Connect !
      </Typography>
      <Typography
        sx={{
          color: "white",
          fontFamily: "Lora",
          width: "100%",
          textAlign: "center",
          // textDecorationLine: "underline",
          textUnderlineOffset: "5px",
          // mt: 5,
          mb: 7,
        }}
        variant="h5"
      >
        Meet the Team
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "80%",
          margin: "auto",
        }}
      >
        <Card sx={{ width: 345, background: BG_GRAY, mb: 6, mr: 1 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="175"
              image={Portrait}
              alt="Jess Coleman"
            />
            <CardContent
              sx={{
                backgroundColor: BG_GRAY,
                p: "10px",
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
              <Typography
                variant="subtitle1"
                sx={{
                  color: "white",
                }}
              >
                Owner
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "white",
                }}
                onClick={handle_phone_click}
              >
                330-203-1505
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "white",
                }}
                onClick={handle_email_click}
              >
                jacoleman@jacassists.com
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography
                sx={{
                  color: "white",
                }}
              >
                K. Coleman is ..
              </Typography>
              <Typography
                sx={{
                  color: "white",
                }}
              >
                an Ohio native currently residing in Columbus. She received a
                Bachelor of Fine Art in Interior Design with a focus in
                Woodworking from The Columbus College of Art & Design in 2017.
                While she’s not working on her own business, walking her pups,
                or exercising, She's Jess's Right-Hand Woman (or Administrative
                Assistant) for JAC Assists. Organized, HIPAA certified, and
                equipped to catch whatever is thrown at her!
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        <Card sx={{ width: 345, background: BG_GRAY, mb: 7, ml: 1 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="175"
              image={Portrait2}
              alt="Kirsten Coleman"
            />
            <CardContent
              sx={{
                backgroundColor: BG_GRAY,
                p: "10px",
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
                Kirsten Coleman
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "white",
                }}
              >
                Administrative Assistant
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "white",
                }}
                onClick={handle_phone_click}
              >
                330-203-1505
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "white",
                }}
                onClick={handle_email_click}
              >
                krcoleman@jacassists.com{" "}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded2}
              onClick={handleExpandClick2}
              aria-expanded={expanded2}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded2} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography
                sx={{
                  color: "white",
                }}
              >
                K. Coleman is ..
              </Typography>
              <Typography
                sx={{
                  color: "white",
                }}
              >
                an Ohio native currently residing in Columbus. She received a
                Bachelor of Fine Art in Interior Design with a focus in
                Woodworking from The Columbus College of Art & Design in 2017.
                While she’s not working on her own business, walking her pups,
                or exercising, She's Jess's Right-Hand Woman (or Administrative
                Assistant) for JAC Assists. Organized, HIPAA certified, and
                equipped to catch whatever is thrown at her!
              </Typography>
            </CardContent>
          </Collapse>
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
            // marginBottom: "3px",
            border: "3px solid white",
            ":hover": {
              backgroundColor: "bisque",
              color: "darkslategray",
            },
          }}
        >
          Top
        </Button>
        T
      </Box>
    </Box>
  );
};

export default Contact;
