import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

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
    transition: all 100ms ease-in-out;
    cursor: pointer;
    border-radius: 25px;
    padding: 10px;
    border: 6px solid #5922895f;
    background-color: #130719;
    box-shadow: 0px 0px 300px rgba(0, 0, 0, 0.2);

    @media (min-width: 1000px){
        padding: 30px;
    }

    /* &:hover {
        background: linear-gradient(152deg, #33124ec0 5%, rgba(17, 17, 17, 0.188) 42%, rgba(68, 66, 66, 0.4) 100%);
        box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.1);
    } */
`;

const PortfolioItemText = styled.div`
    display: flex; 
    flex-direction: column;
    gap: 20px;
    padding: 15px;
`;

const PortfolioItemTitle = styled.h3`
    font-family: 'Arial-MT-Bold';
    font-size: 2.5rem;
    text-transform: capitalize;
    color: #ededed;
`;

const PortfolioItemDescription = styled.p`
    font-family: 'Acumin-thin';
    font-size: 1.15rem;
    max-width: 1400px;
    line-height: 140%;
    letter-spacing: .03rem;
    color: #f2f2f2;
    text-align: justified;
`;

const PortfolioItemType = styled.p`
    font-family: 'Arial-MT-Bold';
    font-size: 1.05rem;
    text-transform: uppercase;
    color: #696969;
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
    padding: 0px;
    margin: 0px;
`;

const ListItem = styled.li`
    flex-grow: 1;
    background-color: #2b0147;
    padding: 10px 15px;
    border-radius: 25px;
    text-align: center;
`;

const StyledItemButton = styled.button`
  font-size: 0.9rem;
  font-family: 'Arial-MT-Bold';
  color: #ffffff;
  padding: 15px 30px;
  border: none;
  background: #3b0164;
  cursor: pointer;
  text-transform: uppercase;
  margin-bottom: 10px;
  width: fit-content;
    letter-spacing: 0.1rem;
    border-radius: 10px;

  &:hover {
    color: #fff;
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
            <StyledIcon icon={faChevronRight} />
        </StyledItemButton>
    );
};


const DevPortfolio: React.FC<Props> = ({ data }) => {
    return(
        <PortfolioContainer>
            <PortfolioInner>
               <Masonry columns={{xs: 1, sm: 1, md: 1, lg: 2, xl: 3}} spacing={2}>
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