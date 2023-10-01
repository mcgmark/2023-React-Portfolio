import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Item } from '../assets/types/types';

import backgroundImage from '../assets/images/bg-image-light.svg';

import Menu from '../components/menu/menu';
import Footer from '../components/footer/footer';
import Intro from '../content/design/design-intro';
import DesignCloud from '../content/design/design-cloud';
import DesignPortfolio from '../content/design/design-portfolio';


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
   gap: 8vw;
   padding-bottom: 3vw;
   overflow-x: hidden;
`;

const HeaderSection = styled.header`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    column-gap: 10rem;
    row-gap: 4rem;
    width: 90%;
    max-width: 1650px;

    @media (min-width: 1300px) {
        grid-template-columns: 1fr 1fr; 
    }
`;

const Dev = () => {

    const [backgroundPositionX, setBackgroundPositionX] = useState('0px');

    const [data, setData] = useState<Item[]>([]);

    const loadData = async () => {
        try {
            const dataLoaded: Response = await fetch('/assets/data/data.json');
            if (!dataLoaded.ok) {
                throw new Error('Failed to fetch data');
            }
            const dataJSON: Item[] = await dataLoaded.json();
            setData(dataJSON);
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
            <Menu></Menu>
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