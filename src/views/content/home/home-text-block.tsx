import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom'; 



interface HomeTextBlockProps {
    heading: string;
    paragraph: string;
    link: string;
    children: ReactNode;
}

const HomeContentDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;



    @media (min-width: 1000px) {
        padding: 2.5rem;
    }
 
    @media (min-width: 1500px) {
        min-height: 500px;
        padding: 6rem;
    }
`;

const HomeHeading = styled.h1`
    left: 0px;
    font-family: 'Arial-MT-Bold';
    font-size: 3rem;
    margin-left: -20px;

    @media (min-width: 1000px) {
        font-size: 3.25rem;
    }

    @media (min-width: 1500px) {
        font-size: 5rem;
    }

    @media (min-width: 2000px) {
        font-size: 6rem;
    }
`;

const Span = styled.span`
    padding: .4rem 1rem .4rem 1rem;
    white-space: pre-wrap;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
    line-height: 116%;
    border-radius: 5px;
`;

const HomeParagraph = styled.p`
    font-family: 'Roboto-Thin';
    font-size: 1.25rem;
    line-height: 160%;
    letter-spacing: .05rem;
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
    border-radius: 25px 130px 130px 25px;
    align-self: start;
    overflow: hidden;
    cursor: pointer;
    transition: all 200ms ease;
    backdrop-filter: blur(3px);
    background-color: var(--purple-bright);
    border-left: 5px solid #6200ff;

    text-transform: uppercase;
    
    &:hover {
        transform: translateX(10px);
        background-color: #440097;
        border-left: 5px solid #38ffa9;
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