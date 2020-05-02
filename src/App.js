import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './components/pages/Home/HomePage';
import Menu from './components/pages/Menu/Menu';
import { LineBreak, Copyright } from './components/Footer/Footer';

const AppWrapper = styled.div`
    width: 80%;
    margin: auto;
    text-align: center;
`;

const PageNotFound = () => <div>Page not found</div>;
const App = () => {
    return (
        <AppWrapper>
            <Header />
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/menu">
                    <Menu />
                </Route>
                <Route>
                    <PageNotFound />
                </Route>
            </Switch>
            <LineBreak top={10} bottom={20} />
            <Copyright />
        </AppWrapper>
    );
};

export default App;
