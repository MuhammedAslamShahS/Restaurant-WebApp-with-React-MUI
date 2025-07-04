import { BorderColor, Margin, Widgets } from "@mui/icons-material";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const CoustomButton = ({ backgroundColor, color, buttonText, welcomeBtn, guidenBtn, getStratedBtn }) => {
    const CustomButton = styled(Button)(({ theme }) => ({
        backgroundColor: backgroundColor,
        color: color,
        fontWeight: "700",
        fontSize: "14px",
        cursor: "pointer",
        padding: "0.5rem 1.25rem",
        borderBlock: "7px",
        textTransform: "none",
        display: "block",
        border: "2px solid transparent",
        "&:hover": {
            backgroundColor: color,
            color: backgroundColor,
            BorderColor: backgroundColor,
        },
        [theme.breakpoints.down("md")]: {
            Margin: (welcomeBtn || getStratedBtn) && theme.spacing(0, "auto", 3, "auto"),
            width: (welcomeBtn || getStratedBtn) && "90%",
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: guidenBtn && theme.spacing(3),
            width: guidenBtn && "90%",
        },
    }));
    return <CustomButton>{buttonText}</CustomButton>;
};

export default CoustomButton;
