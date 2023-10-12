import React from 'react';
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
    transition: all 100ms ease-in-out;
    border-radius: 25px;
    padding: 5px;
    border: 10px solid var(--purple-bright);
    background-color: #171319;
    z-index: 500;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.6);

    @media (min-width: 1000px){
        padding: 20px 20px;
    }

    /* &:hover {
        background: linear-gradient(152deg, #33124ec0 5%, rgba(17, 17, 17, 0.188) 42%, rgba(68, 66, 66, 0.4) 100%);
        box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.1);
    } */
`;

const PortfolioItemText = styled.div`
    display: flex; 
    flex-direction: column;
    gap: 10px;
    padding: 15px;
`;

const PortfolioItemTitle = styled.h3`
    font-family: 'Roboto-Black';
    font-size: 2.8rem;
    text-transform: capitalize;
    color: #ffffff;
`;

const PortfolioItemDescription = styled.p`
    font-family: 'Acumin-Book';
    font-size: 1.05rem;
    max-width: 1400px;
    line-height: 140%;
    letter-spacing: .02rem;
    color: #ffffff;
    margin: 20px 0px;
`;

const PortfolioItemType = styled.p`
    font-family: 'Roboto-Cond-Bold';
    font-size: 1.05rem;
    text-transform: capitalize;
    color: #ffea00;
    text-transform: uppercase;
    /* border-bottom: 1px solid #333; */
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
    background-color: #303030;
    padding: 6px 15px;
    border-radius: 25px;
    text-align: center;
`;

const StyledItemButton = styled.button`
  font-size: .8rem;
  font-family: 'Arial-MT-Bold';
  color: #ffffff;
  padding: 15px 10px;
  border: none;
  background: #5c0bb2;
  cursor: pointer;
  text-transform: uppercase;
  margin-bottom: 30px;
  letter-spacing: 0.1rem;
  border-radius: 10px;
  box-shadow: inset 10px 10px rgba(0, 0, 0, 0.112);
  width: 35%;
  

  &:hover {
    color: #fff;
    background-color: rgb(125, 30, 220);
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
    margin-left: 3px;
    color: #ffea00;
    text-shadow: #000;
`;

const DevItemButton: React.FC<LinkButtonProps> = ({ $externalUrl, children }) => {

    const handleOpenURL = () => {
        if ($externalUrl) {
            window.open($externalUrl, '_blank');
        }
    };

    return (
        <StyledItemButton onClick={handleOpenURL}>
            {children}
            <StyledIcon icon={faCircleArrowRight} />
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