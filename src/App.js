import "./App.css";
import "antd/dist/antd.css";
import ComponentHolder from "./Components/Common/ComponentHolder";
import { dark, light } from "../src/theme";
import { ThemeProvider } from "styled-components";
import { Switch } from "antd";
import { useState } from "react";

function App() {
  const [currentTheme, setCurrentTheme] = useState(light);
  function handleChange() {
    if (currentTheme === light) {
      setCurrentTheme(dark);
    } else {
      setCurrentTheme(light);
    }
  }
  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <Switch onChange={handleChange} />
        <ComponentHolder />
      </ThemeProvider>
    </>
  );
}

export default App;
