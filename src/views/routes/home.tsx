import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import HomeHead from '../content/home/home-head';
import DesignText from '../content/home/design/design-text';
import DesignHero from '../content/home/design/design-hero';
import DevText from '../content/home/dev/dev-text';
import DevHero from '../content/home/dev/dev-hero';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

import backgroundImage from '../assets/images/bg-image.svg';


const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${backgroundImage});
  background-color: var(--background-purple);
  min-width: 100%;
  max-width: 90%;
  min-height: 100vh;
  overflow-x: hidden;
`;

const Top = styled.section`
    display: grid;
    grid-template-rows: auto;
    align-items: start;
    margin-top: 4rem;
    
    @media (min-width: 1000px) {
        grid-template-columns: 1fr 1fr;
        margin-top: 0rem;
    }

    @media (min-width: 1500px) {
        grid-template-columns: 1fr 1fr;
        margin-top: 1rem;
    }
    @media (min-width: 2000px) {
        grid-template-columns: 1fr 1fr;
        margin-top: 8rem;
    }
`;

const Bottom = styled.section`
    display: grid;
    grid-template-rows: auto;
    row-gap: 6rem;
    margin-bottom: 100px;
    /* width: 90%; */

    @media (min-width: 1000px) {
        margin-top: 400px;
        row-gap: 20vw;
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1500px) {
        margin-top: 300px;
        row-gap: 9vw;
    }

`;

const Inner = styled.section`
    background: url(${backgroundImage});
    background-color: var(--background-purple);
    background-position: -100% -100%;
    display: grid;
    grid-template-rows: auto;
    height: fit-content;
    width: 90%;
    max-width: 2000px;
`;

const LoadingIcon = styled(FontAwesomeIcon)`
    position: fixed;
    top: 50%;
    right: 50%;
    font-size: 3vw;
    z-index: 1500;
    animation: loadingRotate 2s infinite;
    color: #fff;

    @keyframes loadingRotate {
        0% {
            transform: rotate(0turn);
        }
        100% {
            transform: rotate(-1turn);
        }
    }
`;


const Home = () => {

    const [assetsLoaded, setAssetsLoaded] = useState(false)

    const assetsLoadedCallback = () => {
        setAssetsLoaded(true);
    }

    return (
        <Section>
            <Inner>
                <Header />   
                <Top>
                    <HomeHead onAssetsLoaded={assetsLoadedCallback}></HomeHead>
                </Top>
                { assetsLoaded ? (
                <>
                <Bottom>
                    <DesignHero></DesignHero>
                    <DesignText></DesignText>
                    <DevText></DevText>
                    <DevHero></DevHero>
                </Bottom>
                <Footer></Footer>
                </> 
                ) : <LoadingIcon icon={faSpinner}/> }
            </Inner> 
        </Section>
    );
};

export default Home;