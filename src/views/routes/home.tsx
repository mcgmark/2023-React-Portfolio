import React, { useState } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import HomeHead from '../content/home/home-head';
import DesignText from '../content/home/design/design-text';
import DesignHero from '../content/home/design/design-hero';
import DevText from '../content/home/dev/dev-text';
import DevHero from '../content/home/dev/dev-hero';
import Footer from '../components/footer/footer';

import backgroundImage from '../assets/images/bg-image.svg';
import backgroundImageTop from '../assets/images/bg.svg';


const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${backgroundImage}), var(--background-purple);
  background-position: center;
  background-size: 100%;
  background-attachment: fixed;
  background-repeat:  repeat;
  min-width: 100%;
  max-width: 90%;
  min-height: 100vh;
  overflow-x: hidden;
`;


const Top = styled.section`
    display: grid;
    grid-template-rows: auto;
    align-items: start;
    margin-top: 8rem;
    
    @media (min-width: 1000px) {
        grid-template-columns: 1fr 1fr;
        margin-top: 8rem;
    }

    @media (min-width: 1500px) {
        grid-template-columns: 1fr 1fr;
        margin-top: 12rem;
    }
    @media (min-width: 2000px) {
        grid-template-columns: 1fr 1fr;
        margin-top: 20rem;
    }
`;

const Bottom = styled.section`
    display: grid;
    grid-template-rows: auto;
    row-gap: 6rem;
    margin-bottom: 100px;


    @media (min-width: 1000px) {
        margin-top: 400px;
        row-gap: 20vw;
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1500px) {
        margin-top: 350px;
        row-gap: 12vw;
    }

`;

const Inner = styled.section`
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