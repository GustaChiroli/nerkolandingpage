"use client";
import Image from "next/image";
import { useScroll } from "./ScrollContext";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AddBoxIcon from "@mui/icons-material/AddBox";
import useMediaQuery from "@mui/material/useMediaQuery";

function scrollToSession( session : String) {
  const rightSession = document.getElementById(`${session}-session`);
  if(session === 'first') {
    window.scrollTo({top: 0, behavior: 'smooth'})
  } else {
    if(rightSession) {
      rightSession.scrollIntoView({ behavior: 'smooth'});
    }
  }
}

const Navbar = () => {
  const { isScrolled, isSecondSession } = useScroll();
  const [open, setOpen] = React.useState(false);
  const isMobile = useMediaQuery("(max-width:995px)");

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Home", "Choose", "About", "Team", "Road Map", "Blog"].map(
          (text, index) => (
            <div key={text}>
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} />
                  <ListItemIcon>
                    {index === 0 || index === 5 ? <AddBoxIcon /> : ""}
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
              {index <= 5 && <Divider />}
            </div>
          )
        )}
      </List>
    </Box>
  );

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  ${
        isScrolled ? "bg-[#F8F6F5]" : ""
      } `}
    >
      <div className=" flex justify-center h-20  py-[10px] mt-[10px]">
        <div className=" flex justify-center w-[92.5%] max-w-[1200px]">
          <div className=" flex justify-between w-full">
            <div className=" content-center">
              <Image src="/logo.svg" alt="Nerko" width={120} height={36} />
            </div>
            {!isMobile ? (
              <div className="flex justify-evenly">
                <h1 
                  className=" cursor-pointer text-[#741FF5] px-4 content-center text-xl font-extrabold font-MabryPro-Regular"
                  onClick={() => scrollToSession('first')}
                >
                  Home
                </h1>
                <h1
                  className={`cursor-pointer px-4 content-center text-xl font-MabryPro-Regular ${
                    isSecondSession ? "choose-link" : "hover:text-[#741FF5]"
                  }`} onClick={() => scrollToSession('second')}
                >
                  Choose
                </h1>
                <h1 className=" cursor-pointer hover:text-[#741FF5] px-4 content-center text-xl font-MabryPro-Regular">
                  About
                </h1>
                <h1 className=" cursor-pointer hover:text-[#741FF5] px-4 content-center text-xl font-MabryPro-Regular">
                  Team
                </h1>
                <h1 className=" cursor-pointer hover:text-[#741FF5] px-4 content-center text-xl font-MabryPro-Regular">
                  Road Map
                </h1>
                <h1 className=" cursor-pointer hover:text-[#741FF5] px-4 content-center text-xl font-MabryPro-Regular">
                  Blog
                </h1>
              </div>
            ) : (
              <Button onClick={toggleDrawer(true)}>Menu</Button>
            )}
          </div>
        </div>
      </div>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <div className="flex justify-start align-middle w-[100%]">
          <Image
            className="p-5"
            src="/logo.jpeg"
            alt="Nerko"
            width={120}
            height={35}
          />
        </div>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default Navbar;
