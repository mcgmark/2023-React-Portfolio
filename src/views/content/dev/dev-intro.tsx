import React from 'react';
import styled from 'styled-components';

import backgroundImage from '../../assets/images/bg-image-light.svg';


const Section = styled.section`
   background: url(${backgroundImage});
   background-color: var(--purple-bright);
   background-attachment: fixed;
   background-position: center center;
    z-index: 1;
    /* max-width: 2000px; */
    margin-top: 150px;
    padding: 5vw 50vw;
    width: 100%;
    overflow-x: hidden;
    padding: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 2px solid #ffffff15;
    border-bottom: 4px solid #00000021;
    box-shadow: 0px 0px 150px rgba(0, 0, 0, 1);
    /* box-shadow: inset 0px 0px 100px #33035a; */
`;

const SectionInner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-width: 2000px;
    width: 90%;
    overflow-x: hidden;
`;

const Breadcrumb = styled.span`
    font-family: 'Rubik';
    font-size: 1.5rem;
    text-transform: uppercase;
    color: rgb(229, 197, 13);
`;

const IntroText = styled.h1`
    font-family: 'Arial-MT-Bold';
    text-transform: uppercase;
    font-size: 2.5rem;
    font-weight: 100;
    width: fit-content;
    z-index: 1;
    color: #dbdbdb;
    line-height: 110%;

    

    @media (min-width: 1200px) {
        font-size: 5rem;
    }
`;

const Text = styled.p`
    font-family: 'Roboto-thin';
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 150%;
    color: #e6e6e6;

    @media (min-width: 1200px) {
        font-size: 1.5rem;
        max-width: 1400px;
    }
`;


const Intro = () => {
    return(
        <Section>
            <SectionInner>
            <Breadcrumb>Frontend Development</Breadcrumb>
            <IntroText>javascript, html, bootstrap, api, react, express, sql, php, mongo, git, <span style={{color: 'rgb(255, 217, 0)'}}>oh my...</span></IntroText>
            <Text>Today simple websites are complicated applications with many parts. I've taken the time to build a solid understanding of different aspects of web development from frameworks to libraries and beyond. </Text>
            </SectionInner>
        </Section>
    );
}

export default Intro;