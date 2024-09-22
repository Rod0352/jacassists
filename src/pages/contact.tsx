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
const Portrait3 = require("../imgs/sarah_main.jpeg");
const Portrait4 = require("../imgs/josie.jpeg");
const Portrait5 = require("../imgs/meg.jpg");
const bg = require("../imgs/contact_bg.jpeg");
const insta_64 = require("../imgs/in_64.png");
const insta_128 = require("../imgs/in_128.png");
const fb_64 = require("../imgs/fb_64.png");
const fb_128 = require("../imgs/fb_128.png");
const linked_64 = require("../imgs/linked_64.png");
const linked_128 = require("../imgs/linked_128.png");

const BG_GRAY =
  "linear-gradient(0deg, rgba(255,152,121,0.8407738095238095) 48%, rgba(255,199,121,0.4430147058823529) 92%);";
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

  const handle_social = (social: number) => {
    if (social === 1) {
      window.location.href =
        " https://www.linkedin.com/company/jac-virtual-assistants-llc";
    }
    if (social === 2) {
      window.location.href = "https://www.instagram.com/jacvirtualassistants/";
    }
    if (social === 3) {
      window.location.href = "https://www.facebook.com/jacvirtualassistants/";
    }
  };

  const handle_top_click = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [expanded, setExpanded] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [expanded3, setExpanded3] = React.useState(false);
  const [expanded4, setExpanded4] = React.useState(false);
  const [expanded5, setExpanded5] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };

  const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
  };

  const handleExpandClick4 = () => {
    setExpanded4(!expanded4);
  };

  const handleExpandClick5 = () => {
    setExpanded5(!expanded5);
  };
  // listen for click outside of card to close
  const handleClickOutside = (event: any) => {
    if (event.target.id !== "card" || event.target.id !== "icon") {
      setExpanded(false);
      setExpanded2(false);
      setExpanded3(false);
      setExpanded4(false);
      setExpanded5(false);
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
          textUnderlineOffset: "5px",
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
              loading="lazy"
              component="img"
              height="175"
              image={Portrait}
              alt="Jess Coleman"
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
                Jess Coleman
              </Typography>
              <Typography
                gutterBottom
                variant="subtitle1"
                sx={{
                  color: "white",
                  fontFamily: "Lora",
                }}
              >
                Founder & CEO
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "white",
                  fontFamily: "Lora",
                }}
              >
                FULLY BOOKED
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions disableSpacing>
            <ExpandMore
              sx={{
                padding: "0px",
                color: "white",
              }}
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
                variant="subtitle1"
              >
                Meet Jess:
              </Typography>
              <Typography
                sx={{
                  color: "white",
                }}
              >
                Jess is a proud Kent State University graduate with a BA in
                Psychology and a minor in Justice Studies. She began her career
                in mental health as a caseworker for state and federal inmates
                in a halfway house, then a caseworker for Drug Court
                participants. She also worked in the intake department of a
                children's psychiatry and psychology office. <br></br>
                {""} <br></br>
                As a married mother of two, Jess tried to be a stay-at-home mom
                but found herself unfulfilled. In 2022, she began working as a
                VA and then branched off to establish her own business in 2023.
                Jess is passionate about helping people and has always been
                fascinated by the human mind and its connection to behavior.
                Being a VA allows her to remain connected to the mental health
                world, help those in need, and be present for her family.
                <br></br> <br></br>
                Her years of experience as a caseworker provided her with
                invaluable insight into the criminal justice system and the
                challenges that individuals face upon reentry. It also taught
                her the importance of empathy and understanding when working
                with people who may have experienced trauma or difficult life
                circumstances. Her time in the children's psychiatry and
                psychology office further deepened her understanding of mental
                health and its impact across all stages of life.<br></br>{" "}
                <br></br>
                Starting her own business as a VA has been a dream come true.
                Jess now has the flexibility to work with clients on her own
                terms and customize her services to meet their unique needs.
                Whether it's managing incoming patient inquiries, provider
                schedules, or billing, she takes pride in being a compassionate
                and trustworthy resource for those she works with.<br></br>{" "}
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
              loading="lazy"
              component="img"
              height="175"
              image={Portrait3}
              alt="Sarah Smarr"
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
                Sarah Smarr
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
                FULLY BOOKED
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions disableSpacing>
            <ExpandMore
              sx={{
                padding: "0px",
                color: "white",
              }}
              expand={expanded3}
              onClick={handleExpandClick3}
              aria-expanded={expanded3}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded3} timeout="auto" unmountOnExit>
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
                Sarah is a highly qualified mental health professional with over
                a decade of experience in both in-office and direct care
                settings. She is a graduate of the University of Mount Union,
                where she earned a BA in sociology with a minor in Gender
                Studies. Throughout her career, Sarah has gained valuable
                experience working in various roles, including as an inpatient
                psych tech, an intake department member for children's
                outpatient psychiatry and psychology, a direct care provider
                with a QMHS (current NPI number), and a prevention specialist
                with current RA certification. Additionally, she has served as a
                family court pretrial release officer for juvenile offenders and
                has experience as an independent living supervisor.
                <br></br> <br></br>
                Despite her impressive professional background, Sarah's family
                and friends always come first. She is a dedicated mother of
                three and is known for her impeccable attention to detail,
                organizational skills, and unwavering willingness to tackle any
                challenge.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        <Card sx={{ width: 345, background: BG_GRAY, mb: 7, ml: 1 }}>
          <CardActionArea>
            <CardMedia
              loading="lazy"
              component="img"
              height="175"
              image={Portrait4}
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
                Josie
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
                ACCEPTING NEW CLIENTS
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions disableSpacing>
            <ExpandMore
              sx={{
                padding: "0px",
                color: "white",
              }}
              expand={expanded4}
              onClick={handleExpandClick4}
              aria-expanded={expanded4}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded4} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography
                sx={{
                  color: "white",
                }}
              >
                Meet Josie:{" "}
              </Typography>
              <Typography
                sx={{
                  color: "white",
                }}
              >
                Josie brings nine years of experience in the manufacturing
                sector, where she has held various roles such as Manufacturing
                Planner, Business Development Manager, and Buyer/Planner.
                Skilled in procurement, sourcing, quoting, and planning, she
                also excels in email management, schedule coordination, file
                organization, and communication.
                <br></br> <br></br>
                Josie holds an associate's degree in Business Administration
                from the University of Northwestern Ohio and is certified as a
                pharmacy technician. Outside of work, she prioritizes her role
                as a dedicated wife and mother to two children. Eager to strike
                a harmonious balance, Josie is now seeking a fulfilling career
                where she can utilize her skills while maintaining a strong
                presence at home.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        <Card sx={{ width: 345, background: BG_GRAY, mb: 7, ml: 1 }}>
          <CardActionArea>
            <CardMedia
              loading="lazy"
              component="img"
              height="175"
              image={Portrait5}
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
                Meghan
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
                ACCEPTING NEW CLIENTS
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions disableSpacing>
            <ExpandMore
              sx={{
                padding: "0px",
                color: "white",
              }}
              expand={expanded5}
              onClick={handleExpandClick5}
              aria-expanded={expanded5}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded5} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography
                sx={{
                  color: "white",
                }}
              >
                Meet Meghan:{" "}
              </Typography>
              <Typography
                sx={{
                  color: "white",
                }}
              >
                With a Bachelor of Science and over four years of experience in
                event planning, Meghan brings a wealth of knowledge in sales,
                client relations, organization and coordination to our team. Her
                expertise in creating seamless and memorable events is
                complemented by her background in social media marketing, making
                her a versatile asset in our fast-paced environment.
                <br></br> <br></br>
                Outside of work, Meghan is a dedicated mom to two energetic
                boys. She excels at balancing her professional life with family
                commitments, bringing a unique perspective to everything she
                does. We’re excited to have Meghan on board and can’t wait to
                see the amazing contributions she’ll make!
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
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
          mb: 2,
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
          info@jacassists.com{" "}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
          maxWidth: "70%",
          margin: "auto",
          mb: 1,
        }}
      >
        <Button onClick={() => handle_social(1)}>
          <Box
            sx={{
              backgroundImage: `url(${
                screen_size < 600 ? linked_64 : linked_128
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: 50,
              height: 50,
              margin: screen_size < 600 ? 1 : 4,
            }}
          ></Box>
        </Button>
        <Button onClick={() => handle_social(3)}>
          <Box
            sx={{
              backgroundImage: `url(${screen_size < 600 ? fb_64 : fb_128})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: 50,
              height: 50,
              margin: screen_size < 600 ? 1 : 4,
            }}
          ></Box>
        </Button>
        <Button onClick={() => handle_social(2)}>
          <Box
            sx={{
              backgroundImage: `url(${
                screen_size < 600 ? insta_64 : insta_128
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: 50,
              height: 50,
              margin: screen_size < 600 ? 1 : 4,
            }}
          ></Box>
        </Button>
      </Box>

      <Box
        sx={{
          backgroundColor: "rgba(40,30,32,0.6)",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "1.1px solid white",
          borderRadius: "10px",
          padding: "15px",
          maxWidth: "390px",
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
          variant="h6"
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
          variant="h6"
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
        <br></br>
        <Typography
          variant="h6"
          sx={{
            color: "white",
            textDecorationLine: "underline",
            textUnderlineOffset: "5px",
            alignContent: "center",
            alignItems: "center",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            mt: 2,
          }}
        >
          Do you provide virtual assistance solely to mental health practices?
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
          No! While mental health is our jam, we’re happy to help any company or
          business- just shoot us an email and tell us what you’re seeking help
          with and we’ll see if we’re a good match.
        </Typography>
      </Box>
      <Typography
        variant="h4"
        sx={{
          color: "white",
          fontFamily: "Lora",
          width: "100%",
          textAlign: "center",
          textUnderlineOffset: "5px",
          mt: 5,
          mb: 2,
        }}
      >
        Thanks for stopping by!
      </Typography>
      <Button
        variant="contained"
        size="small"
        onClick={handle_top_click}
        sx={{
          backgroundColor: "transparent",
          opacity: 0.8,
          right: 0,
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
