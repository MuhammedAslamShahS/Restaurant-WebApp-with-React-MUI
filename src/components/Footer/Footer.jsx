import { Typography, Box, Container } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import fbIcon from "../../assets/facebook.png";
import twitterIcon from "../../assets/twitter.png";
import instagramIcon from "../../assets/instagram.png";

// Styled Components
const CustomContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  gap: theme.spacing(5),
  flexWrap: "wrap",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    textAlign: "center",
  },
}));

const IconBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
  },
}));

const FooterLink = styled("span")(({ theme }) => ({
  fontSize: "16px",
  color: "#000066",
  fontWeight: 300,
  cursor: "pointer",
  display: "inline-block",
  marginBottom: "8px",
  "&:hover": {
    color: "#66B2FF",
  },
}));

// Animation Variant
const fadeVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Footer content data
const footerSections = [
  {
    title: "Featured",
    links: ["Guides", "Services", "Contact Us"],
  },
  {
    title: "Overview",
    links: ["Location", "Partnerships", "Terms of Use & Privacy Policies"],
  },
];

const Footer = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });

  const refs = [ref1, ref2, ref3];
  const inViews = [inView1, inView2, inView3];

  return (
    <Box sx={{ py: 10, backgroundColor: "#FFF6B2" }}>
      <CustomContainer>
        {/* Mapped Sections */}
        {footerSections.map((section, index) => (
          <motion.div
            key={section.title}
            ref={refs[index]}
            variants={fadeVariant}
            initial="hidden"
            animate={inViews[index] ? "visible" : "hidden"}
          >
            <Box>
              <Typography sx={{ fontSize: "20px", color: "#1C1C1D", fontWeight: 700, mb: 2 }}>
                {section.title}
              </Typography>
              {section.links.map((link) => (
                <div key={link}>
                  <FooterLink>{link}</FooterLink>
                  <br />
                </div>
              ))}
            </Box>
          </motion.div>
        ))}

        {/* Contact Section */}
        <motion.div
          ref={ref3}
          variants={fadeVariant}
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
        >
          <Box>
            <Typography sx={{ fontSize: "20px", color: "#1C1C1D", fontWeight: 700, mb: 2 }}>
              Get in Touch
            </Typography>
            <Typography sx={{ fontSize: "16px", color: "#7A7A7E", fontWeight: 500, mb: 2 }}>
              Keep in touch with our social media pages
            </Typography>

            <IconBox>
              <img src={fbIcon} alt="Facebook" style={{ cursor: "pointer" }} />
              <img src={twitterIcon} alt="Twitter" style={{ cursor: "pointer" }} />
              <img src={instagramIcon} alt="Instagram" style={{ cursor: "pointer" }} />
            </IconBox>

            <br />
            <FooterLink>Contact Us</FooterLink>
          </Box>
        </motion.div>
      </CustomContainer>
    </Box>
  );
};

export default Footer;
