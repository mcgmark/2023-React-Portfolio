import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { DesignItem } from '../assets/types/types';

import backgroundImage from '../assets/images/bg-image.svg';

// import adobeCCLogo from '../assets/images/cc-logo.svg';

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
   padding-bottom: 3vw;
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
    height: 800px;
    margin-top: 60px;

    @media (min-width: 1000px) {
        grid-template-columns: 1fr 1fr; 
        column-gap: 5rem;
    }

    @media (min-width: 2000px) {
        column-gap: 17rem;
    }


`;

// const SubHeader = styled.section`
//     height: 30px;
//     width: 100%;
//     background: rgba(74, 12, 137, 0.35);
//     display: flex;
//     align-items: center;
//     justify-content: end;
//     padding-right: 20px;
//     left: 100px;
// `;

// const Text = styled.p`
//     font-family: 'Roboto-Regular';
//     font-size: .8rem;
//     color: #dfdfdf;
//     width: fit-content;
//     letter-spacing: .005rem;
//     text-transform: uppercase;
// `;


const Dev = () => {

    const [backgroundPositionX, setBackgroundPositionX] = useState('0px');

    const [data, setData] = useState<DesignItem[]>([]);

    const loadData = async () => {
        try {
            const dataLoaded: Response = await fetch('/assets/data/design.json');
            if (!dataLoaded.ok) {
                throw new Error('Failed to fetch data');
            }
            const dataJSON: DesignItem[] = await dataLoaded.json();
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
            {/* <SubHeader>
                <Text style={{width: 'fit-content', textAlign: 'center'}}>All created using Adobe CC</Text>
                <img src={adobeCCLogo} alt="Adobe CC logo" style={{width: '70px', marginLeft: '10px'}}/>
            </SubHeader> */}
            <DesignPortfolio data={data}></DesignPortfolio>
            <Footer></Footer>
        </Portfolio>
    );
};

export default Dev;