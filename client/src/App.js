import { useState } from 'react';
import GlobalStyle from './globalStyles';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { theme } from './utils/constants/Theme';

const App = () => {
    const [themeSelector, setThemeSelector] = useState(true);

    return (
        <>
            <ThemeProvider theme={themeSelector ? theme.light : theme.dark}>
                <GlobalStyle />
            </ThemeProvider>
        </>
    );
};

export default App;
