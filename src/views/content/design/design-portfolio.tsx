import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import Lightbox from '../../components/lightbox/lightbox';

import { DesignItem } from '../../assets/types/types';



type Props = {
    data: DesignItem[];
}

type PortfolioFilterButtonProps = {
    $selected: boolean;
    onClick: () => void;
}


const PortfolioContainer = styled.section`
    width: 90%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(107, 2, 236, 0.274);
    border-radius: 15vw 15vw 20px 20px;
    padding: 50px;
    transition: all 500ms ease;
`;

const PortfolioInner = styled.section`
    display: flex;
    flex-direction: column;
    width: 97%;
    margin-bottom: 50px;
`;

const PortfolioHeadingContainer = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 40px;
    margin-top: 30px;
    margin-bottom: 40px;
`;

const PortfolioHeading = styled.h2`
    font-family: 'Acumin-Thin';
    text-transform: uppercase;
    font-size: 16vw;
    color: #e6e6e6;
    text-align: center;

    @media (min-width: 815px) {
        font-size: 4vw;
    }
`;

const PortfolioIntro = styled.p`
    font-family: 'Roboto-thin';
    font-size: 1.625rem;
    color: #e6e6e6;
    text-align: center;
`;

const FilterButtonsContainer = styled.section`
    box-sizing: border-box;
    border-radius: 30px;
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    width: 100%;
    gap: 20px;
    align-self: center;

    @media (min-width: 815px) {
        background-color: rgba(36, 36, 36, 0.1);
        flex-direction: row;
        max-width: 1000px;
        border-radius: 80px;
        border: 1px solid #ffffff16;
    }
`;

const PortfolioFilterButton = styled.button<PortfolioFilterButtonProps>`
        border-radius: 45px;
        background-color: rgb(41, 36, 36);
        border: ${({ $selected }) => $selected ? '3px solid rgb(255, 217, 0)' : '3px solid rgb(51, 51, 53)'};
        width: 100%;
        height: 55px;
        font-family: 'Roboto-Regular';
        font-size: 1.3rem;
        letter-spacing: 0.06rem;
        color: ${({ $selected }) => $selected ? 'rgb(255, 217, 0)' : '#ffffff' };
        box-shadow: inset 0px 0px 1px rgb(0,0,0, 0.1);
        text-transform: uppercase;
        cursor: pointer;
        transition: all .3s ease;
        animation: ${({ $selected }) => $selected ? 'pulse 0.3s 1' : 'none'}; 
        box-shadow: ${({ $selected }) => $selected ? '0px 0px 10px rgb(255, 217, 0)' : ''};
        
        @media (min-width: 1000px) {
            flex-direction: row;
            max-width: 300px;
        }

        
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
  max-width: 2800px;

  @media (min-width: 800px){
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-auto-flow: row; 
    grid-gap: 15px; 
  }

  @media (min-width: 1800px){
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  }
`;

const PortfolioItem = styled.div`
    position: relative;
    box-sizing: border-box;
    width: 100%;
    overflow: hidden;
    opacity: 0;
    aspect-ratio: 16/9;
    /* padding-bottom: calc(55%);  */
    background-size: 160%;
    background-position: center;
    background-repeat: no-repeat;
    border: 2px solid #424242;
    transition: all 300ms ease-in-out;
    cursor: pointer;
    animation: PortfolioItemScale 0.1s 1 forwards ease-in-out;
    box-shadow: 10px 10px 50px #15012553;

    @media (min-width: 580px) {
        background-size: 113%;
        width: 100%;

        &:hover {
            background-size: 135%; 
        }
    }

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
`;

const PortfolioItemText = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    box-sizing: border-box;
    bottom: -35%;
    padding: 15px 5px;
    height: 60%;
    width: 100%;
    max-height: 100%;
    max-width: 100%;
    transition: all 0.15s linear;


    ${PortfolioItem}:hover & {
        bottom: 0px;
        height: 100%;
        backdrop-filter: blur(10px);
        background: rgba(255, 255, 255, 0.7);
    }  
`;

const PortfolioItemDescription = styled.p`
    font-family: 'Roboto-Regular';
    font-size: 1.05rem;
    text-align: center;
    margin: 0rem 2px;
    text-transform: capitalize;
    opacity: 0;
    color: #000;

    ${PortfolioItem}:hover & {
        opacity: 1
    }  
`;

const PortfolioItemType = styled.p`
    font-family: 'Roboto-Regular';
    font-size: 0.9rem;
    text-align: center;
    margin: 0rem 2px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #ffffff;
    border-radius: 30px;
    background-color: var(--purple-bright);
    padding: 5px 45px;
`;

const PortfolioItemButton = styled.p`
    box-sizing: border-box;
    font-family: 'Arial-MT-Bold';
    font-size: .75rem;
    text-align: center;
    margin: 0rem 2px;
    text-transform: uppercase;
    background-color: rgb(255, 217, 0);
    color: #333;
    padding: .5rem 2rem;
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


const LoadingIcon = styled(FontAwesomeIcon)`
    font-size: 2vw;
    animation: loadingRotate 2s infinite;
    color: #fff;
    overflow: hidden;
    @keyframes loadingRotate {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(1turn);
        }
    }
`;

const LoadingIconContainer = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: center;
`;

const DesignPortfolio: React.FC<Props> = ({ data }) => {

    const [selectedCategory, setSelectedCategory] = useState('all');
    const [filteredData, setFilteredData] = useState<DesignItem[]>([]);
    const [renderedData, setRenderedData] = useState<DesignItem[]>([]);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxImageUrl, setLightboxImageUrl] = useState('');
    const [imageTitle, setImageTitle] = useState('');
    const [currentLightboxIndex, setCurrentLightboxIndex] = useState(0);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [nextPage, setNextPage] = useState<number>(0);
    const [pageSize, setPageSize] = useState<number>(8);
    const [portfolioScroll, setPortfolioScroll] = useState<boolean>(false);

    const loadingRef = useRef<SVGSVGElement | null>(null);

    const portfolioRef = useRef(null);

    useEffect(() => {
        const observerB = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                // Element is now visible in the viewport
                setPortfolioScroll(true);
                console.log(portfolioScroll);
                // You can setScroll or trigger any action here
              } else {
                setPortfolioScroll(false);
              }
            });
          },
          { threshold: 0.25 } // Intersection threshold (0.5 means 50% of the element is visible)
        );
    
        if (portfolioRef.current) {
          observerB.observe(portfolioRef.current);
        };
      }, [portfolioScroll]);

    const totalItems = data.length;
    const totalDigitalItems = data.filter(item => item.category === "digital").length;
    const totalPrintItems = data.filter(item => item.category === "print").length;

    // Sort data for initial page load
    useEffect(() => {
        const sortedData = [...data];
        sortedData.sort((a,b) => {
            if (a.category === 'digital' && b.category === 'print') {
                return -1;
            } else if (a.category === 'print' && b.category === 'digital'){
                return 1;
            } else {
                return 0;
            }
        });
        setFilteredData(sortedData);
    }, [data]);

    // reset 
    useEffect(() => {
        setRenderedData([]);
    }, [filteredData]);

    // handle category filter button click if all show all and sort them
    const filterButtonClick = (category: string) => {
        setHasMore(true);
        setNextPage(0);
        setSelectedCategory(category);
        if (category === 'all') {
            const sortedData = [...data];
            sortedData.sort((a,b) => {
                if (a.category === 'digital' && b.category === 'print') {
                    return -1;
                } else if (a.category === 'print' && b.category === 'digital'){
                    return 1;
                } else {
                    return 0;
                }
            });
            setFilteredData(sortedData);
        } else {
            const filteredItems = data.filter((item) => item.category === category);
            setFilteredData(filteredItems);
        };
        setRenderedData([]);
    };

    // Function to load data using pagination
    const loadMoreItems = () => {
        if (!hasMore) {
            return;
        }
        const startIndex = (nextPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const newItems = filteredData.slice(startIndex, endIndex);
        setRenderedData([...renderedData, ...newItems]);
        setNextPage(nextPage + 1); 

        if (endIndex >= filteredData.length){
            setHasMore(false);
        };
    };

    // Intersection Observer
    const handleObserver = (entities: IntersectionObserverEntry[]) => {
        const target = entities[0];
        if (target.isIntersecting) {
          setTimeout(loadMoreItems, 5);
        }
    };
    
    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, {
          root: null,
          rootMargin: '0px',
          threshold: 1.0,
        });
    
        if (hasMore && loadingRef.current) {
          observer.observe(loadingRef.current);
        }
    
        return () => observer.disconnect();
    });
    
    
    // // display the items of filtered data individually by adding to renderedData
    // useEffect(() => {
    //     if (currentIndex < filteredData.length) {
    //         const item = filteredData[currentIndex];
    //         const timer = setTimeout(() => {
    //             setRenderedData((prevData) => [...prevData, item]);
    //             setCurrentIndex((prevIndex) => prevIndex +1);
    //         }, 25);
    //         return () => clearTimeout(timer);
    //     };
    // }, [currentIndex, filteredData]);




    const openLightbox = (index: number) => {
        const imageUrl = renderedData[index].full;
        const imageTitle = renderedData[index].title;
        setLightboxImageUrl(`/assets/images/${imageUrl}`);
        setImageTitle(imageTitle);
        setCurrentLightboxIndex(index);
        setLightboxOpen(true);    
    }

    const handleNext = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();

        const nextIndex = (currentLightboxIndex + 1) % renderedData.length;
        setCurrentLightboxIndex(nextIndex);        

        const imageUrl = renderedData[nextIndex].full;
        const imageTitle = renderedData[nextIndex].title;

        setLightboxImageUrl(`/assets/images/${imageUrl}`);
        setImageTitle(imageTitle);
    };
      
      const handlePrevious = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();

        const previousIndex = (currentLightboxIndex - 1 + renderedData.length) % renderedData.length;
        setCurrentLightboxIndex(previousIndex);

        
        const imageUrl = renderedData[previousIndex].full;
        const imageTitle = renderedData[previousIndex].title;

        setLightboxImageUrl(`/assets/images/${imageUrl}`);
        setImageTitle(imageTitle);
    };

    const closeLightbox = () => {
        setLightboxImageUrl('');
        setLightboxOpen(false);
    };

    return(
        <PortfolioContainer ref={portfolioRef} style={portfolioScroll ? { borderRadius: 0 } : {}}>
            <PortfolioInner>
                <PortfolioHeadingContainer>
                    <PortfolioHeading>Digital <span style={{position: 'relative', color:'rgb(255, 217, 0)', fontSize: '90%', bottom: '8px'}}>+</span> Print</PortfolioHeading>
                    <PortfolioIntro>I have experience designing for web and print, below is some of my work.</PortfolioIntro>
                    <FilterButtonsContainer>
                            <PortfolioFilterButton 
                                $selected={selectedCategory === 'digital'}
                                onClick={() => filterButtonClick('digital')}
                            >digital ({totalDigitalItems})</PortfolioFilterButton>
                            <PortfolioFilterButton 
                                $selected={selectedCategory === 'print'}
                                onClick={() => filterButtonClick('print')}
                            >print ({totalPrintItems})</PortfolioFilterButton>
                            <PortfolioFilterButton 
                                $selected={selectedCategory === 'all'}
                                onClick={() => filterButtonClick('all')}
                            >all ({totalItems})</PortfolioFilterButton>
                    </FilterButtonsContainer>
               </PortfolioHeadingContainer>
               <PortfolioItemsContainer>
                    {renderedData.map((item: DesignItem, index) => (
                        <PortfolioItem
                        key={item.id}
                        style={{ backgroundImage: `url(/assets/images/${item.thumbnail})`}}
                        onClick={() => openLightbox(index)}
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
                { hasMore && <LoadingIconContainer> <LoadingIcon icon={faSpinner} ref={loadingRef}/> </LoadingIconContainer>}
                </PortfolioItemsContainer>
               
            </PortfolioInner>
            {lightboxOpen && (
                <Lightbox $imageTitle={imageTitle} $imageUrl={lightboxImageUrl} onNext={handleNext} onPrev={handlePrevious} onClose={closeLightbox}></Lightbox>
            )}
        </PortfolioContainer>
    );
}

export default DesignPortfolio;