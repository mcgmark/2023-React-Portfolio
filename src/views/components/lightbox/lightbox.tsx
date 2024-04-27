import React, { useEffect, useState, useRef } from 'react';
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

type LightboxImageContainerProps = {
    ref?: React.Ref<HTMLDivElement>;
}

const LightboxModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    transform: scale(150%);
    opacity: 0;
    min-height: 100vh;
    background: #14002baa;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 35000;
    cursor: pointer;
    transition: all .2s;
    animation: LightboxPop .25s 1 forwards;
    backdrop-filter: blur(20px);

    @keyframes LightboxPop {
        100% {
            opacity: 1;
            transform: scale(100%);
        }
    }
`;

const LightboxHeaderContent = styled.div<LightboxHeaderProps>`
    position: absolute;
    height: 40px;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;

    @media (min-width: 600px) {
        padding: 0px 0px 0px 20px;
    }
`;

const LightboxHeaderTitle = styled.p`
    font-family: 'Arial-MT-Bold';
    font-size: 12px;
    text-transform: uppercase;
    color: #ffffff;

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

const LightboxImageContainer = styled.div<LightboxImageContainerProps>`
    box-sizing: border-box;
    overflow-y: auto;
    max-width: 100%;
    margin-top: 10px;
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
        background-color: #440097;
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
    gap: 5px;
`;

const LightboxAwesomeIcon = styled(FontAwesomeIcon)`
    font-size: 30px;
    cursor: pointer;
    z-index: 1500;
`;

const LightboxButton = styled.div`
    display: flex;
    padding: 5px;
    color: #fff;

    &:nth-of-type(3)  {
        padding-left: 15px;
        padding-right: 15px;
        background-color: #440097;
        color: #fff;     
    }
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

    const lightboxRef = useRef<HTMLDivElement | null>(null);

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

    const scrollToTop = () => {
        if (lightboxRef.current) {
          lightboxRef.current.scrollTop = 0;
        }
      };


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
                    <LightboxButton onClick={(e) => {scrollToTop(); onPrev(e);}}><LightboxAwesomeIcon icon={faArrowLeft} /></LightboxButton>
                    <LightboxButton onClick={(e) => {scrollToTop(); onNext(e);}}><LightboxAwesomeIcon icon={faArrowRight} /></LightboxButton>
                    <LightboxButton onClick={closeLightbox}><LightboxAwesomeIcon icon={faTimes} /></LightboxButton>
                </ButtonsContainer>
            </LightboxHeader>
            {isImageLoaded ? (
                <LightboxImageContainer ref={lightboxRef}>
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