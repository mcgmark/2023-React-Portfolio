import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

import spaceBackground from '../../assets/images/space-bg.png';

const FontFaceObserver = require('font-face-observer');


const HomeContentDiv = styled.div`
    box-sizing: border-box;
    max-width: 900px;
    display: grid;
    grid-template-rows: auto;
    row-gap: 50px;
`;

const HomeHeading = styled.h1`
    font-family: 'Arial-MT-Bold';
    font-size: 16vw;
    line-height: 110%;
    letter-spacing: -.15rem;
    z-index:800;

    @media (min-width: 1000px) {
        font-size: 12vw;
    }

    @media (min-width: 1500px) {
        font-size: 10rem;
    }

    @media (min-width: 1930px) {
        font-size: 12rem;
        line-height: 110%;
    }
`;

const HomeParagraph = styled.p`
    padding: 35px 35px;
    font-family: 'Roboto-thin';
    font-size: 1.2rem;
    letter-spacing: .05rem;
    border-radius: 0px 60px 0px 60px;
    background: url(${spaceBackground});
    background-position: left;
    border-left: 3px solid #43f103;
    border-right: 5px solid #b700ff;
    box-shadow: 5px 5px 50px #ffffff35;

    @media (min-width: 1000px) {
        line-height: 200%;
        font-size: 1.25rem;
        width: 70%;
    }

    @media (min-width: 1500px) {
        width: 80%;
        font-size: 1.15rem;
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
            <HomeHeading>frontend<br /> designer<br />developer<br /></HomeHeading>
            <HomeParagraph>Graphic design or web development I have experience doing a wide range of projects. Browse my portfolio for a better understanding of the work I do.</HomeParagraph>
        </HomeContentDiv>
    ): null;
};


export default HomeText;