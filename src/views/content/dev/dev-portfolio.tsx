import React, {useState, MouseEvent} from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import { DevItem } from '../../assets/types/types';

import { Masonry } from '@mui/lab';


type PortfolioContainerProps = {
    data: DevItem[];
}

type LinkButtonProps = {
    children: React.ReactNode;
    $externalUrl?: string;
    onClick?: () => void;
}

type PortfolioItemProps = {
    index: number;
    item: DevItem;
    isExpanded: boolean;
    onExpand: (index: number) => void;
}

const PortfolioContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PortfolioInner = styled.section`
    max-width: 2000px;
    overflow: hidden;
    width: 91%;
`;

const PortfolioItem = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-items: center;
    opacity: 0;
    position: relative;
    box-sizing: border-box;
    border: 0px solid #33333375;
    padding: 5px;
    border-radius: 25px;
    background: linear-gradient(200deg, #2e0b565e 0%, #300a5c 24%, #18033073 99%);
    transition: all 0.15s ease-in-out;
    animation: slideTexter 1000ms forwards linear; 

    @media (min-width: 1000px){
        padding: 15px 15px;
    }

    /* &:hover {
        background: linear-gradient(200deg, #2e0b56 0%, #300a5c 24%, #180330 99%);   
    } */
`;

const PortfolioItemText = styled.div`
    display: flex; 
    flex-direction: column;
    gap: 10px;
    padding: 15px;
`;

const ExpandButton = styled.p`
    font-family: 'Roboto-Black';
    width: fit-content;
    color: #ffffff;
    margin-bottom: 15px;
    margin-left: 15px;
    cursor: pointer;
    font-size: .9rem; /* or 1.25em */
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: .1rem;
    color: #d2e103;

    &:hover {
        color: #d2e103; 
    }
`;

const PortfolioItemTitle = styled.h3`
    font-family: 'Oswald';
    font-size: 2rem;
    text-transform: capitalize;
    color: #ffffff;
    line-height: 120%;
`;

const PortfolioItemType = styled.p`
    font-family: 'Roboto-Regular';
    font-size: 1rem;
    text-transform: capitalize;
    color: rgb(124, 124, 124);
    text-transform: uppercase;
    border-bottom: 6px solid #440097;
    padding-bottom: 10px;
`;

const PortfolioItemDescription = styled.p`
    font-family: 'Rubik';
    font-size: 1rem;
    line-height: 180%;
    color: #ffffff;
    margin-top: 20px;
    margin-bottom: 10px;
    flex-grow: 1;
    height: 100%;
    hyphens: auto;
    background-color: #15002784;
    padding: 25px;
    border-radius: 40px 0px 40px 0px;
`;

const FeaturesList = styled.ul`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    list-style: none;
    font-family: 'Rubik';
    font-size: .75rem;
    text-transform: uppercase;
    color: #ffffff;
    letter-spacing: 0.06rem;
    padding: 20px;
    margin: 0px;
    margin-bottom: 10px;
    border-radius: 15px;
 
`;

const FeaturesItem = styled.li`
    flex-grow: 1;
    padding: 10px 0px 0px 10px;
    border-top: 1px dashed #704e8854;
    line-height: 120%;

    &:first-child {
        border: 0;
        padding-top: 0px;
    }
`;

const PortfolioTechList = styled.ul`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
    list-style: none;
    font-family: 'Arial-MT-Bold';
    font-size: .7rem;
    text-transform: uppercase;
    color: #ffffff;
    letter-spacing: 0.1rem;
    padding: 0px 0px;
    margin-top: 10px;
`;

const ListItem = styled.li`
    flex-grow: 1;
    background-color: #440097;
    padding: 6px 15px;
    border-radius: 25px;
    text-align: center;
`;

const StyledItemButton = styled.button`
  position: relative;
  font-size: 1rem;
  font-family: 'Arial-MT-Bold';
  color: #ffffff;
  padding: 15px 0px;
  border: none;
  background: #440097;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  border-radius: 10px;
  width: 50%;
  overflow: hidden;
  align-self: end;

  &:hover {
    color: #fff;
  }
`;


const StyledIcon = styled(FontAwesomeIcon)`
    margin-left: 3px;
    color: #d2e103;
    text-shadow: #000;

`;


const DevItemButton: React.FC<LinkButtonProps> = ({ $externalUrl, children }) => {
    const [isTracking, setIsTracking] = useState(false);
    const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });

    const handleMouseEnter = () => {
        setIsTracking(true);
    };

    const handleMouseLeave = () => {
        setIsTracking(false);
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (isTracking) {
            const buttonRect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - buttonRect.left;
            const y = e.clientY - buttonRect.top;
            setCirclePosition({ x, y });
        }
    };

    const handleOpenURL = () => {
        if ($externalUrl) {
            window.open($externalUrl, '_blank');
        }
    };

    return (
        <StyledItemButton 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        style={{ position: 'relative' }}
        onClick={handleOpenURL}>
            <div style={{position: 'relative', zIndex: '1'}}>
                {children}
                <StyledIcon icon={faCircleArrowRight} />
            </div>
        {isTracking && (
        <div
            style={{
                position: 'absolute',
                top: circlePosition.y,
                left: circlePosition.x,
                width: '220px',
                height: '220px',
                backgroundColor: 'rgb(144, 36, 253)',
                borderRadius: '50%',
                transform: 'scale(0) translate(-50%, -50%)',
                zIndex: '0',
                animation: 'growCircle 0.5s ease-in-out forwards',
            }}
        />
      )}
        </StyledItemButton>
    );
};


const DevPortfolioItem: React.FC<PortfolioItemProps> = ({ index, item, isExpanded, onExpand }) => {

    const handleExpand = () => {
        onExpand(index);
    };

    return (
        <PortfolioItem key={item.id}>
            <PortfolioItemText>
                <PortfolioItemTitle>{item.title}</PortfolioItemTitle> 
                <PortfolioItemType>{item.type}</PortfolioItemType>
                <PortfolioItemDescription>{item.description}</PortfolioItemDescription>
                {isExpanded ? (``):( <ExpandButton onClick={() => {handleExpand()}}><FontAwesomeIcon icon={faAngleDown} /> more</ExpandButton> )}   
                {isExpanded && (
                    <FeaturesList>
                        {item.features.map((feature, innerIndex) => (
                            <FeaturesItem key={innerIndex}>{feature}</FeaturesItem>
                        ))}
                    </FeaturesList>
                    )}
                <div style={{display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'stretch'}}>
                        <DevItemButton $externalUrl={item.link}>Launch</DevItemButton>
                    <DevItemButton $externalUrl={item.github}>Github</DevItemButton>
                </div>               
                <PortfolioTechList>
                    {item.tech.map((tech, index) => (
                        <ListItem key={index}>{tech}</ListItem>
                    ))}
                </PortfolioTechList>               
            </PortfolioItemText>
        </PortfolioItem>
    );
}

const DevPortfolio: React.FC<PortfolioContainerProps> = ({ data }) => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(1); // Initially no item is expanded

    const handleExpand = (index: number) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle expanded state
    };

    return (
        <PortfolioContainer>
            <PortfolioInner>
                <Masonry columns={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 3 }} spacing={{ xs: .5, sm: 2, md: 0, lg: 3, xl: 3 }}>
                    {data.map((item: DevItem, index) => (
                        <DevPortfolioItem
                            key={index}
                            index={index}
                            item={item}
                            isExpanded={expandedIndex === index}
                            onExpand={handleExpand}
                        />
                    ))}
                </Masonry>
            </PortfolioInner>
        </PortfolioContainer>
    );
};

export default DevPortfolio;