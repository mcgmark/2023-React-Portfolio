import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

import { DevItem } from '../assets/types/types';


import Footer from '../components/footer/footer';
import Intro from '../content/dev/dev-intro';
import DevPortfolio from '../content/dev/dev-portfolio';

import Loading from '../components/loading/loading';

import backgroundImage from '../assets/images/bg-image-light.svg';
import backgroundImageBottom from '../assets/images/bottomrightbg.svg';
import backgroundImageTop from '../assets/images/topleftbg.svg';


const DevContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    overflow-x: hidden;
    background: url(${backgroundImageTop}), url(${backgroundImageBottom}), url(${backgroundImage}), radial-gradient(circle at 90% -10%, #440097 2%, rgba(48,10,92,1) 31%, rgba(48,10,92,0.2) 95%);
    background-color: #29004f;
    background-attachment: fixed, scroll, fixed;
    background-position: top right, bottom left, center;
    background-size: 220%, 70%, 100%;
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

    const containerRef = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState<number>(0);
    const [rotateY, setRotateY] = useState<number>(0);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (containerRef.current) {
          const containerRect = containerRef.current.getBoundingClientRect();
          const centerX = containerRect.left + containerRect.width / 2;
          const centerY = containerRect.top + containerRect.height / 2;
          const mouseX = event.clientX;
          const mouseY = event.clientY;
    
          // Calculate distance from mouse to center along X and Y axes
          const deltaX = mouseX - centerX;
          const deltaY = mouseY - centerY;
    
          // Adjust rotation based on mouse movement
          const maxRotation = 1; // Adjust maximum rotation angle as needed
          const rotationFactor = 3; // Adjust sensitivity to mouse movement
    
          const newRotateX = (deltaY / containerRect.height) * maxRotation * rotationFactor * 5;
          const newRotateY = (deltaX / containerRect.width) * maxRotation * rotationFactor * 5;
    
          setRotateX(newRotateX);
          setRotateY(newRotateY);
        }
      };
      

    return (
        <DevContainer  ref={containerRef} onMouseMove={handleMouseMove}>
            <Loading visible={!assetsLoaded} />
            <Intro rotateY={rotateY} rotateX={rotateX} ></Intro>
            <DevPortfolio data={data}></DevPortfolio>
            <Footer></Footer>
        </DevContainer>
    );
};

export default Dev;