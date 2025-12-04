import HomeIcon from "@mui/icons-material/Home";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import HomePage from "./layout/pages/HomePage";
import qodeLogo from "./assets/qodeadvisors_logo.jpeg";

import "./App.css";

function App() {
  const data = {
    items: [
      {
        title: "Portfolio Performance",
        description:
          "Track your daily NAV changes and overall investment growth.",
      },
      {
        title: "Risk Analysis",
        description:
          "View drawdowns, volatility, and risk metrics in one dashboard.",
      },
      {
        title: "Asset Allocation",
        description:
          "Analyze distribution across equities, bonds, and alternative assets.",
      },
    ],
  };

  const drawerWidth = 240;

  return (
    <>
      <Box sx={{ display: "flex" }}>
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
            <Typography variant="h6" noWrap component="div">
              Advisors LLP
            </Typography>
          </Toolbar>
          <Divider />
          <List>
            {["Home", "Portfolio"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <HomeIcon /> : <ShowChartIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["About Me"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <HomeIcon /> : <ShowChartIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <HomePage items={data.items}></HomePage>
      </Box>
    </>
  );
}

export default App;
