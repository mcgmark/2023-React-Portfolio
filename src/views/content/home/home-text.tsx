import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

const FontFaceObserver = require('font-face-observer');


const HomeContentDiv = styled.div`
    box-sizing: border-box;
    max-width: 900px;
    display: grid;
    grid-template-rows: auto;
    row-gap: 30px;
`;

const HomeHeading = styled.h1`
    font-family: 'Arial-MT-Bold';
    font-size: 16vw;
    line-height: 110%;
    letter-spacing: -.15rem;

    @media (min-width: 1000px) {
        font-size: 12vw;
    }

    @media (min-width: 1500px) {
        font-size: 10.5rem;
    }

    @media (min-width: 1930px) {
        font-size: 12rem;
        line-height: 110%;
    }
`;

const HomeParagraph = styled.p`
    font-family: 'Roboto-Thin';
    font-size: 1.2rem;
    letter-spacing: .05rem;

    @media (min-width: 1000px) {
        line-height: 200%;
        font-size: 1.5rem;
        width: 80%;
    }

    @media (min-width: 1500px) {
        width: 80%;
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
            <HomeHeading>Frontend<br /> Designer<br />Developer.<br /></HomeHeading>
            <HomeParagraph>Graphic design and web development Mark has experience doing a wide range of projects.</HomeParagraph>
        </HomeContentDiv>
    ): null;
};


export default HomeText;