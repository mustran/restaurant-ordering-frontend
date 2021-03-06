import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeWrapper from './theme/ThemeWrapper';
import { theme } from './theme/theme';
import store from './redux/store';

ReactDOM.render(
    <Provider store={store}>
        <ThemeWrapper theme={theme}>
            <React.StrictMode>
                <Router>
                    <App />
                </Router>
            </React.StrictMode>
        </ThemeWrapper>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
