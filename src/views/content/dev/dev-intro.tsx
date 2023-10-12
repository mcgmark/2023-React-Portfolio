import React from 'react';
import styled from 'styled-components';

import backgroundImage from '../../assets/images/bg-image-light.svg';


const Section = styled.section`
    background: url(${backgroundImage});
    background-color: var(--purple-bright);
    background-attachment: fixed;
    background-position: center center;
    width: 100%;
    min-height: 750px;
    height: 100%;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
`;

const SectionInner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 2000px;
    width: 90%;
   
`;

const HeaderSpacer = styled.div`
    width: 100%;
    height: 100px;
`;

const Breadcrumb = styled.span`
    font-family: 'Rubik';
    font-size: 1.25rem;
    text-transform: uppercase;
`;

const IntroText = styled.h1`
    font-family: 'Roboto-Black';
    text-transform: uppercase;
    font-size: 2.85rem;
    font-weight: 100;
    width: fit-content;
    z-index: 1;
    color: #ffffff;
    line-height: 140%;

    @media (min-width: 1400px) {
        font-size: 3.5rem;
    }

    @media (min-width: 2000px) {
        font-size: 5rem;
    }
`;

const Text = styled.p`
    font-family: 'Roboto-thin';
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 180%;
    color: #e6e6e6;

    @media (min-width: 1200px) {
        font-size: 1.5rem;
        max-width: 1600px;
    }
`;


const Intro = () => {
    return(
        <Section>
            <HeaderSpacer></HeaderSpacer>
            <SectionInner>
            <Breadcrumb>Frontend Development</Breadcrumb>
            <IntroText>javascript, html, bootstrap, api, react, express, sql, php, mongo, git, <span style={{color: 'rgb(255, 238, 0)'}}>oh my...</span></IntroText>
            <Text>Today simple websites are complicated applications with many peices. I've been working the last two years to build on my knowledge and experience building the frontend of applications and some backend. I can build websites and many types of web applications from start to finish. </Text>
            </SectionInner>
            <HeaderSpacer></HeaderSpacer>
        </Section>
    );
}

export default Intro;