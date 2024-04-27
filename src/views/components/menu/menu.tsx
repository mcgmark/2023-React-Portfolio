import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCode, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import markImage from '../../assets/images/mark.png';

import markLogoImg from '../../assets/images/mark-logo.svg';


type MobileMenuProps = {
    $showMenu: boolean;
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
    background-color: ${(props) => (props.$isScrolled ? '#440097bc' : 'none')};
    backdrop-filter: ${(props) => (props.$isScrolled ? 'blur(10px)' : 'none')};
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
    z-index: 12005;
    font-size: ${(props) => (props.$isScrolled ? '1rem' : '1rem')};
    text-transform: uppercase;
    cursor: pointer;
    transition: all .2s ease;

    @media (min-width: 800px) {
        font-size: ${(props) => (props.$isScrolled ? '1rem' : '1.5rem')};
     }
`;

const MobileMenuContainer = styled.div<MobileMenuProps>`
    box-sizing: border-box;
    visibility: ${(props) => (props.$showMenu ? 'visible' : 'hidden')};
    /* padding-top: ${(props) => (props.$showMenu ? '0px' : '40px')}; */
    display: flex;
    flex-direction: column;
    position: fixed;
    align-items: center;
    top: 0px;
    background: radial-gradient(circle at 30% -30%, #440097 2%, rgba(48,10,92,1) 31%, rgba(48,10,92,0.2) 95%);
    background-repeat: no-repeat;
    background-position: 100% 100%;
    backdrop-filter: blur(15px);
    z-index: 12001;
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    opacity: ${(props) => (props.$showMenu ? 1 : 0)};
    top: ${(props) => (props.$showMenu ? '0px' : '-100%')};
    transition: all 300ms ease-in-out;

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

    &.fader-enter {
    opacity: 0;
    }

    &.fader-enter-active {
        opacity: 1;
        transition: all 300ms;
    }

    &.fader-exit {
        opacity: 1;
    }

    &.fader-exit-active {
        opacity: 0;
        transition: all 300ms;
    }

`;

const MobileMenuContent = styled.div`
    position: relative;
    top: 100px;    
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 2000px;
    padding-bottom: 100px;
    opacity: 1;
    user-select: none;

    &.faderr-enter {
    transform: translateY(100px);

    }

    &.faderr-enter-active {
        transform: translateY(0px);
        transition: all 300ms;

    }

    &.faderr-exit {
        transform: translateY(0px);
    }

    &.faderr-exit-active {
        transform: translateY(100px);
        transition: all 300ms;
    }
`;

const MarkLogo = styled.img`
    display: block;
    height: 180px;
    width: auto;
    align-self: flex-start;
    margin-bottom: 20px;
`;

const MobileMenuOption = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;

    &:nth-of-type(3) {
        flex-direction: column;
        gap: 0px;
        margin-top: 20px;
        width: fit-content;

        @media (min-width: 600px) {
            flex-direction: row;
            gap: 40px;
        }

    }
`;

const MobileMenuButton = styled.h2<MobileMenuButtonProps>`
    font-family: 'Oswald';
    font-size: 2.75rem;
    cursor: pointer;
    transform: rotate(-2deg);
    transform-origin: left;
    width: fit-content;

    &.current {
        color: #7300ff;
    }
    &.current:hover {
        color: #7300ff;
    }

    &.current::after {
    content: "+HERE"; 
    position: absolute;
    top: 45px; 
    right: -35px; 
    color: #9dffdb; 
    font-size: 1rem; 
  }

  &:hover {
        color: #00ffa6;
  }
`;

const MobileMenuParagraph = styled.p`
    font-family: 'Rubik';
    font-weight: 400;
    width: 100%;
    line-height: 160%;
    font-size: 1rem;
    overflow: hidden;
    transition: height .5s ease-in-out;
    color: #bebebe;
    padding-bottom: 30px;
    max-width: 700px;
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


const MobileMenu = React.forwardRef<HTMLDivElement, MobileMenuProps>(({ $showMenu, menuButtonClick }, ref) => {

    const location = useLocation();

    const navigate = useNavigate();

    const mobileMenuRef = useRef(null);

    const loadPortfolio = (route: string) => {
        if (location.pathname !== route) {navigate(route)};
    };

    return (
        <MobileMenuContainer $showMenu={$showMenu} ref={ref} menuButtonClick={menuButtonClick}>
                <MobileMenuContent>  
                    <MobileMenuOption>
                    <MobileMenuButton
                        className={location.pathname === '/design' ? 'current' : ''}
                        onClick={() => {loadPortfolio('/design'); menuButtonClick();}}
                    >
                        <FontAwesomeIcon icon={faPaperPlane} />
                        DESIGN
                    </MobileMenuButton>
                    <MobileMenuParagraph>
                        With my years of graphic design experience I've got you covered for all your business marketing needs.
                    </MobileMenuParagraph>
                    </MobileMenuOption>  
                    <MobileMenuOption>  
                    <MobileMenuButton
                        className={location.pathname === '/dev' ? 'current' : ''}
                        onClick={() => {loadPortfolio('/dev'); menuButtonClick();}}
                    >
                        <FontAwesomeIcon icon={faCode} />
                        DEVELOPMENT
                    </MobileMenuButton>
                    <MobileMenuParagraph>
                        I've got a solid background in the fundamentals of frontend web development, with hands-on experience in building web applications from start to finish.</MobileMenuParagraph>
                    </MobileMenuOption>  
                    <MobileMenuOption>  
                    <MarkLogo src={markLogoImg}/>                   
                    <MobileMenuParagraph style={{paddingTop: 8, fontSize: 15}}>
                    40, living in Barrie, Ontario, I have many years of experience related to computers, marketing, graphic design, and web development. Recently I graduated from Georgian College, on the Dean's List, and have spent the last 3 years learning the fundamentals of web development. 
                    <br /><br />
                    The majority of my experience comes from designing everything related to marketing a business such as mailout flyers, websites, print ads, logos, merchandise, and more.
                    <br /><br />
                    Hire Me! I am currently seeking a full-time opportunity related to graphic design for marketing and/or web development.
                    </MobileMenuParagraph>
                    </MobileMenuOption>  
                </MobileMenuContent>
        </MobileMenuContainer>
    );
});

const Menu = () => {
    const location = useLocation();
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
                    <NameLogo onClick={() => goHome('/')} $isScrolled={isScrolled} >Mark McGuigan<wbr/> {location.pathname === '/dev' ? ': DEV' : location.pathname === '/design' ? ': DESIGN' : ''}</NameLogo>
                    <MenuIcon $showMenu={showMenu} onClick={menuButtonClick} ref={menuButtonRef}/>
                </MenuContainerInner>
                    <MobileMenu $showMenu={showMenu} menuButtonClick={menuButtonClick} ref={menuRef} />
            </MenuContainer>
        </>
    );
}

export default Menu;