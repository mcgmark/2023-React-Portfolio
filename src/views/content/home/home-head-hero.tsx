import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
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

// Rocket
const RocketIMG = styled(animated.img)<ImageProps>`
    display: none;
    position: absolute;
    scale: 1;

    @media (min-width: 1000px){
        top: -10px;
        display: block;
        right: -350px;
    };

    @media (min-width: 1500px) {
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

    @media (min-width: 1500px) {
        display: block;
        scale: 0.8;
    }
`;

// Spaaceman plain
const SpacemanPlainIMG = styled(animated.img)<ImageProps>`
    display: none;
    position: absolute;
    z-index: 100;
    top: ${props => props.top};  
    left: ${props => props.left}; 

    @media (min-width: 1800px) {
        display: block;
        scale: 0.8;
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
  border-width: 10px;
  border-color: rgb(219, 219, 219);
  border-style: solid;
  border-radius: 50% 00% 50% 0%;
  background-image: linear-gradient(
    45deg,
    rgb(246, 67, 5),
    rgb(123, 70, 130), 
    rgb(0, 72, 255), 
    rgb(3, 109, 178),
    rgb(39, 146, 128), 
    rgb(255, 255, 0), 
    rgb(246, 67, 5), 
    rgb(123, 70, 130), 
    rgb(0, 72, 255), 
    rgb(3, 109, 178),
    rgb(39, 146, 128),
    rgb(255, 255, 0)
  );
  background-size:  1000% 1000%;  
  animation: gradientAnimation 15s linear alternate infinite; 
  width: 550px;
  height: 550px;
  z-index: -1;
  justify-self: center;

  @media (min-width: 1500px) {
        display: block;
    }
`;

const AfterGlow = styled(animated.div)<ImageProps>`
  display: none; 
  position: absolute;
  top: ${props => props.top};  
  left: ${props => props.left};
  border-radius: 50% 00% 50% 0%;
  background-image: linear-gradient(
    45deg,
    rgb(246, 67, 5),
    rgb(123, 70, 130), 
    rgb(0, 72, 255), 
    rgb(3, 109, 178),
    rgb(39, 146, 128), 
    rgb(255, 255, 0), 
    rgb(246, 67, 5), 
    rgb(123, 70, 130), 
    rgb(0, 72, 255), 
    rgb(3, 109, 178),
    rgb(39, 146, 128),
    rgb(255, 255, 0)
  );
  background-size:  1000% 1000%;  
  animation: gradientAnimation 15s linear alternate infinite; 
  width: 620px;
  height: 620px;
  z-index: -1;
  justify-self: center;
  /* box-shadow: 50px 50px 10px rgb(0, 0, 0), 0px 0px 50px rgb(255, 255, 255); */
  filter: blur(60px);
  opacity: 0.75;

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

    const animatedPropsTwo = useSpring({
        from: {opacity: 1, transform: 'translateY(-40px)'},
        to: {opacity: 1, transform: 'translateY(0px)'},
        config: { duration: 500, easing: easings.easeOutBack },
        delay: 750
    });

    const animatedPropsThree = useSpring({
        from: {transform: 'scale(0)'},
        to: [
            { transform: 'scale(1)'},
        ],
        config: { duration: 500, easing: easings.easeOutBack },
        delay: 750
    });

    const spaceguyHover = useSpring({
        from: { transform: 'translateY(100px) perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)' },
        to: [
          {transform: 'translateY(-20px) perspective(1000px) rotateX(-20deg) rotateY(18deg) rotateZ(5deg)'},
          {transform: 'translateY(100px) perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)'},
        ],
        config: { duration: 24000, easing: easings.easeInOutBack },
        loop: true, // Loop the animation indefinitely
        
    });

    const spaceguyHoverT = useSpring({
        from: { transform: 'translateY(0px) perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)' },
        to: [
          {transform: 'translateY(-80px) perspective(1000px) rotateX(-16deg) rotateY(18deg) rotateZ(3deg)'},
          {transform: 'translateY(0px) perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)'},
        ],
        config: { duration: 16500, delay: 500, easing: easings.easeInOutBack },
        loop: true, // Loop the animation indefinitely
        
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
        <HomeHeroContainer> 
            <section>
                <SpacemanColorIMG style={spaceguyHover} top="-50px" left="-30px" src={spacemanColorImage} alt="Logo" ></SpacemanColorIMG>
                <SpacemanPlainIMG style={spaceguyHoverT} top="150px" left="630px" src={spacemanPlainImage} alt="Logo"></SpacemanPlainIMG>
                <StarLargeIMG  top="-100px" left="500px" src={starLarge} alt="star" ></StarLargeIMG>
                <StarMediumIMG top="350px" left="0px" src={starMedium} alt="star"></StarMediumIMG>
                <StarMediumIMG  top="450px" left="775px" src={starMedium} alt="star"></StarMediumIMG>
                <StarSmallIMG top="-150px" left="200px" src={starSmall} alt="star"></StarSmallIMG>
                <StarSmallIMG   top="-200px" left="500px" src={starSmall} alt="star"></StarSmallIMG>
                <RocketIMG  top="-100px" left="-50px" src={rocket} alt="Logo"></RocketIMG>
                <HomeHeroCircle  top="-0px" left="160px"></HomeHeroCircle>
                <AfterGlow  top="-20px" left="130px"></AfterGlow>
            </section> 
        </HomeHeroContainer>      
    ) : null;
};

export default HomeHero;