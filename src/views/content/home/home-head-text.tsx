import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import AnglesDown from '../../assets/images/angles-down.svg';

const FontFaceObserver = require('font-face-observer');

const spin = keyframes`
  0% {
    transform: translateY(-30px);
    opacity: 0;
  }
  50% {
    transform: translateY(20px);
    opacity: 1;
  }
  100% {
    transform: translateY(30px);
    opacity: 0;
  }
`;

const CircleArrowContainer = styled.img`
display: inline-block;
width: 20px;
height: auto;
animation: ${spin} 2s ease-in-out infinite;
`;

const ScrollDown = styled.div`
    display: flex;
    gap: 20px;
    margin-left: -2.7vw;
`;

const HomeContentDiv = styled.div`
    box-sizing: border-box;
    max-width: 900px;
    display: grid;
    grid-template-rows: auto;
    row-gap: 50px;
    margin-top: 20px;
`;

const HomeHeading = styled.h1`
    font-family: 'Arial-MT-Bold';
    font-size: 17vw;
    z-index:800;
    text-transform: capitalize;
    margin-left: -10px;
    line-height: 110%;

    @media (min-width: 1000px) {
        font-size: 12vw;
    }

    @media (min-width: 1500px) {
        font-size: 8rem;
    }

    @media (min-width: 1930px) {
        font-size: 10rem;
    }
`;

const HomeParagraph = styled.p`
    float: right;
    font-family: 'Roboto-thin';
    font-size: 1.45rem;
    line-height: 150%;
    letter-spacing: 0.05rem;
    max-width: 90%;
    border-left: 3px solid #5500a4;
    padding: 20px 20px;

    @media (min-width: 1500px) {
        font-size: 1.2rem;
    }

    @media (min-width: 1930px) {
        font-size: 1.4rem;
        max-width: 75%;
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
                <ScrollDown>
                    <CircleArrowContainer src={AnglesDown} alt="Scroll Down" />
                    <HomeParagraph>Graphic design or Web development I have experience doing a wide range of projects. Take a moment to browse my portfolio.</HomeParagraph>
            </ScrollDown>
        </HomeContentDiv>
    ): null;
};


export default HomeText;