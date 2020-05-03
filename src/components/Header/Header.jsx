import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Languages from './Languages/Languages';
import GardenLogoHorizontal from '../../assets/images/garden_logo_horizontal.svg';
import NavItems from './NavItems/NavItems';

const LogoStyled = styled.img`
    height: 60px;
    width: 255px;
`;

const HeaderWrapper = styled.div`
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
    margin-top: 18px;
    /* width: 100%; */
    margin: auto;

    /* centering bug */
    @media (max-width: 820px) {
        display: grid;
        place-items: center;
        /* background-color: red; */
    }
`;

const NavLinksWrapper = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-gap: 15px;
    place-items: center;
`;

const Header = () => {
    const languages = [
        { language: 'AL' },
        { language: 'MK' },
        { language: 'EN' },
    ];

    const navLinks = [
        { navLink: 'Menu', to: '/menu' },
        { navLink: 'Contact', to: '/contact' },
        { navLink: 'Log In', to: '/login' },
    ];

    return (
        <HeaderWrapper>
            <Link to="/">
                <LogoStyled src={GardenLogoHorizontal} alt="Garden Logo" />
            </Link>
            <NavLinksWrapper>
                <Languages languages={languages} />
                <NavItems items={navLinks} />
            </NavLinksWrapper>
        </HeaderWrapper>
    );
};

export default Header;
