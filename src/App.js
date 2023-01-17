import "./App.css";
import Home from "./components/Home";
import Routing from "./components/Routing";
import Theme from "./utils/Theme.js";
import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <Routing />
      </ThemeProvider>
    </div>
  );
}

export default App;
