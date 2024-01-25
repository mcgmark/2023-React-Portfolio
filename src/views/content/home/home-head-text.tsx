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
    font-size: 17vw;
    line-height: 120%;
    z-index:800;
    /* text-shadow: -2px -2px 0px #88ff00, 2px 2px 0px #B700FF; */
    text-transform: capitalize;

    @media (min-width: 1000px) {
        font-size: 12vw;
    }

    @media (min-width: 1500px) {
        font-size: 9rem;
    }

    @media (min-width: 1930px) {
        font-size: 10rem;
    }
`;

const HomeParagraph = styled.p`
    padding: 35px 35px;
    font-family: 'Roboto-thin';
    font-size: 1rem;
    letter-spacing: .05rem;
    border-radius: 0px 60px 0px 60px;
    background: url(${spaceBackground});
    background-size: cover;
    background-position: left;
    border-left: 3px solid #43f103;
    border-right: 5px solid #43f103;
    box-shadow: 15px 5px 15px #00000040, 5px 5px 100px #57069fbf;
    

    @media (min-width: 1000px) {
        line-height: 160%;
        font-size: 1.1rem;
        width: 70%;
    }

    @media (min-width: 1500px) {
        line-height: 150%;
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
            <HomeHeading>frontend<br /> designer<br />developer<br /></HomeHeading>
            <HomeParagraph>Graphic design or web development I have experience doing a wide range of projects. Browse my portfolio for a better understanding of the work I do.</HomeParagraph>
        </HomeContentDiv>
    ): null;
};


export default HomeText;