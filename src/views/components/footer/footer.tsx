import React from "react";
import styled from 'styled-components';

// import LogoText from '../header/logo-text';

const FooterContainer = styled.footer`
min-width: 100%;
display: flex;
align-items: center;
justify-content: center;
`;

const FooterInnerContainer = styled.section`
`;

const NameLogo = styled.span`
    font-family: Rubik;
    font-size: 1.75rem;
    text-transform: uppercase;
    cursor: pointer;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterInnerContainer>
            <NameLogo>Mark McGuigan</NameLogo>
            </FooterInnerContainer>
        </FooterContainer>
    );
}

export default Footer;