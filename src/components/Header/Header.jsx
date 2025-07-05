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
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import FeaturePlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";

import CoustomButton from "../CoustomButton/CoustomButton";
import logoImg from "../../assets/logo.png";
import { useState } from "react";
import { motion } from "framer-motion"; // ✅ Import framer-motion

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
    const [mobileMenu, setMobileMenu] = useState({ left: false });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) return;
        setMobileMenu({ ...mobileMenu, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {nav_titles.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index === 0 && <HomeIcon />}
                                {index === 1 && <FeaturePlayListIcon />}
                                {index === 2 && <MiscellaneousServicesIcon />}
                                {index === 3 && <ContactsIcon />}
                            </ListItemIcon>
                            <ListItemText primary={item.display} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "40px",
                    backgroundColor: "#FED801",
                    marginBottom: "-24px",
                }}
            >
                {/* Left Section */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "2.5rem",
                    }}
                >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <CustomMenuIcon onClick={toggleDrawer("left", true)} />
                        <Drawer anchor="left" open={mobileMenu.left} onClose={toggleDrawer("left", false)}>
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

                {/* Right Section */}
                <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <NavBarLink variant="body2">Sign up</NavBarLink>
                    <CoustomButton backgroundColor="#0F1B4C" color="#fff" buttonText="Register" />
                </Box>
            </Box>
        </motion.div>
    );
};

export default Header;
