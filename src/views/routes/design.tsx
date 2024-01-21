import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { DesignItem } from '../assets/types/types';

import backgroundImage from '../assets/images/bg-image.svg';

// import adobeCCLogo from '../assets/images/cc-logo.svg';


import Footer from '../components/footer/footer';
import Intro from '../content/design/design-intro';
import DesignCloud from '../content/design/design-cloud';
import DesignPortfolio from '../content/design/design-portfolio';

import Loading from '../components/loading/loading';

const Portfolio = styled.section`
   width: 100%;
   background: none;
   background: url(${backgroundImage});
   background-color: var(--background-purple);
   background-attachment: fixed;
   background-position: center center;
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
    column-gap: 4rem;
    width: 90%;
    max-width: 2000px;
    min-height: 100vh;

    @media (min-width: 1000px) {
        grid-template-columns: 1fr 1fr; 
        column-gap: 5rem;
        min-height: 680px;
        padding-top: 60px; 
        padding-bottom: 90px;
    }

    @media (min-width: 2000px) {
        column-gap: 17rem;
        height: 800px;
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

    useEffect(() => {
        // Event listener to track scroll position
        const handleScroll = () => {
          const bgPosition = `${window.scrollY * 0.2}px`;
          setBackgroundPositionX(bgPosition);
        };
    
        // Attach the event listener
        window.addEventListener('scroll', handleScroll);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


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