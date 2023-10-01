import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import HomeText from '../content/home/home-text';
import DesignText from '../content/home/design/design-text';
import DesignHero from '../content/home/design/design-hero';
import DevText from '../content/home/dev/dev-text';
import DevHero from '../content/home/dev/dev-hero';


import HomeHero from '../content/home/home-hero';

import Header from '../components/header/header';

import backgroundImage from '../assets/images/bg-image.svg';


const Section = styled.section`
  display: flex;
  justify-content: center;
  background: url(${backgroundImage});
  background-color: var(--background-purple);
  background-position: -100% -100%;
  min-height: 100vh;
  min-width: 100%;
  max-width: 90%;
`;

const Top = styled.section`
    display: grid;
    grid-template-rows: auto;
    width: 90%;

    @media (min-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1500px) {
        margin-top: 5rem; 
        width: 95%;
    }
`;

const Bottom = styled.section`
    display: grid;
    grid-template-rows: auto;
    row-gap: 6rem;
    /* width: 90%; */

    @media (min-width: 1000px) {
        margin-top: 500px;
        row-gap: 25rem;
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1500px) {
        margin-top: 300px;
    }

`;

const Inner = styled.section`
    background: url(${backgroundImage});
    background-color: var(--background-purple);
    background-position: -100% -100%;
    display: grid;
    grid-template-rows: auto;
    justify-items: center;
    min-height: 100vh;
    min-width: 90%;
    max-width: 90%;
`;


const Home = () => {

    const [imagesLoaded, setImagesLoaded] = useState(false);

    const imagesLoadedCallback = () => {
        setImagesLoaded(true);
    }

    useEffect(() => {
        if (imagesLoaded) {   
            console.log(imagesLoaded);
        };
    }, [imagesLoaded])

    return (
        <Section>
            <Inner>
                   <Header />   
                <Top>
                { imagesLoaded ? (
                <>
                    <HomeText></HomeText>         
                </>
                ) : null } 
                    <HomeHero onImagesLoaded={imagesLoadedCallback}></HomeHero>                   
                </Top>
                { imagesLoaded ? (
                <>
                <Bottom>
                    <DesignHero></DesignHero>
                    <DesignText></DesignText>
                    <DevText></DevText>
                    <DevHero></DevHero>
                </Bottom>
                </>
                ) : null } 
            </Inner> 
        </Section>
    );
};

export default Home;