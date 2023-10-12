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

type MenuContainerProps = {
    $isScrolled: boolean;
}

const MenuContainer = styled.nav<MenuContainerProps>`
    position: fixed;
    left: 0;
    height: ${(props) => (props.$isScrolled ? '50px' : '80px')};
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => (props.$isScrolled ? 'rgba(62, 4, 119, 0.784)' : 'rgba(74, 12, 137, 0.3)')};
    z-index: 1001;
    border-bottom: ${(props) => (props.$isScrolled ? '1px solid #4d4d4d84' : '4px solid rgba(255, 255, 255, 0.025)')};
    backdrop-filter: blur(14px);
    box-shadow: 0px 10px 40px rgba(20, 2, 25, 0.4);
    transition: all 0.2s ease;
`;

const MenuContainerInner = styled.div`
    width: 90%;
    max-width: 2000px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const NameLogo = styled.span<MenuContainerProps>`
    justify-self: start;
    font-family: Rubik;
    font-size: ${(props) => (props.$isScrolled ? '1rem' : '1.25rem')};
    text-transform: uppercase;
    cursor: pointer;
    transition: all .2s ease;
`;

const MobileMenuContainer = styled.div<MobileMenuProps>`
    position: fixed;
    top: 0px;
    width: 100vw;
    height: 120vh;
    background-color: rgba(23, 1, 43, 0.861);
    backdrop-filter: blur(30px);
    z-index: 1000;
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
    const [isScrolled, setIsScrolled] = useState(false);

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

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 70) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <MenuContainer $isScrolled={isScrolled}>
                <MenuContainerInner>
                    <NameLogo onClick={() => goHome('/')} $isScrolled={isScrolled} >Mark McGuigan</NameLogo>
                    <MenuIcon $showMenu={showMenu} onClick={menuButtonClick} />
                </MenuContainerInner>
            </MenuContainer>
            <MobileMenu $showmenu={showMenu} />
        </>
    );
}

export default Menu;