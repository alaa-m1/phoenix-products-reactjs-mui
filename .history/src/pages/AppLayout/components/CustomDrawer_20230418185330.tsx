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
const CustomDrawer = ({ links, isSmallScreen }: CustomDrawerProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {isSmallScreen ? (
        <IconButton aria-label="Open menu drawer" onClick={() => setOpen(true)}>
          <MenuOutlinedIcon></MenuOutlinedIcon>
        </IconButton>
      ) : (
        <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
          <List>
            {links.map((link, index) => (
              <ListItemButton key={index}>
                {/* <ListItemIcon>
                    <ReviewsIcon></ReviewsIcon>
                  </ListItemIcon> */}
                <ListItemText>{link.label}</ListItemText>
              </ListItemButton>
            ))}
          </List>
        </Drawer>
      )}
    </>
  );
};

export default CustomDrawer;
