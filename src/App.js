import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './components/pages/Home/HomePage';
import Menu from './components/pages/Menu/Menu';
import Footer from './components/Footer/Footer';
import Contact from './components/pages/Contact/Contact';

const AppWrapper = styled.div`
    width: 80%;
    margin: auto;
    text-align: center;
    display: flex;
    flex-flow: column;
    height: 100vh;
`;

const ContentWrapper = styled.div`
    flex: 1 0 auto;
`;

const PageNotFound = () => <div>Page not found</div>;
const App = () => {
    return (
        <AppWrapper>
            <ContentWrapper>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route exact path="/menu">
                        <Menu />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                    <Route>
                        <PageNotFound />
                    </Route>
                </Switch>
            </ContentWrapper>
            <Footer />
        </AppWrapper>
    );
};

export default App;
