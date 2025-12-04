import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./layout/pages/HomePage";
import Portfolio from "./layout/pages/Portfolio";

import "./App.css";
import LeftSideBar from "./components/ui/LeftSideBar";
import AboutMe from "./layout/pages/AboutMe";

function App() {
  return (
    <>
      <BrowserRouter>
        <Box sx={{ display: "flex" }}>
          <LeftSideBar />
          <div
            style={{
              margin: "20px 50px 20px 80px",
            }}
          >
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/portfolio" element={<Portfolio />}></Route>
              <Route path="/about_me" element={<AboutMe />}></Route>
            </Routes>
          </div>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
