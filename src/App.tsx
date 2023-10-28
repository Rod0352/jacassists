import React from "react";
import TopBar from "./components/Topbar";
import { Box } from "@mui/material";
import Main from "./pages/main";

function App() {
  return (
    <Box>
      <TopBar />
      <Main />
      <Main />
    </Box>
  );
}

export default App;
