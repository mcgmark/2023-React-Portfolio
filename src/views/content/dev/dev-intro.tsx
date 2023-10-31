import React from 'react';
import styled from 'styled-components';

import backgroundImage from '../../assets/images/bg-image-light.svg';
import backgroundImageTop from '../../assets/images/topleftbg.svg';


const Section = styled.section`
    background: url(${backgroundImage});
    background-color: var(--purple-bright);
    background-attachment: fixed;
    background-position: center;
    background-repeat: repeat;
    background-size: auto;
    width: 100%;
    min-height: 750px;
    height: 100%;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 1000px){
        background: url(${backgroundImageTop}), url(${backgroundImage});
        background-color: var(--purple-bright);
        background-attachment: fixed;
        background-position: center center;
        background-repeat: no-repeat, repeat;
        background-size: 150%, auto;
    }

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
    color: #e6e6e6;
`;

const IntroText = styled.h1`
    font-family: 'Arial-MT-Bold';
    text-transform: capitalize;
    font-size: 3rem;
    font-weight: 100;
    width: fit-content;
    z-index: 1;
    color: #e6e6e6;
    line-height: 120%;

    @media (min-width: 1400px) {
        font-size: 3.5rem;
    }

    @media (min-width: 2000px) {
        font-size: 5rem;
    }
`;

const Text = styled.p`
    font-family: 'Roboto-thin';
    font-size: 1.25rem;
    line-height: 180%;
    color: #e6e6e6;

    @media (min-width: 1200px) {
        font-size: 1.3rem;
        max-width: 1600px;
    }
`;


const Intro = () => {
    return(
        <Section>
            <HeaderSpacer></HeaderSpacer>
            <SectionInner>
            <Breadcrumb>Web Development</Breadcrumb>
            <IntroText>javascript, html, bootstrap, api, react, express, sql, php, mongo, git, <span style={{color: 'rgb(255, 238, 0)'}}>oh my...</span></IntroText>
            <Text>Websites are applications that require a lot of pieces to make them work. Mark, a recent Dean's List graduate of Georgian College, has spent the last three years building his knowledge and experience putting the peices together building websites and web applications.</Text>
            </SectionInner>
            <HeaderSpacer></HeaderSpacer>
        </Section>
    );
}

export default Intro;