import React from "react";
import TopBar from "./components/Topbar";
import { Box } from "@mui/material";
import Main from "./pages/main";
import About from "./pages/about";
import Services from "./pages/services";

function App() {
  return (
    <Box>
      <TopBar />
      <Main />
      <About />
      <Services />
    </Box>
  );
}

export default App;
