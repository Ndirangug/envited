import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { RouterProvider, Route } from "react-router-dom";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { router } from "./router";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
