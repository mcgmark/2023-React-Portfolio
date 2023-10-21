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
    background-color: rgba(29, 15, 44, 0.81);
    background-size: cover;
    width: 100%;
    padding: 2rem;
    justify-self: center;
    border-radius: 25px;

    @media (min-width: 1000px) {
        padding: 2.5rem;
        gap: 30px;
        justify-content: flex-end;
    }
 
    @media (min-width: 1500px) {
        min-height: 680px;
        padding: 6rem;
        gap: 50px;
        justify-content: flex-end;
    }
`;

const DevHeading = styled.h1`
    position: relative;
    left: 0px;
    font-family: 'Arial-MT-Bold';
    font-size: 8vw;
    line-height: 175%;
    letter-spacing: .05rem;

    @media (min-width: 1000px) {
    left: -70px;
    font-family: 'Arial-MT-Bold';
    font-size: 3.25rem;
    line-height: 165%;
    letter-spacing: .05rem;
    }

    @media (min-width: 1500px) {
    position: absolute;
    top: 10%;
    font-family: 'Arial-MT-Bold';
    font-size: 4.25rem;
    line-height: 165%;
    letter-spacing: .05rem;
    }
`;

const Span = styled.span`
    background-color: var(--purple-bright);
    padding: .5rem;
`;

const DevParagraph = styled.p`
    font-family: 'Roboto-Thin';
    font-size: 1.15rem;
    line-height: 160%;
    letter-spacing: .05rem;

    @media (min-width: 1000px) {
        line-height: 180%;
    }
`;

const DevButton = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Arial-MT-Bold';
    font-size: 1.05rem;
    color: #fff;
    width: 50%;
    max-width: 225px;
    height: 50px;
    border-radius: 130px 130px 130px 130px;
    align-self: start;
    overflow: hidden;
    cursor: pointer;
    transition: all 200ms ease;
    border: 4px solid rgb(0, 98, 255);
    backdrop-filter: blur(3px);
    
    &:hover {
        transform: scale(103%);
    }
`;
  
const DevText = () => {

    const navigate = useNavigate();

    const loadPortfolio = (route: string) => {
        navigate(route);
    };

    return (
        <DevContentDiv>
            <DevHeading><Span>javascript, react, php, sql, git, oh my...</Span></DevHeading>
            <DevParagraph>Websites are applications and the best ones require a lot of pieces to make them work. Mark has spent the last three years building his knowledge and experience putting these peices together building websites and web applications. </DevParagraph>
            <DevButton onClick={() => loadPortfolio('/dev')}>VIEW DEV</DevButton>
        </DevContentDiv>
    );

};


export default DevText;