import "./App.css";
import "antd/dist/antd.css";
import ComponentHolder from "./Components/Common/ComponentHolder";
import { dark } from "../src/theme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <>
      <ThemeProvider theme={dark}>
        <ComponentHolder />
      </ThemeProvider>
    </>
  );
}

export default App;
