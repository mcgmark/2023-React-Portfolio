import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from 'react-router-dom'; 

type MobileMenuProps = {
    $showmenu: boolean;
}

type MenuIconProps = {
    $showMenu: boolean;
    onClick: () => void;
}

type MenuIconStyleProps = {
    $showMenu: boolean;
}

const MenuContainer = styled.nav`
    position: relative;
    height: 75px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--purple-bright);
    padding: 0px 1rem 0px 1rem;
    z-index: 101;
`;

const MenuContainerInner = styled.div`
    width: 90%;
    max-width: 1650px;
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const NameLogo = styled.span`
    font-family: Rubik;
    font-size: 1.75rem;
    text-transform: uppercase;
    cursor: pointer;
`;

const MobileMenuContainer = styled.div<MobileMenuProps>`
    position: fixed;
    top: 0px;
    width: 100vw;
    height: 120vh;
    background-color: #2a183c;
    z-index: 100;
    left: ${(props) => (props.$showmenu ? "0" : "100%")};
    transition: left 1s ease;
`;

const MobileMenuContent = styled.div`
    // Add your styles for the mobile menu content here
`;

const MobileMenu: React.FC<MobileMenuProps> = ({ $showmenu }) => {
    return (
        <MobileMenuContainer $showmenu={$showmenu}>
            <MobileMenuContent>
                
            </MobileMenuContent>
        </MobileMenuContainer>
    );
};

const LargeAwesomeIcon = styled(FontAwesomeIcon)<MenuIconStyleProps>`
    font-size: 1.5rem;
    transition: all 0.3s ease-in-out;
    transform: ${(props) => (props.$showMenu ? 'rotate(90deg)' : 'rotate(0deg)')};
    background-color: ${(props) => (props.$showMenu ? '#ffffff14' : 'rgb(255,255,255,0)')}; ;
    border-radius: 100px;
    padding: .75rem .92rem;
    cursor: pointer;

    &:hover {
        background-color: #ffffff14;
    }
`;

const MenuIcon: React.FC<MenuIconProps> = ({ $showMenu, onClick }) => {

    const icon = $showMenu ? faTimes : faBars;

    return (
        <LargeAwesomeIcon icon={icon} onClick={onClick} $showMenu={$showMenu} />
    );
}

const Menu = () => {
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();

    const goHome = (route: string) => {
        navigate(route);
    };

    const menuButtonClick = () => {
        setShowMenu(!showMenu);
    };

    const elementRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const element = elementRef.current;
        if (element) {
            element.style.height = `${window.innerHeight}px`;
        }
    }, []);

    return (
        <>
            <MenuContainer>
                <MenuContainerInner>
                    <NameLogo onClick={() => goHome('/')}>Mark McGuigan</NameLogo>
                    <MenuIcon $showMenu={showMenu} onClick={menuButtonClick} />
                </MenuContainerInner>
            </MenuContainer>
            <MobileMenu $showmenu={showMenu} />
        </>
    );
}

export default Menu;