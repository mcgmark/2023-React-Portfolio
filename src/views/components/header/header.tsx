import React from "react";
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


import LogoIMG from '../../assets/images/mark-logo.svg';

const HeaderContainer = styled.header`
    height: fit-content;
    padding-top: 1rem;
    width: 100%;
    display: flex;
    position: relative;
    top: 0px;
    align-items: center;
    justify-content: space-between;
    transition: all 200ms;
`;

const Logo = styled.img`
    position: relative;
    display: none;
    left: -55px;

    @media (min-width: 1000px) {
        display: block;
    }
`;

const NameLogo = styled.span`
    font-family: 'Rubik';
    font-size: 1.5rem;
    text-transform: uppercase;
    cursor: pointer;

`;

const LargeAwesomeIcon = styled(FontAwesomeIcon)`
    font-size: 1.5rem;
    border-radius: 100px;
    padding: .75rem .92rem;
    cursor: pointer;

    &:hover {
        background-color: #ffffff14;
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
                <NameLogo>Mark mcguigan</NameLogo>
                <Logo src={LogoIMG} alt="logo"></Logo>
                <LargeAwesomeIcon icon={faBars} />
        </HeaderContainer>
    );
}

export default Header;