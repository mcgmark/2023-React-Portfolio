import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
 
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
    width: 100%;
`;

const HeaderSpacer = styled.div`
    width: 100%;
    height: 120px;
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
    min-height: 450px;
    align-items: center;
    justify-items: center;
    align-content: space-between;
    border-radius: 50px;
    background: linear-gradient(200deg, #2e0b565e 0%, #300a5c 24%, #18033073 99%);
    background-position: center;
    background-size: cover;
    padding-bottom: 20px;
    transform: all 500ms ease-in-out;
    padding: 40px;

    @media (min-width: 800px) {
        border-radius: 30px;
        min-height: 350px;
     }
    
`;

const Text = styled.p`
transition: all 500ms;
    position: absolute;
    font-family: 'Roboto-Thin';
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: .03rem;
    color: #e6e6e6;
    text-align: center;
    max-width: 1400px;
    width: 80%;

    @media (min-width: 800px) {
        font-size: 1.75rem;
     }
`;

const TabNav = styled.div`
    display: flex;
    gap: 5px;
`;

const TabNavButton = styled.div`
    width: 1.25vw;
    height: 7px;
    border: 2px solid #fff;
    cursor: pointer;

    &:first-of-type {
        border-radius: 100px 0px 0px 100px;
    }

    &:last-of-type {
        border-radius: 0px 100px 100px 0px;
    }
`;

const IntroContainer = styled.p`
    font-size: 1rem;
    font-family: 'Rubik';
`;


const paragraphs = [
    `Websites today are complex applications that require many components to function. Over the past three years I have been acquiring knowledge and experience assembling these components to build web applications.`,
    `As a result of COVID-19's impact on the economy and my passion for developing web applications, I decided to enroll in the Interactive Media Design course at Georgian College. I successfully completed the program, graduating with honors on the Dean's List.`,
    `Covering a wide range of topics including frontend and backend technologies such as HTML, CSS, Javascript, SQL, Node, PHP, libraries, framewworks as well as GIT and project management.`,
    `I've built a solid understanding of the fundamentals of web development. Below is some of my recent work, please take a moment to browse my projects.`
  ];

  interface introProps {
    rotateY: number;
    rotateX: number;
  }

  

const Intro: React.FC<introProps> = ({rotateY, rotateX}) => {
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

    const [currentParagraph, setCurrentParagraph] = useState<number>(0);
    const [sliderPaused, setSliderPaused] = useState<boolean>(false);

    const handleMouseLeave = () => {
        setSliderPaused(false)
    };

    const handleMouseEnter = () => {
        setSliderPaused(true)
    };
   

    // Automatically switch to the next paragraph every 3 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        if (!sliderPaused){
            setCurrentParagraph((prev) => (prev + 1) % paragraphs.length);
        };
      }, 9500); // Change paragraph every 3 seconds
    
      return () => clearInterval(interval);
    });
    

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
                <TextContainer style={{ transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}>
                    <IntroContainer>FRONTEND WEB DEVELOPER</IntroContainer>
                    {paragraphs.map((text, index) => (
                        <Text key={index} className={`slide ${index === currentParagraph ? 'active' : ''}`}>
                            {text}
                        </Text>
                    ))}
                    <TabNav>
                        {paragraphs.map((text, index) => (
                            <>
                            <TabNavButton onMouseLeave={() => handleMouseLeave()} onMouseOver={() => {handleMouseEnter(); setCurrentParagraph(index)}} className={`${currentParagraph === index ? 'tab-nav-button-active' : ''}`} />
                            </>
                        ))}
                    </TabNav>
                </TextContainer>
            </SectionInner>
        </Section>
    );
}

export default Intro;