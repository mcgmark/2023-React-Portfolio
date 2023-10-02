import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSpinner, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

type LightboxProps = {
    $imageUrl: string;
    $imageTitle: string;
    onClose: () => void;
    onNext: (e: React.MouseEvent<HTMLDivElement>) => void;
    onPrev: (e: React.MouseEvent<HTMLDivElement>) => void;
};

type LightboxHeaderProps = {
    $imageTitle: string;
    children: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

type LightboxImageProps = {
    src: string;
    onClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
};

const LightboxModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    transform: scale(150%);
    opacity: 0;
    min-height: 100vh;
    background: rgba(8, 8, 8, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    cursor: pointer;
    transition: all .2s;
    animation: LightboxPop .25s 1 forwards;
    backdrop-filter: blur(50px) contrast(50%) grayscale(100%);

    @keyframes LightboxPop {
        100% {
            opacity: 1;
            transform: scale(100%);
        }
    }
`;

const LightboxHeaderContent = styled.div<LightboxHeaderProps>`
    position: absolute;
    display: flex;
    justify-content: space-between;
    padding: 5px 5px;
    align-items: center;
    box-sizing: border-box;
    top: 0;
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #333;
    background-color: rgba(255, 255, 255, 0.95);
    font-size: 20px;
    line-height: 1;

    @media (min-width: 500px) {
        padding: 25px 25px;
    }
`;

const LightboxHeaderTitle = styled.p`
    font-size: 15px;
    font-family: 'Roboto-Regular';
    text-transform: uppercase;
    color: #333;
`;

const LightboxHeader: React.FC<LightboxHeaderProps> = ({ $imageTitle, onClick, children }) => {
    return (
    <LightboxHeaderContent $imageTitle={$imageTitle} onClick={onClick}>
        <LightboxHeaderTitle>
            {$imageTitle}
        </LightboxHeaderTitle>
        {children}
    </LightboxHeaderContent>
    );
}

const LightboxImageContainer = styled.div`
    box-sizing: border-box;
    overflow-y: auto;
    max-width: 100%;
    margin-top: 70px;
    margin-bottom: 10px;
    border: 0px solid #333;
    
    &::-webkit-scrollbar {
        background-color: #000000;
        width: 11px;
    }
    &::-webkit-scrollbar-track {
        background-color: #242424;
    }
    &::-webkit-scrollbar-thumb {
        background-color: rgb(157, 0, 255);
        border-radius: 6px;
        height: 10px;
    }

    @media (min-width: 800px) {
        max-width: 80%;
    };
`;

const LightboxImage = styled.img<LightboxImageProps>`
    max-width: 100%;
`;

const ButtonsContainer = styled.div`
    display: flex;
    gap: 20px;
`;

const LightboxAwesomeIcon = styled(FontAwesomeIcon)`
    font-size: 50px;
    cursor: pointer;
    z-index: 1500;
    color: rgb(157, 0, 255);
    &:hover {
        color: rgb(109, 1, 176);
    }
`;


const PrevNextButton = styled.div`
    border-radius: 60px;
`;

const LoadingIcon = styled(FontAwesomeIcon)`
    position: fixed;
    top: 50%;
    right: 50%;
    font-size: 3vw;
    z-index: 1500;
    animation: loadingRotate 2s infinite;
    color: #fff;

    @keyframes loadingRotate {
        0% {
            transform: rotate(0turn);
        }
        100% {
            transform: rotate(-1turn);
        }
    }
`;

const Lightbox: React.FC<LightboxProps> = ({ $imageTitle, $imageUrl, onClose, onNext, onPrev }) => {

    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const image = new Image();
    image.src = $imageUrl;
    image.onload = () => setIsImageLoaded(true);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
    }, []);

    const closeLightbox = () => {
        document.body.style.overflow = 'auto';
        image.src = '';
        setIsImageLoaded(false);
        onClose();
    }


    const imageClick = (e: React.MouseEvent<HTMLImageElement>) => {
        e.stopPropagation();
    };

    const headerClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
      };

    return(
        <LightboxModal onClick={closeLightbox}>
            <LightboxHeader $imageTitle={$imageTitle} onClick={headerClick}>
                <ButtonsContainer>
                    <PrevNextButton onClick={onPrev}><LightboxAwesomeIcon icon={faArrowLeft} /></PrevNextButton>
                    <PrevNextButton onClick={onNext}><LightboxAwesomeIcon icon={faArrowRight} /></PrevNextButton>
                    <LightboxAwesomeIcon icon={faTimes} onClick={closeLightbox}/>
                </ButtonsContainer>
            </LightboxHeader>
            {isImageLoaded ? (
                <LightboxImageContainer>
                    <LightboxImage 
                        onClick={imageClick}
                        src={$imageUrl}
                    ></LightboxImage>
                </LightboxImageContainer>
            ) : (
            <LoadingIcon icon={faSpinner}/>
            )}
        </LightboxModal>
    );
}

export default Lightbox;