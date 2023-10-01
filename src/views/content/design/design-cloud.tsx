import React from 'react';
import styled from 'styled-components';

export type Item = {
    id: number; 
    title: string;
};


type Props = {
    data: Item[];
}

const data = 
[
    {
    "id": 11,
    "title": "photoshop"
    },
    {
        "id": 22,
    "title": "illustrator"
    },
    {
        "id": 33,
    "title": "indesign"
    },
    {
        "id": 44,
    "title": "print"
    },
    {
        "id": 55,
    "title": "digital"
    },
    {
        "id": 66,
    "title": "websites"
    },
    {
        "id": 77,
    "title": "flyers"
    },
    {
        "id": 88,
    "title": "apps"
    },
    {
        "id": 99,
    "title": "ads"
    },
    {
        "id": 1010,
    "title": "ux"
    },

]

const Section = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;

    @media (min-width: 1300px) {
        flex-direction: column;
    }
`;

const CloudItem = styled.span`
        display: none;
        justify-content: center;
        align-items: center;
        border-radius: 21px;
        background-color: var(--purple-bright);
        width: 12vw;
        max-width: 250px;
        min-width: 180px;
        height: 45px;
        font-family: 'Rubik';
        font-weight: bold;
        font-size: 1.3rem;
        color: #ffffff;
        text-transform: uppercase;
        
        &:hover {
            animation: cloudpulse .3s 1;    

            @keyframes cloudpulse {
                0% {
                    transform: scale(1);
                }
                50% {
                    transform: scale(1.15);
                    background-color: #512089;
                }
                100% {
                    transform: scale(1);
                }
            }
        }

        @media (min-width: 800px) {
            display: flex;
        }
`;

const CloudItemRow = styled.div`
    display: flex;
    gap: 40px;

    &:nth-of-type(even) {
        margin-left: 40px;
    }
`;

const DesignCloud = () => {

    const pairs = [];

    for (let i = 0; i < data.length; i += 2) {
      const pair = data.slice(i, i + 2);
      pairs.push(pair);
    }

    return (
        <Section>
            {pairs.map((pair, outerIndex) => (
                <CloudItemRow className="row" key={outerIndex + "a"}>
                {pair.map((item, innerIndex) => (
                    <CloudItem key={outerIndex + "-" + innerIndex + "b"}>{item.title}</CloudItem>
                ))}
                </CloudItemRow>
            ))}
        </Section>
    );
};

export default DesignCloud;