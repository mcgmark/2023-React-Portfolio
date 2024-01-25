import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import backgroundImage from '../../assets/images/bg-image-light.svg';

interface LoadingContainerProps {
    visible: boolean;
}

const LoadingIcon = styled(FontAwesomeIcon)`
    font-size: 3rem;
    animation: loadingRotate 4000ms infinite;
    margin-bottom: 1rem;

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
    flex-direction: column;
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
    background: #931fff;
    background: url(${backgroundImage}), linear-gradient(135deg, #323232 26%, #1fff3d35 50%, #313131 67%);
    background-position: center;
    background-attachment: fixed;
    background-position: center center;
    backdrop-filter: blur(100px);
`;

const Message = styled.p`
    font-family: 'Roboto';
    font-size: 1rem;
`

const Loading: React.FC<LoadingContainerProps> = ({visible}) => {

    const [message, setMessage] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setMessage(true);
        }, 1000)
    });

    return (
        <LoadingContainer visible={visible}>
            <LoadingIcon icon={faSpinner} />
            <Message style={{opacity: message ? 1 : 0}}>Cheap Server...</Message>
        </LoadingContainer>
    );
};

export default Loading;