import React from 'react';
import styled from 'styled-components';
import { useEffect, useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import backgroundImage from '../../assets/images/space-bg2.jpg';

const Section = styled.section`
    width: 90%;
    max-width: 2000px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SectionInner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
`;

const HeaderSpacer = styled.div`
    width: 100%;
    height: 150px;
`;


// const IntroText = styled.p`
//     position: relative;
//     font-family: 'Rubik';
//     font-size: 6vw;
//     font-weight: 100;
//     letter-spacing: -0rem;
//     width: fit-content;
//     z-index: 1;
//     color: #e6e6e6;
//     line-height: 110%;
//     transition: all 500ms ease;
//     margin-bottom: 15px;
//     text-transform: uppercase;

//     @media (min-width: 800px) {
//         font-size: 2vw;
//     }
// `;

const TextContainer = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    min-height: 650px;
    align-items: center;
    justify-items: center;
    border-radius: 25px;
    background: url(${backgroundImage});
    background-color: var(--background-purple);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: 0px 0px 100px #ffffff1b, 0px 0px 50px #000000c1;
    border: 1px solid #ffeeff12;
    border-top: 2px solid #ffffff23;
    border-bottom: 2px solid #ffffff23;
    padding-bottom: 20px;

    @media (min-width: 800px) {
        min-height: 400px;
     }
`;

const Text = styled.p`
transition: all 500ms;
    position: absolute;
    font-family: 'Roboto-Thin';
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: .0rem;
    color: #e6e6e6;
    margin: 10px;
    text-align: center;
    max-width: 100%;

    @media (min-width: 800px) {
        max-width: 70%;
    }
`;

const TabNav = styled.div`
    display: flex;
    gap: 10px;
    align-self: end;
`;

const TabNavButton = styled.div`
    width: 18px;
    height: 11px;
    border-radius: 100px;
    border: 1px solid #fff;
    cursor: pointer;
`;

const paragraphs = [
    "Websites today are complex applications that require many components to function. Over the past three years, I have been acquiring knowledge and experience in assembling these components to build web applications.",
    "As a result of COVID-19's impact on the economy and my passion for developing websites and web applications, I decided to enroll in the Interactive Media Design course at Georgian College. I successfully completed the program, graduating with honors on the Dean's List.",
    "Georgian's program was intensive, covering a wide range of topics related to web development, including frontend and backend technologies such as HTML, Javascript, SQL, Node, PHP, as well as GIT and project management. This allowed me to build a solid understanding of the fundamentals of web development.",
    "I have fundamental experience bulding modern web applications. Below is a list of some of my recent work, please take a moment to have a look."
  ];


const Intro = () => {
    // const [wordsArray, setWordsArray] = useState<string[]>([]);
    // const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

    // let text = "html, css, javascript, php, sql, jquery, react, angular, express, nextjs, bootstrap, tailwind, api, postgres, wordpress, mongo, git, oh my!";
    
    // useEffect(() => {
    //     setWordsArray(text.split(","));
    // }, [text]);

    // useEffect(() => {
    //     const numberOfWords = wordsArray.length;
    
    //     const intervalId = setInterval(() => {
    //       setVisibleIndexes((prevIndexes) => {
    //         const updatedIndexes = [...prevIndexes];
    //         const currentWordIndex = updatedIndexes.length;
    
    //         if (currentWordIndex < numberOfWords) {
    //           updatedIndexes.push(currentWordIndex);
    //         } else {
    //           clearInterval(intervalId);
    //         }
    
    //         return updatedIndexes;
    //       });
    //     }, 400);
    
    //     return () => clearInterval(intervalId);
    //   }, [wordsArray]);

    const handleTabClick = (tabNumber: number): void => {
        setCurrentParagraph(tabNumber);
    };

    const [currentParagraph, setCurrentParagraph] = useState(0);

    // Automatically switch to the next paragraph every 3 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentParagraph((prev) => (prev + 1) % paragraphs.length);
      }, 9500); // Change paragraph every 3 seconds
      return () => clearInterval(interval);
    }, []);
    

    return(
        <Section>
            <HeaderSpacer></HeaderSpacer>
            <SectionInner>
                {/* <IntroText className="fade-in-words">
                    {wordsArray.map ((word, index) => (
                        <span key={index} className={`${visibleIndexes.includes(index) ? 'fade-in' : 'hidden'} ${index === wordsArray.length - 1 ? 'last-element' : ''}`}>
                            {word}{index < wordsArray.length - 1 ? ',' : ''}
                        </span>
                    ))}
                </IntroText> */}
                <TextContainer>
                    {paragraphs.map((text, index) => (
                        <Text key={index} className={`slide ${index === currentParagraph ? 'active' : ''}`}>
                            {text}
                        </Text>
                    ))}
                    <TabNav>
                        {paragraphs.map((text, index) => (
                            <>
                            <TabNavButton onMouseOver={() => setCurrentParagraph(index)} className={`${currentParagraph === index ? 'tab-nav-button-active' : ''}`} />
                            </>
                        ))}
                    </TabNav>
                </TextContainer>

            </SectionInner>
        </Section>
    );
}

export default Intro;