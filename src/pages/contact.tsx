import { HeatPumpSharp, LiveHelp } from "@mui/icons-material";
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
  Divider,
  IconButton,
  IconButtonProps,
  Typography,
  styled,
} from "@mui/material";
import React, { useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
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

  const screen_size = window.innerWidth;

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
                Founder & CEO
              </Typography>
              {/* <Typography
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
              </Typography> */}
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
                Meet Jess:
              </Typography>
              <Typography
                sx={{
                  color: "white",
                }}
              >
                A Passionate Business Owner and Mental Health Advocate Jess is a
                proud Kent State University graduate with a BA in Psychology and
                a minor in Justice Studies. Her career started as a caseworker
                for state and federal inmates in a halfway house for eight
                years, and then as a caseworker for Drug Court participants for
                one year. She also worked for one year in the intake department
                of a children's psychiatry and psychology office.
                <br></br>
                As a married mother of two, Jess tried to be a stay-at-home mom
                for a couple of years but found herself unfulfilled. In 2022,
                she began working as a VA and then branched off to establish her
                own business in 2023. Jess is passionate about helping people
                and has always been fascinated by the human mind and its
                connection to behavior. Being a VA allows her to remain
                connected to the mental health world, help those in need, and be
                present for her family.
                <br></br>
                Her years of experience as a caseworker provided her with
                invaluable insight into the criminal justice system and the
                challenges that individuals face upon reentry. It also taught
                her the importance of empathy and understanding when working
                with people who may have experienced trauma or difficult life
                circumstances. Her time in the children's psychiatry and
                psychology office further deepened her understanding of mental
                health and its impact across all stages of life.
                <br></br>
                Starting her own business as a VA has been a dream come true.
                Jess now has the flexibility to work with clients on her own
                terms and customize her services to meet their unique needs.
                Whether it's managing incoming patient inquiries, provider
                schedules, or billing, she takes pride in being a compassionate
                and trustworthy resource for those she works with.
                <br></br>
                As she looks ahead, Jess is excited to continue growing her
                business and expanding her skills as a business owner. She is
                grateful for the opportunities that her education and work
                experience have provided her and eager to use her knowledge and
                passion to make a positive impact on the world around her.
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
              {/* <Typography
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
              </Typography> */}
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
                Sarah Smarr
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "white",
                }}
              >
                Virtual Assistant
              </Typography>
              {/* <Typography
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
              </Typography> */}
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
                Meet Sarah:{" "}
              </Typography>
              <Typography
                sx={{
                  color: "white",
                }}
              >
                A Committed Mental Health Professional and Devoted Parent Sarah
                is a highly qualified mental health professional with over a
                decade of experience in both in-office and direct care settings.
                She is a graduate of the University of Mount Union, where she
                earned a BA in sociology with a minor in Gender Studies.
                Throughout her career, Sarah has gained valuable experience
                working in various roles, including as an inpatient psych tech,
                an intake department member for children's outpatient psychiatry
                and psychology, a direct care provider with a QMHS (current NPI
                number), and a prevention specialist with current RA
                certification. Additionally, she has served as a family court
                pretrial release officer for juvenile offenders and has
                experience as an independent living supervisor. Despite her
                impressive professional background, Sarah's family and friends
                always come first. She is a dedicated mother of three and is
                known for her impeccable attention to detail, organizational
                skills, and unwavering willingness to tackle any challenge.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        {/* <Button
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
        </Button> */}
        T
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "15px",
          paddingTop: "10px",
          borderRadius: "10px",
          border: "1.1px solid white",
          width: "fit-content",
          margin: "auto",
          boxShadow: "10px 10px 79px -1px rgba(0,0,0,0.38)",
          mb: 5,
          backgroundColor: "rgba(40,30,32,0.6)",
        }}
      >
        <Typography variant="h5" sx={{ color: "white" }}>
          How to Reach Us!
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
      </Box>
      <Box
        sx={{
          // width: "100%",
          backgroundColor: "rgba(40,30,32,0.6)",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "1.1px solid white",
          borderRadius: "10px",
          padding: "15px",
          maxWidth: screen_size > 600 ? "30%" : "94%",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "white",
            textAlign: "center",
            mb: 1,
          }}
        >
          Frequently Asked Questions
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "white",
            textDecorationLine: "underline",
            textUnderlineOffset: "5px",
          }}
        >
          What systems are you familiar with?
        </Typography>
        <Divider />
        <Typography variant="subtitle2" sx={{ color: "white", mt: 2 }}>
          * EHR’s: SimplePractice, TherapyNotes, (limited knowledge of
          TheraNest)
          <br></br>* Phone systems: Google Voice, Spruce, Grasshopper
          <br></br>* Payroll: Gusto, Square
          <br></br>* Organization tools: Notion, ClickUp
          <br></br>* Google Workspace & apps
          <br></br>* Microsoft Outlook & apps
          <br></br>* Adobe Acrobat
          <br></br>* Canva
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "white",
            textDecorationLine: "underline",
            textUnderlineOffset: "5px",
            alignContent: "center",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            mt: 2,
          }}
        >
          Do I have to train you?{" "}
        </Typography>
        <Divider />
        <Typography
          variant="subtitle2"
          sx={{
            color: "white",
            alignItems: "center",
            alignContent: "center",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            mt: 2,
          }}
        >
          There will always be the initial learning curve! Every practice does
          things differently; we rely on open communication and patience while
          we learn how you prefer things to be done.
        </Typography>
      </Box>
      <Button
        variant="contained"
        size="small"
        onClick={handle_top_click}
        sx={{
          backgroundColor: "transparent",
          opacity: 0.8,
          right: 0,
          // position: "absolute",
          marginTop: "10px",
          borderRadius: "10%",
          alignSelf: "flex-end",
          fontWeight: 600,
          marginRight: "12px",
          fontSize: "1rem",
          letterSpacing: "1px",
          border: "3px solid white",
          ":hover": {
            backgroundColor: "bisque",
            color: "darkslategray",
          },
        }}
      >
        UP
      </Button>
      {/* Made with love copyright */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          backgroundColor: "rgba(40,30,32,0.6)",
          borderTop: "1.1px solid white",
          borderBottom: "1.1px solid white",
          mt: 5,
          mb: 0,
          // p: 1,
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            color: "white",
            textAlign: "center",
            // mb: 1,
          }}
        >
          Made with{" "}
          <FavoriteIcon
            sx={{
              color: "red",
              fontSize: "1rem",
              letterSpacing: "1px",
              mr: "1.2px",
              ml: "1.2px",
              mb: "-0.2rem",
            }}
            //  mt: 1
          />{" "}
          by{" "}
          <a
            href="https://www.linkedin.com/in/rodney-scott0352/"
            target="_blank"
            rel="noreferrer"
            style={{ textDecorationLine: "none", color: "green" }}
          >
            Rodney
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default Contact;
