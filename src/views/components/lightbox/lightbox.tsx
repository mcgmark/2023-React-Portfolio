import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSpinner } from '@fortawesome/free-solid-svg-icons';

type LightboxProps = {
    imageUrl: string;
    imageTitle: string;
    onClose: () => void;
};

type LightboxHeaderProps = {
    imageTitle: string;
    children: React.ReactNode;
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
    background: rgba(11, 1, 20, 0.9);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    cursor: pointer;
    transition: all .2s;
    animation: LightboxPop .25s 1 forwards;

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
    padding: 0px 20px;
    align-items: center;
    box-sizing: border-box;
    top: 0;
    width: 100%;
    height: 60px;
    background-color: rgb(255,255,255,0.05);
    border-bottom: 1px solid #333;
    font-size: 20px;
    line-height: 1;
`;

const LightboxHeaderTitle = styled.p`
    font-family: 'Rubik';
    text-transform: uppercase;
`;

const LightboxHeader: React.FC<LightboxHeaderProps> = ({ imageTitle, children }) => {
    return (
    <LightboxHeaderContent imageTitle={imageTitle}>
        <LightboxHeaderTitle>
            {imageTitle}
        </LightboxHeaderTitle>
        {children}
    </LightboxHeaderContent>
    );
}

const LightboxImageContainer = styled.div`
    box-sizing: border-box;
    overflow-y: auto;
    max-width: 90%;
    margin-top: 70px;
    margin-bottom: 10px;
    /* box-shadow: 0px 0px 200px #ffffff4d; */
    border: 0px solid #333;
    
    &::-webkit-scrollbar {
        background-color: #000000;
        width: 11px;
        cursor: hand;
    }
    &::-webkit-scrollbar-track {
        background-color: #242424;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #b700ff;
        border-radius: 6px;
        height: 10px;
    }
`;

const LightboxImage = styled.img<LightboxImageProps>`
    max-width: 100%;
`;

const LightboxAwesomeIcon = styled(FontAwesomeIcon)`
    padding: 5px 20px;
    height: 100%;
    cursor: pointer;
    z-index: 1500;
    &:hover {
        color: rgb(204, 0, 255);
    }
`;

const LightboxCloseButton = () => {
    return (
        <LightboxAwesomeIcon icon={faTimes} />
    );
}

const LoadingIcon = styled(FontAwesomeIcon)`
    position: fixed;
    top: 50%;
    right: 50%;
    font-size: 3vw;
    z-index: 1500;
    animation: loadingRotate 2s infinite;

    @keyframes loadingRotate {
        0% {
            transform: rotate(0turn);
        }
        100% {
            transform: rotate(-1turn);
        }
    }
`;



const Lightbox: React.FC<LightboxProps> = ({ imageTitle, imageUrl, onClose }) => {

    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const image = new Image();
    image.src = imageUrl;
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
        // Prevent the click event from propagating to the parent container
        e.stopPropagation();
      };

    return(
        <LightboxModal
            onClick={closeLightbox}
        >
            <LightboxHeader imageTitle={imageTitle}>
                <LightboxCloseButton />
            </LightboxHeader>
            {isImageLoaded ? (
                <LightboxImageContainer>
                    <LightboxImage 
                        onClick={imageClick}
                        src={imageUrl}
                    ></LightboxImage>
                </LightboxImageContainer>
            ) : (
            <LoadingIcon icon={faSpinner}/>
            )}
        </LightboxModal>
    );
}

export default Lightbox;