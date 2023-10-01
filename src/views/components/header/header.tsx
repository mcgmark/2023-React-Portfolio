import React from "react";
import styled from 'styled-components';

import LogoIMG from '../../assets/images/mark-logo.svg';

const HeaderContainer = styled.header`
height: fit-content;
padding-top: 1rem;
min-width: 100%;
display: flex;
position: relative;
top: 0px;
align-items: center;
justify-content: center;
transition: all 200ms;
`;

const Logo = styled.img`
    display: block;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Logo src={LogoIMG} alt="logo"></Logo>
        </HeaderContainer>
    );
}

export default Header;