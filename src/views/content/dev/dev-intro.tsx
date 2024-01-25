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
    height: 100%;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 100vh;

    @media (min-width: 1000px){
        background: url(${backgroundImageTop}), url(${backgroundImage});
        background-color: var(--purple-bright);
        background-attachment: fixed;
        background-position: center center;
        background-repeat: no-repeat, repeat;
        background-size: 200%, auto;
        min-height: 850px;
    }

`;

const SectionInner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-width: 2000px;
    width: 90%;
`;

const HeaderSpacer = styled.div`
    width: 100%;
    height: 100px;
`;

const Breadcrumb = styled.span`
position: relative;
    font-family: 'Rubik';
    font-size: 1.25rem;
    text-transform: uppercase;
    color: #e6e6e6;
`;

const IntroText = styled.p`
    position: relative;
    font-family: 'Arial-MT-Bold';
    font-size: 3rem;
    font-weight: 100;
    width: fit-content;
    z-index: 1;
    color: #e6e6e6;
    line-height: 120%;
    text-shadow: 2px 2px 0px #000;
    transition: all 500ms ease;

    @media (min-width: 600px) {
        font-size: 3.75rem;
    }

    @media (min-width: 1800px) {
        font-size: 4.5rem;
    }
`;

const Text = styled.p`
    font-family: 'Roboto-Thin';
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 180%;
    letter-spacing: .03rem;
    color: #e6e6e6;
    margin-bottom: 60px;

    @media (min-width: 1200px) {
        max-width: 1600px;
        margin-bottom: 0px;
    }
`;


const Intro = () => {
    const [wordsArray, setWordsArray] = useState<string[]>([]);
    const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

    let text = "html, css, bootstrap, tailwind, javascript, jquery, react, express, nextjs, api, sql, php, mongo, git, oh my!";
    
    useEffect(() => {
        setWordsArray(text.split(","));
    }, [text]);

    useEffect(() => {
        const numberOfWords = wordsArray.length;
    
        const intervalId = setInterval(() => {
          setVisibleIndexes((prevIndexes) => {
            const updatedIndexes = [...prevIndexes];
            const currentWordIndex = updatedIndexes.length;
    
            if (currentWordIndex < numberOfWords) {
              updatedIndexes.push(currentWordIndex);
            } else {
              clearInterval(intervalId);
            }
    
            return updatedIndexes;
          });
        }, 400);
    
        return () => clearInterval(intervalId);
      }, [wordsArray]);
    

    return(
        <Section>
            <HeaderSpacer></HeaderSpacer>
            <SectionInner>
                <Breadcrumb>Web Development</Breadcrumb>
                <IntroText className="fade-in-words">
                    {wordsArray.map ((word, index) => (
                        <span key={index} className={`${visibleIndexes.includes(index) ? 'fade-in' : 'hidden'} ${index === wordsArray.length - 1 ? 'last-element' : ''}`}>
                            {word}{index < wordsArray.length - 1 ? ',' : ''}
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