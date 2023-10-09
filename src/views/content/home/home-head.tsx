import React, {useState, useEffect} from "react";

import HomeHero from './home-hero';
import HomeText from './home-text';

interface HomeHeadProps {
    onAssetsLoaded: () => void;
}

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
        <>
            <HomeText onFontsLoaded={fontsLoadedCallback}></HomeText>
            <HomeHero onImagesLoaded={imagesLoadedCallback}></HomeHero>  
        </>  
    );
}

export default HomeHeader