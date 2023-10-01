import React from 'react';
import styled from 'styled-components';


const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 40px;
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
    font-size: 11vw;
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

    @media (min-width: 1300px) {
        font-size: 6rem;

        &::before {
            bottom: 20px;
        }
    }

    @media (min-width: 1800px) {
        font-size: 7rem;
    }
`;

const Text = styled.p`
    font-family: 'OpenSans';
    font-size: 1.15rem;
    font-weight: 400;
    line-height: 240%;
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
            <Text>I enjoy combining typography and graphics to create eye catching and informative marketing related design. Digital or print I have experience designing everything from mailout flyers, mass e-mails, product sell sheets, websites, app UX, and sub-division cnc engraved stone signs</Text>
        </Section>
    );
}

export default Intro;