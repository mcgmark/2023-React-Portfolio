import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

type CloudItemProps = {
    $isAnimated: boolean;
    style: React.CSSProperties;
}


type Item = {
    id: number; 
    title: string;
};


const data: Item[] = 
[
    {
    "id": 11,
    "title": "photoshop"
    },
    {
        "id": 22,
    "title": "websites"
    },
    {
        "id": 33,
    "title": "print"
    },
    {
        "id": 44,
    "title": "indesign"
    },
    {
        "id": 55,
    "title": "illustrator"
    },
    {
        "id": 66,
    "title": "digital"
    },
    {
        "id": 77,
    "title": "flyers"
    },
    {
        "id": 88,
    "title": "signs"
    },
    {
        "id": 99,
    "title": "interfaces"
    },
    {
        "id": 1010,
    "title": "marketing"
    },

]

const Section = styled.section`
    display: none;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    height: fit-content;
    row-gap: 25px;
    max-width: fit-content;
    display: none;

    @media (min-width: 1000px) {
        display: grid;
    }
`;

const CloudItem = styled.span<CloudItemProps>`
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 21px;
        width: 12vw;
        height: 5vh;
        font-family: 'Roboto-Regular';
        font-size: 1%.25;
        color: #fff;
        letter-spacing: 0.15rem;
        text-transform: uppercase;
        animation: ${({$isAnimated}) => $isAnimated ? 'cloudpulse 1s ease-in-out' : 'none' };
        transition: all 2s ease;
        background-color: rgba(58, 8, 108, 0.9);
        border: 0px solid #3c1c76;


        @keyframes cloudpulse {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.5);
                
                z-index: 500;
            }
            100% {
                transform: scale(1);
            }
        }
`;

const DesignCloud = () => {

    const [animatedChildIndex, setAnimatedChildIndex] = useState(0);
    const [animatedChildIndexPrev, setAnimatedChildIndexPrev] = useState(0);

    useEffect(() => {  
        const randomlyAnimateChild = () => {
          let randomIndex; 

          do {randomIndex = Math.floor(Math.random() * 10);} 
          while (randomIndex === animatedChildIndexPrev);

          setAnimatedChildIndex(randomIndex);
          setAnimatedChildIndexPrev(randomIndex)
        };
    
        const timer = setInterval(randomlyAnimateChild, 1500); 
    
        return () => clearInterval(timer);
      });

    return (
        <Section>
            {data.map((item, index) => (
                    <CloudItem 
                        key={index} 
                        $isAnimated={index === animatedChildIndex} 
                        style={(index % 4 === 0 || index % 4 === 1) ? { marginLeft: '40px' } : {}}
                    >{item.title}
                    </CloudItem>
            ))}
        </Section>
    );
};

export default DesignCloud;