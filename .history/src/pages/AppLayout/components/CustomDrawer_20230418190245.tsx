import { CustomDrawerProps } from "../types";
import Drawer from "@mui/material/Drawer";
import {
  List,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
  ListItemButton,
} from "@mui/material";
import { useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { StyledLink } from "shared";
import { useLocation } from "react-router-dom";
const CustomDrawer = ({ links, isSmallScreen }: CustomDrawerProps) => {
  const [open, setOpen] = useState(false);
  const{pathname}=useLocation();
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

          <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
            <List>
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
            </List>
          </Drawer>
        </>
      ) : null}
    </>
  );
};

export default CustomDrawer;
