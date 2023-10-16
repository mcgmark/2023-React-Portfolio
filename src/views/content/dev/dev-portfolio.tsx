import React, {useState, MouseEvent} from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

import { DevItem } from '../../assets/types/types';

import { Masonry } from '@mui/lab';


type Props = {
    data: DevItem[];
}

type LinkButtonProps = {
    children: React.ReactNode;
    $externalUrl?: string;
    onClick?: () => void;
}

const PortfolioContainer = styled.section`
    min-height: 100vh;
    margin-top: 70px;
`;

const PortfolioInner = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 2000px;
`;

const PortfolioItem = styled.div`
   position: relative;
    top: -150px;
    box-sizing: border-box;
    transition: all 0.15s ease-in-out;
    border-radius: 25px;
    padding: 5px;
    border: 10px solid var(--purple-bright);
    background-color: #2f2732bf;
    background-image:  linear-gradient(135deg, #1e1e1e 25%, transparent 25%), linear-gradient(225deg, #1e1e1e 25%, transparent 25%), linear-gradient(45deg, #1e1e1e 25%, transparent 25%), linear-gradient(315deg, #1e1e1e 25%, #1a1a1a 25%);
    background-position:  5px 0, 5px 0, 0 0, 0 0;
    background-size: 5px 5px;
    background-repeat: repeat;
    z-index: 499;
    box-shadow: 0px 0px 80px rgba(0, 0, 0, 0.6);
    filter:  grayscale(100%);

    @media (min-width: 1000px){
        padding: 10px 10px;
    }

    &:hover {
        scale: 103%;
        z-index: 500;
        filter:  none;
    }
`;

const PortfolioItemText = styled.div`
    display: flex; 
    flex-direction: column;
    gap: 5px;
    padding: 15px;
`;

const PortfolioItemTitle = styled.h3`
    font-family: 'Roboto-Black';
    font-size: 2.6rem;
    text-transform: capitalize;
    color: #ffffff;
    line-height: 120%;
`;

const PortfolioItemType = styled.p`
    font-family: 'Roboto-Cond-Bold';
    font-size: 1.05rem;
    text-transform: capitalize;
    color: #ffea00;
    text-transform: uppercase;
    /* border-bottom: 1px solid #333; */
`;

const PortfolioItemDescription = styled.p`
    font-family: 'Acumin-Light';
    font-size: 1rem;
    max-width: 1400px;
    line-height: 180%;
    letter-spacing: .02rem;
    color: #ffffff;
    margin: 20px 0px 15px 0px;
`;

const FeaturesList = styled.ul`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    list-style: none;
    font-family: 'Arial-MT-Bold';
    font-size: .7rem;
    text-transform: uppercase;
    color: #ffffff;
    letter-spacing: 0.06rem;
    padding: 20px;
    margin: 0px;
    margin-bottom: 30px;
    background-color: rgba(24, 24, 24, 0.463);
    border-radius: 15px;
    border: 1px solid var(--purple-bright);
    box-shadow: 8px 8px 0px var(--purple-bright);
`;

const FeaturesItem = styled.li`
    flex-grow: 1;
    padding: 10px 0px 0px 10px;
    border-top: 1px dashed var(--purple-bright);
    line-height: 160%;

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
    font-size: .8rem;
    text-transform: uppercase;
    color: #ffffff;
    letter-spacing: 0.06rem;
    padding: 0px 0px;
    margin: 0px;
`;

const ListItem = styled.li`
    flex-grow: 1;
    background-color: none;
    padding: 6px 15px;
    border-radius: 25px;
    text-align: center;
    border: 3px solid var(--purple-bright);
`;

const StyledItemButton = styled.button`
  position: relative;
  font-size: 1.25rem;
  font-family: 'Arial-MT-Bold';
  color: #ffffff;
  padding: 15px 0px;
  border: none;
  background: #5c0bb2;
  cursor: pointer;
  text-transform: uppercase;
  margin-bottom: 30px;
  letter-spacing: 0.1rem;
  border-radius: 10px;
  box-shadow: inset 7px 7px rgba(0, 0, 0, 0.112);
  width: 50%;
  overflow: hidden;

  &:hover {
    color: #fff;
  }
`;


const StyledIcon = styled(FontAwesomeIcon)`
    margin-left: 3px;
    color: #ffea00;
    text-shadow: #000;
    transform: scale(80%);
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
                animation: 'growCircle 0.3s ease-in-out forwards',
            }}
        />
      )}
        </StyledItemButton>
    );
};


const DevPortfolio: React.FC<Props> = ({ data }) => {
    return(
        <PortfolioContainer>
            <PortfolioInner>
               <Masonry columns={{xs: 1, sm: 1, md: 1, lg: 2, xl: 3}} spacing={3}>
               {data.map((item: DevItem) => (
                        <PortfolioItem key={item.id}>
                            <PortfolioItemText>
                                <PortfolioItemTitle>{item.title}</PortfolioItemTitle> 
                                <PortfolioItemType>{item.type}</PortfolioItemType>
                                <PortfolioItemDescription>{item.description}</PortfolioItemDescription>   
                                <FeaturesList>
                                {item.features.map((feature, index) => (
                                    <FeaturesItem key={index}>{feature}</FeaturesItem>
                                ))}
                                </FeaturesList>
                                <div style={{display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'stretch'}}>
                                    <DevItemButton $externalUrl={item.link} >Launch</DevItemButton>
                                    <DevItemButton>Github</DevItemButton>
                                </div>
                                <PortfolioTechList>
                                {item.tech.map((tech, index) => (
                                    <ListItem key={index}>{tech}</ListItem>
                                ))}
                                </PortfolioTechList>
                            </PortfolioItemText>
                        </PortfolioItem>
                    ))}
                </Masonry>
            </PortfolioInner>
        </PortfolioContainer>
    );
}

export default DevPortfolio;