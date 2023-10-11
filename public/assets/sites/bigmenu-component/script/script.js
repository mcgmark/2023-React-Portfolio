const bigMenu = document.querySelector('#big-menu-container');
const toggleButton = document.querySelector('#menu-toggle')
const toggleArrow = document.querySelector('#menu-toggle i')


let toggleState = 0;

toggleButton.addEventListener('click', toggleMenu);
    
function toggleMenu() {
    if (toggleState === 0) {
        bigMenu.setAttribute('style', 'visibility: visible;');
        toggleArrow.setAttribute('style', 'transform: rotate(180deg);');
        toggleState = 1
    } else {
        bigMenu.setAttribute('style', 'visibility: hidden;');
        toggleArrow.setAttribute('style', 'transform: rotate(0deg);');
        toggleState = 0
    };
};
