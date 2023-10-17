import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { DevItem } from '../assets/types/types';


import Footer from '../components/footer/footer';
import Intro from '../content/dev/dev-intro';
import DevPortfolio from '../content/dev/dev-portfolio';

import backgroundImage from '../assets/images/bg-image-light.svg';


const DevContainer = styled.section`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   overflow-x: hidden;
   background: none;
   background: url(${backgroundImage});
   background-color: var(--background-purple);
   background-attachment: fixed;
   background-position: center center;
`;

const Dev = () => {

    const [data, setData] = useState<DevItem[]>([]);

    const loadData = async () => {
        try {
            const dataLoaded: Response = await fetch('/assets/data/dev.json');
            if (!dataLoaded.ok) {
                throw new Error('Failed to fetch data');
            }
            const dataJSON: DevItem[] = await dataLoaded.json();
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

    return (
        <DevContainer>
    
            <Intro></Intro>
            <DevPortfolio data={data}></DevPortfolio>
            <Footer></Footer>
        </DevContainer>
    );
};

export default Dev;