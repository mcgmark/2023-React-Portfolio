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
    font-size: 1.25rem;
    text-transform: uppercase;
    color: #e6e6e6;
`;

const IntroText = styled.h1`
    position: relative;
    font-family: 'Acumin-thin';
    text-transform: uppercase;
    font-size: 2.6rem;
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
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 180%;
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
            <Text>Mark enjoys combining typography and graphics to create engaging and informative resources needed in marketing and advertising. Web or print Mark has experience designing everything your business needs. </Text>
        </Section>
    );
}

export default Intro;