import React from 'react';
import styled from 'styled-components';


const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 30px;
    z-index: 1;
`;

const Breadcrumb = styled.span`
    font-family: 'Rubik';
    font-size: 1.5rem;
    text-transform: uppercase;
    color: #e6e6e6;
`;

const IntroText = styled.h1`
    position: relative;
    font-family: 'Acumin-thin';
    text-transform: uppercase;
    font-size: 2.5rem;
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
        background-color: var(--purple-bright);
        z-index: -1;
    }

    @media (min-width: 500px) {
        font-size: 11vw;

        &::before {
            bottom: 20px;
        }
    }

    @media (min-width: 1000px) {
        font-size: 6vw;

        &::before {
            bottom: 20px;
        }
    }

    @media (min-width: 1800px) {
        font-size: 5vw;
    }
`;

const Text = styled.p`
    font-family: 'Roboto-Thin';
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: .03rem;
    color: #e6e6e6;
`;


const Intro = () => {
    return(
        <Section>
            <Breadcrumb>Graphic Design</Breadcrumb>
            <div>
                <IntroText>simple, but not</IntroText>
                <IntroText>too simple.</IntroText>
            </div>
            <Text>I enjoy combining typography and images to create engaging and informative marketing related design materials. Digital & Print I have experience designing everything from flyers, newspaper ads, t-shirts, websites, app UX, cnc engraved stone signage. </Text>
        </Section>
    );
}

export default Intro;