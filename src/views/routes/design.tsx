import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { DesignItem } from '../assets/types/types';

import backgroundImage from '../assets/images/bg-image-light.svg';
import backgroundImageTop from '../assets/images/toprightbg.svg';

// import adobeCCLogo from '../assets/images/cc-logo.svg';


import Footer from '../components/footer/footer';
import Intro from '../content/design/design-intro';
import DesignCloud from '../content/design/design-cloud';
import DesignPortfolio from '../content/design/design-portfolio';

import Loading from '../components/loading/loading';

import backgroundImageBottom from '../assets/images/bottomrightbg.svg';

const Portfolio = styled.section`
   width: 100%;
   background: none;
   background: url(${backgroundImageTop}),  url(${backgroundImage});
    background-color: #29004f;
    background-attachment: fixed, fixed;
    background-position: 150% 10%, center;
    background-size: cover, cover;
   background-position: center center, 0% 0%;
   display: flex;
   flex-direction: column;
   align-items: center;
   overflow-x: hidden;
`;

const HeaderSection = styled.header`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    align-items: center;
    justify-items: end;
    width: 90%;
    max-width: 2000px;
    min-height: 65vh;
    column-gap: 2rem;
    margin-top: 100px;

    @media (min-width: 1000px) {
        grid-template-columns: 1fr 1fr; 
        min-height: 60vh;
    }
`;


const Dev = () => {

    const [backgroundPositionX, setBackgroundPositionX] = useState('0px');

    const [data, setData] = useState<DesignItem[]>([]);

    const [assetsLoaded, setAssetsLoaded] = useState(false)

    const loadData = async () => {
        try {
            const dataLoaded: Response = await fetch('/assets/data/design.json');
            if (!dataLoaded.ok) {
                throw new Error('Failed to fetch data');
            }
            const dataJSON: DesignItem[] = await dataLoaded.json();
            setData(dataJSON);           
            setTimeout(() => {
                setAssetsLoaded(true);
            }, 500);
        } catch (error) {
            console.error('Error loading data:', error);
        };  
    };

    useEffect(() => {
        loadData();
    }, []);


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // useEffect(() => {
    //     // Event listener to track scroll position
    //     const handleScroll = () => {
    //       const bgPosition = `${window.scrollY * 0.2}px`;
    //       setBackgroundPositionX(bgPosition);
    //     };
    
    //     // Attach the event listener
    //     window.addEventListener('scroll', handleScroll);
    
    //     // Clean up the event listener when the component unmounts
    //     return () => {
    //       window.removeEventListener('scroll', handleScroll);
    //     };
    //   }, []);


    return (
        <Portfolio style={{ backgroundPosition: `center ${backgroundPositionX}`}}>
            <Loading visible={!assetsLoaded} />
            <HeaderSection>
                <Intro></Intro>
                <DesignCloud></DesignCloud>
            </HeaderSection>
            <DesignPortfolio data={data}></DesignPortfolio>
            <Footer></Footer>
        </Portfolio>
    );
};

export default Dev;