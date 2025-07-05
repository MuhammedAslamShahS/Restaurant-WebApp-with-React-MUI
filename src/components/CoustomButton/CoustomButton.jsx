import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const CoustomButton = ({ backgroundColor, color, buttonText, welcomeBtn, guidenBtn, getStratedBtn }) => {
  const CustomStyledButton = styled(Button)(({ theme }) => {
    let responsiveStyles = {};

    if (welcomeBtn || getStratedBtn) {
      responsiveStyles = {
        [theme.breakpoints.down("md")]: {
          margin: theme.spacing(0, "auto", 3, "auto"),
          width: "90%",
        },
      };
    }

    if (guidenBtn) {
      responsiveStyles = {
        ...responsiveStyles,
        [theme.breakpoints.down("sm")]: {
          marginTop: theme.spacing(3),
          width: "90%",
        },
      };
    }

    return {
      backgroundColor,
      color,
      fontWeight: "700",
      fontSize: "14px",
      cursor: "pointer",
      padding: "0.5rem 1.25rem",
      textTransform: "none",
      display: "block",
      border: "2px solid transparent",
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: color,
        color: backgroundColor,
        borderColor: backgroundColor,
      },
      ...responsiveStyles,
    };
  });

  return <CustomStyledButton>{buttonText}</CustomStyledButton>;
};

export default CoustomButton;
