import { useState } from 'react';
import GlobalStyle from './globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/constants/Theme';
import MainContent from './views/index';
import { Provider } from 'react-redux';
import configureStore from './store/index';
import './index.css';

const store = configureStore();

const App = () => {
    const [themeSelector, setThemeSelector] = useState(true);
    return (
        <>
            <Provider store={store}>
                <ThemeProvider theme={themeSelector ? theme.light : theme.dark}>
                    <GlobalStyle />
                    <MainContent />
                </ThemeProvider>
            </Provider>
        </>
    );
};

export default App;
