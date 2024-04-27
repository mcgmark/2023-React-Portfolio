import React, { useState } from 'react';
import styled from 'styled-components';

import HomeHead from '../content/home/home-head';
import HomeTextBlock from '../content/home/home-text-block';
import DesignHero from '../content/home/design-hero';
import DevHero from '../content/home/dev-hero';
import Footer from '../components/footer/footer';
import Loading from '../components/loading/loading';

import backgroundImage from '../assets/images/bg-image-light.svg';
import backgroundImageBottom from '../assets/images/bottomrightbg.svg';
import backgroundImageTop from '../assets/images/topleftbg.svg';


const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url(${backgroundImageBottom}), url(${backgroundImage}), radial-gradient(circle at 40% 50%, #440097 2%, rgba(48,10,92,1) 30%, rgba(48,10,92,0.2) 95%);
    background-color: #2c0058;
    background-attachment: scroll, fixed, fixed;
    background-position: bottom right, center, center;
    background-size: 40%, 100%, 100%;
    background-repeat: no-repeat, repeat, no-repeat;
    min-width: 100%;
    overflow: hidden;
    animation: gradientAnimationT 150s linear alternate infinite;
`;

const Top = styled.section`  
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    @media (min-width: 1000px) {
        margin-top: 20px;
    }

    @media (min-width: 1500px) {
        margin-top: 140px;
    }

    @media (min-width: 2000px) {
        margin-top: 280px;
    }
`;

const Bottom = styled.section`
    display: grid;
    grid-template-rows: auto;
    row-gap: 6rem;
    margin-bottom: 100px;

    @media (min-width: 1000px) {
        row-gap: 25rem;
        grid-template-columns: 1fr 1fr;
        margin-top: 500px;
    }

    @media (min-width: 1200px) {
        margin-top: 300px;
    }

    @media (min-width: 1500px) {
        row-gap: 9rem;
        grid-template-columns: 1fr 1fr;
        margin-top: 300px;
        /* margin-top: 300px; */
    }

    @media (min-width: 2000px) {
        /* margin-top: 100px; */
        row-gap: 14rem;
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

const Home: React.FC = () => {

    const [assetsLoaded, setAssetsLoaded] = useState(false)

    const assetsLoadedCallback = () => {
        const timeout = setTimeout(() => {
            setAssetsLoaded(true);
        }, 500);

        return () => clearTimeout(timeout)
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
                    <HomeTextBlock
                        heading="keep it simple, but not too simple."
                        paragraph="I enjoy combining typography and graphics to create engaging and informative marketing materials. Web or print I have experience designing everything a business needs."
                        link="/design"
                    >view design</HomeTextBlock>
                    <HomeTextBlock
                        heading="html5, css, javascript, react, php, oh my..."
                        paragraph="The simple business website has evolved into a complicated web application that requires a lot of pieces to work. I spent the last three years building my knowledge and experience putting these peices together building web applications."
                        link="/dev"
                    >view dev</HomeTextBlock>
                    <DevHero></DevHero>
                </Bottom>
                <Footer></Footer>
                </> 
                ) : null } 
                <Loading visible={!assetsLoaded} />
            </Inner> 
        </Section>
    );
};

export default Home;