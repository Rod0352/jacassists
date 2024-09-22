import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  IconButton,
  IconButtonProps,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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

const card = (props: {
  img: string;
  name: string;
  cardBg: string;
  availability: string;
  bio: string;
  expandedState: boolean;
  handleExpandClick: () => void;
}) => {
  return (
    <Card sx={{ width: 345, background: props.cardBg, mb: 7, ml: 1 }}>
      <CardActionArea>
        <CardMedia
          loading="lazy"
          component="img"
          height="175"
          image={props.img}
          alt="Josie"
        />
        <CardContent
          sx={{
            backgroundColor: "transparent",
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
              fontFamily: "Lora",
            }}
          >
            {props.name}
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{
              color: "white",
              fontFamily: "Lora",
            }}
          >
            Virtual Assistant
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              color: "white",
              fontFamily: "Lora",
            }}
          >
            {props.availability}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <ExpandMore
          sx={{
            padding: "0px",
            color: "white",
          }}
          expand={props.expandedState}
          onClick={props.handleExpandClick}
          aria-expanded={props.expandedState}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={props.expandedState} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography
            sx={{
              color: "white",
            }}
          >
            Meet {props.name}
          </Typography>
          <Typography
            sx={{
              color: "white",
            }}
          >
            {props.bio}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
