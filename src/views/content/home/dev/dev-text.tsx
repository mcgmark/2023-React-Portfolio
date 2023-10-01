import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import spaceBackground from '../../../assets/images/space-bg.png';

const DevContentDiv = styled.div`
    position: relative;
    box-sizing: border-box;
    max-width: 775px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    background: url(${spaceBackground});
    background-color: rgba(29, 4, 56, 0.606);
    background-size: cover;
    width: 100%;
    padding: 2rem;
    border-radius: 25px;
    

    @media (min-width: 1000px) {
        padding: 2rem;
        gap: 30px;
        justify-content: flex-end;
        margin-left: 30px;
    }

    
    @media (min-width: 1500px) {
        justify-self: center;
        min-height: 680px;
        padding: 5rem;
        gap: 60px;
        justify-content: flex-end;
        margin-left: 150px;
    }
`;

const DevHeading = styled.h1`
    position: relative;
    left: -50px;
    font-family: 'Arial-MT-Bold';
    font-size: 8vw;
    line-height: 175%;
    letter-spacing: .05rem;

    @media (min-width: 1000px) {
    font-family: 'Arial-MT-Bold';
    font-size: 3.25rem;
    line-height: 165%;
    letter-spacing: .05rem;
    }

    @media (min-width: 1500px) {
    position: absolute;
    top: 10%;
    left: -10%;
    font-family: 'Arial-MT-Bold';
    font-size: 4rem;
    line-height: 165%;
    letter-spacing: .05rem;
    }
`;
const Span = styled.span`
    background-color: var(--purple-bright);
    padding: .5rem;
`;

const DevParagraph = styled.p`
    font-family: 'OpenSans';
    font-size: 1.25rem;
    line-height: 160%;
    letter-spacing: .05rem;

    @media (min-width: 1000px) {
        line-height: 180%;
    }
`;

const DevButton = styled.button`
    font-family: 'Arial-MT-Bold';
    font-size: 1.5rem;
    color: #000;
    width: 265px;
    height: 55px;
    border-radius: 3px;
    border: 0px;
    background-color: rgb(0, 247, 99);
    align-self: start;
    cursor: pointer;
    transition: all 200ms ease-in-out;

    &:hover {
        box-shadow: 5px 5px 0px #fff;
    }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  transition: all 200ms cubic-bezier(0.77, 0, 0.175, 1);     

  ${DevButton}:hover & {
    transform: translateX(15px);
  }  
`;

  
const DevText = () => {

    const navigate = useNavigate();

    const loadPortfolio = (route: string) => {
        navigate(route);
    };

    return (
        <DevContentDiv>
            <DevHeading><Span>html, javascript, node, react, git, oh my...</Span></DevHeading>
            <DevParagraph>Websites today are complicated applications with many parts. I’ve invested the time to build a solid understanding of these different technologies, frameworks, packages, modules, API and more... </DevParagraph>
            <DevButton onClick={() => loadPortfolio('/dev')}>VIEW DEV <StyledIcon icon={faArrowRight}></StyledIcon></DevButton>
        </DevContentDiv>
    );

};


export default DevText;