import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

const FontFaceObserver = require('font-face-observer');


const HomeContentDiv = styled.div`
    max-width: 900px;
    display: grid;
    grid-template-rows: auto;
    row-gap: 30px;
`;

const HomeHeading = styled.h1`
    font-family: 'Arial-MT-Bold';
    font-size: 16vw;
    line-height: 110%;
    letter-spacing: .05rem;

    @media (min-width: 1000px) {
        font-size: 12vw;
        text-align: justify;
    }

    @media (min-width: 1500px) {
        font-size: 8vw;
        text-align: justify;
    }

    @media (min-width: 1930px) {
        font-size: 10rem;
        line-height: 115%;
    }
`;

const HomeParagraph = styled.p`
    font-family: 'Roboto-Thin';
    font-size: 1.25rem;
    line-height: 200%;
    letter-spacing: .05rem;
    
    @media (min-width: 1000px) {
        ont-size: 1.25rem;
        width: 70%;
    }

    @media (min-width: 1230px) {
        font-size: 1.5rem;
        line-height: 150%;
        width: 80%;
    }

    @media (min-width: 1500px) {
        width: 95%;
    }
`;

interface HomeTextProps {
    onFontsLoaded: () => void;
}

const HomeText: React.FC<HomeTextProps> = ( { onFontsLoaded }) => {

    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        const observer = new FontFaceObserver('Arial-MT-Bold');
        observer.check().then(() => {
            setFontLoaded(true);
            onFontsLoaded();
        })
    });

    return fontLoaded ? (
        <HomeContentDiv>
            <HomeHeading>Frontend<br /> Developer<br /> Designer<br /></HomeHeading>
            <HomeParagraph>I have experience doing everything from graphic design to web development. Take a look at my portfolio and contact me to discuss your next project.</HomeParagraph>
        </HomeContentDiv>
    ): null;
};


export default HomeText;