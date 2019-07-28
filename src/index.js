import React from 'react';
import ReactDom from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import App from './App';
import AgGridStyle from './components/AgGrid/AgGridStyle';

import theme from './theme';
import store from './stores/store';

ReactDom.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <>
                <AgGridStyle/>
                <App/>
            </>
        </Provider>
    </ThemeProvider>,
    document.getElementById('root')
);