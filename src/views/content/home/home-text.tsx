import React from 'react';
import styled from 'styled-components';


const HomeContentDiv = styled.div`
    max-width: 900px;
    display: grid;
    grid-template-rows: auto;
    row-gap: 30px;
`;

const HomeHeading = styled.h1`
    font-family: 'Arial-MT-Bold';
    font-size: 16vw;
    line-height: 110%;
    letter-spacing: .05rem;

    @media (min-width: 1000px) {
        font-size: 12vw;
        text-align: justify;
    }

    @media (min-width: 1500px) {
        font-size: 8vw;
        text-align: justify;
    }

    @media (min-width: 1930px) {
        font-size: 10rem;
        line-height: 115%;
    }
`;

const HomeParagraph = styled.p`
    font-family: 'OpenSans';
    font-size: 1.25rem;
    line-height: 200%;
    letter-spacing: .05rem;
    
    @media (min-width: 1000px) {
        width: 85%;
    }

    @media (min-width: 1230px) {
        font-size: 1.25rem;
        line-height: 250%;
        width: 90%;
    }

    @media (min-width: 1500px) {
        width: 95%;
    }
`;

// const HomeNameInput = styled.input`
//     font-family: 'Arial-MT-Bold';
//     font-size: 2rem;
//     color: #ffd200;
//     border: 0px;
//     border-bottom: 4px solid #ffd200;
//     padding-bottom: 20px;
//     max-width: 400px;
//     background-color: transparent;
//     margin-top: 30px;
//     outline: none;
//     transition: all 500ms forwards;

//     &:active {
//         outline: 4px solid #ffd200; 
//     }

//     &::placeholder {
//         color: #ffd200;
//     }

//     &::before {
//         content: f061;
//     }
// `;


const HomeText = () => {

    // const[nameInputValue, setNameInputValue] = useState('');

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setNameInputValue(event.target.value);
    // }

    return (
        <HomeContentDiv>
            <HomeHeading>Frontend<br /> Developer<br /> Designer<br /></HomeHeading>
            <HomeParagraph>Over the last few years I have been gaining knowledge and experience in many aspects of web development. From design to coding I am able to create websites from start to finish.</HomeParagraph>
            {/* <HomeNameInput 
                type="text"
                value={nameInputValue}
                onChange={handleChange}
                placeholder= 'TAP TO SIGN IN'
            ></HomeNameInput> */}
        </HomeContentDiv>
    );

};


export default HomeText;