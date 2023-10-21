import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCode, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import mark from '../../assets/images/mark.png';


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
    border-bottom: ${(props) => (props.$isScrolled ? '4px solid rgba(255, 255, 255, 0.025)' : '4px solid rgba(255, 255, 255, 0.025)')};
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
box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0px;
    min-height: 100vh;
    background: url(${mark}), rgba(28, 16, 44, 0.75);
    background-position: 20% top;
    background-repeat: no-repeat;
    backdrop-filter: blur(70px);
    z-index: 1000;
    left: ${(props) => (props.$showmenu ? "0%" : "100%")};
    transition: left .5s ease-in-out;
    box-shadow: ${(props) => (props.$showmenu ? "0px 0px 50px rgb(0, 0, 0)" : "none")};
    border: 0px;
    overflow-y: auto;
    width: 100%;
    padding: 0px 20px;

    &::-webkit-scrollbar {
        background-color: #000000;
        width: 5px;
    }
    &::-webkit-scrollbar-track {
        background-color: #242424;
    }
    &::-webkit-scrollbar-thumb {
        background-color: rgb(157, 0, 255);
        border-radius: 6px;
        height: 10px;
    }

    @media (min-width: 700px){
        background-position: 20% top;
        border: 10px solid rgba(163, 101, 255, 0.066);
        width: fit-content;
        left: ${(props) => (props.$showmenu ? "35%" : "100%")};
        padding: 0px 4%;
        width: 60%;
    }

    @media (min-width: 1300px){
        background-position: 0% top;
        border: 10px solid rgba(163, 101, 255, 0.066);
        width: fit-content;
        left: ${(props) => (props.$showmenu ? "50%" : "100%")};
        padding: 0px 4%;
        width: 45%;
    }

    @media (min-width: 1800px){
        background-position: -10% top;
        border: 10px solid rgba(163, 101, 255, 0.066);
        width: fit-content;
        left: ${(props) => (props.$showmenu ? "55%" : "100%")};
        padding: 0px 3%;
        width: 40%;
    }

    @media (min-width: 2000px){
        background-position: -20% top;
        border: 10px solid rgba(163, 101, 255, 0.066);
        width: fit-content;
        left: ${(props) => (props.$showmenu ? "65%" : "100%")};
        padding: 0px 3%;
        width: 30%;
    }
`;

const MobileMenuContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
    position: relative;
    top: 150px;
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

    /* &.current::after {
    content: "+"; 
    position: absolute;
    top: 75%; 
    right: -5px; 
    transform: rotate(90deg) translateX(-60%);
    color: #9dffdb; 
    font-size: 1rem; 
  } */

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
    padding-bottom: 30px;

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

    const location = useLocation();

    const navigate = useNavigate();

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
                    <FontAwesomeIcon icon={faPaperPlane} />
                    DESIGN
                </MobileMenuButton>
                <MobileMenuParagraph>
                    Print and Web design Mark has experience designing everything from flyers to websites.
                </MobileMenuParagraph>
                
                <MobileMenuButton
                    className={location.pathname === '/dev' ? 'current' : ''}
                    onClick={() => loadPortfolio('/dev')}
                >
                    <FontAwesomeIcon icon={faCode} />
                    DEVELOPMENT
                </MobileMenuButton>
                <MobileMenuParagraph>
                    Frontend and backend web development Mark has experience building websites and web applications from start to finish. 
                </MobileMenuParagraph>
                <MobileMenuHeading
                    onClick={() => {return false}}
                >
                    ABOUT MARK
                </MobileMenuHeading>
                <MobileMenuParagraph>
                40, living in Barrie, Ontario Mark has years of experience related to computers, marketing, graphic design, and web development. The majority of Mark's experience comes from designing everything related to marketing a business or service. Mailout flyers, websites, newspaper/magazine ads, printed tshirts, posters, cnc cutting/engraving, and more. 
                <br/><br/>
                Recently Mark graduated from Georgian College <small>(Dean's List)</small> and has spent the last 3 years learning the fundamentals of programming and web development. Mark has focused on data driven business applications incorporating API CRUD functions.   
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