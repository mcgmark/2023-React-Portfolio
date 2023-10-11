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
    padding: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
`;

const SectionInner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 2000px;
    width: 90%;
    overflow-x: hidden;
`;

const Breadcrumb = styled.span`
    font-family: 'Rubik';
    font-size: 1.5rem;
    text-transform: uppercase;
`;

const IntroText = styled.h1`
    font-family: 'Arial-MT-Bold';
    text-transform: uppercase;
    font-size: 2.5rem;
    font-weight: 100;
    width: fit-content;
    z-index: 1;
    color: #dbdbdb;
    line-height: 140%;
    text-shadow: 2px 2px 0px #1c022f;

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
            <SectionInner>
            <Breadcrumb>Frontend Development</Breadcrumb>
            <IntroText>javascript, html, bootstrap, api, react, express, sql, php, mongo, git, <span style={{color: 'rgb(255, 217, 0)'}}>oh my...</span></IntroText>
            <Text>Today simple websites are complicated applications with many peices. I've been working the last two years to build on my knowledge and experience building the frontend of applications and some backend. I can build websites and many types of web applications from start to finish. </Text>
            </SectionInner>
        </Section>
    );
}

export default Intro;