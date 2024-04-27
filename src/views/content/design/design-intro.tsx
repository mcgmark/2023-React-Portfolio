import React from 'react';
import styled from 'styled-components';


const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 30px;
    z-index: 1;
`;

const IntroText = styled.h1`
    position: relative;
    font-family: 'Roboto-thin';
    text-transform: uppercase;
    font-size: 3rem;
    letter-spacing: -.3rem;
    font-weight: 100;
    width: fit-content;
    z-index: 1;
    color: #e6e6e6;
    white-space: nowrap;

    &::before {
        content: "";
        position: absolute;
        bottom: 0px;
        left: 0;
        width: 100%;
        height: 20px;
        background-color: #440097;
        z-index: -1;
    }

    @media (min-width: 500px) {
        font-size: 13vw;

        &::before {
            bottom: 20px;
        }
    }

    @media (min-width: 1000px) {
        font-size: 7vw;

        &::before {
            bottom: 60px;
        }
    }

    @media (min-width: 1800px) {
        font-size: 5.5vw;
    }
`;

const Text = styled.p`
    font-family: 'Roboto-Thin';
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 180%;
    letter-spacing: .03rem;
    color: #e6e6e6;
    max-width: 1000px;
`;


const Intro = () => {
    return(
        <Section>
            <div>
                <IntroText>simple, but not</IntroText>
                <IntroText>too simple.</IntroText>
            </div>
            <Text>Creating engaging and informative marketing materials that blend typography and graphics is my specialty. Whether it's for web or print, I bring years of experience to design everything your business needs. </Text>
        </Section>
    );
}

export default Intro;