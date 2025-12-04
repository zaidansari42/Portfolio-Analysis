import { AppBar, Box } from "@mui/material";

import HomePage from "./layout/pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <LeftSideBar />
        <HomePage items={data.items}></HomePage>
      </Box>
    </>
  );
}

export default App;
