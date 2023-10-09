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
    background-color: rgba(29, 4, 56, 1);
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
        line-height: 170%;
    }
`;

const DevButton = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Arial-MT-Bold';
    font-size: 1.05rem;
    color: #ffffff;
    width: 50%;
    max-width: 225px;
    height: 50px;
    border-radius: 130px 130px 130px 130px;
    align-self: start;
    overflow: hidden;
    cursor: pointer;
    transition: all 200ms ease;
    border: 4px solid rgb(34, 255, 104);
    background-color: rgba(0, 0, 0, 0.043);

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
            <DevHeading><Span>javascript, html, react, sql, php, git, oh my...</Span></DevHeading>
            <DevParagraph>Today simple websites are complicated applications with many parts. I've taken the time to build a solid understanding of different aspects of web development from frameworks to libraries and beyond. </DevParagraph>
            <DevButton onClick={() => loadPortfolio('/dev')}>VIEW DEV</DevButton>
        </DevContentDiv>
    );

};


export default DevText;