import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';

const HomePage = () => <div style={{ color: 'white' }}>Homepage</div>;

const PageNotFound = () => <div>Page not found</div>;
const App = () => {
    return (
        <>
            <Header />;
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route>
                    <PageNotFound />
                </Route>
            </Switch>
        </>
    );
};

export default App;
