import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import logoImg from "../assets/logo.png";
import starsImg from "../assets/Star.png";
import logosImg from "../assets/logos.png";

// Styled Components
const CustomContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: theme.spacing(6),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
    marginBottom: theme.spacing(4),
  },
}));

const CustomBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    marginBottom: theme.spacing(4),
  },
}));

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const containerStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Partner = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <Box sx={{ mt: 10 }}>
      {/* Top Section */}
      <motion.div
        ref={ref}
        variants={containerStagger}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <CustomContainer>
          {/* Logo Section */}
          <motion.div variants={fadeUp}>
            <CustomBox>
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={logoImg}
                alt="logo"
                style={{ maxWidth: "100%" }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: "#7D8589",
                  fontSize: "16px",
                  fontWeight: "bold",
                  mt: 2,
                }}
              >
                More than 45,000 people trusted Devdopz
              </Typography>
            </CustomBox>
          </motion.div>

          {/* Stars Section */}
          <motion.div variants={fadeUp}>
            <Box>
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={starsImg}
                alt="stars"
                style={{ maxWidth: "100%" }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: "#7D8589",
                  fontSize: "16px",
                  fontWeight: "bold",
                  mt: 2,
                }}
              >
                5-Star Rating (2k+ Reviews)
              </Typography>
            </Box>
          </motion.div>
        </CustomContainer>

        {/* Logos Section */}
        <motion.div variants={fadeUp}>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: 4,
            }}
          >
            <motion.img
              src={logosImg}
              alt="logos"
              style={{ maxWidth: "100%" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            />
          </Container>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default Partner;
