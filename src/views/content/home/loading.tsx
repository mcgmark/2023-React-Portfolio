import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import backgroundImage from '../../assets/images/bg-image-light.svg';

interface LoadingContainerProps {
    visible: boolean;
}

const LoadingIcon = styled(FontAwesomeIcon)`
    font-size: 2vw;
    animation: loadingRotate 4000ms infinite;
    color: #fff;

    @keyframes loadingRotate {
        0% {
            transform: rotate(0turn);
        }
        100% {
            transform: rotate(1turn);
        }
    }
`;

const LoadingContainer = styled.div<LoadingContainerProps>`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1500;
    height: 101vh;
    width: 99.85vw;
    overflow: none;
    /* opacity: ${({ visible })=> (visible ? 1 : 0)}; */
    visibility: ${({ visible })=> (visible ? 'visible' : 'hidden')};
    transform: translateY(${({visible})=>(visible ? 0 : '-100%')});
    transition: all 500ms;
    background: rgba(24, 0, 52) url(${backgroundImage});
    background-position: center;
    background-attachment: fixed;
    background-position: center center;
`;

const Loading: React.FC<LoadingContainerProps> = ({visible}) => {
    return (
        <LoadingContainer visible={visible}><LoadingIcon icon={faSpinner} /></LoadingContainer>
    );
};

export default Loading;