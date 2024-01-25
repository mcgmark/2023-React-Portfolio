import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom'; 

import spaceBackground from '../../assets/images/space-bg.png';

interface HomeTextBlockProps {
    heading: string;
    paragraph: string;
    link: string;
    children: ReactNode;
}

const HomeContentDiv = styled.div`
    position: relative;
    box-sizing: border-box;
    max-width: 775px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    background: url(${spaceBackground});
    background-color: rgba(29, 15, 44, 0.81);
    background-size: cover;
    width: 100%;
    padding: 2rem;
    justify-self: center;
    border-radius: 0px 120px 0px 120px;
    box-shadow: 15px 5px 15px #00000040, 5px 5px 100px #57069fbf;

    @media (min-width: 1000px) {
        padding: 2.5rem;
        gap: 30px;
        justify-content: flex-end;
    }
 
    @media (min-width: 1500px) {
        min-height: 680px;
        padding: 6rem;
        gap: 30px;
        justify-content: flex-end;
    }
`;

const HomeHeading = styled.h1`
    position: relative;
    left: 0px;
    font-family: 'Arial-MT-Bold';
    font-size: 7vw;
    line-height: 140%;
    letter-spacing: .05rem;
    padding: 2px 0;

    @media (min-width: 1000px) {
    left: -70px;
    font-size: 3.25rem;
    line-height: 130%;
    letter-spacing: .05rem;
    }

    @media (min-width: 1500px) {
    position: absolute;
    top: 10%;
    font-size: 4.75rem;
    line-height: 165%;
    letter-spacing: .05rem;
    }
`;

const Span = styled.span`
    background-color: var(--purple-bright);
    padding: .4rem 1rem .4rem 1rem;
    white-space: pre-wrap;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
`;

const HomeParagraph = styled.p`
    font-family: 'Roboto-Thin';
    font-size: 1.1rem;
    line-height: 160%;
    letter-spacing: .05rem;

    @media (min-width: 1000px) {
        line-height: 180%;
    }
`;

const HomeButton = styled.div`
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
    backdrop-filter: blur(3px);
    background-color: var(--purple-bright);
    box-shadow: 0px 0px 50px #ffffff35;
    text-transform: uppercase;
    
    &:hover {
        transform: scale(105%);
        box-shadow: 0px 0px 20px #ffffff;
    }
`;

const HomeTextBlock: React.FC<HomeTextBlockProps> = ({ heading, paragraph, link, children}) => {

    const navigate = useNavigate();

    const loadPortfolio = () => {
        navigate(link);
    };

    return (
        <HomeContentDiv>
            <HomeHeading><Span>{heading}</Span></HomeHeading>
            <HomeParagraph>{paragraph}</HomeParagraph>
            <HomeButton onClick={loadPortfolio}>{children}</HomeButton>
        </HomeContentDiv>
    );

};


export default HomeTextBlock;