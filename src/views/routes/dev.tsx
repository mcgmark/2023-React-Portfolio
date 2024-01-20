import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { DevItem } from '../assets/types/types';


import Footer from '../components/footer/footer';
import Intro from '../content/dev/dev-intro';
import DevPortfolio from '../content/dev/dev-portfolio';

import Loading from '../content/home/loading';

import backgroundImage from '../assets/images/bg-image-light.svg';
import backgroundImageBottom from '../assets/images/bottomrightbg.svg';


const DevContainer = styled.section`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   overflow-x: hidden;
   background: none;
   background: url(${backgroundImageBottom}), url(${backgroundImage});
   background-color: var(--background-purple);
   background-attachment: scroll, fixed;
   background-position: bottom left, center;
   background-repeat: no-repeat;
`;

const Dev = () => {

    const [data, setData] = useState<DevItem[]>([]);
    const [assetsLoaded, setAssetsLoaded] = useState(false)

    const loadData = async () => {
        try {
            const dataLoaded: Response = await fetch('/assets/data/dev.json');
            if (!dataLoaded.ok) {
                throw new Error('Failed to fetch data');
            }
            const dataJSON: DevItem[] = await dataLoaded.json();
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

    return (
        <DevContainer>
            <Loading visible={!assetsLoaded} />
            <Intro></Intro>
            <DevPortfolio data={data}></DevPortfolio>
            <Footer></Footer>
        </DevContainer>
    );
};

export default Dev;