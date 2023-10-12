import React, {useState, useEffect} from 'react';
import styled from 'styled-components';


type Item = {
    id: number; 
    title: string;
};

type CloudItemProps = {
    $isAnimated: boolean;
    style: React.CSSProperties;
}

const data: Item[] = 
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
    display: none;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    align-items: center;
    height: fit-content;
    row-gap: 25px;
    max-width: fit-content;
    @media (min-width: 1000px) {
        display: grid;
    }
`;

const CloudItem = styled.span<CloudItemProps>`
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 21px;
        border: 6px solid var(--purple-bright);
        width: 15vw;
        max-width: 300px;
        min-width: 100px;
        height: 55px;
        font-family: 'Acumin-Book';
        font-size: 1.15rem;
        color: #fff;
        letter-spacing: 0.15rem;
        text-transform: uppercase;
        animation: ${({$isAnimated}) => $isAnimated ? 'cloudpulse .5s ease-in-out' : 'none' };
        transition: all 2s;
        backdrop-filter: blur(10px);

        @keyframes cloudpulse {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.15);
                border: 6px solid rgb(255, 217, 0);
            }
            100% {
                transform: scale(1);
            }
        }
`;

const DesignCloud = () => {

    const [animatedChildIndex, setAnimatedChildIndex] = useState(0);

    useEffect(() => {
        // Function to randomly select a child component for animation
        const randomlyAnimateChild = () => {
          const randomIndex = Math.floor(Math.random() * 10); // Assuming you have 10 child components
          setAnimatedChildIndex(randomIndex);
        };
    
        const timer = setInterval(randomlyAnimateChild, 1250); // Adjust the timer interval as needed (e.g., every 3 seconds)
    
        return () => clearInterval(timer);
      }, []);

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