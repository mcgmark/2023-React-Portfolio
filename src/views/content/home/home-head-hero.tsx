import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useSpring, animated, easings } from '@react-spring/web';

import rocket from '../../assets/images/rocket.png';
import spacemanColorImage from '../../assets/images/spaceman-color.png'
import spacemanPlainImage from '../../assets/images/spaceman-plain.png';
import starLarge from '../../assets/images/star-large.png';
import starMedium from '../../assets/images/star-medium.png';
import starSmall from '../../assets/images/star-small.png';


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

// Rocket
const RocketIMG = styled(animated.img)<ImageProps>`
    display: none;
    position: absolute;

    @media (min-width: 1000px){
        top: -10px;
        display: block;
        right: -300px;
    };

    @media (min-width: 1500px) {
        display: block;
        position: absolute;
        top: ${props => props.top};  
        left: ${props => props.left}; 
    }
`;


// Spaceman color
const SpacemanColorIMG = styled(animated.img)<ImageProps>`
    display: none;
    position: absolute;
    top: ${props => props.top};  
    left: ${props => props.left}; 
    animation: ${hover} 12s infinite cubic-bezier(0.25, 0.46, 0.45, 1.94); 

    @media (min-width: 1500px) {
        display: block;
    }
`;

// Spaaceman plain
const SpacemanPlainIMG = styled(animated.img)<ImageProps>`
    display: none;
    position: absolute;
    z-index: 100;
    top: ${props => props.top};  
    left: ${props => props.left}; 
    animation: ${hover} 9s 250ms infinite cubic-bezier(0.25, 0.46, 0.45, 1.94); 

    @media (min-width: 1800px) {
        display: block;
    }
`;

// Star large

const StarLargeIMG = styled(animated.img)<ImageProps>`
    display: none;
    position: absolute;
    top: ${props => props.top};  
    left: ${props => props.left}; 

    @media (min-width: 1500px) {
        display: block;
    }
`;

// Star Medium

const StarMediumIMG = styled(animated.img)<ImageProps>`
    display: none;
    position: absolute;
    top: ${props => props.top};  
    left: ${props => props.left}; 

    @media (min-width: 1500px) {
        display: block;
    }

`;


// Star Small
const StarSmallIMG = styled(animated.img)<ImageProps>`
    display: none;
    position: absolute;
    top: ${props => props.top};  
    left: ${props => props.left}; 
    @media (min-width: 1500px) {
        display: block;
    }

`;

const HomeHeroCircle = styled(animated.div)<ImageProps>`
  display: none; 
  position: absolute;
  top: ${props => props.top};  
  left: ${props => props.left};
  border-width: 12.12px;
  border-color: rgb(219, 219, 219);
  border-style: solid;
  border-radius: 50%;
  background-image: linear-gradient( 25deg, rgb(246,67,5) 3%, rgb(123,70,130) 30%, rgb(0,72,255) 50%, rgb(39,146,128) 63%, rgb(77,219,0) 88%);
  width: 648.76px;
  height: 648.76px;
  z-index: -1;
  justify-self: center;
  box-shadow: 0px 0px 1000px rgb(157, 0, 255), 0px 0px 100px rgb(4, 255, 50);

  @media (min-width: 1500px) {
        display: block;
    }
`;

const HomeHeroContainer = styled(animated.div)`
    position: relative;
    z-index: 5;
    scale: 1;
`;

interface HomeHeroProps {
    onImagesLoaded: () => void;
}

const HomeHero: React.FC<HomeHeroProps> = ( { onImagesLoaded }) => {
    const [isImage1Loaded, setIsImage1Loaded] = useState(false);
    const [isImage2Loaded, setIsImage2Loaded] = useState(false);
    const [isImage3Loaded, setIsImage3Loaded] = useState(false);
    const [isImage4Loaded, setIsImage4Loaded] = useState(false);
    const [heroLoaded, setHeroLoaded] = useState(false);


    const animatedProps = useSpring({
        from: {opacity: 0, transform: 'translateY(100px)'},
        to: {opacity: 1, transform: 'translateY(0px)'},
        config: { duration: 2000, easing: easings.easeOutBack },
    });

    const preloadImage = (src: string, setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>) => {
        const image = new Image();
        image.src = src;
        image.onload = () => setIsLoaded(true);
    };

    useEffect(() => {
        preloadImage(rocket, setIsImage1Loaded);
        preloadImage(spacemanColorImage, setIsImage2Loaded);
        preloadImage(spacemanPlainImage, setIsImage3Loaded);
        preloadImage(starLarge, setIsImage4Loaded);   
    }, []);

    useEffect(() => {
        if (isImage1Loaded && isImage2Loaded && isImage3Loaded && isImage4Loaded ) {
            onImagesLoaded();
            setHeroLoaded(true);
        };
    }, [isImage1Loaded, isImage2Loaded, isImage3Loaded, isImage4Loaded, onImagesLoaded]);

    return heroLoaded ? (     
        <HomeHeroContainer style={animatedProps}> 
            <section>
                <SpacemanColorIMG top="-50px" left="-30px" src={spacemanColorImage} alt="Logo" ></SpacemanColorIMG>
                <SpacemanPlainIMG top="150px" left="630px" src={spacemanPlainImage} alt="Logo"></SpacemanPlainIMG>
                <StarLargeIMG top="-90px" left="500px" src={starLarge} alt="star" ></StarLargeIMG>
                <StarMediumIMG top="420px" left="-50px" src={starMedium} alt="star"></StarMediumIMG>
                <StarMediumIMG top="500px" left="775px" src={starMedium} alt="star"></StarMediumIMG>
                <StarSmallIMG top="-150px" left="200px" src={starSmall} alt="star"></StarSmallIMG>
                <StarSmallIMG top="-200px" left="500px" src={starSmall} alt="star"></StarSmallIMG>
                <RocketIMG top="-100px" left="-80px" src={rocket} alt="Logo"></RocketIMG>
                <HomeHeroCircle top="-40px" left="90px"></HomeHeroCircle>
            </section> 
        </HomeHeroContainer>      
    ) : null;
};

export default HomeHero;