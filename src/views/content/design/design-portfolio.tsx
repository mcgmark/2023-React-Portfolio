import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

import { Item } from '../../assets/types/types';

import backgroundImage from '../../assets/images/bg.svg';

import Lightbox from '../../components/lightbox/lightbox';

type Props = {
    data: Item[];
}

type PortfolioFilterButtonProps = {
    $selected: boolean;
    onClick: () => void;
}

const PortfolioContainer = styled.section`
    background: url(${backgroundImage}), var(--purple-bright);
    background-size: cover;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PortfolioInner = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    padding: 120px 20px;
    gap: 30px;
`;

const PortfolioHeadingContainer = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 30px;
    margin-bottom: 40px;
`;

const PortfolioHeading = styled.h2`
    font-family: 'Acumin-Thin';
    text-transform: uppercase;
    font-size: 5rem;
    color: #e6e6e6;
    text-align: center;
`;

const PortfolioIntro = styled.p`
    font-family: 'Roboto-thin';
    font-size: 1.625rem;
    color: #e6e6e6;
    text-align: center;
`;

const FilterButtonsContainer = styled.section`
    box-sizing: border-box;
    border-radius: 32px;
    padding: 15px 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    width: fit-content;
    gap: 30px;
    background-color: #4e2579;
    align-self: center;
    border: 1px solid #ffffff1a;

    @media (min-width: 815px) {
        flex-direction: row;
    }
`;

const PortfolioFilterButton = styled.button<PortfolioFilterButtonProps>`
        border-radius: 21px;
        background-color: rgb(42, 42, 43);
        border: ${({ $selected }) => $selected ? '3px solid rgb(255, 217, 0)' : '3px solid rgb(51, 51, 53)'};
        width: 245px;
        height: 51px;
        font-family: 'Rubik';
        font-weight: bold;
        font-size: 1.3rem;
        color: ${({ $selected }) => $selected ? 'rgb(255, 217, 0)' : '#ffffff' };
        box-shadow: inset 0px 0px 1px rgb(0,0,0, 0.1);
        text-transform: uppercase;
        cursor: pointer;
        transition: all .3s ease;
        animation: ${({ $selected }) => ($selected ? 'pulse 0.3s 1' : 'none')};   
        
        &:hover {
            background-color: ${({ $selected }) => $selected ? 'rgb(42, 42, 43)' : 'rgb(59, 59, 60)'};
        }

            @keyframes pulse {
                0% {
                    transform: scale(1);
                }
                50% {
                    transform: scale(1.05);
                }
                100% {
                    transform: scale(1);
                }
            }
`;

const PortfolioItemsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  @media (min-width: 800px){
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-auto-flow: row; 
    grid-gap: 10px; 
  }

  @media (min-width: 1200px){
    grid-template-columns: repeat(auto-fill, minmax(550px, 1fr));
  }
`;

const PortfolioItem = styled.div`
    position: relative;
    box-sizing: border-box;
    width: 80%;
    overflow: hidden;
    opacity: 0;
    padding-bottom: calc(60%); 
    margin-bottom: 10px;
    background-color: #f0f0f0;
    background-size: 160%;
    background-position: center;
    background-repeat: no-repeat;
    border: 2px solid rgb(255, 255, 255);
    transition: all 300ms ease-in-out;
    cursor: pointer;
    animation: PortfolioItemScale 0.3s 1 forwards ease-in-out;

    @keyframes PortfolioItemScale {
        0% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(10px);
        }
        100% {
            transform: translateY(10px);
            opacity: 100;
        }
    }

    &:hover {
        background-size: 165%; 
        border: 2px solid rgb(255, 217, 0);
    }

    @media (min-width: 580px) {
        background-size: 130%;
        width: 100%;

        &:hover {
        background-size: 135%; 
    }
    }
`;

const PortfolioItemText = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    box-sizing: border-box;
    bottom: -100%;
    padding: 20px;
    background: rgba(27, 8, 37, 0.9);
    height: 100%;
    width: 100%;
    max-height: 100%;
    max-width: 100%;
    transition: all 0.2s linear;

    ${PortfolioItem}:hover & {
        bottom: 0px;
    }  

    /* &::before {
        content: '';
        position: absolute;
        top: -40px;
        left: 3%;
        border-width: 20px;
        border-style: solid;
        border-color: transparent transparent rgb(255, 217, 0) transparent;
        
    } */

    @media (max-width: 600px) {
        display: none;
    }
`;

const PortfolioItemDescription = styled.p`
    font-family: 'Acumin-thin';
    font-size: 1.3rem;
    text-align: center;
    margin: 0rem 2px;
    text-transform: capitalize;
`;

const PortfolioItemType = styled.p`
    font-family: 'Roboto-Regular';
    font-size: .8rem;
    text-align: center;
    margin: 0rem 2px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #ffffff;
    border-radius: 30px;
    background-color: rgb(57, 57, 57);
    padding: 5px 45px;
`;

const PortfolioItemButton = styled.p`
    box-sizing: border-box;
    font-family: 'Arial-MT-Bold';
    font-size: 1.5;
    text-align: center;
    margin: 0rem 2px;
    text-transform: uppercase;
    background-color: rgb(255, 217, 0);
    color: #333;
    padding: .5rem 3rem;
    border-radius: 50px;
`;

const PortfolioItemLoadIcon = styled(FontAwesomeIcon)`
    position: relative;
    /* animation: pulse .3s infinite; */
    left: 4px;
    transition: all .3s ease;

    ${PortfolioItemButton}:hover & {
        left: 10px;
    }  
`;

const DesignPortfolio: React.FC<Props> = ({ data }) => {

    const [selectedCategory, setSelectedCategory] = useState('all');
    const [filteredData, setFilteredData] = useState<Item[]>([]);
    const [renderedData, setRenderedData] = useState<Item[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isInViewport, setIsInViewport] = useState(false);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxImageUrl, setLightboxImageUrl] = useState('');
    const [imageTitle, setImageTitle] = useState('');

    const portfolioRef = useRef(null);

    useEffect(() => {
        setFilteredData(data);
    }, [data]);

    const handleButtonClick = (category: string) => {
        setSelectedCategory(category);
        if (category === 'all') {
            setFilteredData(data);
        } else {
            const filteredItems = data.filter((item) => item.category === category);
            setFilteredData(filteredItems);
        };
        setRenderedData([]);
    };

    useEffect(() => {
        setRenderedData([]);
        setCurrentIndex(0);
    }, [filteredData]);

    useEffect(() => {
        if (isInViewport && currentIndex < filteredData.length) {
            const item = filteredData[currentIndex];
            const timer = setTimeout(() => {
                setRenderedData((prevData) => [...prevData, item]);
                setCurrentIndex((prevIndex) => prevIndex +1);
            }, 250);
            return () => clearTimeout(timer);
        }
    }, [currentIndex, filteredData, isInViewport]);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1
        };

        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            setIsInViewport(entry.isIntersecting);
        }, options);

        const currentPortfolioRef = portfolioRef.current;

        if (currentPortfolioRef) {
            observer.observe(currentPortfolioRef);
        };

        return () => {
            if (currentPortfolioRef) {
                observer.unobserve(currentPortfolioRef);
            }
        };
    }, [portfolioRef]);

    const openLightbox = (imageTitle: string, imageUrl: string) => {
        setLightboxImageUrl(`/assets/images/${imageUrl}`);
        setImageTitle(imageTitle);
        setLightboxOpen(true);    
    }

    const closeLightbox = () => {
        setLightboxImageUrl('');
        setLightboxOpen(false);
      };

    return(
        <PortfolioContainer>
            <PortfolioInner>
                <PortfolioHeadingContainer>
                    <PortfolioHeading>Digital <span style={{position: 'relative', color:'rgb(255, 217, 0)', fontSize: '90%', bottom: '8px'}}>+</span> Print</PortfolioHeading>
                    <PortfolioIntro>I have experience doing design work that is displayed on screens and printed on different types of materials.</PortfolioIntro>
                    <FilterButtonsContainer>
                            <PortfolioFilterButton 
                                $selected={selectedCategory === 'digital'}
                                onClick={() => handleButtonClick('digital')}
                            >digital</PortfolioFilterButton>
                            <PortfolioFilterButton 
                                $selected={selectedCategory === 'print'}
                                onClick={() => handleButtonClick('print')}
                            >print</PortfolioFilterButton>
                            <PortfolioFilterButton 
                                $selected={selectedCategory === 'all'}
                                onClick={() => handleButtonClick('all')}
                            >all</PortfolioFilterButton>
                    </FilterButtonsContainer>
               </PortfolioHeadingContainer>
               <PortfolioItemsContainer ref={portfolioRef}>
                    {renderedData.map((item: Item) => (
                        <PortfolioItem
                        key={item.id}
                        style={{ backgroundImage: `url(/assets/images/${item.thumbnail})`}}
                        onClick={() => openLightbox(item.title, item.full)}
                        >
                            <PortfolioItemText>
                                <PortfolioItemType>{item.type}</PortfolioItemType> 
                                <PortfolioItemDescription>{item.description}</PortfolioItemDescription>   
                                <PortfolioItemButton>
                                    view
                                    <PortfolioItemLoadIcon icon={faCaretRight} size="1x" style={{ color: '#333'}}/>
                                </PortfolioItemButton>
                            </PortfolioItemText>
                        </PortfolioItem>
                    ))}
                </PortfolioItemsContainer>
            </PortfolioInner>
            {lightboxOpen && (
                <Lightbox imageTitle={imageTitle} imageUrl={lightboxImageUrl} onClose={closeLightbox}></Lightbox>
            )}
        </PortfolioContainer>
    );
}

export default DesignPortfolio;