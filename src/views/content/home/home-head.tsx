import React, {useState, useEffect} from "react";
import styled from "styled-components";

import HomeHero from './home-head-hero';
import HomeText from './home-head-text';

interface HomeHeadProps {
    onAssetsLoaded: () => void;
}

const HomeHead = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 5rem;
    max-width: 1600px;

    @media (min-width: 2500px) {
        max-width: 6000px;
    }
`;

const HomeHeader: React.FC<HomeHeadProps> = ( { onAssetsLoaded }) => {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [fontsLoaded, setFontsLoaded] = useState(false);
    
    const imagesLoadedCallback = () => {
        setImagesLoaded(true);
    }

    const fontsLoadedCallback = () => {
        setFontsLoaded(true);
    }

    useEffect(() => {
        if (imagesLoaded && fontsLoaded){
            onAssetsLoaded();
        }
    }, [imagesLoaded, fontsLoaded, onAssetsLoaded]);


    return (
        <HomeHead>
            <HomeText onFontsLoaded={fontsLoadedCallback}></HomeText>
            <HomeHero onImagesLoaded={imagesLoadedCallback}></HomeHero>  
        </HomeHead>  
    );
}

export default HomeHeader