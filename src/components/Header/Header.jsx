import { styled } from "@mui/material/styles";
import {
    Box,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    IconButton,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import FeaturePlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";

import CoustomButton from "../CoustomButton/CoustomButton";
import logoImg from "../../assets/logo.png";
import { useState } from "react";
import { Home, Inbox } from "@mui/icons-material";

const nav_titles = [
    { path: "/", display: "Home" },
    { path: "/", display: "Dishes" },
    { path: "/", display: "Services" },
    { path: "/", display: "About Us" },
];

const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));

const NavBarLink = styled(Typography)(() => ({
    fontSize: "15px",
    color: "#4F5361",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
        color: "#fff",
    },
}));

const NavBarLogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));

const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
        display: "block",
    },
}));

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === "keydown" && (event.type === "Tab" || event.type === "Shift")) {
            return;
        }
        setMobileMenu({ ...mobileMenu, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{
                width: anchor === "true" || anchor === "bottom" ? "auto" : 250,
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {nav_titles.map((item, index) => (
                    <ListItem key={item.index} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index === 0 && <HomeIcon />}
                                {index === 1 && <FeaturePlayListIcon />}
                                {index === 2 && <MiscellaneousServicesIcon />}
                                {index === 3 && <ContactsIcon /> }
                            </ListItemIcon>
                            <ListItemText primary={item.display} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "40px",
                maxWidth: "auto",
                backgroundColor: "#FED801",
                marginLeft: "0",
                marginBottom: "-24px",
            }}
        >
            {/* left-section-Start */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "2.5rem",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <CustomMenuIcon onClick={toggleDrawer("left", true)} />

                    <Drawer anchor="left" open={mobileMenu["left"]} onClose={toggleDrawer("left", false)}>
                        {list("left")}
                    </Drawer>

                    <NavBarLogo src={logoImg} />
                </Box>
                <NavbarLinksBox>
                    {nav_titles.map((item, index) => (
                        <NavBarLink key={index} variant="body2">
                            {item.display}
                        </NavBarLink>
                    ))}
                </NavbarLinksBox>
            </Box>
            {/* left-section-End */}

            {/* right-section-Start */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                }}
            >
                <NavBarLink variant="body2">sign up</NavBarLink>
                <CoustomButton backgroundColor="#0F1B4C" color="#fff" buttonText="Register" />
            </Box>
            {/* Right-section-End */}
        </Box>
    );
};

export default Header;
