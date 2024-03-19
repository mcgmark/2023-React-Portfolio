import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCode, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import markImage from '../../assets/images/mark.png'


type MobileMenuProps = {
    $showmenu: boolean;
    menuButtonClick: () => void;
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
    height: ${(props) => (props.$isScrolled ? '50px' : '120px')};
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => (props.$isScrolled ? 'rgba(62, 4, 119, 0.95)' : 'none')};
    z-index: 12001;
    border-bottom: ${(props) => (props.$isScrolled ? '4px solid rgba(255, 255, 255, 0.025)' : '4px solid rgba(255, 255, 255, 0.0)')};
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
    z-index: 12000;
    font-size: ${(props) => (props.$isScrolled ? '1rem' : '1.5rem')};
    text-transform: uppercase;
    cursor: pointer;
    transition: all .2s ease;
`;

const MobileMenuContainer = styled.div<MobileMenuProps>`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0px;
    background: rgba(29, 5, 51, 0.7);
    background-repeat: no-repeat;
    background-position: left top;
    backdrop-filter: blur(25px);
    z-index: 12001;
    right: ${(props) => (props.$showmenu ? "0%" : "-100%")};
    transition: all 500ms ease-in-out;
    width: 100%;
    padding: 0px 20px;
    max-width: 600px;
    height: 100vh;
    overflow-y: auto;

    @media (min-width: 800px){
        border-left: 5px solid rgba(163, 101, 255, 0.066);
        border-right: 5px solid rgba(163, 101, 255, 0.066);      
        padding: 0px 20px;
        box-shadow: -20px 0px 50px #14001b;
    }

    &::-webkit-scrollbar {
        width: .15rem;  /* Adjust as needed */
    }

    &::-webkit-scrollbar-thumb {
        background-color: #bb00ff;  /* Color of the thumb */
        border-radius: 0.5rem;  /* Rounded corners */
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #59ff00;  /* Color on hover */
    }

`;

const MobileMenuContent = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
    position: relative;
    top: 50px;       
`;

const MobileMenuButton = styled.h2<MobileMenuButtonProps>`
    font-family: 'Oswald';
    font-size: 3rem;
    cursor: pointer;
    transform: rotate(-2deg);

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
    top: 75%; 
    right: -5px; 
    transform: rotate(90deg) translateX(-60%);
    color: #9dffdb; 
    font-size: 1rem; 
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
    max-width: 500px;
    line-height: 160%;
    font-size: 1rem;
    overflow: hidden;
    transition: height .5s ease-in-out;
    color: #bebebe;
    border-bottom: 5px solid rgba(93, 93, 93, 0.3);
    padding-bottom: 30px;

    &:last-child {
        border-bottom: 0px;
        margin-bottom: 100px;
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
    z-index: 12002;

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


const MobileMenu = React.forwardRef<HTMLDivElement, MobileMenuProps>(({ $showmenu, menuButtonClick }, ref) => {

    const location = useLocation();

    const navigate = useNavigate();

    const loadPortfolio = (route: string) => {
        navigate(route);
    };

    return (
        <MobileMenuContainer $showmenu={$showmenu} ref={ref} menuButtonClick={menuButtonClick}>
            <MobileMenuContent>    
            <MobileMenuButton
                className={location.pathname === '/design' ? 'current' : ''}
                onClick={() => {loadPortfolio('/design'); menuButtonClick();}}
            >
                    <FontAwesomeIcon icon={faPaperPlane} />
                    DESIGN
                </MobileMenuButton>
                <MobileMenuParagraph>
                    Print and Web design I have experience designing everything from flyers to websites.
                </MobileMenuParagraph>
                
                <MobileMenuButton
                    className={location.pathname === '/dev' ? 'current' : ''}
                    onClick={() => {loadPortfolio('/dev'); menuButtonClick();}}
                >
                    <FontAwesomeIcon icon={faCode} />
                    DEVELOPMENT
                </MobileMenuButton>
                <MobileMenuParagraph>
                    Frontend and backend web development I have experience building web applications from start to finish. 
                </MobileMenuParagraph>
                <MobileMenuHeading
                    onClick={() => {return false}}
                >
                    ABOUT MARK
                </MobileMenuHeading>
                <MobileMenuParagraph>
                40, living in Barrie, Ontario, I have years of experience related to computers, marketing, graphic design, and web development. Recently I graduated from Georgian College, on the Dean's List, and have spent the last 3 years learning the fundamentals of web development. 
                <br /><br />
                The majority of my experience comes from designing everything related to marketing a business; Mailout flyers, websites, print ads, web ads, printed tshirts, posters, cnc cutting/engraving, and more.
                <br /><br />
                I am currently seeking a full-time opportunity related to graphic design for marketing and/or web development.
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
        if (showMenu) {
            setShowMenu(false)
            document.body.style.overflow = 'auto';
        } else {
            setShowMenu(true)
            document.body.style.overflow = 'hidden';
        };
    };

    const handleOutsideClick = (event: MouseEvent) => {
        if (menuRef.current && event.target instanceof Node){
            if ((showMenu && (!menuButtonRef.current || !menuButtonRef.current.contains(event.target)) && !menuRef.current.contains(event.target))) {
                menuButtonClick();
            };
        };  
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    });

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
                <MobileMenu $showmenu={showMenu} menuButtonClick={menuButtonClick} ref={menuRef} />
            </MenuContainer>
        </>
    );
}

export default Menu;