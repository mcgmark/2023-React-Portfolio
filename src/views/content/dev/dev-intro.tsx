import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

import backgroundImage from '../../assets/images/bg-image-light.svg';
import backgroundImageTop from '../../assets/images/topleftbg.svg';


const Section = styled.section`
    background: url(${backgroundImage});
    background-color: var(--purple-bright);
    background-attachment: fixed;
    background-position: center;
    background-repeat: repeat;
    background-size: auto;
    width: 100%;
    min-height: 750px;
    height: 100%;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 1000px){
        background: url(${backgroundImageTop}), url(${backgroundImage});
        background-color: var(--purple-bright);
        background-attachment: fixed;
        background-position: center center;
        background-repeat: no-repeat, repeat;
        background-size: 150%, auto;
    }

`;

const SectionInner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 2000px;
    width: 90%;
   
`;

const HeaderSpacer = styled.div`
    width: 100%;
    height: 100px;
`;

const Breadcrumb = styled.span`
    font-family: 'Rubik';
    font-size: 1.25rem;
    text-transform: uppercase;
    color: #e6e6e6;
`;

const IntroText = styled.p`
    font-family: 'Arial-MT-Bold';
    text-transform: capitalize;
    font-size: 3rem;
    font-weight: 100;
    width: fit-content;
    z-index: 1;
    color: #e6e6e6;
    line-height: 120%;
    text-shadow: 2px 2px 0px #000;
    min-height: 220px;

    @media (min-width: 1400px) {
        font-size: 3.5rem;
    }

    @media (min-width: 2000px) {
        font-size: 5rem;
    }
`;

const Text = styled.p`
    font-family: 'Roboto-thin';
    font-size: 1.45rem;
    line-height: 150%;
    color: #e6e6e6;

    @media (min-width: 1200px) {
        max-width: 1600px;
    }
`;


const Intro = () => {
    const [wordsArray, setWordsArray] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleWords, setVisibleWords] = useState<string[]>([]);

    let text = "javascript, html, bootstrap, api, react, express, sql, php, mongo, git, oh my!";
    
    useEffect(() => {
        setWordsArray(text.split(","));
    }, [text]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentIndex < wordsArray.length) {
                setVisibleWords((prevVisibleWords) => [
                    ...prevVisibleWords,
                    wordsArray[currentIndex]
                ])
                setCurrentIndex(prevIndex => prevIndex + 1);
            } else {
                clearInterval(intervalId);          
            }
        }, 500);

        return () => clearInterval(intervalId);
        
    }, [currentIndex, wordsArray]);
    

    return(
        <Section>
            <HeaderSpacer></HeaderSpacer>
            <SectionInner>
                <Breadcrumb>Web Development</Breadcrumb>
                <IntroText className="fade-in-words">
                    {visibleWords.map ((word, index) => (
                        <span key={index} className={`fade-in ${index === wordsArray.length - 1 ? 'last-element' : ''}`}>
                            {word}
                            {index < wordsArray.length - 1 ? ',' : ''}
                        </span>
                    ))}
                </IntroText>
                <Text>Websites today are applications that require a lot of pieces to make them work. I have spent the last three years building my knowledge and experience putting these peices together building web applications.</Text>
            </SectionInner>
            <HeaderSpacer></HeaderSpacer>
        </Section>
    );
}

export default Intro;