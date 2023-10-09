import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { DevItem } from '../../assets/types/types';

import { Masonry } from '@mui/lab';

type Props = {
    data: DevItem[];
}

type LinkButtonProps = {
    $externalUrl: string;
    onClick?: () => void;
}

const PortfolioContainer = styled.section`
    min-height: 100vh;
    margin-top: 70px;
`;

const PortfolioInner = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0 2vw;
    max-width: 2000px;
    align-items: center;
`;

const PortfolioItem = styled.div`
    box-sizing: border-box;
    background: rgb(57,32,77);
    background: linear-gradient(152deg, #242424c0 5%, rgba(17, 17, 17, 0.188) 42%, rgba(34, 34, 34, 0.4) 100%);
    border-top: 3px solid rgba(255, 255, 255, 0.2);
    border-bottom: 3px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.242);
    transition: all 100ms ease-in-out;
    cursor: pointer;
    border-radius: 25px;
    padding: 10px;

    @media (min-width: 1000px){
        padding: 30px;
    }

    &:hover {
        background: linear-gradient(152deg, #33124ec0 5%, rgba(17, 17, 17, 0.188) 42%, rgba(68, 66, 66, 0.4) 100%);
        box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.1);
    }
`;

const PortfolioItemText = styled.div`
    display: flex; 
    flex-direction: column;
    gap: 20px;
    padding: 15px;
`;

const PortfolioItemTitle = styled.h3`
    font-family: 'Arial-MT-Bold';
    font-size: 2rem;
    text-transform: capitalize;
    color: rgb(240, 206, 14);
`;

const PortfolioItemDescription = styled.p`
    font-family: 'OpenSans';
    font-size: 1rem;
    max-width: 1400px;
    line-height: 180%;
    letter-spacing: .03rem;
    color: #ebebeb;
`;

const PortfolioItemType = styled.p`
    font-family: 'Arial-MT-Bold';
    font-size: 1rem;
    text-transform: uppercase;
    color: #696969;
    border-bottom: 1px solid #333;
    padding-bottom: 25px;
`;

const PortfolioTechList = styled.ul`
    display:flex;
    gap: 10px;
    flex-wrap: wrap;
    list-style: none;
    font-family: 'Roboto-Regular';
    font-size: 1rem;
    text-transform: uppercase;
    color: #ffffff;
    padding: 0px;
    margin: 0px;

`;

const ListItem = styled.li`
    background-color: var(--purple-bright);
    padding: 2px 20px;
    border-radius: 25px;
`;

const StyledItemButton = styled.button`
  font-size: 1rem;
  font-family: 'Arial-MT-Bold';
  width: fit-content;
  background-color: rgb(255, 217, 0);
  color: #3f0561;
  padding: 10px 20px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  text-transform: uppercase;
  margin-bottom: 10px;

  &:hover {
    color: rgb(255, 217, 0);
    background-color: var(--purple-bright);
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
    margin-left: 5px;
`;

const DevItemButton: React.FC<LinkButtonProps> = ({ $externalUrl }) => {

    const handleOpenURL = () => {
        if ($externalUrl) {
            window.open($externalUrl, '_blank');
        }
    };

    return (
        <StyledItemButton onClick={handleOpenURL}>
            VIEW Live
            <StyledIcon icon={faArrowRight} />
        </StyledItemButton>
    );
};


const DevPortfolio: React.FC<Props> = ({ data }) => {
    return(
        <PortfolioContainer>
            <PortfolioInner>
               <Masonry columns={{xs: 1, sm: 1, md: 1, lg: 3}} spacing={5}>
               {data.map((item: DevItem) => (
                        <PortfolioItem key={item.id}>
                            <PortfolioItemText>
                                <PortfolioItemTitle>{item.title}</PortfolioItemTitle> 
                                <PortfolioItemType>{item.type}</PortfolioItemType>
                                <PortfolioItemDescription>{item.description}</PortfolioItemDescription>   
                                <DevItemButton $externalUrl={item.link} /> 
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