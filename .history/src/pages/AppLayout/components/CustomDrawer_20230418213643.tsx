import { CustomDrawerProps } from "../types";
import Drawer from "@mui/material/Drawer";
import {
  IconButton,
  Box,
  Typography,
  Link as MUILink,
  Button
} from "@mui/material";
import { useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link, useLocation } from "react-router-dom";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import { StyledList } from "./StyledList";
import { StyledLink } from "./StyledLink";

const CustomDrawer = ({ links, isSmallScreen }: CustomDrawerProps) => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  return (
    <>
      {isSmallScreen ? (
        <>
          <IconButton
            aria-label="Open menu drawer"
            onClick={() => setOpen(true)}
          >
            <MenuOutlinedIcon></MenuOutlinedIcon>
          </IconButton>

          <Drawer
            sx={{ width: "180px" }}
            open={open}
            anchor="left"
            onClose={() => setOpen(false)}
            PaperProps={{ sx: { backgroundColor: "rgba(9,75,121,1)" } }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Typography sx={{ marginTop: "5px", color: "#fff" }}>
                <AppShortcutIcon />
              </Typography>
            </Box>
            <StyledList>
              <ul>
                {links.map((link, index) => (
                  <li key={index}>
                    <StyledLink
                      to={link.path}
                      isActive={pathname === link.path}
                    >
                      {link.label}
                    </StyledLink>
                  </li>
                ))}
              </ul>
            </StyledList>
            <Box sx={{ display: "flex" }}>
                    <MUILink
                      to="/login"
                      variant="button"
                      rel="noopener noreferrer"
                      component={Link}
                      sx={{
                        marginLeft: "auto",
                      }}
                    >
                      <Button variant="contained">Login</Button>
                    </MUILink>
                    <MUILink
                      to="/signup"
                      variant="button"
                      rel="noopener noreferrer"
                      component={Link}
                      sx={{
                        marginLeft: "5px",
                      }}
                    >
                      <Button variant="contained">Signup</Button>
                    </MUILink>
                  </Box>
          </Drawer>
        </>
      ) : null}
    </>
  );
};

export default CustomDrawer;
