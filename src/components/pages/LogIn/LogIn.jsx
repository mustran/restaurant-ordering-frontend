import React from 'react';
import { connect } from 'react-redux';
import { getIsLoggedIn } from '../../../redux/auth/reducer';
import { loginToggler } from '../../../redux/auth/actions';
import { useHistory } from 'react-router';

const LogIn = (props) => {
    const history = useHistory();

    const handleLogin = () => {
        props.toggleLoginState();
        const pathToGo = props.history.location.state.from.pathname;
        history.push(pathToGo);
    };

    return <button onClick={() => handleLogin()}>Log In!</button>;
};

const mapStateToProps = (state) => ({
    isLoggedIn: getIsLoggedIn(state),
});

const mapDispatchToProps = (dispatch) => ({
    toggleLoginState: () => dispatch(loginToggler()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
