import { AppBar, Box } from "@mui/material";

import HomePage from "./layout/pages/HomePage";

import "./App.css";
import LeftSideBar from "./components/ui/LeftSideBar";

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
        <LeftSideBar drawerWidth={drawerWidth}></LeftSideBar>
        <HomePage items={data.items}></HomePage>
      </Box>
    </>
  );
}

export default App;
