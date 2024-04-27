import React from 'react';
import styled, { keyframes } from 'styled-components';

import alien from '../../assets/images/alien.png';
import smoke from '../../assets/images/smoke.png'


interface ImageProps {
    top: string;
    left: string;
}

const hover = keyframes`
0%, 100% {
    transform: translateY(0);
}
50% {
    transform: translateY(-30px) perspective(1000px) rotateX(-6deg) rotateY(8deg) rotateZ(3deg);
}
`;

const colors = keyframes`
0%, 100% {
    filter: hue-rotate(0);
}
50% {
    filter: hue-rotate(360deg);
}
`;

// Planet
const SmokeIMG = styled.img<ImageProps>`
    position: absolute;
    top: ${props => props.top};  
    left: ${props => props.left}; 
    animation: ${colors} 15s infinite; 
`;

const SmokeImage: React.FC<ImageProps> = ({top, left}) => {
    return (
        <SmokeIMG top={top} left={left} src={smoke} alt="planet" />
    );
} 

// Alien
const AlienIMG = styled.img<ImageProps>`
    display: none;
    position: absolute;
    top: ${props => props.top};  
    left: ${props => props.left}; 
    animation: ${hover} 15s infinite cubic-bezier(0.25, 0.46, 0.45, 1.94); 
    scale: 0.9;

    @media (min-width: 1000px){
        display: block;
    }
`;

const AlienImage: React.FC<ImageProps> = ({top, left}) => {
    return (
        <AlienIMG top={top} left={left} src={alien} alt="rocketman" />
    );
} 


const DevHeroContainer = styled.div`
display: none;
grid-area: 'devhero';
    width: 100%;
    height: 100%;
    position: relative;

    @media (min-width: 1000px){
        display: block;
    }
`;

const HomeHero = () => {
    return(
        <DevHeroContainer>
            <SmokeImage top="100px" left="-50px"></SmokeImage>
            <AlienImage top="0px" left="20px"></AlienImage>
        </DevHeroContainer>
    );
}

export default HomeHero;