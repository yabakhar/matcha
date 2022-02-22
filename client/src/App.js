import { useState } from "react";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/constants/Theme";
import "./index.css";
import Router from "./components/routing/index";

const App = () => {
    const [themeSelector, setThemeSelector] = useState(true);
    return (
        <>
            <ThemeProvider theme={themeSelector ? theme.light : theme.dark}>
                <GlobalStyle />
                <Router />
            </ThemeProvider>
        </>
    );
};

export default App;
