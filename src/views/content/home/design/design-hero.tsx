import React from 'react';
import styled, { keyframes } from 'styled-components';

import rocketman from '../../../assets/images/rocketman.png';
import planetImage from '../../../assets/images/planet.png'


interface ImageProps {
    top: string;
    left: string;
}


// Rocket
const PlanetIMG = styled.img<ImageProps>`
    display: none;
    position: absolute;
    top: ${props => props.top};  
    left: ${props => props.left}; 

    @media (min-width: 1000px){
        display: block;
    }
`;

const PlanetImage: React.FC<ImageProps> = ({top, left}) => {
    return (
        <PlanetIMG top={top} left={left} src={planetImage} alt="planet" />
    );
} 

// Rocket Man
const rotate = keyframes`
0%, 100% {
    transform: translateY(0);
}
50% {
    transform: rotate(-15deg) translateY(100px);
}
`;

const RocketManIMG = styled.img<ImageProps>`
    display: none;
    position: absolute;
    top: ${props => props.top};  
    left: ${props => props.left}; 
    animation: ${rotate} 27s infinite alternate-reverse ease-in-out; 

    @media (min-width: 1000px){
        display: block;
    }
`;

const RocketManImage: React.FC<ImageProps> = ({top, left}) => {
    return (
        <RocketManIMG top={top} left={left} src={rocketman} alt="rocketman" />
    );
} 

const DesignHeroContainer = styled.div`
grid-area: 'designhero';
    width: 100%;
    height: 100%;
    position: relative;
`;

const HomeHero = () => {
    return(
        <DesignHeroContainer>
                <PlanetImage top="-100px" left="-50px"></PlanetImage>
                <RocketManImage top="-80px" left="-50px"></RocketManImage> 
        </DesignHeroContainer>
    );
}

export default HomeHero;