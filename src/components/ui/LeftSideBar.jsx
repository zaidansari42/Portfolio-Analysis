import { NavLink } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import {
  AppBar,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import qodeLogo from "../../assets/qodeadvisors_logo.jpeg";

const LeftSideBar = () => {
  const drawerWidth = 240;

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
        }}
      ></AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <a
            href="https://qodeinvest.com/"
            title="Qode - Advisors LLP"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <img
              src={qodeLogo}
              alt="Car"
              style={{
                maxWidth: "50px",
                maxHeight: "70px",
                objectFit: "cover",
                marginRight: "10px",
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ color: "green" }}
            >
              Advisors LLP
            </Typography>
          </a>
        </Toolbar>
        <Divider />
        <List>
          {["Home", "Portfolio"].map((text, index) => (
            <NavLink key={text} to={index % 2 === 0 ? "/" : "/portfolio"} end>
              <ListItem disablePadding>
                <ListItemButton sx={{ textDecoration: "none", color: "green" }}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <HomeIcon /> : <ShowChartIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            </NavLink>
          ))}
        </List>
        <Divider />
        <List>
          <NavLink to="/about_me" end>
            <ListItem disablePadding>
              <ListItemButton sx={{ textDecoration: "none", color: "green" }}>
                <ListItemIcon>
                  <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary={"About Me"} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        </List>
      </Drawer>
    </>
  );
};

export default LeftSideBar;
