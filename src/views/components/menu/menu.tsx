import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


type MobileMenuProps = {
    $showmenu: boolean;
}

type MenuIconProps = {
    $showMenu: boolean;
    onClick: () => void;
}

type MobileMenuButtonProps = {
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
    z-index: 2001;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 0px;
    min-height: 100vh;
    background-color: rgba(18, 2, 29, 0.522);
    backdrop-filter: blur(70px);
    z-index: 1000;
    left: ${(props) => (props.$showmenu ? "0%" : "100%")};
    transition: left 1s ease;
    box-shadow: 0px 0px 50px rgb(0, 0, 0);
    border: 10px solid rgba(163, 101, 255, 0.066);
    overflow-y: auto;
    width: 100%;

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

    @media (min-width: 1300px){
        left: ${(props) => (props.$showmenu ? "60%" : "100%")};
        width: 40%;
    }
`;

const MobileMenuContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
    position: relative;
    top: 150px;
    width: 85%;
`;

const MobileMenuButton = styled.h2<MobileMenuButtonProps>`
    font-family: 'Oswald';
    font-size: 2.5rem;
    cursor: pointer;

    &.current {
        position: relative;
        color: #9e30ff;
    }

    &.current:hover {
        color: #9e30ff;
    }

    &.current::after {
    content: "+"; 
    position: absolute;
    top: 54%; 
    right: -20px; 
    transform: rotate(90deg) translateX(-60%);
    color: #9e30ff; 
    font-size: 3rem; 
  }

  &:hover {
    color: #9dffdb;
  }
`;

const MobileMenuHeading = styled.h2`
    font-family: 'Oswald';
    font-size: 2rem;
`;

const MobileMenuParagraph = styled.p`
    font-family: 'Rubik';
    font-weight: 400;
    width: 100%;
    max-width: 700px;
    line-height: 180%;
    font-size: 1rem;
    overflow: hidden;
    transition: height .5s ease-in-out;
    color: #bebebe;
    border-bottom: 3px solid rgba(93, 93, 93, 0.3);
    padding-bottom: 20px;

    &:last-child {
        border-bottom: 0px;
    }

    @media (min-width: 1000px) {
        display: block;
    }

`;

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

const MenuIcon = React.forwardRef<SVGSVGElement, MenuIconProps>(({ $showMenu, onClick }, ref) => {

    const icon = $showMenu ? faTimes : faBars;

    return (
        <LargeAwesomeIcon icon={icon} onClick={onClick} $showMenu={$showMenu} ref={ref}/>
    );
});

const MobileMenu = React.forwardRef<HTMLDivElement, MobileMenuProps>(({ $showmenu }, ref) => {

    const navigate = useNavigate();

    const location = useLocation();

    const loadPortfolio = (route: string) => {
        navigate(route);
    };

    return (
        <MobileMenuContainer $showmenu={$showmenu} ref={ref}>
            <MobileMenuContent>
                
            <MobileMenuButton
                className={location.pathname === '/design' ? 'current' : ''}
                onClick={() => loadPortfolio('/design')}
            >
                    DESIGN PORTFOLIO
                </MobileMenuButton>
                <MobileMenuParagraph>
                    Print and Web design Mark has experience designing everything from flyers to websites and more!
                </MobileMenuParagraph>
                
                <MobileMenuButton
                    className={location.pathname === '/dev' ? 'current' : ''}
                    onClick={() => loadPortfolio('/dev')}
                >
                    DEVELOPMENT PORTFOLIO
                </MobileMenuButton>
                <MobileMenuParagraph>
                    Frontend and backend web development Mark has experience designing websites and web applications from start to finish. 
                </MobileMenuParagraph>
                <MobileMenuHeading
                    onClick={() => {return false}}
                >
                    ABOUT MARK
                </MobileMenuHeading>
                <MobileMenuParagraph>
                Mark is 43 living in Barrie, Ontario with decades of experience designing for print and web. Designing everything from mailout flyers, websites, business cards, newspaper ads, logos, printed tshirts, posters, signage, cnc engravings, and more. 
                <br/><br/>
                Recently Mark graduated from Georgian College and has spent the last 3 years learning the fundamentals of programming and web development. Focusing on data driven business applications incorporating CRUD API functions.   
                </MobileMenuParagraph>
            </MobileMenuContent>
        </MobileMenuContainer>
    );
});

const Menu = () => {
    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const menuRef = useRef<HTMLDivElement | null>(null);
    const menuButtonRef = useRef<SVGSVGElement | null>(null);

    const goHome = (route: string) => {
        navigate(route);
    };

    const menuButtonClick = () => {
        setShowMenu(!showMenu);
    };

    // useEffect(() => {
    //     if (showMenu){
    //         document.body.style.overflowY = 'hidden';
    //     } else {
    //         document.body.style.overflow = 'auto';
    //     }
    // }, [showMenu]);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (menuRef.current && event.target instanceof Node){
                if ((!menuButtonRef.current || !menuButtonRef.current.contains(event.target)) && !menuRef.current.contains(event.target)) {
                    setShowMenu(false);
                };
            };  
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };

    }, [showMenu]);

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
                    <MenuIcon $showMenu={showMenu} onClick={menuButtonClick} ref={menuButtonRef}/>
                </MenuContainerInner>
            </MenuContainer>
            <MobileMenu $showmenu={showMenu} ref={menuRef}/>
        </>
    );
}

export default Menu;