import React from "react";
import styled from 'styled-components';

// import LogoText from '../header/logo-text';

const FooterContainer = styled.footer`
min-width: 100%;
height: 50px;
display: flex;
align-items: end;
justify-content: center;
padding-bottom: 40px;
`;

const FooterInnerContainer = styled.section`
`;

const NameLogo = styled.span`
    font-family: 'Rubik';
    font-size: 1.05rem;
    text-transform: uppercase;
    cursor: pointer;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterInnerContainer>
            <NameLogo>Mark McGuigan © 2024</NameLogo>
            </FooterInnerContainer>
        </FooterContainer>
    );
}

export default Footer;