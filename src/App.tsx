import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { CustomComponent } from "./components/CustomComponent";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CustomComponent />
      </ThemeProvider>
    </div>
  );
}

export default App;
