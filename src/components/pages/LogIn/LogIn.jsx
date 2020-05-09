import React from 'react';
import { connect } from 'react-redux';
import { getIsLoggedIn, getPreload } from '../../../redux/auth/reducer';
import { loginToggler, loginUser } from '../../../redux/auth/actions';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import colors from '../../../theme/colors';
import { FaFacebookF } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { LineBreak } from '../../Footer/Footer';
import { AiOutlineLock } from 'react-icons/ai';
import UserInput from './UserInput';
import CustomLink from '../../LinkTag/CustomLink';
import { fetchAuthUserData } from '../../../redux/auth/fetchAuthUserData';
import { useState } from 'react';

const LoginContainer = styled.div`
    display: grid;
    place-items: center;
    /* grid-template-columns: minmax(441px, 1fr); */
    height: 80%;
`;

const LoginFormContainer = styled.div`
    height: fit-content;
    width: 441px;
    background: ${colors.backgroundColor};
    border-radius: 10px;
    box-shadow: 0px 3px 6px #00000029;
`;

const LoginWrapper = styled.div`
    width: 80%;
    margin: 10% auto 10% auto;
`;

const LoginHeader = styled.h2`
    color: ${colors.white};
`;

const LineStyles = styled.div`
    display: flex;
    justify-content: baseline;
    color: white;

    div {
        align-self: center;
        margin: 7px;
    }
`;

const LogIn = (props) => {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        let response = props.loginUser(username, password);
        response.then((data) => {
            console.log(data);
            if (data) history.push('/menu');
        });
        // for protected routes
        // let pathToGo = props.history.location.state.from.pathname;
        // let pathToGo = props.location.state;
        // if (!pathToGo) {
        //     console.log('PATH TO GO NOT NULL');
        //     console.log(pathToGo);
        //     history.push(pathToGo);
        // } else {
        //     history.push('/menu');
        // }
        // history.push('/menu');
    };

    if (props.loading) return <p>Loading</p>;

    return (
        <LoginContainer>
            <LoginFormContainer>
                <LoginWrapper>
                    <LoginHeader>Login to place orders</LoginHeader>
                    <CustomLink color={colors.blue}>
                        <FaFacebookF
                            size={22}
                            color={colors.white}
                            href="www.facebook.com"
                        />
                    </CustomLink>
                    <LineStyles>
                        <LineBreak />
                        <p>or</p>
                        <LineBreak />
                    </LineStyles>
                    {/* <UserInput
                        logo={<GrMail size={25} />}
                        type="text"
                        name="username"
                        placeholder="Email"
                        onChange={(e) => setUsername(e.target.value)}
                    /> */}
                    <input
                        type="text"
                        name="username"
                        placeholder="Email"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {/* <UserInput
                        logo={<AiOutlineLock size={25} />}
                        type="password"
                        name="password"
                        placeholder="Password"
                    /> */}
                    {/* <CustomLink onClick={(e) => handleLogin(e)}>
                        Login
                    </CustomLink> */}
                    <button onClick={(e) => handleLogin(e)}>Login</button>
                </LoginWrapper>
            </LoginFormContainer>
        </LoginContainer>
    );
};

const mapStateToProps = (state) => ({
    isLoggedIn: getIsLoggedIn(state),
    loading: getPreload(state),
});

const mapDispatchToProps = (dispatch) => ({
    toggleLoginState: () => dispatch(loginToggler()),
    loginUser: (username, password) =>
        dispatch(fetchAuthUserData(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
